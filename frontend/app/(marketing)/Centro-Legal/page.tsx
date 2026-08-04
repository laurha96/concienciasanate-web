import type { Metadata } from "next";

import { LegalHub } from "@/components/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Centro Legal",
  description:
    "Centro legal corporativo de Conciencia Sánate y Elynthis: términos, privacidad, cookies, seguridad, consentimientos y cumplimiento normativo en Colombia.",
  path: "/Centro-Legal",
  keywords: [
    "centro legal",
    "Elynthis",
    "Conciencia Sánate",
    "privacidad",
    "términos",
    "cumplimiento",
  ],
  socialTitle: "Centro Legal — Conciencia Sánate / Elynthis",
});

export default function CentroLegalPage() {
  return <LegalHub />;
}
