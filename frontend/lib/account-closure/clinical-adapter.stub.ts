import type { ClinicalClosureAdapter } from "@/lib/account-closure/types";

/**
 * Stub del adaptador Clinical. Este monorepo no contiene OAuth/HCE/Stripe clínicos.
 * Elynthis Clinical debe reemplazar estas implementaciones.
 */
export const clinicalClosureAdapterStub: ClinicalClosureAdapter = {
  async revokeGoogleOAuth() {
    return { revoked: false };
  },
  async stopCalendarSync() {
    return;
  },
  async cancelSubscriptionRenewal() {
    return;
  },
  async blockClinicalDocuments() {
    return {
      retainedCategories: [
        "historia_clinica",
        "consentimientos",
        "firmas",
        "rips",
        "facturacion",
      ],
    };
  },
  async assertNoCascadeWipeOfClinicalData() {
    return;
  },
};
