import type { ToolCategoryQueryKey } from "@/components/healthtech/tool-explorer";

export type ToolsPreviewItem = {
  key: string;
  title: string;
  description: string;
  /** Ruta absoluta opcional (prioridad sobre query). */
  href?: string;
  /** Filtro de categoría en `/herramientas?categoria=` */
  toolCategory?: ToolCategoryQueryKey;
};

export const toolsPreviewCopy = {
  title: "Herramientas para volver a ti",
  subtitle:
    "Ejercicios simples y guiados para acompañar momentos de ansiedad, estrés, bloqueo emocional o necesidad de claridad.",
  disclaimer:
    "Estas herramientas no reemplazan un proceso psicológico o médico cuando se requiere atención profesional.",
  cta: { label: "Explorar herramientas", href: "/herramientas" },
} as const;

/**
 * Datos estáticos temporales. Sustituir por API cuando exista listado público de herramientas.
 */
export const TOOLS_PREVIEW_ITEMS: ToolsPreviewItem[] = [
  {
    key: "breathing",
    title: "Respiración consciente",
    description:
      "Una práctica breve para bajar activación fisiológica y recuperar calma.",
    toolCategory: "Breathing",
  },
  {
    key: "emotional-log",
    title: "Registro emocional",
    description: "Identifica qué sientes, qué lo activó y qué necesitas.",
    toolCategory: "Journaling",
  },
  {
    key: "regulation-pause",
    title: "Pausa de regulación",
    description:
      "Un paso a paso para responder con más claridad en momentos de intensidad.",
    toolCategory: "Guided",
  },
  {
    key: "habits-journal",
    title: "Diario de hábitos",
    description: "Observa patrones y pequeños avances diarios.",
    toolCategory: "Journaling",
  },
  {
    key: "body-anchor",
    title: "Anclaje corporal",
    description:
      "Reconecta con el presente a través de sensaciones corporales seguras.",
    toolCategory: "Guided",
  },
  {
    key: "self-care-plan",
    title: "Plan de autocuidado",
    description: "Organiza acciones concretas para sostener tu bienestar.",
    toolCategory: "Plans",
  },
];
