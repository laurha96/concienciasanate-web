import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("proteccion-datos");

export default function ProteccionDatosPage() {
  return <LegalPage documentId="proteccion-datos" />;
}
