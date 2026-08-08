import { z } from "zod";
import { createHash, randomBytes } from "node:crypto";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

export const closureRequestSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(2).max(200),
  documentId: z.string().max(80).optional(),
  role: z.enum([
    "patient",
    "professional",
    "organization_admin",
    "representative",
    "visitor",
  ]),
  organizationName: z.string().max(200).optional(),
  scope: z.enum(["access_only", "access_and_suppression"]),
  exportRequested: z.boolean().default(false),
  understoodLegalRetention: z.literal(true),
  notes: z.string().max(2000).optional(),
});

export type ClosureRequestInput = z.infer<typeof closureRequestSchema>;

const OPERATIONAL_CLEANUP_DAYS = 30;

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function newRequestNumber() {
  const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const suffix = randomBytes(3).toString("hex").toUpperCase();
  return `CLS-${stamp}-${suffix}`;
}

async function appendEvent(
  requestId: string,
  eventType: string,
  detail?: string
) {
  const supabase = getSupabaseAdminClient();
  await supabase.from("account_closure_events").insert({
    request_id: requestId,
    event_type: eventType,
    detail: detail ?? null,
  });
}

/**
 * Idempotent intake: repeating the same open request returns the existing number.
 */
export async function createClosureRequest(input: ClosureRequestInput) {
  const supabase = getSupabaseAdminClient();
  const email = normalizeEmail(input.email);

  const { data: existingOpen } = await supabase
    .from("account_closure_requests")
    .select("id, request_number, status")
    .eq("email", email)
    .not("status", "eq", "closure_completed")
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existingOpen?.request_number) {
    await appendEvent(
      existingOpen.id,
      "duplicate_request_ignored",
      "Solicitud repetida; se reutiliza el expediente abierto."
    );
    return {
      requestNumber: existingOpen.request_number as string,
      status: existingOpen.status as string,
      reused: true,
    };
  }

  // Lookup acotado por email vía Admin API (evita listar todos los usuarios).
  let matchedUser: { id: string } | null = null;
  try {
    const envUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (envUrl && serviceKey) {
      const lookup = await fetch(
        `${envUrl}/auth/v1/admin/users?email=${encodeURIComponent(email)}`,
        {
          headers: {
            Authorization: `Bearer ${serviceKey}`,
            apikey: serviceKey,
          },
        }
      );
      if (lookup.ok) {
        const payload = (await lookup.json()) as {
          users?: { id: string; email?: string }[];
          id?: string;
          email?: string;
        };
        if (Array.isArray(payload.users)) {
          matchedUser =
            payload.users.find(
              (u) => normalizeEmail(u.email ?? "") === email
            ) ?? null;
        } else if (payload.id && normalizeEmail(payload.email ?? "") === email) {
          matchedUser = { id: payload.id };
        }
      }
    }
  } catch {
    matchedUser = null;
  }

  const requestNumber = newRequestNumber();
  const initialStatus = matchedUser
    ? "closure_requested"
    : "identity_verification_pending";

  const retained = [
    {
      category: "evidencia_solicitud_cierre",
      basis: "Ley 1581 / responsabilidad demostrada",
    },
    {
      category: "historias_clinicas_y_documentos_clinicos",
      basis: "Res. 839/2017 y normas de HCE (Elynthis Clinical / Responsable clínico)",
    },
    {
      category: "consentimientos_firmas_rips_facturacion",
      basis: "Obligaciones legales/contractuales aplicables",
    },
  ];

  const { data: created, error } = await supabase
    .from("account_closure_requests")
    .insert({
      request_number: requestNumber,
      user_id: matchedUser?.id ?? null,
      email,
      full_name: input.fullName.trim(),
      document_id: input.documentId ?? null,
      role: input.role,
      organization_name: input.organizationName ?? null,
      scope: input.scope,
      export_requested: input.exportRequested,
      understood_legal_retention: true,
      status: initialStatus,
      identity_verification_method: matchedUser
        ? "email_match_auth_users"
        : "manual_verification_required",
      categories_retained: retained,
      estimated_final_disposition_at: null,
      notes: input.notes ?? null,
      notification_log: [
        {
          type: "intake_ack_pending",
          at: new Date().toISOString(),
        },
      ],
    })
    .select("id, request_number, status")
    .single();

  if (error || !created) {
    throw new Error(error?.message ?? "No se pudo crear la solicitud");
  }

  await appendEvent(created.id, "request_created", initialStatus);

  if (matchedUser?.id) {
    await supabase
      .from("profiles")
      .update({
        account_status: "closure_requested",
        updated_at: new Date().toISOString(),
      })
      .eq("id", matchedUser.id);
  }

  return {
    requestNumber: created.request_number as string,
    status: created.status as string,
    reused: false,
  };
}

/**
 * Disables access and cleans site-scoped disposable data.
 * Does not cascade-delete clinical entities (none in this schema).
 * Clinical Google/HCE/Stripe hooks are recorded as pending adapters.
 */
export async function processVerifiedClosure(requestNumber: string) {
  const supabase = getSupabaseAdminClient();

  const { data: request, error } = await supabase
    .from("account_closure_requests")
    .select("*")
    .eq("request_number", requestNumber)
    .single();

  if (error || !request) {
    throw new Error("Solicitud no encontrada");
  }

  if (request.status === "closure_completed") {
    return { requestNumber, status: request.status, noop: true };
  }

  const userId = request.user_id as string | null;
  const email = normalizeEmail(request.email as string);

  // Active legal hold blocks disposable deletion beyond access disable.
  let holdsQuery = supabase
    .from("legal_holds")
    .select("id, basis")
    .eq("active", true)
    .eq("request_id", request.id);
  const { data: holdsByRequest } = await holdsQuery;
  let holdsByUser: { id: string; basis: string }[] = [];
  if (userId) {
    const { data } = await supabase
      .from("legal_holds")
      .select("id, basis")
      .eq("active", true)
      .eq("user_id", userId);
    holdsByUser = data ?? [];
  }
  const holds = [...(holdsByRequest ?? []), ...holdsByUser];

  const hasHold = (holds?.length ?? 0) > 0;

  if (userId) {
    await supabase.auth.admin.updateUserById(userId, {
      ban_duration: "876000h",
    });
    await appendEvent(request.id, "auth_access_disabled");

    await supabase
      .from("profiles")
      .update({
        account_status: "access_disabled",
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    // Site-scoped cleanup (safe tables only).
    if (!hasHold && request.scope === "access_and_suppression") {
      await supabase.from("user_preferences").delete().eq("user_id", userId);
      await supabase.from("user_modules").delete().eq("user_id", userId);

      const { data: profile } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", userId)
        .maybeSingle();

      const avatarPath = profile?.avatar_url as string | null | undefined;
      if (avatarPath && !avatarPath.startsWith("http")) {
        await supabase.storage.from("avatars").remove([avatarPath]);
      }

      const anonName = `usuario_cerrado_${createHash("sha256")
        .update(userId)
        .digest("hex")
        .slice(0, 10)}`;

      await supabase
        .from("profiles")
        .update({
          full_name: anonName,
          avatar_url: null,
          account_status: "data_cleanup_pending",
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);

      await appendEvent(
        request.id,
        "site_data_cleaned",
        "preferencias, módulos y avatar; perfil anonimizado"
      );
    }
  }

  await supabase.from("deletion_tombstones").upsert(
    {
      user_id: userId,
      email_normalized: email,
      request_id: request.id,
      reason: "account_closure",
      applied_at: new Date().toISOString(),
    },
    { onConflict: "email_normalized,reason" }
  );
  await appendEvent(request.id, "tombstone_upserted");

  // Clinical adapters — not executed in this repo; recorded for orchestration.
  await appendEvent(
    request.id,
    "clinical_adapter_pending",
    "revokeGoogleOAuth/stopCalendarSync/cancelSubscriptionRenewal/blockClinicalDocuments"
  );

  const categoriesDeleted = hasHold
    ? []
    : [
        "user_preferences",
        "user_modules",
        "avatar",
        "active_sessions_banned",
      ];
  const categoriesAnonymized = hasHold ? [] : ["profiles.full_name"];
  const finalStatus = hasHold
    ? "archived_legal_retention"
    : "closure_completed";

  const cleanupDeadline = new Date();
  cleanupDeadline.setDate(cleanupDeadline.getDate() + OPERATIONAL_CLEANUP_DAYS);

  await supabase
    .from("account_closure_requests")
    .update({
      status: finalStatus,
      deactivated_at: new Date().toISOString(),
      categories_deleted: categoriesDeleted,
      categories_anonymized: categoriesAnonymized,
      legal_holds: (holds ?? []).map((h) => h.basis),
      result_summary: hasHold
        ? "Acceso desactivado. Conservación reforzada por legal hold; sin depuración adicional."
        : "Cuenta cerrada en el sitio. Datos prescindibles del sitio eliminados/anonimizados. Documentos clínicos, si existen en Clinical, permanecen bloqueados según retención legal.",
      estimated_final_disposition_at: null,
      updated_at: new Date().toISOString(),
      notification_log: [
        ...(((request.notification_log as unknown[]) ?? []) as unknown[]),
        {
          type: "closure_processed",
          at: new Date().toISOString(),
          operational_cleanup_days: OPERATIONAL_CLEANUP_DAYS,
          cleanup_deadline: cleanupDeadline.toISOString(),
        },
      ],
    })
    .eq("id", request.id);

  if (userId && !hasHold) {
    await supabase
      .from("profiles")
      .update({
        account_status: "closure_completed",
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);
  }

  await appendEvent(request.id, "closure_processed", finalStatus);

  return {
    requestNumber,
    status: finalStatus,
    noop: false,
    hasHold,
  };
}

export async function reapplyTombstonesAfterRestore() {
  const supabase = getSupabaseAdminClient();
  const { data: stones, error } = await supabase
    .from("deletion_tombstones")
    .select("email_normalized, request_id");
  if (error) throw new Error(error.message);

  const results = [];
  for (const stone of stones ?? []) {
    if (!stone.request_id) continue;
    const { data: req } = await supabase
      .from("account_closure_requests")
      .select("request_number")
      .eq("id", stone.request_id)
      .maybeSingle();
    if (!req?.request_number) continue;
    results.push(await processVerifiedClosure(req.request_number as string));
  }
  return results;
}

export async function assertLoginAllowed(userId: string) {
  const supabase = getSupabaseAdminClient();
  const { data } = await supabase
    .from("profiles")
    .select("account_status")
    .eq("id", userId)
    .maybeSingle();

  const status = data?.account_status as string | undefined;
  if (
    status &&
    status !== "active" &&
    status !== "identity_verification_pending"
  ) {
    const err = new Error(
      "Esta cuenta está cerrada o en proceso de cierre y no admite inicio de sesión."
    );
    (err as Error & { code?: string }).code = "ACCOUNT_CLOSED";
    throw err;
  }
}
