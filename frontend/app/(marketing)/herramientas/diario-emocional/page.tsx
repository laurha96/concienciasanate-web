import type { Metadata } from "next";
import Link from "next/link";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Diario emocional",
  description:
    "Registro breve para identificar emociones, pensamientos y necesidades con claridad.",
};

export default function DiarioEmocionalToolPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Herramienta"
            title="Diario emocional"
            description="Un formato breve para observar lo que sientes y piensas, sin juicio, con lenguaje claro." 
          />

          <div className="mt-10 grid gap-4">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Qué hace
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Registrar emociones y pensamientos ayuda a distinguir hechos,
                  interpretaciones y necesidades. Con el tiempo, es más fácil
                  identificar patrones y responder de forma más adaptativa.
                </p>
                <p>
                  El objetivo no es “sentir perfecto”, sino entender mejor lo
                  que está pasando.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Un formato de 5 preguntas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
                <div>1) ¿Qué pasó (hechos) en una frase?</div>
                <div>2) ¿Qué emoción principal noto?</div>
                <div>3) ¿Qué pensamiento aparece?</div>
                <div>4) ¿Qué necesito o valoro aquí?</div>
                <div>5) ¿Qué acción pequeña puedo hacer hoy?</div>
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
