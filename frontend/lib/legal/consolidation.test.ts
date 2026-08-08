import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  footerLegalCenterLinks,
  primaryLegalDocuments,
  consolidatedSourceDocuments,
  getLegalDocument,
} from "./content/index.ts";
import {
  LEGAL_MIGRATION_MATRIX,
  REQUIRED_PRIVACY_ANCHORS,
  REQUIRED_TERMS_ANCHORS,
  LEGACY_REDIRECTS,
} from "./migration-matrix.ts";
import { PRIVACY_PATH, TERMS_PATH, LEGAL_HUB_PATH } from "./constants.ts";

function flattenText(doc: {
  definitions: { term: string; definition: string }[];
  scope: { type: string; text?: string; items?: string[] }[];
  articles: {
    id: string;
    title: string;
    blocks: { type: string; text?: string; items?: string[]; rows?: string[][] }[];
  }[];
  annexes?: {
    id: string;
    title: string;
    blocks: { type: string; text?: string; items?: string[]; rows?: string[][] }[];
  }[];
}): string {
  const parts: string[] = [];
  for (const d of doc.definitions) parts.push(d.term, d.definition);
  for (const block of doc.scope) {
    if (block.text) parts.push(block.text);
    if (block.items) parts.push(...block.items);
  }
  for (const article of [...doc.articles, ...(doc.annexes ?? [])]) {
    parts.push(article.id, article.title);
    for (const block of article.blocks) {
      if (block.text) parts.push(block.text);
      if (block.items) parts.push(...block.items);
      if (block.rows) parts.push(...block.rows.flat());
    }
  }
  return parts.join("\n");
}

describe("legal consolidation navigation", () => {
  it("footer contains exactly two legal links", () => {
    assert.equal(footerLegalCenterLinks.length, 2);
    assert.equal(footerLegalCenterLinks[0]?.href, TERMS_PATH);
    assert.equal(footerLegalCenterLinks[1]?.href, PRIVACY_PATH);
  });

  it("Centro Legal primary documents are exactly two", () => {
    assert.equal(primaryLegalDocuments.length, 2);
    assert.deepEqual(
      primaryLegalDocuments.map((d) => d.id).sort(),
      ["privacidad", "terminos"]
    );
  });

  it("canonical paths are lowercase", () => {
    assert.equal(PRIVACY_PATH, "/privacidad");
    assert.equal(TERMS_PATH, "/terminos-y-condiciones");
    assert.equal(LEGAL_HUB_PATH, "/centro-legal");
  });
});

describe("privacy and terms content requirements", () => {
  it("privacy returns required Google and consolidation strings", () => {
    const privacy = getLegalDocument("privacidad");
    assert.ok(privacy);
    assert.equal(privacy.version, "1.3.0");
    const text = flattenText(privacy);
    for (const needle of [
      "Google Calendar",
      "Limited Use",
      "Google API Services User Data Policy",
      "eliminación de cuenta",
      "cookies",
      "seguridad de la información",
      "OpenAI",
    ]) {
      assert.match(text, new RegExp(needle, "i"), `missing ${needle}`);
    }
    assert.match(
      text,
      /no se envían a OpenAI|excluidos de estos flujos|no se envían a proveedores de inteligencia artificial/i
    );
    for (const id of REQUIRED_PRIVACY_ANCHORS) {
      assert.ok(
        privacy.articles.some((a) => a.id === id),
        `missing privacy anchor ${id}`
      );
    }
  });

  it("terms contain aviso legal and cumplimiento", () => {
    const terms = getLegalDocument("terminos");
    assert.ok(terms);
    assert.equal(terms.version, "1.2.0");
    assert.equal(terms.path, TERMS_PATH);
    const text = flattenText(terms);
    assert.match(text, /aviso legal/i);
    assert.match(text, /cumplimiento legal y normativo/i);
    for (const id of REQUIRED_TERMS_ANCHORS) {
      assert.ok(
        terms.articles.some((a) => a.id === id),
        `missing terms anchor ${id}`
      );
    }
  });
});

describe("migration coverage", () => {
  it("every consolidated source article title appears in a primary document", () => {
    const privacy = getLegalDocument("privacidad");
    const terms = getLegalDocument("terminos");
    assert.ok(privacy && terms);
    const privacyText = flattenText(privacy);
    const termsText = flattenText(terms);
    const combined = `${privacyText}\n${termsText}`;

    for (const source of consolidatedSourceDocuments) {
      for (const article of source.articles) {
        assert.ok(
          combined.includes(article.title),
          `Lost article title from ${source.id}: ${article.title}`
        );
      }
      for (const annex of source.annexes ?? []) {
        assert.ok(
          combined.includes(annex.title),
          `Lost annex title from ${source.id}: ${annex.title}`
        );
      }
    }
  });

  it("migration matrix rows are complete", () => {
    assert.ok(LEGAL_MIGRATION_MATRIX.length >= 9);
    for (const row of LEGAL_MIGRATION_MATRIX) {
      assert.ok(row.sourceId && row.targetId && row.targetSectionId);
      assert.ok(
        ["migrated", "redirect", "retained-signable"].includes(row.status)
      );
    }
    assert.ok(LEGACY_REDIRECTS.length >= 8);
  });

  it("primary documents do not link relatedIds to retired policy pages", () => {
    const retired = new Set(
      consolidatedSourceDocuments.map((d) => d.id)
    );
    for (const doc of primaryLegalDocuments) {
      for (const related of doc.relatedIds) {
        assert.equal(
          retired.has(related),
          false,
          `${doc.id} relatedIds still points to ${related}`
        );
      }
    }
  });
});
