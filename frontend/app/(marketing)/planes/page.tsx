import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes para acompañarte en bienestar emocional: claridad, contención y progreso sostenible.",
};

export default function PlanesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Planes"
        title="Elige un ritmo que se sienta humano"
        description="Opciones simples para sostener tu proceso: empezar suave, profundizar o tener estructura continua."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Inicio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
            <div>
              Ideal para explorar y crear tu base de autocuidado con recursos
              esenciales.
            </div>
            <Button asChild className="w-full rounded-2xl">
              <Link href="/registro">Crear cuenta</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Proceso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
            <div>
              Un camino guiado con estructura liviana y seguimiento para avanzar
              con claridad.
            </div>
            <Button asChild className="w-full rounded-2xl" variant="secondary">
              <Link href="/elynthis">Ver Elynthis</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Acompañamiento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
            <div>
              Para quienes buscan un soporte más cercano. Coordinamos contigo la
              mejor opción.
            </div>
            <Button asChild className="w-full rounded-2xl" variant="secondary">
              <Link href="/contactenos">Contáctenos</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-sm font-medium">Transparencia</div>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          Los detalles y precios se publicarán aquí cuando estén listos. Por
          ahora, puedes explorar la plataforma y escribirnos si deseas una guía
          personalizada.
        </p>
      </div>
    </div>
  );
}
