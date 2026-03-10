"use client";

import * as React from "react";

import { BlogCard, type BlogListItem } from "@/components/cards/blog-card";
import { EmptyState } from "@/components/shared/empty-state";
import { FilterChips } from "@/components/shared/filter-chips";
import { SearchInput } from "@/components/shared/search-input";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  BLOG_ARTICLES,
  BLOG_CATEGORIES,
  BLOG_SERIES,
  formatReadingTime,
  getCategoryLabel,
  getSeriesLabel,
  type BlogSeriesKey,
} from "@/content/blog/catalog";

function formatDateLabel(isoDate: string) {
  try {
    return new Intl.DateTimeFormat("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(isoDate));
  } catch {
    return isoDate.slice(0, 10);
  }
}

const categoryOptions = [
  "Todos",
  ...BLOG_CATEGORIES.map((c) => c.label),
];

function mapToListItem(article: (typeof BLOG_ARTICLES)[number]): BlogListItem {
  return {
    id: article.id,
    title: article.title,
    excerpt: article.excerpt,
    category: getCategoryLabel(article.category),
    readingTime: formatReadingTime(article.readingTimeMin),
    updatedAtLabel: formatDateLabel(article.updatedAt),
    reviewedLabel: article.reviewedLabel,
  };
}

export function BlogClient() {
  const [q, setQ] = React.useState("");
  const [cat, setCat] = React.useState("Todos");
  const [series, setSeries] = React.useState("Todas");

  const seriesInUse = React.useMemo(() => {
    const used = new Set(BLOG_ARTICLES.map((a) => a.series).filter(Boolean));
    return BLOG_SERIES.filter((s) => used.has(s.key));
  }, []);

  const seriesOptions = React.useMemo(() => {
    return ["Todas", ...seriesInUse.map((s) => s.label)];
  }, [seriesInUse]);

  const featured = React.useMemo(() => {
    return BLOG_ARTICLES.slice(0, 3).map(mapToListItem);
  }, []);

  const essentials = React.useMemo(() => {
    const essentialSlugs = new Set([
      "como-el-estres-afecta-al-cuerpo-y-a-la-mente",
      "regulacion-emocional-que-es-y-por-que-importa",
      "conexion-entre-sueno-y-salud-mental",
      "respiracion-y-sistema-nervioso",
      "habitos-pequenos-y-cambio-de-comportamiento",
      "ansiedad-comprender-una-emocion-adaptativa",
    ]);

    return BLOG_ARTICLES.filter((a) => essentialSlugs.has(a.slug)).map((a) => ({
      id: a.id,
      title: a.title,
      onSelect: () => {
        setQ(a.title);
      },
    }));
  }, []);

  const latest = React.useMemo(() => {
    return [...BLOG_ARTICLES]
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, 5)
      .map(mapToListItem);
  }, []);

  const labelToSeriesKey = React.useMemo(() => {
    return BLOG_SERIES.reduce<Record<string, BlogSeriesKey>>((acc, s) => {
      acc[s.label] = s.key;
      return acc;
    }, {});
  }, []);

  const filtered = React.useMemo(() => {
    const qNorm = q.trim().toLowerCase();
    const catKey = BLOG_CATEGORIES.find((c) => c.label === cat)?.key;
    const seriesKey = labelToSeriesKey[series];

    return BLOG_ARTICLES.filter((a) => {
      const matchCategory = cat === "Todos" ? true : a.category === catKey;
      const matchSeries = series === "Todas" ? true : a.series === seriesKey;
      const matchQuery = qNorm.length
        ? `${a.title} ${a.excerpt}`.toLowerCase().includes(qNorm)
        : true;

      return matchCategory && matchSeries && matchQuery;
    }).map(mapToListItem);
  }, [cat, labelToSeriesKey, q, series]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blog"
        title="Educación en salud basada en evidencia"
        description="Artículos diseñados para traducir conocimiento científico a un lenguaje claro y aplicable, sin sensacionalismo ni promesas exageradas."
      />

      <section className="mt-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {featured.map((item) => (
            <BlogCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-4 rounded-[40px] border border-border/60 bg-card p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <SearchInput value={q} onChange={setQ} placeholder="Buscar artículos…" />
          <FilterChips options={categoryOptions} value={cat} onChange={setCat} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-xs font-medium tracking-wide text-muted-foreground">
            Series
          </div>
          <FilterChips
            options={seriesOptions}
            value={series}
            onChange={setSeries}
          />
        </div>
        <div className="text-xs text-muted-foreground">
          {filtered.length} resultado(s)
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          {filtered.length === 0 ? (
            <EmptyState
              title="No encontramos artículos"
              description="Prueba con otra categoría, una serie diferente o una búsqueda más amplia."
              actionLabel="Limpiar"
              onAction={() => {
                setQ("");
                setCat("Todos");
                setSeries("Todas");
              }}
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((item) => (
                <BlogCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="text-sm font-medium">Guías esenciales</div>
            <div className="mt-3 space-y-2 text-sm">
              {essentials.map((it) => (
                <button
                  key={it.id}
                  type="button"
                  onClick={it.onSelect}
                  className="block w-full rounded-2xl px-3 py-2 text-left text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {it.title}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="text-sm font-medium">Series</div>
            <div className="mt-3 space-y-3">
              {seriesInUse.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSeries(getSeriesLabel(s.key))}
                  className="block w-full rounded-2xl border border-border/60 bg-background-soft px-4 py-3 text-left transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-green-soft/70 hover:shadow-sm"
                >
                  <div className="text-sm font-medium">{s.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {s.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm">
            <div className="text-sm font-medium">Últimas actualizaciones</div>
            <div className="mt-3 space-y-3">
              {latest.map((it) => (
                <div
                  key={it.id}
                  className="rounded-2xl border border-border/60 bg-background-soft px-4 py-3"
                >
                  <div className="text-sm font-medium text-foreground">
                    {it.title}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {it.category}
                    {it.updatedAtLabel ? ` · ${it.updatedAtLabel}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
