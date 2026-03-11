import * as React from "react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductMockupCard } from "@/components/elynthis/product-mockup-card";

const FUNCTIONAL_BADGES = [
  "Pacientes",
  "Agenda",
  "Historia clínica",
  "Seguimiento",
  "Documentación",
] as const;

export function ElynthisHero() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              Elynthis
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Software clínico para una práctica más clara, organizada y humana
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Elynthis reúne agenda, pacientes, historias clínicas, consultas y
              seguimiento en una experiencia digital diseñada para profesionales
              de la salud.
            </p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              La evolución de HCConsultas, ahora con una identidad más clara
              dentro del ecosistema Conciencia Sánate.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contacto">Solicitar demo</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/registro">Crear cuenta profesional</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {FUNCTIONAL_BADGES.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="border-border/70 bg-background-soft text-muted-foreground"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <ProductMockupCard className="max-w-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
