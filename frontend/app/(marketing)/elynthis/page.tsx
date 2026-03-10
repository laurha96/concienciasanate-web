import type { Metadata } from "next";

import {
  AudienceGrid,
  CoreModulesSection,
  EcosystemIntegrationSection,
  ElynthisHero,
  ProblemSolutionBlocks,
  ProductCTASection,
  ValueStrip,
  WorkflowSteps,
} from "@/components/elynthis";

export const metadata: Metadata = {
  title: "Elynthis",
  description:
    "Elynthis es el software clínico de Conciencia Sánate para profesionales: pacientes, agenda, historia clínica, seguimiento y documentación con orden, claridad y cuidado.",
};

export default function ElynthisPage() {
  return (
    <div>
      <ElynthisHero />
      <ValueStrip
        items={[
          "Organización clínica en un solo lugar",
          "Menos fricción administrativa",
          "Seguimiento claro de cada proceso",
          "Diseñado para profesionales de la salud",
        ]}
      />
      <AudienceGrid />
      <ProblemSolutionBlocks />
      <CoreModulesSection />
      <WorkflowSteps />
      <EcosystemIntegrationSection />
      <ProductCTASection />
    </div>
  );
}
