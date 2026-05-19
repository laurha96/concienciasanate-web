import type { ComponentType } from "react";

import { EcosystemSection } from "@/components/homepage/EcosystemSection";
import { EducationHubSection } from "@/components/homepage/EducationHubSection";
import { ElynthisPreviewSection } from "@/components/homepage/ElynthisPreviewSection";
import { EvidenceSection } from "@/components/homepage/EvidenceSection";
import { FinalCTASection } from "@/components/homepage/FinalCTASection";
import { HeroSection } from "@/components/homepage/HeroSection";
import { MethodSection } from "@/components/homepage/MethodSection";
import { ProfessionalIdentitySection } from "@/components/homepage/ProfessionalIdentitySection";
import { ToolsPreviewSection } from "@/components/homepage/ToolsPreviewSection";
import { TrustAndEthicsSection } from "@/components/homepage/TrustAndEthicsSection";

export type HomeSectionEntry = {
  id: string;
  Component: ComponentType;
};

/**
 * Orden narrativo de la Home (producción).
 * 1. Qué es → Hero + Ecosistema
 * 2. Cómo funciona → Método
 * 3. Tecnología clínica → Elynthis
 * 4. Evidencia → Ciencia aplicada
 * 5. Educación → Aprende
 * 6. Herramientas → Práctica
 * 7. Diferencial → Identidad profesional
 * 8. Confianza → Ética
 * 9. Cierre → CTA final
 */
export const HOME_SECTIONS: HomeSectionEntry[] = [
  { id: "hero", Component: HeroSection },
  { id: "ecosistema", Component: EcosystemSection },
  { id: "metodo", Component: MethodSection },
  { id: "elynthis", Component: ElynthisPreviewSection },
  { id: "evidencia", Component: EvidenceSection },
  { id: "aprende", Component: EducationHubSection },
  { id: "herramientas-preview", Component: ToolsPreviewSection },
  { id: "identidad", Component: ProfessionalIdentitySection },
  { id: "etica", Component: TrustAndEthicsSection },
  { id: "empezar", Component: FinalCTASection },
];
