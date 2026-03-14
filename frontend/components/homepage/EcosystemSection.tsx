import * as React from "react";

import { EcosystemCard } from "@/components/homepage/EcosystemCard";

export function EcosystemSection({
  icons,
}: {
  icons: {
    education: React.ReactNode;
    tools: React.ReactNode;
    clinical: React.ReactNode;
  };
}) {
  return (
    <section className="flex justify-center pb-24">
      <div className="w-full max-w-[1200px] px-5">
        <h2 className="mb-10 text-[40px] font-semibold text-foreground">
          Un ecosistema digital de salud
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <EcosystemCard
            icon={icons.education}
            title="Educación"
            text="Artículos basados en evidencia para comprender salud mental."
          />

          <EcosystemCard
            icon={icons.tools}
            title="Herramientas"
            text="Prácticas guiadas para regulación emocional y hábitos."
          />

          <EcosystemCard
            icon={icons.clinical}
            title="Tecnología clínica"
            text="Elynthis conecta profesionales con seguimiento clínico."
          />
        </div>
      </div>
    </section>
  );
}
