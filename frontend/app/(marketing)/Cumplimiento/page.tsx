import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("cumplimiento");

export default function CumplimientoPage() {
  return <LegalPage documentId="cumplimiento" />;
}
