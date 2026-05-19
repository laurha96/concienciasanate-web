import type { Metadata } from "next";

import { HomePage } from "@/components/homepage";

export const metadata: Metadata = {
  title: "Conciencia Sánate | Salud mental basada en evidencia",
  description:
    "Plataforma digital de salud mental y bienestar emocional. Educación psicológica, herramientas prácticas y tecnología clínica con Elynthis.",
  openGraph: {
    title: "Conciencia Sánate",
    description:
      "Educación, herramientas de regulación emocional y tecnología clínica para personas y profesionales.",
  },
};

export default function Page() {
  return <HomePage />;
}
