/**
 * UI primitives — página Sobre.
 * Re-exporta layout editorial + componentes de composición.
 */

export {
  AboutPageShell,
  AboutSection,
  AboutContainer,
  AboutStaggerGrid,
  AboutEditorialHeader,
  AboutReveal,
  AboutPullQuote,
  AboutOrganicDivider,
  AboutAmbientGlow,
  AboutEditorialGrid,
} from "@/components/about/about-editorial-layout";

export {
  AboutSectionAtmosphere,
  AboutDecorativeLines,
  type AboutAtmospherePreset,
} from "@/components/about/about-section-atmosphere";

export { AboutSectionHairline } from "@/components/about/ui/section-hairline";
export { AboutEditorialQuote } from "@/components/about/ui/editorial-quote";
export { AboutSectionFrame, type AboutSectionFrameProps } from "@/components/about/ui/section-frame";

export { AboutEditorialPause } from "@/components/about/about-editorial-pause";
export { AboutSectionPlaceholder } from "@/components/about/about-section-placeholder";
