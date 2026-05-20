import type { AboutSectionTone } from "@/components/about/about-editorial-tokens";

/** Arco editorial — alternancia de fondos y capítulos (storytelling). */
export type AboutStoryChapter = {
  id: string;
  index: string;
  tone: AboutSectionTone;
  cinematic?: boolean;
};

export const aboutStoryChapters = {
  hero: { id: "sobre-hero", index: "00", tone: "cinematic" as const, cinematic: true },
  vision: { id: "vision-clinica", index: "01", tone: "linen" as const },
  science: { id: "base-cientifica", index: "02", tone: "paper" as const },
  differential: {
    id: "por-que-somos-distintos",
    index: "03",
    tone: "canvas" as const,
  },
  ethics: { id: "etica-limites", index: "04", tone: "veil" as const },
  ecosystem: {
    id: "ecosistema",
    index: "05",
    tone: "mist" as const,
    cinematic: true,
  },
  manifesto: {
    id: "salud-mental",
    index: "06",
    tone: "depth" as const,
    cinematic: true,
  },
  cta: { id: "empezar-claridad", index: "07", tone: "linen" as const },
} as const satisfies Record<string, AboutStoryChapter>;

export type AboutStoryChapterKey = keyof typeof aboutStoryChapters;
