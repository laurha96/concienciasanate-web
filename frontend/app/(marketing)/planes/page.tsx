import type { Metadata } from "next";

import { Hero } from "@/components/healthtech/hero";
import { PricingGrid } from "@/components/healthtech/pricing-grid";
import { SectionHeading } from "@/components/sections/section-heading";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes para acompañarte en bienestar: opciones claras, humanas y sostenibles.",
};

export default function PlanesPage() {
  return (
    <div>
      <Hero
        title="Planes"
        subtitle="Tabla de precios clara, sin ruido. Elige un nivel y continúa."
        primaryCta={{ label: "Ver herramientas", href: "/herramientas" }}
        secondaryCta={{ label: "Solicitar demo", href: "/contacto" }}
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Planes"
            title="Suscripciones"
            description="Tres niveles con beneficios definidos."
          />
          <div className="mt-10">
            <PricingGrid
              plans={[
                {
                  name: "Free",
                  price: "$0",
                  description: "Explorar educación y herramientas esenciales.",
                  features: [
                    "Acceso a herramientas básicas",
                    "Educación por categorías",
                    "Experiencia minimalista",
                  ],
                  ctaLabel: "Empezar",
                  ctaHref: "/herramientas",
                },
                {
                  name: "Premium",
                  price: "$—",
                  description: "Más estructura para hábitos y seguimiento liviano.",
                  features: [
                    "Planes y checklists",
                    "Prácticas guiadas",
                    "Sugerencias de consistencia",
                  ],
                  ctaLabel: "Explorar",
                  ctaHref: "/herramientas",
                  highlighted: true,
                },
                {
                  name: "Professional",
                  price: "$—",
                  description: "Para profesionales y clínicas con Elynthis.",
                  features: [
                    "Flujo clínico",
                    "Registros y seguimiento",
                    "Organización de pacientes",
                  ],
                  ctaLabel: "Solicitar demo",
                  ctaHref: "/contacto",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
