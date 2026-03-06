import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { FeatureCards } from "@/components/feature-cards";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Elynthis",
  description:
    "Elynthis: el producto principal dentro del ecosistema de Conciencia Sánate. Una experiencia wellness-tech premium.",
};

export default function ElynthisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Elynthis"
          title="Un acompañamiento wellness-tech, limpio y humano"
          description="Elynthis es el núcleo del ecosistema: una experiencia diseñada para ayudarte a crear hábitos de bienestar emocional con estructura suave y seguimiento discreto."
        />

        <div className="grid gap-6 rounded-[40px] border border-border/60 bg-card p-10 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-2">
            <div className="text-sm font-medium">Para quién es</div>
            <p className="text-sm leading-7 text-muted-foreground">
              Para personas que quieren avanzar con claridad: sin saturación, sin
              culpa y sin interfaces densas. Ideal si buscas un sistema simple y
              sereno para sostener tu bienestar.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-2xl" asChild>
              <Link href="/registro">Solicitar acceso</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl"
              asChild
            >
              <Link href="/dashboard">Ver dashboard</Link>
            </Button>
          </div>
        </div>

        <FeatureCards
          items={[
            {
              title: "Beneficios",
              description:
                "Más calma, mejor claridad emocional y hábitos sostenibles en el tiempo.",
            },
            {
              title: "Cómo funciona",
              description:
                "Módulos simples, recursos guiados y seguimiento discreto en tu dashboard.",
            },
            {
              title: "Experiencia",
              description:
                "UI premium, suave y minimalista: diseñada para sentirse segura.",
            },
          ]}
        />
      </div>
    </div>
  );
}
