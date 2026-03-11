"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export type ContactReason =
  | "Consulta general"
  | "Soporte técnico"
  | "Profesional de salud"
  | "Alianza o investigación";

const REASONS: ContactReason[] = [
  "Consulta general",
  "Soporte técnico",
  "Profesional de salud",
  "Alianza o investigación",
];

export type ContactFormProps = {
  toEmail: string;
  includeReasonDropdown?: boolean;
  className?: string;
};

function buildMailtoUrl({
  toEmail,
  name,
  email,
  reason,
  subject,
  message,
}: {
  toEmail: string;
  name: string;
  email: string;
  reason: ContactReason | null;
  subject: string;
  message: string;
}) {
  const subjectLine = reason ? `[Contacto] ${reason} — ${subject}` : `[Contacto] ${subject}`;
  const bodyLines = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Motivo: ${reason ?? "(no especificado)"}`,
    `Asunto: ${subject}`,
    "",
    "Mensaje:",
    message,
  ];

  const body = bodyLines.join("\n");
  const params = new URLSearchParams({
    subject: subjectLine,
    body,
  });

  return `mailto:${toEmail}?${params.toString()}`;
}

export function ContactForm({
  toEmail,
  includeReasonDropdown = true,
  className,
}: ContactFormProps) {
  const [status, setStatus] = React.useState<
    "idle" | "opening-mail" | "missing" | "sent"
  >("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const reasonRaw = String(formData.get("reason") ?? "").trim();
    const reason = reasonRaw ? (reasonRaw as ContactReason) : null;
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("missing");
      return;
    }

    setStatus("opening-mail");

    const mailtoUrl = buildMailtoUrl({
      toEmail,
      name,
      email,
      reason,
      subject,
      message,
    });

    window.location.href = mailtoUrl;

    window.setTimeout(() => {
      setStatus("sent");
    }, 1200);
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Nombre</Label>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            className="rounded-xl border-border/60 focus-visible:border-green-soft/60 focus-visible:ring-green-soft/30"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Correo electrónico</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-xl border-border/60 focus-visible:border-green-soft/60 focus-visible:ring-green-soft/30"
            required
          />
        </div>
      </div>

      {includeReasonDropdown ? (
        <div className="space-y-2">
          <Label htmlFor="contact-reason">Motivo (opcional)</Label>
          <select
            id="contact-reason"
            name="reason"
            defaultValue=""
            className={cn(
              "h-10 w-full rounded-xl border border-border/60 bg-transparent px-4 text-sm text-foreground shadow-xs transition-[color,box-shadow,border-color] outline-none",
              "focus-visible:border-green-soft/60 focus-visible:ring-[3px] focus-visible:ring-green-soft/30",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
          >
            <option value="">Sin especificar</option>
            {REASONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="contact-subject">Asunto</Label>
        <Input
          id="contact-subject"
          name="subject"
          autoComplete="off"
          className="rounded-xl border-border/60 focus-visible:border-green-soft/60 focus-visible:ring-green-soft/30"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">Mensaje</Label>
        <Textarea
          id="contact-message"
          name="message"
          className="min-h-36 rounded-xl border-border/60 focus-visible:border-green-soft/60 focus-visible:ring-green-soft/30"
          required
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="w-full sm:w-auto">
          Enviar mensaje
        </Button>
        <p className="text-xs text-muted-foreground">
          Tu mensaje será revisado por nuestro equipo.
        </p>
      </div>

      <p className="sr-only" aria-live="polite">
        {status === "opening-mail"
          ? "Abriendo tu aplicación de correo."
          : status === "missing"
            ? "Completa todos los campos requeridos."
            : status === "sent"
              ? "Mensaje listo para enviar."
            : ""}
      </p>

      {status === "missing" ? (
        <p className="text-sm text-muted-foreground">
          Completa todos los campos para enviar el mensaje.
        </p>
      ) : null}

      {status === "sent" ? (
        <p className="text-sm text-muted-foreground">
          Listo: se abrió tu correo con el mensaje preparado.
        </p>
      ) : null}
    </form>
  );
}
