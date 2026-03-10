import type { BlogArticle } from "@/content/blog/catalog";

export type HomeRecentArticle = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
};

export type HomeTestimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
};

export type HomeSeoMetadata = {
  title: string;
  description: string;
};

export type HomeLink = {
  label: string;
  href: string;
};

export type HomeElynthisBlock = {
  title: string;
  description: string;
  primaryCta: HomeLink;
  secondaryCta: HomeLink;
};

export type HomeCtaBlock = {
  title: string;
  primaryCta: HomeLink;
  secondaryCta: HomeLink;
};

export type HomeEditorialConfig = {
  pillars: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  tools: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  foundation: {
    title: string;
    description: string;
    bullets: string[];
    note: string;
  };
  ecosystem: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  articles: {
    title: string;
  };
};

export type HomeSectionKey =
  | "hero"
  | "pillars"
  | "tools"
  | "foundation"
  | "ecosystem"
  | "elynthis"
  | "articles"
  | "finalCta";

export type HomeSectionConfigMap = {
  hero: { enabled: true };
  pillars: { enabled: true };
  tools: { enabled: true };
  foundation: { enabled: true };
  ecosystem: { enabled: true };
  elynthis: { enabled: true };
  articles: { enabled: true };
  finalCta: { enabled: true };
};

export type HomeCollections = {
  recentArticles: HomeRecentArticle[];
  testimonials: HomeTestimonial[];
};

export type HomePageData = {
  seo: HomeSeoMetadata;
  sectionOrder: HomeSectionKey[];
  sections: HomeSectionConfigMap;
  editorial: HomeEditorialConfig;
  elynthis: HomeElynthisBlock;
  cta: HomeCtaBlock;
  collections: HomeCollections;
};

export type HomeModel = {
  recentArticles: HomeRecentArticle[];
};

export type BlogArticleEntity = BlogArticle;
