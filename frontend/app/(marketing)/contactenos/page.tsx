import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contáctenos",
  description:
    "Contacto de Conciencia Sánate. Escríbenos y te orientamos con calma.",
};

export default function ContactenosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contacto"
        title="Contáctenos"
        description="Cuéntanos qué necesitas y te respondemos con claridad y cuidado."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Canal principal
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Por ahora, el contacto se gestiona por correo.
            <div className="mt-3 rounded-2xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground">
              laurarojas@concienciasanate.org
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Horarios de respuesta
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-6 text-muted-foreground">
            Respondemos con prioridad a mensajes de orientación y soporte.
            <div className="mt-3 rounded-2xl bg-muted p-4">
              <div className="text-sm font-medium text-foreground">
                24–72 horas hábiles
              </div>
              <div className="mt-1 text-xs">
                Te escribimos apenas podamos, sin automatismos invasivos.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-sm font-medium">Importante</div>
        <div className="mt-2 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            Si estás en una situación de emergencia, riesgo inminente o peligro
            para ti o para otra persona, busca ayuda inmediata.
          </p>

          <div className="space-y-2">
            <div className="text-sm font-medium text-foreground">Colombia</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <span className="font-medium text-foreground">123</span>: línea
                de emergencias (urgencias, policía, ambulancia).
              </li>
              <li>
                <span className="font-medium text-foreground">119</span>:
                bomberos.
              </li>
              <li>
                <span className="font-medium text-foreground">132</span>: Cruz
                Roja.
              </li>
              <li>
                <span className="font-medium text-foreground">144</span>:
                Defensa Civil.
              </li>
              <li>
                <span className="font-medium text-foreground">Línea 106</span>
                (Bogotá): apoyo emocional y orientación.
              </li>
              <li>
                <span className="font-medium text-foreground">192</span>:
                orientación en salud (opciones pueden variar según el servicio).
              </li>
            </ul>
            <p className="text-xs leading-5 text-muted-foreground">
              Los números pueden variar por ciudad u operador. Si no te
              contestan, intenta nuevamente o acude al servicio de urgencias más
              cercano.
            </p>
          </div>

          <p>
            Si estás fuera de Colombia, usa la línea de emergencias o crisis de
            tu país.
          </p>
        </div>
      </div>
    </div>
  );
}
