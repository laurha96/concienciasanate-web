import { z } from "zod";

import { getSupabaseAdminClient } from "../utils/supabaseClient";

const publishStatus = z.enum(["draft", "published", "unpublished"]);

export const planUpsertSchema = z.object({
  name: z.string().min(2),
  priceLabel: z.string().optional(),
  billingPeriod: z.string().optional(),
  description: z.string().optional(),
  features: z.array(z.string()).default([]),
  highlight: z.boolean().default(false),
  orderIndex: z.coerce.number().int().min(0).default(0),
  ctaLabel: z.string().optional(),
  ctaHref: z.string().optional(),
  status: publishStatus.default("draft"),
});

export type PlanInput = z.infer<typeof planUpsertSchema>;

function toDbPatch(input: PlanInput, adminUserId: string) {
  return {
    name: input.name,
    price_label: input.priceLabel ?? null,
    billing_period: input.billingPeriod ?? null,
    description: input.description ?? null,
    features: input.features,
    highlight: input.highlight,
    order_index: input.orderIndex,
    cta_label: input.ctaLabel ?? null,
    cta_href: input.ctaHref ?? null,
    status: input.status,
    updated_by: adminUserId,
    updated_at: new Date().toISOString(),
  };
}

export async function adminListPlans() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("plans")
    .select(
      "id,name,price_label,billing_period,highlight,order_index,status,created_at,updated_at"
    )
    .order("order_index", { ascending: true })
    .limit(100);

  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function adminGetPlan(id: string) {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("plans")
    .select(
      "id,name,price_label,billing_period,description,features,highlight,order_index,cta_label,cta_href,status,created_at,updated_at"
    )
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminCreatePlan(input: PlanInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { data, error } = await supabase
    .from("plans")
    .insert({ ...patch, created_at: new Date().toISOString() })
    .select("id")
    .single();

  if (error) throw new Error(error.message);
  return { id: data.id as string };
}

export async function adminUpdatePlan(id: string, input: PlanInput, adminUserId: string) {
  const supabase = getSupabaseAdminClient();
  const patch = toDbPatch(input, adminUserId);

  const { error } = await supabase.from("plans").update(patch).eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function adminDeletePlan(id: string) {
  const supabase = getSupabaseAdminClient();
  const { error } = await supabase.from("plans").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return { ok: true };
}

export async function publicListPublishedPlans() {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("plans")
    .select(
      "id,name,price_label,billing_period,description,features,highlight,order_index,cta_label,cta_href,updated_at"
    )
    .eq("status", "published")
    .order("order_index", { ascending: true })
    .limit(100);

  if (error) throw new Error(error.message);
  return data ?? [];
}
