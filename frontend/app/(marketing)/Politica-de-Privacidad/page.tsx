import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("privacidad");

export default function PoliticaPrivacidadPage() {
  return <LegalPage documentId="privacidad" />;
}
