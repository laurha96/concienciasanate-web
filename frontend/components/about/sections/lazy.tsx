import dynamic from "next/dynamic";

import { AboutSectionPlaceholder } from "@/components/about/ui";

export const AboutDifferentialSectionLazy = dynamic(
  () =>
    import("@/components/about/sections/differential-section").then((mod) => ({
      default: mod.AboutDifferentialSection,
    })),
  {
    loading: () => (
      <AboutSectionPlaceholder
        variant="differential"
        sectionId="por-que-somos-distintos"
        label="Cargando diferencial"
      />
    ),
  }
);

export const AboutEcosystemSectionLazy = dynamic(
  () =>
    import("@/components/about/sections/ecosystem-section").then((mod) => ({
      default: mod.AboutEcosystemSection,
    })),
  {
    loading: () => (
      <AboutSectionPlaceholder
        variant="ecosystem"
        sectionId="ecosistema"
        label="Cargando ecosistema"
      />
    ),
  }
);

export const AboutManifestoSectionLazy = dynamic(
  () =>
    import("@/components/about/sections/manifesto-section").then((mod) => ({
      default: mod.AboutManifestoSection,
    })),
  {
    loading: () => (
      <AboutSectionPlaceholder
        variant="manifesto"
        sectionId="salud-mental"
        label="Cargando manifiesto"
      />
    ),
  }
);
