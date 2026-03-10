import * as React from "react";

import { FeatureModuleCard } from "@/components/elynthis/feature-module-card";

export function CoreModulesSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Módulos principales
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Herramientas diseñadas para apoyar la práctica clínica y la gestión
            diaria.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureModuleCard
            title="Pacientes y agenda"
            description="Gestiona citas, pacientes y consultas desde una interfaz clara y organizada."
            bullets={["agenda de citas", "seguimiento de pacientes", "visualización rápida del día"]}
          />
          <FeatureModuleCard
            title="Historia clínica y documentación"
            description="Accede y organiza la información clínica en un solo entorno, con foco en claridad y continuidad."
            bullets={["registros clínicos", "documentación ordenada", "acceso rápido a información relevante"]}
          />
          <FeatureModuleCard
            title="Seguimiento terapéutico"
            description="Da continuidad a los procesos con notas, evolución y organización del seguimiento."
            bullets={["evolución de procesos", "notas clínicas", "continuidad del cuidado"]}
          />
          <FeatureModuleCard
            title="Configuración profesional"
            description="Adapta la plataforma a tu flujo de trabajo profesional y mantén una práctica más ordenada."
            bullets={["personalización básica", "estructura profesional", "entorno claro y funcional"]}
          />
          <FeatureModuleCard
            title="Próximamente"
            description="Elynthis está preparado para crecer con nuevas funcionalidades orientadas a necesidades clínicas y administrativas."
            bullets={["RIPS", "reportes", "herramientas adicionales de gestión"]}
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
