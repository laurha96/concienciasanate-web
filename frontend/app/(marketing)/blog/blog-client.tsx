"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  BLOG_ARTICLES,
  BLOG_CATEGORIES,
  BLOG_SERIES,
  formatReadingTime,
  getCategoryLabel,
  getSeriesLabel,
  type BlogCategoryKey,
  type BlogSeriesKey,
} from "@/content/blog/catalog";

import { BlogCTASection } from "@/components/blog/blog-cta-section";
import { BlogFilterChips, type BlogChipOption } from "@/components/blog/blog-filter-chips";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogPostCard, type BlogPostCardItem } from "@/components/blog/blog-post-card";
import { BlogSearchBar } from "@/components/blog/blog-search-bar";
import { BlogSectionHeader } from "@/components/blog/blog-section-header";
import { CategoryCard } from "@/components/blog/category-card";
import { FeaturedPostCard } from "@/components/blog/featured-post-card";
import { NoResultsState } from "@/components/blog/no-results-state";
import { SeriesCard } from "@/components/blog/series-card";

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

const CATEGORY_ORDER: BlogCategoryKey[] = [
  "salud-mental",
  "regulacion-emocional",
  "habitos",
  "bienestar",
  "neurociencia",
  "psicologia",
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function useDebouncedValue<T>(value: T, delayMs: number) {
  const [debounced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs, value]);

  return debounced;
}

function mapToCardItem(article: (typeof BLOG_ARTICLES)[number]): BlogPostCardItem {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    categoryLabel: getCategoryLabel(article.category),
    readingTime: formatReadingTime(article.readingTimeMin),
    updatedAtLabel: formatDateLabel(article.updatedAt),
    editorialLabel: article.reviewedLabel,
  };
}

export function BlogClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [q, setQ] = React.useState("");
  const [categoryKey, setCategoryKey] = React.useState<BlogCategoryKey | "all">(
    "all",
  );

  React.useEffect(() => {
    const qParam = searchParams.get("q") ?? "";
    const catParam = searchParams.get("category") ?? "all";
    const validCat = BLOG_CATEGORIES.some((c) => c.key === catParam);
    const nextCat: BlogCategoryKey | "all" = validCat
      ? (catParam as BlogCategoryKey)
      : "all";

    setQ((prev) => (prev === qParam ? prev : qParam));
    setCategoryKey((prev) => (prev === nextCat ? prev : nextCat));
  }, [searchParams]);

  const qDebounced = useDebouncedValue(q, 250);
  const categoryDebounced = useDebouncedValue(categoryKey, 0);

  React.useEffect(() => {
    const next = new URLSearchParams();

    if (qDebounced.trim().length) next.set("q", qDebounced.trim());
    else next.delete("q");

    if (categoryDebounced !== "all") next.set("category", categoryDebounced);
    else next.delete("category");

    const nextUrl = next.toString()
      ? `${pathname}?${next.toString()}`
      : pathname;
    router.replace(nextUrl, { scroll: false });
  }, [categoryDebounced, pathname, qDebounced, router]);

  const categoryCounts = React.useMemo(() => {
    return BLOG_CATEGORIES.reduce<Record<BlogCategoryKey, number>>((acc, c) => {
      acc[c.key] = BLOG_ARTICLES.filter((a) => a.category === c.key).length;
      return acc;
    }, {} as Record<BlogCategoryKey, number>);
  }, []);

  const categoryChipOptions = React.useMemo<BlogChipOption[]>(() => {
    const byKey = BLOG_CATEGORIES.reduce<Record<string, (typeof BLOG_CATEGORIES)[number]>>(
      (acc, c) => {
        acc[c.key] = c;
        return acc;
      },
      {},
    );

    const ordered = CATEGORY_ORDER.filter((k) => byKey[k])
      .map((k) => byKey[k])
      .filter((c) => categoryCounts[c.key] > 0);

    return [
      { value: "all", label: "Todos", count: BLOG_ARTICLES.length },
      ...ordered.map((c) => ({
        value: c.key,
        label: c.label,
        count: categoryCounts[c.key],
      })),
    ];
  }, [categoryCounts]);

  const seriesCounts = React.useMemo(() => {
    return BLOG_SERIES.reduce<Record<BlogSeriesKey, number>>((acc, s) => {
      acc[s.key] = BLOG_ARTICLES.filter((a) => a.series === s.key).length;
      return acc;
    }, {} as Record<BlogSeriesKey, number>);
  }, []);

  const seriesCards = React.useMemo(() => {
    const preferred: BlogSeriesKey[] = [
      "sueño",
      "estres-y-ansiedad",
      "regulacion-nerviosa",
      "habitos-sostenibles",
    ];

    const byKey = BLOG_SERIES.reduce<Record<string, (typeof BLOG_SERIES)[number]>>(
      (acc, s) => {
        acc[s.key] = s;
        return acc;
      },
      {},
    );

    return preferred
      .filter((k) => byKey[k])
      .map((k) => byKey[k])
      .map((s) => ({
        key: s.key,
        label: s.label,
        description: s.description,
        count: seriesCounts[s.key],
      }))
      .filter((s) => s.count > 0)
      .slice(0, 4);
  }, [seriesCounts]);

  const filteredPosts = React.useMemo(() => {
    const qNorm = normalizeQuery(q);

    return [...BLOG_ARTICLES]
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .filter((a) => {
        const matchCategory = categoryKey === "all" ? true : a.category === categoryKey;
        if (!matchCategory) return false;

        if (!qNorm.length) return true;

        const seriesLabel = a.series ? getSeriesLabel(a.series) : "";
        const haystack = `${a.title} ${a.excerpt} ${getCategoryLabel(a.category)} ${a.subcategory} ${seriesLabel} ${a.type}`
          .toLowerCase();
        return haystack.includes(qNorm);
      });
  }, [categoryKey, q]);

  const featured = React.useMemo(() => {
    return filteredPosts[0] ? mapToCardItem(filteredPosts[0]) : null;
  }, [filteredPosts]);

  const recent = React.useMemo(() => {
    const rest = featured
      ? filteredPosts.filter((a) => a.id !== featured.id)
      : filteredPosts;
    return rest.slice(0, 6).map(mapToCardItem);
  }, [featured, filteredPosts]);

  const categoryCards = React.useMemo(() => {
    const byKey = BLOG_CATEGORIES.reduce<Record<string, (typeof BLOG_CATEGORIES)[number]>>(
      (acc, c) => {
        acc[c.key] = c;
        return acc;
      },
      {},
    );

    return CATEGORY_ORDER.filter((k) => byKey[k])
      .map((k) => byKey[k])
      .map((c) => ({
        key: c.key,
        label: c.label,
        description: c.description,
        count: categoryCounts[c.key],
      }))
      .filter((c) => c.count > 0);
  }, [categoryCounts]);

  const hasResults = filteredPosts.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <BlogHero />

      <section className="mt-12 rounded-[40px] border border-border/50 bg-background-soft p-6 shadow-sm sm:p-8">
        <div className="mx-auto max-w-4xl">
          <BlogSearchBar
            value={q}
            onChange={setQ}
            placeholder="Buscar artículos sobre estrés, sueño, ansiedad, hábitos o bienestar"
          />

          <BlogFilterChips
            className="mt-5"
            label="Categorías"
            options={categoryChipOptions}
            value={categoryKey}
            onChange={(next) => {
              setCategoryKey(next === "all" ? "all" : (next as BlogCategoryKey));
            }}
          />

          <div className="mt-4 text-[11px] text-muted-foreground">
            {filteredPosts.length} resultado(s)
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-6xl">
          {featured ? (
            <FeaturedPostCard
              post={{
                slug: featured.slug,
                title: featured.title,
                excerpt: featured.excerpt,
                categoryLabel: featured.categoryLabel,
                readingTime: featured.readingTime,
                updatedAtLabel: featured.updatedAtLabel,
                editorialLabel: featured.editorialLabel,
              }}
            />
          ) : null}
        </div>
      </section>

      <section className="mt-20" id="articulos" aria-label="Artículos">
        <div className="mx-auto max-w-6xl">
          <BlogSectionHeader
            title="Artículos recientes"
            subtitle="Contenido actualizado para comprender mejor la salud, el bienestar y la vida cotidiana."
          />

          <div className="mt-8">
            {!hasResults ? (
              <NoResultsState
                onClear={() => {
                  setQ("");
                  setCategoryKey("all");
                }}
              />
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recent.map((item) => (
                  <BlogPostCard key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mt-24" aria-label="Explora por categoría">
        <div className="mx-auto max-w-6xl">
          <BlogSectionHeader
            title="Explora por categoría"
            subtitle="Recorridos claros para navegar temas de salud integral con enfoque editorial."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((c) => (
              <CategoryCard
                key={c.key}
                item={c}
                onSelect={(key) => {
                  setCategoryKey(key as BlogCategoryKey);
                  document.getElementById("articulos")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24" id="series" aria-label="Series editoriales">
        <div className="mx-auto max-w-6xl">
          <BlogSectionHeader
            title="Series editoriales"
            subtitle="Recorridos temáticos para profundizar en áreas clave del bienestar y la salud."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {seriesCards.map((s) => (
              <SeriesCard
                key={s.key}
                item={s}
                onSelect={(key) => {
                  const seriesLabel = getSeriesLabel(key as BlogSeriesKey);
                  setQ(seriesLabel);
                  document.getElementById("articulos")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto max-w-6xl">
          <BlogCTASection
            onExploreCategories={() => {
              document
                .querySelector('[aria-label="Explora por categoría"]')
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        </div>
      </section>
    </div>
  );
}
