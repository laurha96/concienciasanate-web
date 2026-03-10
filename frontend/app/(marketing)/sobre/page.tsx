import type { Metadata } from "next";

import { AboutApproachSection } from "@/components/about/about-approach-section";
import { AboutClosingSection } from "@/components/about/about-closing-section";
import { AboutEcosystemSection } from "@/components/about/about-ecosystem-section";
import { AboutHero } from "@/components/about/about-hero";
import { AboutIntroSection } from "@/components/about/about-intro-section";
import { AboutPrinciplesGrid } from "@/components/about/about-principles-grid";
import { AboutScientificFoundation } from "@/components/about/about-scientific-foundation";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre Conciencia Sánate: plataforma digital de salud y bienestar basada en evidencia, con enfoque integral y herramientas digitales.",
};

export default function SobrePage() {
  return (
    <div>
      <AboutHero />
      <AboutIntroSection />
      <AboutApproachSection />
      <AboutScientificFoundation />
      <AboutEcosystemSection />
      <AboutPrinciplesGrid />
      <AboutClosingSection />
    </div>
  );
}
