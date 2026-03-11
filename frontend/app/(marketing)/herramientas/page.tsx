import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/section-heading";
import { ToolExplorer, type Tool, type ToolCategoryQueryKey } from "@/components/healthtech/tool-explorer";

export const metadata: Metadata = {
  title: "Herramientas",
  description:
    "Herramientas prácticas basadas en ciencia para regulación emocional y bienestar cotidiano.",
};

function parseCategoryKey(value: unknown): ToolCategoryQueryKey | null {
  const raw = typeof value === "string" ? value : null;
  if (!raw) return null;
  if (raw === "Breathing" || raw === "Journaling" || raw === "Plans" || raw === "Guided") return raw;
  return null;
}

export default async function HerramientasPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolved = searchParams ? await searchParams : undefined;
  const tools: Tool[] = [
    {
      id: "t1",
      category: "Breathing",
      name: "Respiración consciente",
      description:
        "Microprácticas para regular el sistema nervioso con un ritmo simple.",
    },
    {
      id: "t2",
      category: "Emotional journaling",
      name: "Diario emocional",
      description:
        "Registro breve y guiado para clarificar emoción, necesidad y acción mínima.",
    },
    {
      id: "t3",
      category: "Wellbeing plans",
      name: "Planes de bienestar",
      description:
        "Checklist de micro-hábitos para sostener consistencia sin saturación.",
    },
    {
      id: "t4",
      category: "Guided practices",
      name: "Prácticas guiadas",
      description:
        "Temporizador simple para una práctica corta de atención suave.",
    },
  ];

  return (
    <div className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Herramientas"
          title="Herramientas para el bienestar"
          description="Cuatro categorías, uso directo en la misma página: respiración, journaling emocional, planes y prácticas guiadas."
        />

        <div className="mt-10">
          <ToolExplorer tools={tools} initialCategoryKey={parseCategoryKey(resolved?.categoria)} />
        </div>
      </div>
    </div>
  );
}
