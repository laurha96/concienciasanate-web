"use client";

import { useEffect, useMemo, useState } from "react";

import type { LegalArticle } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

type TocItem = {
  id: string;
  label: string;
};

export function LegalToc({
  scopeId = "alcance",
  definitionsId = "definiciones",
  articles,
  annexes = [],
  className,
}: {
  scopeId?: string;
  definitionsId?: string;
  articles: LegalArticle[];
  annexes?: LegalArticle[];
  className?: string;
}) {
  const items = useMemo<TocItem[]>(
    () => [
      { id: definitionsId, label: "Definiciones" },
      { id: scopeId, label: "Alcance" },
      ...articles.map((article) => ({
        id: article.id,
        label: article.number
          ? `${article.number}. ${article.title}`
          : article.title,
      })),
      ...annexes.map((annex) => ({
        id: annex.id,
        label: annex.number ? `${annex.number}. ${annex.title}` : annex.title,
      })),
    ],
    [articles, annexes, definitionsId, scopeId]
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Índice del documento"
      className={cn("legal-toc print:hidden", className)}
    >
      <p className="text-[10.5px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
        Índice
      </p>
      <ol className="mt-3 max-h-[min(70vh,36rem)] space-y-1 overflow-y-auto pr-1 text-[13px] leading-snug">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block rounded-lg px-2.5 py-1.5 transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  active
                    ? "bg-primary/10 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-brand-background hover:text-foreground"
                )}
                aria-current={active ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
