import type { Metadata } from "next";

import { SectionHeading } from "@/components/sections/section-heading";
import { PricingCard } from "@/components/cards/pricing-card";

export const metadata: Metadata = {
  title: "Planes",
  description:
    "Planes para acompañarte en bienestar: opciones claras, humanas y sostenibles.",
};

export default function PlanesPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Planes"
        title="Planes claros, humanos y profesionales"
        description="Elige una opción según tu momento: explorar, profundizar o trabajar con estructura profesional."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <PricingCard
          name="Free"
          description="Acceso a educación en salud y herramientas esenciales para empezar con calma."
          ctaLabel="Crear cuenta"
          href="/registro"
        />

        <PricingCard
          name="Premium"
          description="Más estructura y acompañamiento del proceso: hábitos, práctica y seguimiento liviano."
          ctaLabel="Explorar recursos"
          href="/herramientas"
          emphasized
        />

        <PricingCard
          name="Professional"
          description="Para equipos y profesionales: tecnología clínica (Elynthis), documentación y flujo de atención."
          ctaLabel="Solicitar demo"
          href="/contactenos"
        />
      </div>

      <div className="mt-10 rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-sm font-medium">Transparencia</div>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground">
          Los detalles y precios se publicarán aquí cuando estén listos. Por
          ahora, puedes explorar la plataforma y escribirnos si deseas una guía
          personalizada.
        </p>
      </div>
      </div>
    </div>
  );
}
