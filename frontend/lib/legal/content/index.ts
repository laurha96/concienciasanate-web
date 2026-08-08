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

/** Documentos principales visibles en footer y Centro Legal. */
export const primaryLegalDocuments: LegalDocument[] = [
  terminosDocument,
  privacidadDocument,
];

/** Consentimientos firmables (rutas operativas; fuera del hub de dos tarjetas). */
export const signableLegalDocuments: LegalDocument[] = [
  consentimientoDatosDocument,
  consentimientoTeleconsultaDocument,
  consentimientoPsicologicaDocument,
];

/**
 * Fuentes consolidadas (contenido preservado vía compose; sin página pública indexada).
 * Se mantienen exportadas para auditoría de cobertura y pruebas.
 */
export const consolidatedSourceDocuments: LegalDocument[] = [
  cookiesDocument,
  avisoLegalDocument,
  seguridadDocument,
  proteccionDatosDocument,
  eliminarCuentaDocument,
  cumplimientoDocument,
];

/** Catálogo operativo publicado (principales + consentimientos). */
export const legalDocuments: LegalDocument[] = [
  ...primaryLegalDocuments,
  ...signableLegalDocuments,
];

/** Todos los módulos de contenido, incluidos los consolidados. */
export const allLegalContentModules: LegalDocument[] = [
  ...legalDocuments,
  ...consolidatedSourceDocuments,
];

export const legalDocumentsById: Record<string, LegalDocument> =
  Object.fromEntries(allLegalContentModules.map((doc) => [doc.id, doc]));

export const legalDocumentsByPath: Record<string, LegalDocument> =
  Object.fromEntries(legalDocuments.map((doc) => [doc.path, doc]));

export function getLegalDocument(id: string): LegalDocument | undefined {
  if (id === "terminos") return terminosDocument;
  if (id === "privacidad") return privacidadDocument;
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

export const primaryLegalDocumentMetas: LegalDocumentMeta[] =
  primaryLegalDocuments.map(getLegalDocumentMeta);

export const LEGAL_CATEGORY_LABELS: Record<LegalDocument["category"], string> = {
  contractual: "Contractual",
  privacy: "Privacidad",
  security: "Seguridad",
  consent: "Consentimientos",
  compliance: "Cumplimiento",
  operations: "Operaciones",
};

/** Enlaces canónicos para footer LEGAL (exactamente dos). */
export const footerLegalCenterLinks = [
  {
    href: terminosDocument.path,
    label: "Términos y Condiciones",
  },
  {
    href: privacidadDocument.path,
    label: "Política de Privacidad y Tratamiento de Datos Personales",
  },
] as const;
