import { AboutPageMotion } from "@/components/about/about-page-motion";
import { AboutPageNav, AboutSkipLink } from "@/components/about/about-page-nav";
import {
  AboutClinicalEditorialSection,
  AboutClinicalPillarsSection,
  AboutCtaSection,
  AboutDifferentialSectionLazy,
  AboutEcosystemSectionLazy,
  AboutHeroSection,
} from "@/components/about/sections";
import { AboutPageShell } from "@/components/about/ui";

/**
 * Sobre — arquitectura compacta: hero → visión editorial → pilares →
 * ecosistema → diferencial → CTA.
 */
export function AboutPageContent() {
  return (
    <AboutPageMotion>
      <AboutPageShell>
        <AboutSkipLink />
        <AboutHeroSection />
        <AboutPageNav />

        <main id="sobre-contenido-principal" className="about-editorial-flow">
          <AboutClinicalEditorialSection />
          <AboutClinicalPillarsSection />
          <AboutEcosystemSectionLazy />
          <AboutDifferentialSectionLazy />
          <AboutCtaSection />
        </main>
      </AboutPageShell>
    </AboutPageMotion>
  );
}
