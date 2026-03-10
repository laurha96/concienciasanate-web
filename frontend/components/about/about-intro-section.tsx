import * as React from "react";

import { SectionHeader } from "@/components/about/section-header";

export function AboutIntroSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div className="max-w-4xl">
            <SectionHeader title="Qué es Conciencia Sánate" />
            <div className="mt-6 max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Conciencia Sánate es una plataforma digital orientada al
                desarrollo del bienestar humano.
              </p>
              <p>
                Integra conocimientos provenientes de la psicología, la medicina
                preventiva, la neurociencia y la ciencia del comportamiento para
                acercar el conocimiento científico sobre salud a la vida
                cotidiana.
              </p>
              <p>
                El objetivo es ofrecer recursos claros, accesibles y basados en
                evidencia que ayuden a las personas a comprender mejor su
                bienestar y desarrollar hábitos de cuidado sostenibles.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-border/60 bg-background-soft p-6 text-sm leading-7 text-muted-foreground shadow-sm">
            <p className="text-pretty">
              Recursos claros, accesibles y basados en evidencia.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
