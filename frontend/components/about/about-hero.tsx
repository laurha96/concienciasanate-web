import * as React from "react";

import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background-soft px-6 py-12 shadow-sm sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              Sobre
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Conciencia Sánate
            </h1>
            <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Un proyecto dedicado al desarrollo del bienestar humano a través
              del conocimiento científico, el cuidado de la salud y herramientas
              digitales.
            </p>

            <div className="mt-6">
              <Badge
                variant="outline"
                className="border-border/70 bg-background/60 text-muted-foreground"
              >
                Salud · bienestar · ciencia
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
