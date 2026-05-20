import { AboutPageMotion } from "@/components/about/about-page-motion";
import { AboutPageNav, AboutSkipLink } from "@/components/about/about-page-nav";
import {
  AboutCtaSection,
  AboutDifferentialSectionLazy,
  AboutEcosystemSectionLazy,
  AboutEthicsSection,
  AboutHeroSection,
  AboutManifestoSectionLazy,
  AboutScienceSection,
  AboutVisionSection,
} from "@/components/about/sections";
import {
  AboutEditorialPause,
  AboutPageShell,
} from "@/components/about/ui";

/**
 * Composición de la página Sobre — arco editorial con alternancia de fondos,
 * lazy loading below-the-fold y ritmo vertical premium.
 */
export function AboutPageContent() {
  return (
    <AboutPageMotion>
      <AboutPageShell>
        <AboutSkipLink />
        <AboutHeroSection />
        <AboutPageNav />

        <main id="sobre-contenido-principal" className="about-editorial-flow">
          <AboutVisionSection />
          <AboutEditorialPause size="lg" />
          <AboutScienceSection />
          <AboutEditorialPause size="md" />
          <AboutDifferentialSectionLazy />
          <AboutEditorialPause size="lg" />
          <AboutEthicsSection />
          <AboutEditorialPause size="md" />
          <AboutEcosystemSectionLazy />
          <AboutEditorialPause size="xl" />
          <AboutManifestoSectionLazy />
          <AboutEditorialPause size="lg" showHairline={false} />
          <AboutCtaSection />
        </main>
      </AboutPageShell>
    </AboutPageMotion>
  );
}
