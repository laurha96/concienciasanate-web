import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Prácticas guiadas",
  description:
    "Prácticas breves y guiadas para apoyar regulación emocional y bienestar cotidiano.",
};

export default function PracticasGuiadasToolPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Herramienta"
            title="Prácticas guiadas"
            description="Prácticas breves, claras y guiadas para entrenar atención, calma y regulación emocional de forma sostenible."
          />

          <div className="mt-10 grid gap-4">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Qué encontrarás aquí
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Este espacio reúne prácticas simples (de 3 a 10 minutos) con
                  instrucciones claras. El foco es entrenar habilidades, no
                  “sentirte bien” de forma inmediata.
                </p>
                <p>
                  En una siguiente iteración, estas prácticas podrán integrarse
                  con seguimiento y hábitos dentro de la plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Ejemplos de prácticas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <div>• Pausa de 90 segundos: notar, nombrar, elegir.</div>
                <div>• Atención a la respiración: 3 minutos, sin forzar.</div>
                <div>• Escaneo corporal breve: tensión, soltura, postura.</div>
                <div>• Cierre del día: 3 líneas de claridad.</div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button variant="secondary" className="rounded-2xl" asChild>
                <Link href="/herramientas">Volver a herramientas</Link>
              </Button>
              <Button className="rounded-2xl" asChild>
                <Link href="/registro">Crear cuenta</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
