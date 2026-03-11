import type { Metadata } from "next";

import { Hero } from "@/components/healthtech/hero";
import { EcosystemChart } from "@/components/healthtech/ecosystem-chart";
import { FeatureGrid } from "@/components/healthtech/feature-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre Conciencia Sánate: plataforma digital de salud y bienestar basada en evidencia, con enfoque integral y herramientas digitales.",
};

export default function SobrePage() {
  return (
    <div>
      <Hero
        title="Sobre Conciencia Sánate"
        subtitle="Una plataforma de salud digital que prioriza calma, claridad y evidencia: educación, herramientas de bienestar y un producto clínico (Elynthis) dentro de un ecosistema coherente."
        primaryCta={{ label: "Explorar herramientas", href: "/herramientas" }}
        secondaryCta={{ label: "Ver Elynthis", href: "/elynthis" }}
      />

      {/* Mission */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Misión"
            description="Hacer accesibles prácticas y tecnología clínica que ayuden a comprender, regular y sostener bienestar con criterios profesionales."
          />
          <div className="mt-10">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Qué defendemos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Intervenciones pequeñas, medibles y sostenibles; lenguaje clínico accesible; y una experiencia digital minimalista que reduce fricción y aumenta adherencia.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-background-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Enfoque"
            description="Una estructura simple para pasar de comprensión a práctica cotidiana."
          />
          <div className="mt-10">
            <FeatureGrid
              items={[
                {
                  title: "Claridad",
                  description: "Categorías, filtros y lenguaje preciso para entender lo esencial.",
                },
                {
                  title: "Práctica",
                  description: "Herramientas breves que se usan en el momento, sin ruido.",
                },
                {
                  title: "Seguimiento",
                  description: "Rutinas pequeñas con señales de progreso y consistencia.",
                },
                {
                  title: "Clínico",
                  description: "Elynthis organiza el flujo de trabajo profesional de manera limpia.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Scientific foundation */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Base científica"
            description="Marco interdisciplinario aplicado a decisiones concretas."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Fundamentos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>• psicología basada en evidencia</div>
                <div>• regulación emocional</div>
                <div>• ciencia del comportamiento</div>
                <div>• prácticas informadas por neurociencia</div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Criterios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>• minimalismo funcional</div>
                <div>• claridad y jerarquía</div>
                <div>• prácticas aplicables</div>
                <div>• seguimiento sin “dashboard pesado”</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem explanation with interactive diagram */}
      <section className="bg-background-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Ecosistema"
            description="Cómo se conectan educación, bienestar, herramientas y Elynthis."
          />
          <div className="mt-10">
            <EcosystemChart
              nodes={[
                {
                  key: "Psychology",
                  label: "Psicología",
                  description: "Comprensión clínica y toma de decisiones.",
                  weight: 26,
                },
                {
                  key: "Wellbeing",
                  label: "Bienestar",
                  description: "Hábitos, autocuidado y prevención.",
                  weight: 24,
                },
                {
                  key: "Tools",
                  label: "Herramientas",
                  description: "Prácticas activables en el momento.",
                  weight: 32,
                },
                {
                  key: "Elynthis",
                  label: "Elynthis",
                  description: "Software clínico para flujo y seguimiento.",
                  weight: 18,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Principios"
            description="Guías de diseño y producto para construir confianza."
          />
          <div className="mt-10">
            <FeatureGrid
              items={[
                {
                  title: "Calma",
                  description: "Interacciones suaves, sin saturación visual.",
                },
                {
                  title: "Profesional",
                  description: "Lenguaje clínico claro, sin hype.",
                },
                {
                  title: "Basado en evidencia",
                  description: "Estructuras replicables y categorías consistentes.",
                },
                {
                  title: "Mínimo",
                  description: "Evitar paredes de texto y fricción innecesaria.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
