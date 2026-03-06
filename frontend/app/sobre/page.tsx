import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Historia, propósito y enfoque profesional de Conciencia Sánate: bienestar emocional con psicología basada en evidencia.",
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Sobre la marca"
        title="Una visión humana, profesional y serena"
        description="Conciencia Sánate nace para acercar el bienestar emocional a la vida real: con herramientas simples, lenguaje respetuoso y un diseño que no abruma."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Historia y propósito
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Construimos un espacio digital que invita a pausar, observar y elegir
            con mayor claridad. Menos exigencia. Más presencia.
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Bienestar emocional
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Un enfoque integrador: hábitos, psicoeducación y prácticas breves para
            sostener tu salud mental sin saturación.
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Metodología
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Claridad + suavidad + evidencia. Priorizamos lo aplicable, lo
            sostenible y lo humano.
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-sm font-medium">Filosofía</div>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          La salud mental no debería sentirse como una meta agresiva. Aquí
          trabajamos desde el ritmo humano: pasos pequeños, coherentes, y una
          estética que acompaña (en lugar de presionar).
        </p>
      </div>
    </div>
  );
}
