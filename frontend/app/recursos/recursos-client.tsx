"use client";

import * as React from "react";

import { SectionHeading } from "@/components/section-heading";
import { SearchInput } from "@/components/search-input";
import { FilterChips } from "@/components/filter-chips";
import { ResourceCard, type ResourceItem } from "@/components/resource-card";
import { EmptyState } from "@/components/empty-state";

const categories = ["Todos", "Calma", "Hábitos", "Límites", "Autoestima"];

const demo: ResourceItem[] = [
  {
    id: "r1",
    title: "Guía breve: volver al cuerpo",
    description:
      "Una práctica corta para aterrizar cuando tu mente está acelerada.",
    category: "Calma",
    kind: "guia",
    isFree: true,
  },
  {
    id: "r2",
    title: "Ejercicio: mapa de energía",
    description:
      "Identifica qué te drena y qué te sostiene, con una mirada amable.",
    category: "Hábitos",
    kind: "ejercicio",
    isFree: true,
  },
  {
    id: "r3",
    title: "Plantilla: límites con claridad",
    description:
      "Una estructura simple para comunicar límites sin entrar en conflicto.",
    category: "Límites",
    kind: "plantilla",
    isFree: true,
  },
];

export function RecursosClient() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("Todos");

  const filtered = React.useMemo(() => {
    return demo
      .filter((r) => (cat === "Todos" ? true : r.category === cat))
      .filter((r) =>
        `${r.title} ${r.description}`.toLowerCase().includes(q.toLowerCase())
      );
  }, [cat, q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Recursos"
        title="Herramientas gratuitas, claras y suaves"
        description="Esta sección ya está lista para conectarse a Supabase. Por ahora mostramos contenido de ejemplo para definir el estilo."
      />

      <div className="mt-8 grid gap-4 rounded-[40px] border border-border/60 bg-card p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
        <SearchInput value={q} onChange={setQ} placeholder="Buscar recursos…" />
        <FilterChips options={categories} value={cat} onChange={setCat} />
      </div>

      <div className="mt-8">
        {filtered.length === 0 ? (
          <EmptyState
            title="No encontramos recursos con esos filtros"
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
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
