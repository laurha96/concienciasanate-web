/**
 * Matriz de conservación / disposición para cierre de cuenta y supresión.
 *
 * Alcance de este repositorio: sitio Conciencia Sánate + CMS + perfiles ligeros.
 * Las filas marcadas `systemScope: "elynthis-clinical"` describen obligaciones del
 * producto clínico (repositorio separado) y no afirman tablas existentes aquí.
 */

export type RetentionAction =
  | "delete"
  | "anonymize"
  | "unlink"
  | "block_and_archive"
  | "retain_evidence"
  | "revoke_integration"
  | "final_disposition_procedure";

export type AccountClosureStateAfter =
  | "removed"
  | "anonymized"
  | "blocked_legal_retention"
  | "revoked"
  | "not_applicable_in_this_repo";

export type RetentionRow = {
  dataType: string;
  storage:
    | "supabase.auth.users"
    | "public.profiles"
    | "public.user_preferences"
    | "public.user_modules"
    | "storage.avatars"
    | "public.account_closure_requests"
    | "public.account_closure_events"
    | "public.deletion_tombstones"
    | "public.legal_holds"
    | "elynthis-clinical"
    | "stripe"
    | "google"
    | "backups";
  controllerRole: "responsable_sitio" | "responsable_clinico" | "encargado_tecnologico" | "tercero";
  purpose: string;
  legalBasis: string;
  retentionTrigger: string;
  retentionPeriod: string;
  stateAfterClosure: AccountClosureStateAfter;
  finalAction: RetentionAction;
  backupsNote: string;
  legalHoldPossible: boolean;
  method: string;
  systemScope: "this-repo" | "elynthis-clinical" | "third-party";
};

export const OPERATIONAL_CLEANUP_DAYS = 30;

export const ACCOUNT_CLOSURE_STATES = [
  "active",
  "closure_requested",
  "identity_verification_pending",
  "access_disabled",
  "data_cleanup_pending",
  "archived_legal_retention",
  "anonymized",
  "closure_completed",
] as const;

export type AccountClosureState = (typeof ACCOUNT_CLOSURE_STATES)[number];

export const RETENTION_MATRIX: RetentionRow[] = [
  {
    dataType: "Sesiones y refresh tokens de Auth (sitio)",
    storage: "supabase.auth.users",
    controllerRole: "responsable_sitio",
    purpose: "Mantener sesión autenticada",
    legalBasis: "Ejecución contractual; seguridad (Ley 1581 / Dec. 1377)",
    retentionTrigger: "Confirmación de cierre verificada",
    retentionPeriod: "Invalidación inmediata; limpieza operativa ≤ 30 días",
    stateAfterClosure: "revoked",
    finalAction: "revoke_integration",
    backupsNote: "Pueden permanecer en backups hasta rotación; tombstone reaplica cierre",
    legalHoldPossible: false,
    method: "signOut global / ban user / invalidación de JWT de aplicación",
    systemScope: "this-repo",
  },
  {
    dataType: "Preferencias de interfaz e intereses",
    storage: "public.user_preferences",
    controllerRole: "responsable_sitio",
    purpose: "Personalización no clínica",
    legalBasis: "Autorización / ejecución contractual",
    retentionTrigger: "Cierre verificado",
    retentionPeriod: "Supresión ≤ 30 días",
    stateAfterClosure: "removed",
    finalAction: "delete",
    backupsNote: "Rotación de backups del proyecto Supabase del sitio",
    legalHoldPossible: false,
    method: "DELETE de fila de preferencias",
    systemScope: "this-repo",
  },
  {
    dataType: "Módulos / membresías de acceso ordinario (sitio)",
    storage: "public.user_modules",
    controllerRole: "responsable_sitio",
    purpose: "Autorización de módulos educativos",
    legalBasis: "Ejecución contractual",
    retentionTrigger: "Cierre verificado",
    retentionPeriod: "Supresión ≤ 30 días",
    stateAfterClosure: "removed",
    finalAction: "delete",
    backupsNote: "Rotación de backups",
    legalHoldPossible: false,
    method: "DELETE de membresías",
    systemScope: "this-repo",
  },
  {
    dataType: "Fotografía de perfil / avatar",
    storage: "storage.avatars",
    controllerRole: "responsable_sitio",
    purpose: "Identidad visual de cuenta",
    legalBasis: "Autorización",
    retentionTrigger: "Cierre verificado",
    retentionPeriod: "Eliminación ≤ 30 días si no es evidencia",
    stateAfterClosure: "removed",
    finalAction: "delete",
    backupsNote: "Objetos pueden persistir en backups de storage hasta rotación",
    legalHoldPossible: false,
    method: "remove object + null avatar_url",
    systemScope: "this-repo",
  },
  {
    dataType: "Perfil de cuenta (nombre, metadatos no clínicos)",
    storage: "public.profiles",
    controllerRole: "responsable_sitio",
    purpose: "Cuenta de acceso al sitio",
    legalBasis: "Ejecución contractual",
    retentionTrigger: "Cierre verificado",
    retentionPeriod: "Anonimización ≤ 30 días; estado de cierre conservado",
    stateAfterClosure: "anonymized",
    finalAction: "anonymize",
    backupsNote: "Tombstone evita reactivación tras restore",
    legalHoldPossible: true,
    method: "Anonimizar full_name/avatar; conservar status e id interno mínimo",
    systemScope: "this-repo",
  },
  {
    dataType: "Solicitud de cierre y evidencia de trámite",
    storage: "public.account_closure_requests",
    controllerRole: "responsable_sitio",
    purpose: "Trazabilidad de hábeas data y cierre",
    legalBasis: "Ley 1581; Dec. 1377; responsabilidad demostrada",
    retentionTrigger: "Creación de solicitud",
    retentionPeriod: "Durante el trámite y el plazo necesario para acreditar respuesta",
    stateAfterClosure: "blocked_legal_retention",
    finalAction: "retain_evidence",
    backupsNote: "Incluida en backups del sitio",
    legalHoldPossible: true,
    method: "Conservar metadatos sin contenido clínico",
    systemScope: "this-repo",
  },
  {
    dataType: "Tokens OAuth / Google Calendar / Sign-In (Clinical)",
    storage: "google",
    controllerRole: "encargado_tecnologico",
    purpose: "Integración opcional Google",
    legalBasis: "Autorización; Google API Services User Data Policy / Limited Use",
    retentionTrigger: "Cierre o desconexión",
    retentionPeriod: "Revocación inmediata; borrado de credenciales ≤ 30 días",
    stateAfterClosure: "not_applicable_in_this_repo",
    finalAction: "revoke_integration",
    backupsNote: "Definido por Clinical + proveedor",
    legalHoldPossible: false,
    method: "Revocar en Google + borrar tokens cifrados (Clinical)",
    systemScope: "elynthis-clinical",
  },
  {
    dataType: "Historia clínica electrónica y anexos clínicos",
    storage: "elynthis-clinical",
    controllerRole: "responsable_clinico",
    purpose: "Atención en salud / reserva",
    legalBasis:
      "Ley 23/1981; Res. 1995/1999; Res. 839/2017 (mín. 15 años desde última atención); Ley 2015/2020; Ley 1090/2006 cuando aplique",
    retentionTrigger: "Última atención (y reglas especiales)",
    retentionPeriod:
      "Mínimo 15 años desde última atención; plazos especiales/permanentes según valoración",
    stateAfterClosure: "blocked_legal_retention",
    finalAction: "block_and_archive",
    backupsNote: "Backups clínicos de Clinical; no uso ordinario tras cierre de acceso",
    legalHoldPossible: true,
    method: "Bloqueo/archivo; disposición final archivística — no DELETE automático a los 15 años",
    systemScope: "elynthis-clinical",
  },
  {
    dataType: "Consentimientos, firmas y evidencias de aceptación",
    storage: "elynthis-clinical",
    controllerRole: "responsable_clinico",
    purpose: "Acreditar autorización y acto asistencial",
    legalBasis: "Ley 1581; Ley 527/1999; normas de HCE y consentimiento",
    retentionTrigger: "Fecha del consentimiento / última necesidad probatoria",
    retentionPeriod: "Mientras sea necesario acreditar autorización u obligación legal",
    stateAfterClosure: "blocked_legal_retention",
    finalAction: "block_and_archive",
    backupsNote: "Clinical",
    legalHoldPossible: true,
    method: "Bloqueo; no destrucción por cierre de cuenta",
    systemScope: "elynthis-clinical",
  },
  {
    dataType: "RIPS, facturas y soportes tributarios/sanitarios",
    storage: "elynthis-clinical",
    controllerRole: "responsable_clinico",
    purpose: "Facturación y cumplimiento sectorial",
    legalBasis:
      "Art. 632 ET / DIAN; Ley 962/2005 art. 28 (libros/papeles comerciales, 10 años cuando aplique); Res. 2275/2023 y 558/2024 si RIPS/FE aplican",
    retentionTrigger: "Fecha del documento / ejercicio fiscal",
    retentionPeriod: "Según norma tributaria/sanitaria aplicable (p. ej. 10 años comerciales cuando proceda)",
    stateAfterClosure: "blocked_legal_retention",
    finalAction: "block_and_archive",
    backupsNote: "Clinical / Stripe evidencias",
    legalHoldPossible: true,
    method: "Retención bloqueada; cancelar renovación de suscripción sin borrar soportes",
    systemScope: "elynthis-clinical",
  },
  {
    dataType: "Suscripción Stripe (metadatos de billing)",
    storage: "stripe",
    controllerRole: "tercero",
    purpose: "Cobro de planes",
    legalBasis: "Contrato; obligaciones contables",
    retentionTrigger: "Cierre / cancelación",
    retentionPeriod: "Cancelar renovación; conservar comprobantes exigibles",
    stateAfterClosure: "not_applicable_in_this_repo",
    finalAction: "retain_evidence",
    backupsNote: "Política de Stripe + exportes contables",
    legalHoldPossible: true,
    method: "cancel_at_period_end / cancel; no borrar invoices obligatorios",
    systemScope: "third-party",
  },
  {
    dataType: "Copias de seguridad del proyecto Supabase del sitio",
    storage: "backups",
    controllerRole: "encargado_tecnologico",
    purpose: "Continuidad y recuperación",
    legalBasis: "Seguridad / interés legítimo de integridad del servicio",
    retentionTrigger: "Ciclo de rotación del proveedor",
    retentionPeriod: "Según retención real configurada en Supabase (documentar en operación)",
    stateAfterClosure: "blocked_legal_retention",
    finalAction: "unlink",
    backupsNote: "No uso ordinario; tombstone re-aplica cierres tras restore",
    legalHoldPossible: true,
    method: "Rotación + reaplicación de tombstones",
    systemScope: "this-repo",
  },
];

export function retentionRowsForScope(
  scope: RetentionRow["systemScope"]
): RetentionRow[] {
  return RETENTION_MATRIX.filter((row) => row.systemScope === scope);
}
