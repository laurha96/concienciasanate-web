import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/section-heading";
import { ToolCard } from "@/components/cards/tool-card";

export const metadata: Metadata = {
  title: "Herramientas",
  description:
    "Herramientas prácticas basadas en ciencia para regulación emocional y bienestar cotidiano.",
};

export default function HerramientasPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Herramientas"
          title="Herramientas para el bienestar"
          description="Prácticas claras y aplicables: pequeñas acciones que ayudan a regular el sistema nervioso, comprender emociones y sostener hábitos." 
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <ToolCard
            title="Respiración consciente"
            description="Microprácticas para regular el sistema nervioso y reducir activación fisiológica."
            href="/herramientas/respiracion"
          />
          <ToolCard
            title="Diario emocional"
            description="Un registro breve para identificar emociones, pensamientos y patrones con mayor claridad."
            href="/herramientas/diario-emocional"
          />
          <ToolCard
            title="Planes de bienestar"
            description="Diseña hábitos pequeños y sostenibles con una estructura simple, flexible y realista."
            href="/herramientas/planes-bienestar"
          />
        </div>
      </div>
    </div>
  );
}
