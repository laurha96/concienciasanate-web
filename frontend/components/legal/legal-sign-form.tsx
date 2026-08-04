"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, Download } from "lucide-react";
import { toast } from "sonner";

import { LEGAL_CONTACTS } from "@/lib/legal/constants";
import { formatLegalDate } from "@/lib/legal/format";
import { cn } from "@/lib/utils";

type LegalSignFormProps = {
  documentTitle: string;
  documentVersion: string;
  documentPath: string;
};

export function LegalSignForm({
  documentTitle,
  documentVersion,
  documentPath,
}: LegalSignFormProps) {
  const [fullName, setFullName] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [understood, setUnderstood] = useState(false);
  const [signature, setSignature] = useState("");
  const [receipt, setReceipt] = useState<{
    id: string;
    signedAt: string;
  } | null>(null);

  const canSubmit = useMemo(
    () =>
      fullName.trim().length >= 3 &&
      documentId.trim().length >= 4 &&
      email.includes("@") &&
      signature.trim().length >= 3 &&
      accepted &&
      understood &&
      !receipt,
    [accepted, documentId, email, fullName, receipt, signature, understood]
  );

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!canSubmit) return;

    const id = `ELY-${Date.now().toString(36).toUpperCase()}`;
    const signedAt = new Date().toISOString();
    setReceipt({ id, signedAt });
    toast.success("Consentimiento registrado localmente", {
      description: "Puedes descargar o imprimir el comprobante.",
    });
  }

  function downloadReceipt() {
    if (!receipt) return;
    const payload = {
      receiptId: receipt.id,
      documentTitle,
      documentVersion,
      documentPath,
      fullName: fullName.trim(),
      documentId: documentId.trim(),
      email: email.trim(),
      signature: signature.trim(),
      signedAt: receipt.signedAt,
      notice:
        "Comprobante de aceptación electrónica generado en el Centro Legal de Conciencia Sánate / Elynthis. La custodia operativa definitiva puede residir además en el expediente de la cuenta o del Profesional.",
      contact: LEGAL_CONTACTS.privacy,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${receipt.id}-consentimiento-elynthis.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section
      id="firma-electronica"
      className="scroll-mt-28 rounded-[28px] border border-primary/20 bg-gradient-to-br from-brand-surface via-brand-background to-accent/40 p-5 sm:p-7 print:border print:shadow-none"
      aria-labelledby="firma-electronica-title"
    >
      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
        Firma electrónica
      </p>
      <h2
        id="firma-electronica-title"
        className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
      >
        Aceptación electrónica del consentimiento
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Complete los campos para dejar constancia de su manifestación de
        voluntad respecto de <strong className="font-medium text-foreground">{documentTitle}</strong>{" "}
        (versión {documentVersion}). Este formulario genera un comprobante
        descargable; en cuentas autenticadas de Elynthis la evidencia también
        puede integrarse al expediente digital.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="mb-1.5 block text-foreground/90">Nombre completo</span>
            <input
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-border/70 bg-white/80 px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              autoComplete="name"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-1.5 block text-foreground/90">
              Documento de identidad
            </span>
            <input
              required
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              className="w-full rounded-xl border border-border/70 bg-white/80 px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            />
          </label>
        </div>

        <label className="block text-sm">
          <span className="mb-1.5 block text-foreground/90">Correo electrónico</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white/80 px-3 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            autoComplete="email"
          />
        </label>

        <label className="block text-sm">
          <span className="mb-1.5 block text-foreground/90">
            Firma tipográfica (escriba su nombre como firma)
          </span>
          <input
            required
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            className="w-full rounded-xl border border-border/70 bg-white/80 px-3 py-2.5 font-display text-lg italic outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            placeholder="Ej. María Pérez Gómez"
          />
        </label>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={understood}
            onChange={(e) => setUnderstood(e.target.checked)}
            className="mt-1 size-4 rounded border-border text-primary focus-visible:ring-primary/30"
          />
          <span>
            Declaro que leí y comprendí el contenido de este documento, incluyendo
            finalidades, derechos y límites legales aplicables en Colombia.
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mt-1 size-4 rounded border-border text-primary focus-visible:ring-primary/30"
          />
          <span>
            Autorizo / consiento de manera previa, expresa e informada según el
            texto de este documento y las políticas del Centro Legal.
          </span>
        </label>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={!canSubmit}
            className={cn(
              "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white",
              "bg-primary transition hover:bg-[var(--green-primary-hover)]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            )}
          >
            Firmar electrónicamente
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center rounded-full border border-border/70 bg-brand-surface/80 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            Imprimir documento
          </button>
        </div>
      </form>

      {receipt ? (
        <div className="mt-6 rounded-2xl border border-primary/25 bg-white/70 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5 text-primary" aria-hidden />
            <div className="space-y-1 text-sm">
              <p className="font-display font-semibold text-foreground">
                Comprobante {receipt.id}
              </p>
              <p className="text-muted-foreground">
                Firmado el {formatLegalDate(receipt.signedAt.slice(0, 10))} a las{" "}
                {new Date(receipt.signedAt).toLocaleTimeString("es-CO", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                por {fullName.trim()}.
              </p>
              <p className="text-muted-foreground">
                Para custodia institucional o dudas: {LEGAL_CONTACTS.privacy}
              </p>
              <button
                type="button"
                onClick={downloadReceipt}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary/30"
              >
                <Download className="size-3.5" aria-hidden />
                Descargar comprobante JSON
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
