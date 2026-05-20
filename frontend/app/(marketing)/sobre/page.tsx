import type { Metadata } from "next";

import { ABOUT_SEO } from "@/components/about/about-data";
import { AboutPageContent } from "@/components/about/about-page-content";

export const metadata: Metadata = {
  title: ABOUT_SEO.title,
  description: ABOUT_SEO.description,
  alternates: {
    canonical: ABOUT_SEO.path,
  },
  openGraph: {
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    url: ABOUT_SEO.path,
    type: "website",
    locale: "es_ES",
    siteName: "Conciencia Sánate",
    images: [{ url: "/social/opengraph-image.png", alt: "Conciencia Sánate" }],
  },
  twitter: {
    card: "summary_large_image",
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    images: ["/social/twitter-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SobrePage() {
  return (
    <article aria-label="Sobre Conciencia Sánate">
      <AboutPageContent />
    </article>
  );
}
