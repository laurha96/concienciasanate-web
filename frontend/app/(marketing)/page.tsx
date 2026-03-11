import Link from "next/link";

import { Hero } from "@/components/healthtech/hero";
import { EcosystemChart } from "@/components/healthtech/ecosystem-chart";
import { FeatureGrid } from "@/components/healthtech/feature-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <Hero
        title="Salud digital basada en evidencia"
        subtitle="Conciencia Sánate integra psicología, bienestar, ciencia del comportamiento y herramientas digitales para apoyar regulación emocional y hábitos sostenibles—con un producto clínico para profesionales: Elynthis."
        primaryCta={{ label: "Explorar herramientas", href: "/herramientas" }}
        secondaryCta={{ label: "Conocer Elynthis", href: "/elynthis" }}
      />

      {/* Subtle interactive graphic showing the ecosystem */}
      <section className="bg-background-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Un ecosistema claro"
            description="Cuatro capas conectadas para aprender, practicar y dar seguimiento."
          />
          <div className="mt-10">
            <EcosystemChart
              nodes={[
                {
                  key: "Psychology",
                  label: "Psicología",
                  description:
                    "Conceptos clínicos y herramientas de comprensión para tomar decisiones con claridad.",
                  weight: 28,
                },
                {
                  key: "Wellbeing",
                  label: "Bienestar",
                  description:
                    "Hábitos, estilo de vida y autocuidado con criterios medibles y sostenibles.",
                  weight: 24,
                },
                {
                  key: "Tools",
                  label: "Herramientas",
                  description:
                    "Prácticas breves para respiración, journaling emocional, planes y prácticas guiadas.",
                  weight: 30,
                },
                {
                  key: "Elynthis",
                  label: "Elynthis",
                  description:
                    "Software clínico para flujo de trabajo, registro y seguimiento profesional.",
                  weight: 18,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Feature blocks explaining what the platform offers */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Qué ofrece la plataforma"
            description="Bloques modulares, minimalistas y orientados a producto."
          />
          <div className="mt-10">
            <FeatureGrid
              items={[
                {
                  title: "Educación basada en evidencia",
                  description:
                    "Contenido con estructura académica: categorías claras y foco en credibilidad.",
                },
                {
                  title: "Herramientas prácticas",
                  description:
                    "Acciones cortas para regulación emocional y hábitos con interacción en la misma página.",
                },
                {
                  title: "Ecosistema integrado",
                  description:
                    "De entender → practicar → registrar, sin ruido ni promesas rápidas.",
                },
                {
                  title: "Tecnología clínica",
                  description:
                    "Elynthis para gestión clínica y seguimiento con un flujo de trabajo claro.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Interactive cards linking to the tools */}
      <section className="bg-background-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Acceso rápido a herramientas"
            description="Selecciona un tipo de práctica y empieza."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Breathing",
                label: "Respiración",
                description: "Ritmos simples para calmar y enfocar.",
              },
              {
                title: "Journaling",
                label: "Diario emocional",
                description: "Escritura guiada para claridad emocional.",
              },
              {
                title: "Plans",
                label: "Planes de bienestar",
                description: "Micro-hábitos con seguimiento simple.",
              },
              {
                title: "Guided",
                label: "Prácticas guiadas",
                description: "Rutinas breves para el día a día.",
              },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base tracking-tight">{item.label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <Button variant="secondary" className="w-full rounded-2xl" asChild>
                    <Link href={`/herramientas?categoria=${encodeURIComponent(item.title)}`}>
                      Acceder
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preview of the ecosystem structure */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Estructura del ecosistema"
            description="Una ruta simple: aprender, practicar, y tecnología clínica cuando aplica."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Aprender</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Blog con categorías, filtros y lectura rápida.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Practicar</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Herramientas interactivas: respiración, journaling, planes y prácticas guiadas.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Clínico</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Elynthis para profesionales: flujo, registro y seguimiento.
              </CardContent>
            </Card>
          </div>

          <div className="mt-10">
            <Button className="rounded-2xl" asChild>
              <Link href="/herramientas">Explorar herramientas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[40px] border border-border/60 bg-card p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Empieza con un paso pequeño, sostenido y real.
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
                  <Link href="/herramientas">Explorar recursos</Link>
                </Button>
                <Button size="lg" className="rounded-2xl" asChild>
                  <Link href="/registro">Crear cuenta</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
