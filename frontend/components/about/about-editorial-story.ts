import type { AboutSectionTone } from "@/components/about/about-editorial-tokens";

export type AboutStoryChapter = {
  id: string;
  index: string;
  tone: AboutSectionTone;
  cinematic?: boolean;
};

/** Arco compacto — 6 bloques + hero */
export const aboutStoryChapters = {
  hero: { id: "sobre-hero", index: "00", tone: "cinematic" as const },
  editorial: { id: "vision-clinica", index: "01", tone: "linen" as const },
  pillars: { id: "pilares-clinicos", index: "02", tone: "paper" as const },
  ecosystem: { id: "ecosistema", index: "03", tone: "mist" as const },
  differential: {
    id: "por-que-somos-distintos",
    index: "04",
    tone: "canvas" as const,
  },
  cta: { id: "empezar-claridad", index: "05", tone: "linen" as const },
  /** Ancla ética dentro de visión clínica */
  ethics: { id: "etica-limites", index: "01", tone: "linen" as const },
} as const satisfies Record<string, AboutStoryChapter>;

export type AboutStoryChapterKey = keyof typeof aboutStoryChapters;
