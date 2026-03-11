import * as React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ProductCTASection() {
  return (
    <section className="bg-background-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-12 shadow-sm sm:px-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Empieza a organizar tu práctica con más claridad
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Elynthis ofrece una estructura digital más clara para acompañar la
              práctica clínica, mejorar la organización y facilitar el
              seguimiento de cada proceso.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/registro">Crear cuenta profesional</Link>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Parte del ecosistema digital de salud Conciencia Sánate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
