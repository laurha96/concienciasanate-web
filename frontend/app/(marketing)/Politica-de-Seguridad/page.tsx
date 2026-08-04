import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("seguridad");

export default function PoliticaSeguridadPage() {
  return <LegalPage documentId="seguridad" />;
}
