import type { HomeSectionConfigMap, HomeSectionKey } from "@/modules/home/types/home-types";

export const HOME_SECTIONS: HomeSectionConfigMap = {
  hero: { enabled: true },
  pillars: { enabled: true },
  tools: { enabled: true },
  foundation: { enabled: true },
  ecosystem: { enabled: true },
  elynthis: { enabled: true },
  articles: { enabled: true },
  finalCta: { enabled: true },
};

export const HOME_SECTION_ORDER: HomeSectionKey[] = [
  "hero",
  "pillars",
  "tools",
  "foundation",
  "ecosystem",
  "elynthis",
  "articles",
  "finalCta",
];
