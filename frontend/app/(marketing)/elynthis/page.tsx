import type { Metadata } from "next";
import Link from "next/link";

import { FeatureCards } from "@/components/sections/feature-cards";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Elynthis",
  description:
    "Elynthis es el software clínico de Conciencia Sánate para profesionales: pacientes, agenda, consultas, seguimiento y documentación con orden y cuidado.",
};

export default function ElynthisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Elynthis"
          title="Software clínico para una práctica clara y humana"
          description="Elynthis es la plataforma tecnológica del ecosistema Conciencia Sánate para profesionales de la salud. Unifica pacientes, historias clínicas, agenda, consultas, seguimiento terapéutico y documentación clínica con orden, claridad y cuidado."
        />

        <div className="grid gap-6 rounded-[40px] border border-border/60 bg-card p-10 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-2">
            <div className="text-sm font-medium">Para quién es</div>
            <p className="text-sm leading-7 text-muted-foreground">
              Para psicólogos, terapeutas y profesionales de la salud que quieren
              trabajar con una base clínica ordenada, sin fricción y con una
              experiencia moderna. Diseñado para sostener el cuidado con
              estructura suave: lo importante a mano, lo administrativo bajo
              control.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-2xl" asChild>
              <Link href="/contactenos">Solicitar demo</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl"
              asChild
            >
              <Link href="/registro">Crear cuenta profesional</Link>
            </Button>
          </div>
        </div>

        <FeatureCards
          items={[
            {
              title: "Historia clínica y documentación",
              description:
                "Registra y consulta información clínica de forma simple y consistente, con documentación lista cuando la necesitas.",
            },
            {
              title: "Agenda, pacientes y consultas",
              description:
                "Organiza tu día a día en un solo lugar: pacientes, agenda y consultas con una experiencia clara y rápida.",
            },
            {
              title: "Seguimiento terapéutico",
              description:
                "Acompaña los procesos con continuidad: notas, seguimiento y orden clínico con un enfoque humano. Próximamente: RIPS y más herramientas clínicas.",
            },
          ]}
        />
      </div>
    </div>
  );
}
