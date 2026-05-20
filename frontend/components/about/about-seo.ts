import type { Metadata } from "next";

import { buildPageMetadata } from "@/lib/seo";

export const ABOUT_SEO = {
  title: "Sobre Conciencia Sánate | Psicoeducación y salud mental con evidencia",
  description:
    "Conoce Conciencia Sánate: psicoeducación basada en evidencia, regulación emocional y tecnología clínica Elynthis. Alcance explícito, sin diagnóstico en línea ni promesas de tratamiento.",
  path: "/sobre",
  socialTitle: "Sobre Conciencia Sánate",
  keywords: [
    "Conciencia Sánate",
    "salud mental",
    "psicoeducación",
    "psicología basada en evidencia",
    "regulación emocional",
    "terapia cognitivo-conductual",
    "Elynthis",
    "tecnología clínica",
    "salud digital ética",
  ],
  ogImageAlt:
    "Conciencia Sánate — psicoeducación y salud mental con criterio clínico",
} as const;

export const ABOUT_PAGE_SECTIONS = [
  {
    id: "sobre-hero",
    label: "Inicio",
    description:
      "Psicoeducación, regulación emocional y límites éticos del servicio",
  },
  {
    id: "vision-clinica",
    label: "Visión",
    description: "Marco clínico para comprender y regular la experiencia emocional",
  },
  {
    id: "pilares-clinicos",
    label: "Pilares",
    description:
      "TCC, regulación emocional, neurociencia aplicada y tecnología clínica",
  },
  {
    id: "ecosistema",
    label: "Ecosistema",
    description:
      "Articulación de psicoeducación, hábitos, regulación y Elynthis",
  },
  {
    id: "por-que-somos-distintos",
    label: "Diferencial",
    description: "Evidencia, claridad, ética y herramientas aplicables",
  },
  {
    id: "empezar-claridad",
    label: "Explorar",
    description: "Herramientas de psicoeducación y plataforma para profesionales",
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
