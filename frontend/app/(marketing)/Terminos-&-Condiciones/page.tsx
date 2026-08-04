import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("terminos");

export default function TerminosCondicionesPage() {
  return <LegalPage documentId="terminos" />;
}
