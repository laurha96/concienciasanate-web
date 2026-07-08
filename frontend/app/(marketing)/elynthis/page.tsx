import type { Metadata } from "next";

import Link from "next/link";

import { Hero } from "@/components/healthtech/hero";
import { ElynthisWorkflow } from "@/components/healthtech/elynthis-workflow";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Elynthis",
  description:
    "Elynthis es el software clínico de Conciencia Sánate para profesionales: pacientes, agenda, historia clínica, seguimiento y documentación con orden, claridad y cuidado.",
};

export default function ElynthisPage() {
  return (
    <div>
      <Hero
        title="Elynthis — software clínico"
        subtitle="Un producto clínico para organizar pacientes, agenda, registros y monitoreo. Diseñado con claridad, trazabilidad y un flujo de trabajo suave."
        primaryCta={{ label: "Solicitar demo", href: "/contacto" }}
        secondaryCta={{ label: "Ver módulos", href: "#modulos" }}
      />

      {/* Module grid */}
      <section id="modulos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Módulos"
            description="Bloques clínicos esenciales para un flujo organizado."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Gestión de pacientes",
                description:
                  "Perfil, historial y seguimiento por paciente, con estructura clara.",
              },
              {
                title: "Citas",
                description:
                  "Agenda simple, consistencia y visibilidad del calendario clínico.",
              },
              {
                title: "Registros clínicos",
                description:
                  "Notas y documentación con jerarquía, sin fricción innecesaria.",
              },
              {
                title: "Monitoreo",
                description:
                  "Señales y seguimiento para continuidad y trazabilidad.",
              },
            ].map((m) => (
              <Card key={m.title} className="rounded-3xl border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base tracking-tight">{m.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  {m.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical workflow visualization */}
      <section className="bg-background-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Flujo clínico"
            description="Una visualización sutil del recorrido: ingreso → cita → registro → monitoreo."
          />
          <div className="mt-10 max-w-3xl">
            <ElynthisWorkflow />
          </div>
        </div>
      </section>

      {/* Audience segmentation */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Para quién es"
            description="Segmentos clínicos con necesidades similares, sin “dashboard pesado”."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Psicólogos",
                description:
                  "Estructura para notas, agenda y seguimiento con lenguaje clínico claro.",
              },
              {
                title: "Profesionales de salud",
                description:
                  "Organización de procesos y trazabilidad sin complejidad innecesaria.",
              },
              {
                title: "Clínicas",
                description:
                  "Operación ordenada para equipos: visibilidad y continuidad del cuidado.",
              },
            ].map((a) => (
              <Card key={a.title} className="rounded-3xl border-border/60 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base tracking-tight">{a.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  {a.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" asChild>
              <Link href="/contacto">Solicitar demo</Link>
            </Button>
            <Button variant="secondary" className="rounded-2xl" asChild>
              <Link href="/sobre">Ver fundamentos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
