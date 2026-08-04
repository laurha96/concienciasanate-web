import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("cookies");

export default function PoliticaCookiesPage() {
  return <LegalPage documentId="cookies" />;
}
