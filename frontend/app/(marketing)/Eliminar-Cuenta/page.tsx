import type { Metadata } from "next";

import { LegalPage, buildLegalPageMetadata } from "@/components/legal";

export const metadata: Metadata = buildLegalPageMetadata("eliminar-cuenta");

export default function EliminarCuentaPage() {
  return <LegalPage documentId="eliminar-cuenta" />;
}
