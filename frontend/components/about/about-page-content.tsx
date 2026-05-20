import { AboutClinicalVisionSection } from "@/components/about/about-clinical-vision-section";
import { AboutDifferentialSection } from "@/components/about/about-differential-section";
import { AboutEcosystemPremium } from "@/components/about/about-ecosystem-premium";
import { AboutEthicsSection } from "@/components/about/about-ethics-section";
import {
  AboutOrganicDivider,
  AboutPageShell,
} from "@/components/about/about-editorial-layout";
import { AboutHeroSection } from "@/components/about/about-hero-section";
import { AboutJsonLd } from "@/components/about/about-json-ld";
import { AboutMentalHealthSection } from "@/components/about/about-mental-health-section";
import { AboutPreFooterCta } from "@/components/about/about-pre-footer-cta";

export function AboutPageContent() {
  return (
    <AboutPageShell>
      <AboutJsonLd />
      <AboutHeroSection />
      <AboutOrganicDivider variant="curve" />
      <AboutClinicalVisionSection />
      <AboutOrganicDivider variant="fade" />
      <AboutDifferentialSection />
      <AboutOrganicDivider variant="wave" flip />
      <AboutEthicsSection />
      <AboutOrganicDivider variant="fade" />
      <AboutEcosystemPremium />
      <AboutOrganicDivider variant="curve" flip />
      <AboutMentalHealthSection />
      <AboutPreFooterCta />
    </AboutPageShell>
  );
}
