import * as React from "react";

import { PrincipleCard } from "@/components/about/principle-card";
import { SectionHeader } from "@/components/about/section-header";

export function AboutPrinciplesGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Principios del proyecto" />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <PrincipleCard
            title="Rigor científico"
            description="Los contenidos se inspiran en investigación científica en salud y bienestar."
          />
          <PrincipleCard
            title="Claridad"
            description="El conocimiento debe ser accesible y comprensible."
          />
          <PrincipleCard
            title="Humanidad"
            description="La salud implica comprender la experiencia humana con respeto y cuidado."
          />
          <PrincipleCard
            title="Sostenibilidad"
            description="El bienestar se construye a través de pequeños cambios sostenidos en el tiempo."
          />
        </div>
      </div>
    </section>
  );
}
