/**
 * Guardia de separación: datos de Google APIs nunca deben entrar a pipelines de IA.
 * Usar en backends/clientes del ecosistema Elynthis antes de construir prompts.
 */

export type GoogleDerivedMarker = {
  google_source?: boolean;
  google_derived?: boolean;
  source?: string;
};

export class GoogleDataAiSeparationError extends Error {
  constructor(message = "Google-derived data cannot enter AI pipelines") {
    super(message);
    this.name = "GoogleDataAiSeparationError";
  }
}

export function isGoogleDerivedData(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const obj = value as GoogleDerivedMarker & Record<string, unknown>;
  if (obj.google_source === true || obj.google_derived === true) return true;
  if (typeof obj.source === "string") {
    const source = obj.source.toLowerCase();
    if (
      source.includes("google_calendar") ||
      source.includes("google-sign-in") ||
      source.includes("google_oauth") ||
      source === "google"
    ) {
      return true;
    }
  }
  return false;
}

/** Lanza si el payload contiene o deriva de Google APIs. */
export function assertNotGoogleDerivedForAi(value: unknown): void {
  if (isGoogleDerivedData(value)) {
    throw new GoogleDataAiSeparationError();
  }
  if (Array.isArray(value)) {
    for (const item of value) assertNotGoogleDerivedForAi(item);
    return;
  }
  if (value && typeof value === "object") {
    for (const nested of Object.values(value as Record<string, unknown>)) {
      if (nested && typeof nested === "object") {
        assertNotGoogleDerivedForAi(nested);
      }
    }
  }
}

/** Scopes mínimos documentados para el ecosistema (referencia de producto). */
export const GOOGLE_SIGN_IN_SCOPES = ["openid", "email", "profile"] as const;

/** Calendar: preferir events sobre scope completo de calendario. */
export const GOOGLE_CALENDAR_MIN_SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
] as const;

export function assertNoCalendarScopesInSignIn(
  scopes: readonly string[]
): void {
  const joined = scopes.join(" ").toLowerCase();
  if (joined.includes("calendar")) {
    throw new Error(
      "Google Sign-In must not request Calendar scopes; use incremental authorization."
    );
  }
}
