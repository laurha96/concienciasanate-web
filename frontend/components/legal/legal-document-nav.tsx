import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getLegalDocument } from "@/lib/legal/content";
import { cn } from "@/lib/utils";

export function LegalDocumentNav({
  relatedIds,
  currentId,
}: {
  relatedIds: readonly string[];
  currentId: string;
}) {
  const related = relatedIds
    .map((id) => getLegalDocument(id))
    .filter((doc): doc is NonNullable<typeof doc> => Boolean(doc))
    .filter((doc) => doc.id !== currentId)
    .slice(0, 6);

  if (related.length === 0) return null;

  const prev = related[0];
  const next = related[1] ?? related[0];

  return (
    <section className="print:hidden" aria-label="Navegación entre documentos">
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href={prev.path}
          className={cn(
            "group flex items-start gap-3 rounded-2xl border border-border/60 bg-brand-surface/70 p-4",
            "transition-colors hover:border-primary/25",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          )}
        >
          <ArrowLeft className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
              Documento relacionado
            </span>
            <span className="mt-1 block font-display text-sm font-semibold text-foreground">
              {prev.shortTitle}
            </span>
          </span>
        </Link>
        <Link
          href={next.path}
          className={cn(
            "group flex items-start justify-end gap-3 rounded-2xl border border-border/60 bg-brand-surface/70 p-4 text-right",
            "transition-colors hover:border-primary/25",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          )}
        >
          <span>
            <span className="block text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground/80">
              Continuar lectura
            </span>
            <span className="mt-1 block font-display text-sm font-semibold text-foreground">
              {next.shortTitle}
            </span>
          </span>
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2">
        {related.map((doc) => (
          <li key={doc.id}>
            <Link
              href={doc.path}
              className="inline-flex rounded-full border border-border/60 bg-brand-background/70 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {doc.shortTitle}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
