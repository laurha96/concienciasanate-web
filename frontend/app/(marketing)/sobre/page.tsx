import type { Metadata } from "next";

import {
  AboutJsonLd,
  AboutPageContent,
  buildAboutPageMetadata,
} from "@/components/about";

export const metadata: Metadata = buildAboutPageMetadata();

export default function SobrePage() {
  return (
    <>
      <AboutJsonLd />
      <article lang="es" aria-labelledby="about-hero-heading">
        <AboutPageContent />
      </article>
    </>
  );
}
