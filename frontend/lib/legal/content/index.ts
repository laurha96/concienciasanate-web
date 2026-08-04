import { avisoLegalDocument } from "@/lib/legal/content/aviso-legal";
import { consentimientoDatosDocument } from "@/lib/legal/content/consentimiento-datos";
import { consentimientoPsicologicaDocument } from "@/lib/legal/content/consentimiento-psicologica";
import { consentimientoTeleconsultaDocument } from "@/lib/legal/content/consentimiento-teleconsulta";
import { cookiesDocument } from "@/lib/legal/content/cookies";
import { cumplimientoDocument } from "@/lib/legal/content/cumplimiento";
import { eliminarCuentaDocument } from "@/lib/legal/content/eliminar-cuenta";
import { privacidadDocument } from "@/lib/legal/content/privacidad";
import { proteccionDatosDocument } from "@/lib/legal/content/proteccion-datos";
import { seguridadDocument } from "@/lib/legal/content/seguridad";
import { terminosDocument } from "@/lib/legal/content/terminos";
import type { LegalDocument, LegalDocumentMeta } from "@/lib/legal/types";

export const legalDocuments: LegalDocument[] = [
  terminosDocument,
  privacidadDocument,
  cookiesDocument,
  avisoLegalDocument,
  seguridadDocument,
  proteccionDatosDocument,
  consentimientoDatosDocument,
  consentimientoTeleconsultaDocument,
  consentimientoPsicologicaDocument,
  eliminarCuentaDocument,
  cumplimientoDocument,
];

export const legalDocumentsById: Record<string, LegalDocument> =
  Object.fromEntries(legalDocuments.map((doc) => [doc.id, doc]));

export const legalDocumentsByPath: Record<string, LegalDocument> =
  Object.fromEntries(legalDocuments.map((doc) => [doc.path, doc]));

export function getLegalDocument(id: string): LegalDocument | undefined {
  return legalDocumentsById[id];
}

export function getLegalDocumentByPath(path: string): LegalDocument | undefined {
  return legalDocumentsByPath[path];
}

export function getLegalDocumentMeta(doc: LegalDocument): LegalDocumentMeta {
  return {
    id: doc.id,
    path: doc.path,
    title: doc.title,
    shortTitle: doc.shortTitle,
    description: doc.description,
    version: doc.version,
    updatedAt: doc.updatedAt,
    category: doc.category,
    summary: doc.summary,
    signable: doc.signable,
    keywords: doc.keywords,
  };
}

export const legalDocumentMetas: LegalDocumentMeta[] =
  legalDocuments.map(getLegalDocumentMeta);

export const LEGAL_CATEGORY_LABELS: Record<LegalDocument["category"], string> = {
  contractual: "Contractual",
  privacy: "Privacidad",
  security: "Seguridad",
  consent: "Consentimientos",
  compliance: "Cumplimiento",
  operations: "Operaciones",
};

/** Enlaces canónicos para footer (orden institucional). */
export const footerLegalCenterLinks = [
  { href: "/Terminos-&-Condiciones", label: "Términos y Condiciones" },
  { href: "/Politica-de-Privacidad", label: "Política de Privacidad" },
  { href: "/Politica-de-Cookies", label: "Política de Cookies" },
  { href: "/Aviso-Legal", label: "Aviso Legal" },
  { href: "/Politica-de-Seguridad", label: "Política de Seguridad" },
  { href: "/Proteccion-de-Datos", label: "Protección de Datos" },
  { href: "/Eliminar-Cuenta", label: "Eliminar Cuenta" },
  { href: "/Cumplimiento", label: "Cumplimiento" },
] as const;
