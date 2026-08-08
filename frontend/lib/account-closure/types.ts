import type { AccountClosureState } from "@/lib/legal/retention-matrix";

export type AccountClosureRole =
  | "visitor"
  | "patient"
  | "professional"
  | "organization_admin"
  | "representative";

export type AccountClosureRequestPayload = {
  email: string;
  fullName: string;
  documentId?: string;
  role: AccountClosureRole;
  organizationName?: string;
  scope: "access_only" | "access_and_suppression";
  exportRequested: boolean;
  understoodLegalRetention: boolean;
  /** Confirmación de contraseña si la sesión está autenticada. */
  passwordConfirmation?: string;
  notes?: string;
};

export type AccountClosureRequestRecord = {
  id: string;
  requestNumber: string;
  userId: string | null;
  email: string;
  role: AccountClosureRole;
  organizationName: string | null;
  status: AccountClosureState;
  scope: AccountClosureRequestPayload["scope"];
  exportRequested: boolean;
  identityVerificationMethod: string | null;
  deactivatedAt: string | null;
  categoriesDeleted: string[];
  categoriesAnonymized: string[];
  categoriesRetained: { category: string; basis: string; until?: string }[];
  estimatedFinalDispositionAt: string | null;
  legalHolds: string[];
  resultSummary: string | null;
  createdAt: string;
  updatedAt: string;
};

/** Contrato que Elynthis Clinical debe implementar (fuera de este repo). */
export type ClinicalClosureAdapter = {
  revokeGoogleOAuth(userExternalId: string): Promise<{ revoked: boolean }>;
  stopCalendarSync(userExternalId: string): Promise<void>;
  cancelSubscriptionRenewal(userExternalId: string): Promise<void>;
  blockClinicalDocuments(params: {
    userExternalId: string;
    organizationId?: string;
  }): Promise<{ retainedCategories: string[] }>;
  assertNoCascadeWipeOfClinicalData(userExternalId: string): Promise<void>;
};
