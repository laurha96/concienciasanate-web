import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata(
  "consentimiento-teleconsulta"
);

export default function ConsentimientoTeleconsultaPage() {
  return <LegalPage documentId="consentimiento-teleconsulta" />;
}
