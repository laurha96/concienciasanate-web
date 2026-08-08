import type { Metadata } from "next";

import { LegalHub } from "@/components/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Centro Legal | Conciencia Sánate / Elynthis",
  description:
    "Centro legal de Conciencia Sánate y Elynthis: Términos y Condiciones y Política de Privacidad y Tratamiento de Datos Personales.",
  path: "/centro-legal",
  keywords: [
    "centro legal",
    "términos y condiciones",
    "privacidad",
    "Elynthis",
    "Conciencia Sánate",
  ],
});

export default function CentroLegalPage() {
  return <LegalHub />;
}
