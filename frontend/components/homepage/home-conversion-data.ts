import { brandCopy, evidenceCards, methodBlocks } from "@/components/homepage/data";
import { trustEthicsCopy } from "@/components/homepage/trust-ethics-data";

export const homeIntroCopy = {
  title: "¿Qué es Conciencia Sánate?",
  description: brandCopy.lead,
  seeMore: { label: "Conocer la plataforma", href: "/sobre" },
} as const;

export const homeDifferentialCopy = {
  title: "Por qué somos distintos",
  description:
    "Evidencia aplicada, regulación emocional y procesos sostenibles — sin promesas vacías.",
  seeMore: { label: "Ver ciencia y método", href: "/recursos" },
} as const;

/** Tres pilares diferenciales visibles above the fold */
export const HOME_DIFFERENTIAL_KEYS = ["evidence", "regulation", "habits"] as const;

export const homeDifferentialCards = HOME_DIFFERENTIAL_KEYS.map((key) =>
  evidenceCards.find((c) => c.key === key)!
);

export const homeMethodSteps = methodBlocks;

export const homeTrustStripCopy = {
  title: "Bienestar con responsabilidad",
  disclaimer: trustEthicsCopy.disclaimer,
  seeMore: { label: "Ética y límites", href: "/terminos-y-condiciones" },
} as const;

export const HOME_TRUST_STRIP_BLOCKS = [
  {
    key: "clear-info",
    title: "Información clara",
    body: "Educar y orientar, no etiquetar ni diagnosticar.",
  },
  {
    key: "evidence",
    title: "Basado en evidencia",
    body: "Psicología clínica y ciencia del comportamiento.",
  },
  {
    key: "support-tools",
    title: "Herramientas de apoyo",
    body: "Complementan, no sustituyen atención profesional.",
  },
  {
    key: "crisis",
    title: "Cuidado en crisis",
    body: "En emergencia, busca apoyo inmediato en tu país.",
  },
] as const;
