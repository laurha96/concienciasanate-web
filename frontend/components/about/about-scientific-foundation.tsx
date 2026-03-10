import * as React from "react";

import { SectionHeader } from "@/components/about/section-header";

const SCIENCE_AREAS = [
  "psicología basada en evidencia",
  "regulación emocional",
  "psicología positiva",
  "ciencia del comportamiento",
  "intervenciones mente-cuerpo",
  "medicina preventiva",
] as const;

export function AboutScientificFoundation() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-4xl">
            <SectionHeader title="Basado en investigación científica" />
            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
              Los contenidos y herramientas de Conciencia Sánate se inspiran en
              áreas de investigación como:
            </p>
          </div>

          <ul className="grid gap-3 rounded-2xl border border-border/60 bg-background-soft p-6 text-sm text-muted-foreground shadow-sm sm:grid-cols-2">
            {SCIENCE_AREAS.map((area) => (
              <li key={area} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-soft"
                />
                <span className="leading-6">{area}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
          Nuestro objetivo es traducir el conocimiento científico en herramientas
          prácticas para la vida cotidiana.
        </p>
      </div>
    </section>
  );
}
