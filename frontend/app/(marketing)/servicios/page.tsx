import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de acompañamiento y bienestar emocional de Conciencia Sánate.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Servicios"
        title="Acompañamiento con calidez y claridad"
        description="Un enfoque profesional y humano, diseñado para sostener procesos reales sin saturación."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Psicoeducación práctica
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Recursos claros para entender lo que sientes, identificar patrones y
            recuperar agencia, sin lenguaje técnico innecesario.
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Hábitos de autocuidado
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Microprácticas de respiración, foco, regulación y descanso. Pequeños
            pasos, sostenibles.
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Plan de proceso
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Un camino guiado con objetivos suaves, seguimiento y estructura
            liviana para avanzar a tu ritmo.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-sm font-medium">¿Por dónde empiezo?</div>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          Si no estás segura/o, puedes comenzar por Elynthis y luego elegir un
          plan. Si prefieres orientación, escríbenos y te ayudamos a decidir con
          calma.
        </p>
      </div>
    </div>
  );
}
