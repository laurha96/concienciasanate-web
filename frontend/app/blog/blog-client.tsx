"use client";

import * as React from "react";

import { SectionHeading } from "@/components/section-heading";
import { SearchInput } from "@/components/search-input";
import { FilterChips } from "@/components/filter-chips";
import { BlogCard, type BlogListItem } from "@/components/blog-card";
import { EmptyState } from "@/components/empty-state";

const categories = ["Todos", "Calma", "Relaciones", "Hábitos", "Crecimiento"];

const demo: BlogListItem[] = [
  {
    id: "b1",
    title: "Cómo volver a ti cuando todo va rápido",
    excerpt:
      "Una guía breve para recuperar claridad sin exigencia: respiración, atención y pequeños límites.",
    category: "Calma",
    href: "/blog#",
  },
  {
    id: "b2",
    title: "Hábitos emocionales: menos metas, más sistema",
    excerpt:
      "Cómo diseñar rutinas suaves que se sostienen, sin depender de motivación.",
    category: "Hábitos",
    href: "/blog#",
  },
  {
    id: "b3",
    title: "Límites sanos sin culpa: una mirada práctica",
    excerpt:
      "Estrategias para comunicar límites con claridad y cuidado, sin perderte en el intento.",
    category: "Relaciones",
    href: "/blog#",
  },
];

export function BlogClient() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("Todos");

  const filtered = React.useMemo(() => {
    return demo
      .filter((r) => (cat === "Todos" ? true : r.category === cat))
      .filter((r) =>
        `${r.title} ${r.excerpt}`.toLowerCase().includes(q.toLowerCase())
      );
  }, [cat, q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Lecturas serenas, claras y aplicables"
        description="Este listado queda preparado para consumir artículos desde Supabase. Hoy se muestra contenido de ejemplo con estilo editorial limpio."
      />

      <div className="mt-8 grid gap-4 rounded-[40px] border border-border/60 bg-card p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
        <SearchInput value={q} onChange={setQ} placeholder="Buscar artículos…" />
        <FilterChips options={categories} value={cat} onChange={setCat} />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState
            title="No encontramos artículos"
            description="Prueba con otra categoría o una búsqueda más amplia."
            actionLabel="Limpiar"
            onAction={() => {
              setQ("");
              setCat("Todos");
            }}
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
