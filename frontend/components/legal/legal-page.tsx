import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentShell } from "@/components/legal/legal-document-shell";
import { getLegalDocument } from "@/lib/legal/content";
import { buildPageMetadata } from "@/lib/seo";

export function buildLegalPageMetadata(documentId: string): Metadata {
  const document = getLegalDocument(documentId);
  if (!document) {
    return { title: "Documento legal" };
  }

  return buildPageMetadata({
    title: `${document.title} | Centro Legal`,
    description: document.description,
    path: document.path,
    keywords: document.keywords,
    socialTitle: `${document.shortTitle} — Conciencia Sánate / Elynthis`,
    type: "article",
  });
}

export function LegalPage({ documentId }: { documentId: string }) {
  const document = getLegalDocument(documentId);
  if (!document) notFound();
  return <LegalDocumentShell document={document} />;
}
