"use client";

import { Printer } from "lucide-react";

export function LegalPrintButton({
  label = "Versión para impresión",
}: {
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-brand-surface/80 px-4 py-2 text-xs font-medium text-foreground transition hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 print:hidden"
    >
      <Printer className="size-3.5" aria-hidden />
      {label}
    </button>
  );
}
