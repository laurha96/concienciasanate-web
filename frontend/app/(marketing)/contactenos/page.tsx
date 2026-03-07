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
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          Si estás en una situación de emergencia o riesgo, busca ayuda inmediata
          en tu país (línea de crisis / servicios de urgencia).
        </p>
      </div>
    </div>
  );
}
