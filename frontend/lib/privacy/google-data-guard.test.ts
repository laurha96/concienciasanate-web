import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  GOOGLE_CALENDAR_MIN_SCOPES,
  GOOGLE_SIGN_IN_SCOPES,
  assertNoCalendarScopesInSignIn,
  assertNotGoogleDerivedForAi,
  isGoogleDerivedData,
} from "./google-data-guard.ts";

describe("google-data-guard", () => {
  it("detects google_derived markers", () => {
    assert.equal(isGoogleDerivedData({ google_derived: true }), true);
    assert.equal(isGoogleDerivedData({ google_source: true }), true);
    assert.equal(isGoogleDerivedData({ source: "google_calendar" }), true);
    assert.equal(isGoogleDerivedData({ title: "Cita" }), false);
  });

  it("blocks google-derived payloads from AI pipelines", () => {
    assert.throws(
      () => assertNotGoogleDerivedForAi({ google_derived: true, text: "x" }),
      /Google-derived/
    );
    assert.throws(
      () =>
        assertNotGoogleDerivedForAi({
          messages: [{ role: "user", content: { google_source: true } }],
        }),
      /Google-derived/
    );
    assert.doesNotThrow(() =>
      assertNotGoogleDerivedForAi({ prompt: "Resumir nota clínica genérica" })
    );
  });

  it("keeps Sign-In scopes free of Calendar", () => {
    assert.doesNotThrow(() =>
      assertNoCalendarScopesInSignIn([...GOOGLE_SIGN_IN_SCOPES])
    );
    assert.throws(
      () =>
        assertNoCalendarScopesInSignIn([
          ...GOOGLE_SIGN_IN_SCOPES,
          ...GOOGLE_CALENDAR_MIN_SCOPES,
        ]),
      /must not request Calendar/
    );
  });
});
