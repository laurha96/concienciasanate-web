import type { HomePageData } from "@/modules/home/types/home-types";

import { getHomeRecentArticles } from "@/modules/home/services/home-content-service";
import {
  getHomeEditorialConfig,
  getHomeElynthisBlock,
  getHomeFinalCta,
  getHomeSectionOrder,
  getHomeSectionsConfig,
  getHomeSeo,
} from "@/modules/home/repositories/home-config-repository";
import { listHomeTestimonials } from "@/modules/home/repositories/testimonials-repository";
import { assertValidSectionOrder } from "@/modules/home/validators/home-validators";

export function getHomePageData(): HomePageData {
  const seo = getHomeSeo();
  const sections = getHomeSectionsConfig();
  const sectionOrder = getHomeSectionOrder();
  assertValidSectionOrder(sectionOrder, sections);

  return {
    seo,
    sections,
    sectionOrder,
    editorial: getHomeEditorialConfig(),
    elynthis: getHomeElynthisBlock(),
    cta: getHomeFinalCta(),
    collections: {
      recentArticles: getHomeRecentArticles(),
      testimonials: listHomeTestimonials(),
    },
  };
}
