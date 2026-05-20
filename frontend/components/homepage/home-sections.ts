import type { ComponentType } from "react";

import { ElynthisPreviewSection } from "@/components/homepage/ElynthisPreviewSection";
import { FinalCTASection } from "@/components/homepage/FinalCTASection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { HomeDifferentialSection } from "@/components/homepage/HomeDifferentialSection";
import { HomeIntroSection } from "@/components/homepage/HomeIntroSection";
import { TabsSection } from "@/components/homepage/TabsSection";
import { HomeTrustStrip } from "@/components/homepage/HomeTrustStrip";

export type HomeSectionEntry = {
  id: string;
  Component: ComponentType;
};

/**
 * Home — narrativa de conversión (6 bloques).
 * Hero → Qué es → Diferencial → Elynthis → Recursos (tabs) → Ética (strip) → CTA
 */
export const HOME_SECTIONS: HomeSectionEntry[] = [
  { id: "hero", Component: HeroSection },
  { id: "ecosistema", Component: HomeIntroSection },
  { id: "ciencia", Component: HomeDifferentialSection },
  { id: "elynthis", Component: ElynthisPreviewSection },
  { id: "aprende", Component: TabsSection },
  { id: "etica", Component: HomeTrustStrip },
  { id: "empezar", Component: FinalCTASection },
];
