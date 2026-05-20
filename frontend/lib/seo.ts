import type { Metadata } from "next";

export const SITE_NAME = "Conciencia Sánate";
export const SITE_LOCALE = "es_ES";
export const SITE_LANGUAGE = "es";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.concienciasanate.com";

export const DEFAULT_OG_IMAGE = {
  url: "/social/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Conciencia Sánate — salud mental basada en evidencia",
} as const;

export const DEFAULT_TWITTER_IMAGE = "/social/twitter-image.png";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}

/** Evita rotura de script al serializar JSON-LD. */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  /** Título corto para Open Graph / Twitter si difiere del `<title>`. */
  socialTitle?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt: string;
  };
  robots?: Metadata["robots"];
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  socialTitle,
  ogImage = DEFAULT_OG_IMAGE,
  robots = { index: true, follow: true },
  type = "website",
}: PageMetadataInput): Metadata {
  const canonical = path;
  const url = absoluteUrl(path);
  const ogTitle = socialTitle ?? title;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? [...keywords] : undefined,
    alternates: { canonical },
    authors: [{ name: SITE_NAME, url: siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "health",
    robots,
    openGraph: {
      title: ogTitle,
      description,
      url,
      type,
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.url,
          width: ogImage.width,
          height: ogImage.height,
          alt: ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage.url],
    },
  };
}
