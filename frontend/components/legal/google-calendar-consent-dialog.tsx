"use client";

import Link from "next/link";

import { PRIVACY_PATH } from "@/lib/legal/constants";
import { cn } from "@/lib/utils";

type GoogleCalendarConsentDialogProps = {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  className?: string;
};

/**
 * Aviso contextual obligatorio antes de iniciar OAuth de Google Calendar.
 * Debe mostrarse antes de redirigir a accounts.google.com.
 * No usa casillas premarcadas ni consentimiento implícito.
 */
export function GoogleCalendarConsentDialog({
  open,
  onConfirm,
  onCancel,
  className,
}: GoogleCalendarConsentDialogProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="google-calendar-consent-title"
      className={cn(
        "fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center",
        className
      )}
    >
      <div className="w-full max-w-lg rounded-3xl border border-border/70 bg-brand-surface p-5 shadow-[0_24px_60px_rgba(34,34,34,0.18)] sm:p-6">
        <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
          Elynthis · Integración opcional
        </p>
        <h2
          id="google-calendar-consent-title"
          className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground"
        >
          Conectar Google Calendar
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Al conectar Google Calendar, Elynthis accederá únicamente a la
          información necesaria para sincronizar tu agenda, como calendarios
          seleccionados, fechas, horas y datos de los eventos autorizados.
          Elynthis podrá consultar disponibilidad y crear, actualizar o cancelar
          eventos cuando tú lo solicites o mantengas activa la sincronización.
          La conexión es opcional y puedes revocarla en cualquier momento desde
          Configuración o desde tu Cuenta de Google. Consulta la{" "}
          <Link
            href={PRIVACY_PATH}
            className="font-medium text-foreground underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidad
          </Link>
          .
        </p>
        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
          <li>No se solicitan permisos de Gmail, Drive ni Contacts.</li>
          <li>Google Sign-In no autoriza Calendar por sí solo.</li>
          <li>Los datos de Google no se envían a proveedores de IA.</li>
        </ul>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-brand-background/80 px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--green-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
          >
            Continuar y conectar Google Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
