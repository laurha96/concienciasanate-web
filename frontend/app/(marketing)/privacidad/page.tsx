import type { Metadata } from "next";

import { LegalPlaceholder } from "@/components/legal/legal-placeholder";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Conciencia Sánate. Documento en preparación.",
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalPlaceholder
      title="Política de privacidad"
      lead="Información sobre cómo tratamos datos personales en Conciencia Sánate."
    />
  );
}
