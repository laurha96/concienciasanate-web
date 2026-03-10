import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type AudienceCardProps = {
  title: string;
  description: string;
  className?: string;
};

function AudienceCard({ title, description, className }: AudienceCardProps) {
  return (
    <Card className={cn("h-full gap-3 rounded-2xl border-border/60 py-5 shadow-sm", className)}>
      <CardHeader className="gap-1">
        <CardTitle className="text-sm font-semibold tracking-tight sm:text-base">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
        {description}
      </CardContent>
    </Card>
  );
}

export function AudienceGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Pensado para profesionales que necesitan claridad en su práctica
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <AudienceCard
            title="Psicólogos clínicos"
            description="Organiza sesiones, historias clínicas y seguimiento en un solo entorno."
          />
          <AudienceCard
            title="Terapeutas"
            description="Mantén continuidad del proceso y documentación clara sin fricción operativa."
          />
          <AudienceCard
            title="Profesionales independientes de la salud"
            description="Centraliza la gestión de pacientes, consultas y documentación sin procesos complejos."
          />
          <AudienceCard
            title="Equipos pequeños de atención"
            description="Coordina agenda y seguimiento con una base clínica compartida y ordenada."
          />
        </div>
      </div>
    </section>
  );
}
