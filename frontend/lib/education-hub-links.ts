import { BLOG_CATEGORIES, type BlogCategoryKey } from "@/content/blog/catalog";
import type { EducationHubCategory } from "@/components/homepage/education-hub-data";

const VALID_BLOG_CATEGORIES = new Set<BlogCategoryKey>(
  BLOG_CATEGORIES.map((c) => c.key),
);

const MAX_QUERY_LENGTH = 80;

function sanitizeQuery(value: string): string {
  return value
    .trim()
    .replace(/[<>"'`]/g, "")
    .slice(0, MAX_QUERY_LENGTH);
}

/**
 * Construye un enlace seguro hacia blog o herramientas.
 * Solo admite categorías de blog conocidas y query acotada.
 */
export function buildEducationHubHref(
  item: Pick<
    EducationHubCategory,
    "href" | "destination" | "blogCategory" | "blogQuery"
  >,
): string {
  if (item.href?.startsWith("/")) {
    return item.href;
  }

  const base = item.destination === "herramientas" ? "/herramientas" : "/blog";
  const params = new URLSearchParams();

  if (
    item.blogCategory &&
    VALID_BLOG_CATEGORIES.has(item.blogCategory)
  ) {
    params.set("category", item.blogCategory);
  }

  if (item.blogQuery) {
    const q = sanitizeQuery(item.blogQuery);
    if (q.length > 0) {
      params.set("q", q);
    }
  }

  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}
