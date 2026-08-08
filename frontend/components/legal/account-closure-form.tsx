"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

import {
  DELETE_ACCOUNT_SECTION_PATH,
  LEGAL_CONTACTS,
} from "@/lib/legal/constants";
import { cn } from "@/lib/utils";

type Role = "patient" | "professional" | "organization_admin" | "representative";

type Phase = "form" | "received" | "error";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export function AccountClosureForm() {
  const [phase, setPhase] = useState<Phase>("form");
  const [submitting, setSubmitting] = useState(false);
  const [requestNumber, setRequestNumber] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [role, setRole] = useState<Role>("patient");
  const [organizationName, setOrganizationName] = useState("");
  const [scope, setScope] = useState<"access_only" | "access_and_suppression">(
    "access_and_suppression"
  );
  const [exportRequested, setExportRequested] = useState(true);
  const [understood, setUnderstood] = useState(false);
  const [notes, setNotes] = useState("");

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);

    if (!understood) {
      setError("Debe confirmar que comprende la conservación legal.");
      return;
    }
    if (!API_BASE) {
      setError(
        `El formulario no está configurado (NEXT_PUBLIC_API_URL). Escriba a ${LEGAL_CONTACTS.privacy} con los mismos datos.`
      );
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/account/closure-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          documentId: documentId || undefined,
          role,
          organizationName: organizationName || undefined,
          scope,
          exportRequested,
          understoodLegalRetention: understood,
          notes: notes || undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        message?: string;
        requestNumber?: string;
      };
      if (!res.ok) {
        throw new Error(data.message || "No fue posible registrar la solicitud.");
      }
      setRequestNumber(data.requestNumber ?? null);
      setPhase("received");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado.");
      setPhase("error");
    } finally {
      setSubmitting(false);
    }
  }

  if (phase === "received") {
    return (
      <div
        className="rounded-3xl border border-border/60 bg-brand-surface/80 p-6 sm:p-8"
        role="status"
      >
        <h2 className="font-display text-xl font-semibold text-foreground">
          Solicitud recibida
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Hemos recibido tu solicitud de cierre. El acceso a tu cuenta será
          desactivado y comenzaremos la supresión o anonimización de los datos
          que no debamos conservar. Los documentos sujetos a obligaciones
          legales permanecerán bloqueados, protegidos y limitados a las
          finalidades autorizadas por la ley. Recibirás una confirmación con el
          número de solicitud y el resultado del proceso.
        </p>
        {requestNumber ? (
          <p className="mt-4 text-sm text-foreground">
            Número de solicitud:{" "}
            <span className="font-semibold tracking-wide">{requestNumber}</span>
          </p>
        ) : null}
        <p className="mt-4 text-sm text-muted-foreground">
          Detalle jurídico:{" "}
          <Link
            href={DELETE_ACCOUNT_SECTION_PATH}
            className="underline-offset-2 hover:underline"
          >
            Política de Privacidad — cierre y supresión
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-3xl border border-border/60 bg-brand-surface/80 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-foreground/90">Nombre completo</span>
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm">
          <span className="text-foreground/90">Correo de la cuenta</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            autoComplete="email"
          />
        </label>
        <label className="block text-sm">
          <span className="text-foreground/90">Documento (opcional)</span>
          <input
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          />
        </label>
        <label className="block text-sm">
          <span className="text-foreground/90">Rol</span>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <option value="patient">Paciente</option>
            <option value="professional">Profesional</option>
            <option value="organization_admin">Administrador institucional</option>
            <option value="representative">Representante</option>
          </select>
        </label>
      </div>

      {(role === "professional" ||
        role === "organization_admin" ||
        role === "representative") && (
        <label className="block text-sm">
          <span className="text-foreground/90">Organización (si aplica)</span>
          <input
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          />
        </label>
      )}

      <fieldset className="space-y-2">
        <legend className="text-sm text-foreground/90">Alcance de la solicitud</legend>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="radio"
            name="scope"
            checked={scope === "access_and_suppression"}
            onChange={() => setScope("access_and_suppression")}
            className="mt-1"
          />
          Cerrar acceso y solicitar supresión de datos no sujetos a retención
        </label>
        <label className="flex items-start gap-2 text-sm text-muted-foreground">
          <input
            type="radio"
            name="scope"
            checked={scope === "access_only"}
            onChange={() => setScope("access_only")}
            className="mt-1"
          />
          Solo cerrar el acceso a la cuenta
        </label>
      </fieldset>

      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={exportRequested}
          onChange={(e) => setExportRequested(e.target.checked)}
          className="mt-1"
        />
        Deseo solicitar previamente una copia o exportación de los datos que
        legalmente pueda recibir.
      </label>

      <label className="flex items-start gap-2 text-sm text-foreground">
        <input
          type="checkbox"
          required
          checked={understood}
          onChange={(e) => setUnderstood(e.target.checked)}
          className="mt-1"
        />
        Entiendo que perderé el acceso a la cuenta y que los documentos sujetos
        a conservación legal permanecerán bloqueados y protegidos durante el
        periodo aplicable.
      </label>

      <label className="block text-sm">
        <span className="text-foreground/90">Notas adicionales (opcional)</span>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1.5 w-full rounded-xl border border-border/70 bg-brand-background/70 px-3 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        />
      </label>

      {error ? (
        <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting || !understood}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium",
          "bg-primary text-primary-foreground transition hover:opacity-95",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        {submitting ? "Enviando…" : "Confirmar solicitud de cierre"}
      </button>
    </form>
  );
}
