import * as React from "react";

import { InfoCard } from "@/components/about/info-card";
import { SectionHeader } from "@/components/about/section-header";

export function AboutApproachSection() {
  return (
    <section className="bg-background-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Nuestro enfoque"
          description="Conciencia Sánate se basa en una visión integral de la salud que considera tres dimensiones fundamentales."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="Mente"
            description="Comprender pensamientos, emociones y patrones psicológicos permite desarrollar mayor claridad mental, regulación emocional y resiliencia."
          />
          <InfoCard
            title="Cuerpo"
            description="El descanso, la respiración, el movimiento y los hábitos físicos influyen directamente en el bienestar emocional y la salud general."
          />
          <InfoCard
            title="Espíritu"
            description="La búsqueda de sentido, valores y propósito personal contribuye a una vida con mayor bienestar y dirección."
          />
        </div>
      </div>
    </section>
  );
}
