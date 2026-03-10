import type { BlogArticleEntity } from "@/modules/home/types/home-types";
import type { HomeSectionConfigMap, HomeSectionKey } from "@/modules/home/types/home-types";

export function assertUniqueArticleIds(articles: BlogArticleEntity[]) {
  const seen = new Set<string>();
  for (const article of articles) {
    if (seen.has(article.id)) {
      throw new Error(`Duplicate BlogArticle id: ${article.id}`);
    }
    seen.add(article.id);
  }
}

export function assertValidSectionOrder(
  sectionOrder: HomeSectionKey[],
  sections: HomeSectionConfigMap
) {
  const seen = new Set<string>();
  for (const key of sectionOrder) {
    if (seen.has(key)) {
      throw new Error(`Duplicate Home section key in order: ${key}`);
    }
    seen.add(key);

    if (!(key in sections)) {
      throw new Error(`Home section key missing config: ${key}`);
    }
  }
}
