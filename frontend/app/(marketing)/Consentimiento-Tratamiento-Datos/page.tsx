import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("consentimiento-datos");

export default function ConsentimientoTratamientoDatosPage() {
  return <LegalPage documentId="consentimiento-datos" />;
}
