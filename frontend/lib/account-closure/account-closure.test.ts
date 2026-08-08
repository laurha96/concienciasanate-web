import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import {
  ACCOUNT_CLOSURE_STATES,
  RETENTION_MATRIX,
  OPERATIONAL_CLEANUP_DAYS,
} from "../legal/retention-matrix.ts";
import { eliminarCuentaDocument } from "../legal/content/eliminar-cuenta.ts";
import { privacidadDocument } from "../legal/content/privacidad.ts";
import { terminosDocument } from "../legal/content/terminos.ts";
import { footerLegalCenterLinks } from "../legal/content/index.ts";
import {
  ACCOUNT_CLOSURE_SECTION_ID,
  DELETE_ACCOUNT_PATH,
  PRIVACY_PATH,
} from "../legal/constants.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

describe("account closure legal framing", () => {
  it("privacy contains cierre-y-supresion-de-datos section", () => {
    assert.ok(
      privacidadDocument.articles.some(
        (a) => a.id === ACCOUNT_CLOSURE_SECTION_ID
      )
    );
    assert.equal(privacidadDocument.version, "1.3.0");
  });

  it("avoids never-delete absolute claim and misleading wipe language", () => {
    const blob = JSON.stringify(eliminarCuentaDocument);
    assert.equal(/nunca se eliminan/i.test(blob), false);
    assert.equal(/todos mis datos/i.test(blob), false);
    assert.equal(/toda tu información será borrada/i.test(blob), false);
    assert.match(blob, /quince \(15\) años/i);
    assert.match(blob, /Limited Use/);
    assert.match(blob, /disposici[oó]n final/i);
  });

  it("terms distinguish closure from clinical destruction", () => {
    assert.ok(
      terminosDocument.articles.some((a) => a.id === "cierre-de-cuenta-y-custodia")
    );
    assert.equal(terminosDocument.version, "1.2.0");
  });

  it("footer still has exactly two legal links and no delete-account entry", () => {
    assert.equal(footerLegalCenterLinks.length, 2);
    assert.equal(
      footerLegalCenterLinks.some((l) => l.href === DELETE_ACCOUNT_PATH),
      false
    );
    assert.equal(
      footerLegalCenterLinks.some((l) => l.href === PRIVACY_PATH),
      true
    );
  });
});

describe("retention matrix", () => {
  it("defines account states and operational cleanup window", () => {
    assert.ok(ACCOUNT_CLOSURE_STATES.includes("closure_completed"));
    assert.ok(ACCOUNT_CLOSURE_STATES.includes("archived_legal_retention"));
    assert.equal(OPERATIONAL_CLEANUP_DAYS, 30);
  });

  it("classifies site vs clinical rows without inventing clinical tables here", () => {
    const site = RETENTION_MATRIX.filter((r) => r.systemScope === "this-repo");
    const clinical = RETENTION_MATRIX.filter(
      (r) => r.systemScope === "elynthis-clinical"
    );
    assert.ok(site.length >= 5);
    assert.ok(clinical.length >= 3);
    assert.ok(
      clinical.every((r) => r.storage === "elynthis-clinical" || r.storage === "google")
    );
    assert.ok(
      site.some((r) => r.finalAction === "delete" || r.finalAction === "anonymize")
    );
    assert.ok(
      clinical.some((r) => r.finalAction === "block_and_archive")
    );
  });
});

describe("routes and migration sql", () => {
  it("keeps eliminar-cuenta page public (no next.config redirect away)", () => {
    const nextConfig = readFileSync(resolve(root, "next.config.ts"), "utf8");
    assert.equal(
      nextConfig.includes('source: "/eliminar-cuenta"'),
      false
    );
    const page = readFileSync(
      resolve(root, "app/(marketing)/eliminar-cuenta/page.tsx"),
      "utf8"
    );
    assert.match(page, /AccountClosureForm/);
    assert.match(page, /Cierre de cuenta y supresión de datos/);
  });

  it("sql migration is additive and avoids clinical cascade", () => {
    const sql = readFileSync(
      resolve(root, "../backend/supabase/migrations/004_account_closure.sql"),
      "utf8"
    );
    assert.match(sql, /account_closure_requests/);
    assert.match(sql, /deletion_tombstones/);
    assert.match(sql, /legal_holds/);
    assert.match(sql, /account_status/);
    assert.equal(/drop table/i.test(sql), false);
    assert.equal(/on delete cascade[\s\S]*historia/i.test(sql), false);
  });
});
