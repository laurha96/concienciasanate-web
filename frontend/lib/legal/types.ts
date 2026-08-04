export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; title?: string; text: string }
  | { type: "callout"; tone?: "info" | "warning" | "legal"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalArticle = {
  id: string;
  number?: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDefinition = {
  term: string;
  definition: string;
};

export type LegalDocumentCategory =
  | "contractual"
  | "privacy"
  | "security"
  | "consent"
  | "compliance"
  | "operations";

export type LegalDocument = {
  id: string;
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  version: string;
  updatedAt: string;
  effectiveDate: string;
  category: LegalDocumentCategory;
  keywords: readonly string[];
  definitions: LegalDefinition[];
  scope: LegalBlock[];
  articles: LegalArticle[];
  annexes?: LegalArticle[];
  relatedIds: readonly string[];
  /** Si true, la página incluye formulario de aceptación electrónica. */
  signable?: boolean;
  /** Texto corto para hub / footer. */
  summary: string;
};

export type LegalDocumentMeta = Pick<
  LegalDocument,
  | "id"
  | "path"
  | "title"
  | "shortTitle"
  | "description"
  | "version"
  | "updatedAt"
  | "category"
  | "summary"
  | "signable"
  | "keywords"
>;
