import * as React from "react";
import { Brain, HeartPulse, Leaf, Sparkles } from "lucide-react";

import { FeatureCard } from "@/components/design-system/feature-card";

const features = [
  {
    icon: <Brain aria-hidden="true" />,
    title: "Ciencia y claridad",
    description:
      "Contenido estructurado y práctico, con un lenguaje simple y humano.",
  },
  {
    icon: <HeartPulse aria-hidden="true" />,
    title: "Herramientas guiadas",
    description:
      "Micro-hábitos, respiración, registro emocional y ejercicios de regulación.",
  },
  {
    icon: <Leaf aria-hidden="true" />,
    title: "Calma visual",
    description:
      "Paleta soft green + bordes redondeados + sombras ligeras para contención.",
  },
  {
    icon: <Sparkles aria-hidden="true" />,
    title: "Glassmorphism ligero",
    description:
      "Paneles translúcidos y blur sutil para un look wellness-tech moderno.",
  },
];

export function FeatureCardsGrid() {
  return (
    <section className="bg-background-main">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary">
            Un sistema de diseño para salud mental
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Componentes redondeados, minimalistas y consistentes, listos para React + Tailwind.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
