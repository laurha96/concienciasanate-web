"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { LEGAL_CATEGORY_LABELS } from "@/lib/legal/content";
import type { LegalDocumentMeta } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
}

export function LegalSearch({
  documents,
  className,
}: {
  documents: LegalDocumentMeta[];
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return documents;
    return documents.filter((doc) => {
      const haystack = normalize(
        [
          doc.title,
          doc.shortTitle,
          doc.summary,
          doc.description,
          ...doc.keywords,
          LEGAL_CATEGORY_LABELS[doc.category],
        ].join(" ")
      );
      return haystack.includes(q);
    });
  }, [documents, query]);

  return (
    <div className={cn("space-y-4", className)}>
      <label className="block">
        <span className="sr-only">Buscar documentos legales</span>
        <span className="relative flex items-center">
          <Search
            className="pointer-events-none absolute left-3.5 size-4 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => {
              const value = event.target.value;
              startTransition(() => setQuery(value));
            }}
            placeholder="Buscar por tema, norma o documento…"
            className={cn(
              "w-full rounded-2xl border border-border/70 bg-brand-surface/90 py-3 pl-10 pr-4",
              "text-sm text-foreground shadow-[0_10px_28px_rgba(34,34,34,0.04)]",
              "placeholder:text-muted-foreground/70",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
            )}
            autoComplete="off"
          />
        </span>
      </label>

      <p className="text-xs text-muted-foreground" aria-live="polite">
        {isPending
          ? "Buscando…"
          : `${results.length} documento${results.length === 1 ? "" : "s"}`}
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {results.map((doc) => (
          <li key={doc.id}>
            <Link
              href={doc.path}
              className={cn(
                "group block h-full rounded-2xl border border-border/60 bg-brand-surface/70 p-4",
                "transition-[border-color,box-shadow,transform] duration-300",
                "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_18px_40px_rgba(34,34,34,0.06)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
              )}
            >
              <p className="text-[10.5px] font-medium uppercase tracking-[0.16em] text-muted-foreground/80">
                {LEGAL_CATEGORY_LABELS[doc.category]}
                {doc.signable ? " · Firmable" : ""}
              </p>
              <h3 className="mt-2 font-display text-[15px] font-semibold tracking-tight text-foreground group-hover:text-brand-primary-dark">
                {doc.shortTitle}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {doc.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {results.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border/70 bg-brand-background/60 px-4 py-6 text-sm text-muted-foreground">
          No encontramos documentos con esa búsqueda. Prueba con “historia
          clínica”, “cookies”, “teleconsulta” o “RDA”.
        </p>
      ) : null}
    </div>
  );
}
