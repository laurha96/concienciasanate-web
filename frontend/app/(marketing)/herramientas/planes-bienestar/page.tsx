import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Planes de bienestar",
  description:
    "Estructura simple para diseñar hábitos pequeños, sostenibles y medibles.",
};

export default function PlanesBienestarToolPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Herramienta"
            title="Planes de bienestar"
            description="Diseña hábitos pequeños y sostenibles con un plan claro: intención, contexto, mínimo viable y seguimiento." 
          />

          <div className="mt-10 grid gap-4">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Cómo funciona
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Un plan de bienestar no es un cambio radical: es una secuencia
                  de microdecisiones repetibles. La consistencia suele depender
                  más del diseño del contexto que de la motivación.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Estructura recomendada
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <div>1) Intención: ¿qué quieres cuidar?</div>
                <div>2) Mínimo viable: una versión muy pequeña del hábito.</div>
                <div>3) Señal: ¿cuándo y dónde lo harás?</div>
                <div>4) Recompensa: ¿qué lo hace sostenible?</div>
                <div>5) Revisión semanal: ajustar, no juzgar.</div>
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
