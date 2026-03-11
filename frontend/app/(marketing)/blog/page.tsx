import type { Metadata } from "next";

import { Hero } from "@/components/healthtech/hero";
import { ArticleExplorer, type Article } from "@/components/healthtech/article-explorer";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Educación en salud basada en evidencia: psicología, regulación emocional, hábitos, bienestar, neurociencia y salud mental.",
};

export default function BlogPage() {
  const articles: Article[] = [
    {
      id: "a1",
      title: "Regulación emocional: un marco práctico",
      category: "Emotional regulation",
      minutes: 6,
      abstract:
        "Un resumen aplicable para identificar emoción, necesidad y respuesta, sin caer en simplificaciones.",
      bullets: [
        "Distingue emoción (señal) vs conducta (respuesta).",
        "Micro-intervenciones: respiración, reencuadre, acción mínima.",
        "Seguimiento: consistencia y contexto antes que intensidad.",
      ],
    },
    {
      id: "a2",
      title: "Hábitos sostenibles: diseño conductual",
      category: "Habits",
      minutes: 7,
      abstract:
        "Principios de ciencia del comportamiento para construir hábitos pequeños que se sostengan.",
      bullets: [
        "Reduce fricción: prepara el entorno.",
        "Aumenta señal: ancla a rutinas existentes.",
        "Mide lo mínimo: una señal de progreso simple.",
      ],
    },
    {
      id: "a3",
      title: "Bienestar: consistencia, no perfección",
      category: "Wellbeing",
      minutes: 5,
      abstract:
        "Cómo sostener prácticas de autocuidado con criterios realistas y medibles.",
      bullets: [
        "Objetivos pequeños: mejoran adherencia.",
        "Ritmo semanal: evita ciclos de “todo o nada”.",
        "Autoevaluación breve: qué ayudó, qué estorbó, qué ajustar.",
      ],
    },
    {
      id: "a4",
      title: "Neurociencia aplicada a prácticas breves",
      category: "Applied neuroscience",
      minutes: 6,
      abstract:
        "Lectura ligera sobre cómo prácticas simples impactan atención, estrés y autorregulación.",
      bullets: [
        "Respiración: señal fisiológica de calma.",
        "Atención: foco suave y repetición.",
        "Evita “biohacks” sin contexto clínico.",
      ],
    },
    {
      id: "a5",
      title: "Psicología basada en evidencia: qué significa",
      category: "Psychology",
      minutes: 6,
      abstract:
        "Cómo leer contenidos de salud mental con criterio: definiciones, límites y calidad.",
      bullets: [
        "Define términos: ansiedad, estrés, depresión no son sinónimos.",
        "Busca mecanismos: qué cambia y cómo.",
        "Señales de calidad: claridad, cautela, y fuentes.",
      ],
    },
  ];

  return (
    <div>
      <Hero
        title="Educación basada en evidencia"
        subtitle="Contenido con categorías claras, filtros y lectura rápida. Enfoque académico, sin marketing innecesario."
        primaryCta={{ label: "Explorar herramientas", href: "/herramientas" }}
        secondaryCta={{ label: "Ver enfoque", href: "/sobre" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Artículos"
            description="Filtra por categoría y abre una lectura dentro de la misma página."
          />
          <div className="mt-10">
            <ArticleExplorer articles={articles} />
          </div>
        </div>
      </section>
    </div>
  );
}
