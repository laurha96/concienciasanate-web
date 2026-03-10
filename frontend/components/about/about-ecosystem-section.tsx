import * as React from "react";

import { EcosystemCard } from "@/components/about/ecosystem-card";
import { SectionHeader } from "@/components/about/section-header";

export function AboutEcosystemSection() {
  return (
    <section className="bg-background-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:items-start">
          <div className="max-w-4xl">
            <SectionHeader
              eyebrow="Ecosistema"
              title="Un ecosistema digital de salud"
            />
            <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Conciencia Sánate forma parte de un ecosistema digital orientado
                al bienestar y la salud integral.
              </p>
              <p>
                Este ecosistema integra educación en salud, herramientas de
                autocuidado y tecnología diseñada para facilitar procesos de
                acompañamiento y atención.
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <EcosystemCard
              title="Elynthis"
              subtitle="Tecnología clínica para profesionales de la salud"
              bullets={[
                "gestión de pacientes",
                "agenda y consultas",
                "documentación clínica",
                "seguimiento de atención",
              ]}
              href="/elynthis"
              linkText="Conocer Elynthis"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
