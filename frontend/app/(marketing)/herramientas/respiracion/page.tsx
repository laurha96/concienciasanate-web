import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Respiración consciente",
  description:
    "Microprácticas basadas en evidencia para apoyar regulación del sistema nervioso.",
};

export default function RespiracionToolPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Herramienta"
            title="Respiración consciente"
            description="Microprácticas para apoyar regulación fisiológica y recuperar claridad cuando hay activación por estrés." 
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
                  La respiración es una vía directa para influir en el sistema
                  nervioso autónomo. Al entrenar exhalaciones más largas y un
                  ritmo suave, es común reducir la activación fisiológica.
                </p>
                <p>
                  Esta herramienta está diseñada como práctica breve: simple,
                  repetible y sin necesidad de equipos.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Una práctica simple (3–5 minutos)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <div>1) Postura cómoda, hombros sueltos.</div>
                <div>2) Inhala 4 segundos.</div>
                <div>3) Exhala 6 segundos (suave, sin forzar).</div>
                <div>4) Repite 8–12 ciclos.</div>
                <div className="pt-2 text-xs">
                  Si sientes mareo o incomodidad, vuelve a tu respiración
                  natural.
                </div>
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
