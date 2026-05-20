import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const ABOUT_SEO = {
  title: "Sobre Conciencia Sánate | Salud mental con base clínica",
  description:
    "Conoce Conciencia Sánate: psicoeducación con evidencia, regulación emocional, hábitos sostenibles y tecnología clínica Elynthis. Marco ético explícito, lenguaje claro y acompañamiento sin promesas de cura.",
  path: "/sobre",
  socialTitle: "Sobre Conciencia Sánate",
  keywords: [
    "Conciencia Sánate",
    "salud mental",
    "psicología basada en evidencia",
    "regulación emocional",
    "psicoeducación",
    "TCC",
    "Elynthis",
    "tecnología clínica",
    "ética salud digital",
    "autocuidado estructurado",
  ],
  ogImageAlt:
    "Conciencia Sánate — salud mental con criterio clínico y evidencia aplicada",
} as const;

/** Secciones ancla — navegación, JSON-LD ItemList y landmarks. */
export const ABOUT_PAGE_SECTIONS = [
  {
    id: "sobre-hero",
    label: "Inicio",
    description:
      "Propuesta clínica de Conciencia Sánate: evidencia, regulación y límites éticos",
  },
  {
    id: "vision-clinica",
    label: "Visión clínica",
    description:
      "Cómo acompañamos la experiencia emocional con comprensión y autonomía",
  },
  {
    id: "base-cientifica",
    label: "Base científica",
    description:
      "Marcos con respaldo empírico que sostienen herramientas y contenidos",
  },
  {
    id: "por-que-somos-distintos",
    label: "Diferencial",
    description:
      "Criterio clínico frente al volumen de contenido y al wellness genérico",
  },
  {
    id: "etica-limites",
    label: "Ética y límites",
    description:
      "Alcance del producto, derivación profesional y seguridad emocional",
  },
  {
    id: "ecosistema",
    label: "Ecosistema",
    description:
      "Psicología, educación, hábitos y tecnología clínica en un mismo proceso",
  },
  {
    id: "salud-mental",
    label: "Salud mental",
    description: "Principios clínicos sobre cómo entendemos la salud mental",
  },
  {
    id: "empezar-claridad",
    label: "Empezar",
    description: "Explorar herramientas o conocer Elynthis para profesionales",
  },
] as const;

export function buildAboutPageMetadata(): Metadata {
  return buildPageMetadata({
    title: ABOUT_SEO.title,
    description: ABOUT_SEO.description,
    path: ABOUT_SEO.path,
    keywords: ABOUT_SEO.keywords,
    socialTitle: ABOUT_SEO.socialTitle,
    ogImage: {
      url: "/social/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: ABOUT_SEO.ogImageAlt,
    },
  });
}
