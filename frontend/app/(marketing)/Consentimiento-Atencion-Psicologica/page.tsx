import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata(
  "consentimiento-psicologica"
);

export default function ConsentimientoAtencionPsicologicaPage() {
  return <LegalPage documentId="consentimiento-psicologica" />;
}
