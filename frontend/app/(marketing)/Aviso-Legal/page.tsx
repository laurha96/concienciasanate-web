import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("aviso-legal");

export default function AvisoLegalPage() {
  return <LegalPage documentId="aviso-legal" />;
}
