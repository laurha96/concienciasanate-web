import type { Metadata } from "next";

import { LegalPlaceholder } from "@/components/legal/legal-placeholder";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos de uso de Conciencia Sánate. Documento en preparación.",
  robots: { index: false, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalPlaceholder
      title="Términos y condiciones"
      lead="Condiciones de uso de la plataforma y sus contenidos."
    />
  );
}
