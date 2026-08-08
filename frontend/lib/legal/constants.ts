/** Identidad jurídica y operativa del ecosistema Conciencia Sánate / Elynthis. */
export const LEGAL_ENTITY = {
  tradeName: "Conciencia Sánate",
  softwareName: "Elynthis",
  siteUrl: "https://concienciasanate.com",
  siteUrlWww: "https://www.concienciasanate.com",
  controllerName:
    "Laura Rojas, titular y operadora de Conciencia Sánate y del ecosistema Elynthis",
  domicile: "Bogotá D. C., Colombia",
  noticeAddress: "CRA 29 31D 60 SUR, Bogotá, Colombia",
  phone: "+1 3124462648",
  products: [
    "Elynthis Clinical",
    "Elynthis Clinical Lite",
    "Elynthis Care",
  ] as const,
  services: [
    "Psicología",
    "Medicina",
    "Terapias alternativas",
    "Historia clínica electrónica",
    "Agenda médica",
    "Teleconsulta",
    "Gestión documental",
    "Consentimientos",
    "Firma electrónica",
    "Facturación",
    "RIPS",
    "Interoperabilidad",
    "Aplicaciones móviles",
  ] as const,
  jurisdiction: "República de Colombia",
  applicableLaw: "Legislación de la República de Colombia",
  country: "Colombia",
  language: "es-CO",
} as const;

export const LEGAL_CONTACTS = {
  legal: "legal@concienciasanate.com",
  privacy: "privacidad@concienciasanate.com",
  security: "seguridad@concienciasanate.com",
  support: "soporte@concienciasanate.com",
  general: "laurarojas@concienciasanate.com",
  dpoTitle: "Responsable de Protección de Datos Personales",
} as const;

export const LEGAL_HUB_PATH = "/centro-legal";
export const PRIVACY_PATH = "/privacidad";
export const TERMS_PATH = "/terminos-y-condiciones";
/** Página pública operativa de cierre (accesible sin login; útil para Google/soporte). */
export const DELETE_ACCOUNT_PATH = "/eliminar-cuenta";
/** Sección canónica en la Política de Privacidad. */
export const ACCOUNT_CLOSURE_SECTION_ID = "cierre-y-supresion-de-datos";
export const DELETE_ACCOUNT_SECTION_PATH = `${PRIVACY_PATH}#${ACCOUNT_CLOSURE_SECTION_ID}`;
/** Ancla histórica conservada por compatibilidad. */
export const LEGACY_DELETE_ACCOUNT_SECTION_PATH = `${PRIVACY_PATH}#eliminacion-de-cuenta`;

/** Versión del corpus documental publicado en el sitio. */
export const LEGAL_CORPUS_VERSION = "1.3.0";
export const LEGAL_CORPUS_UPDATED_AT = "2026-08-08";

export const THIRD_PARTY_SERVICES = [
  {
    name: "Supabase",
    purpose:
      "Autenticación, base de datos PostgreSQL, almacenamiento, controles RLS y respaldos.",
  },
  {
    name: "Cloudflare",
    purpose:
      "DNS, CDN, protección DDoS, WAF, seguridad y rendimiento.",
  },
  {
    name: "Resend u otro proveedor transaccional",
    purpose: "Envío de comunicaciones relacionadas con el servicio.",
  },
  {
    name: "Google",
    purpose:
      "Google Sign-In (openid, email, profile), OAuth y sincronización opcional con Google Calendar.",
  },
  {
    name: "Apple",
    purpose:
      "Inicio de sesión, distribución móvil o integración autorizada con servicios Apple.",
  },
  {
    name: "Stripe u otro procesador de pagos",
    purpose: "Procesamiento de pagos y administración de suscripciones.",
  },
  {
    name: "OpenAI u otro proveedor de IA expresamente habilitado",
    purpose:
      "Funciones asistivas no diagnósticas; excluye datos obtenidos mediante APIs de Google.",
  },
  {
    name: "Proveedores de monitoreo de errores",
    purpose:
      "Detección de fallos y seguridad, aplicando minimización y evitando datos clínicos innecesarios.",
  },
] as const;

export const NORMATIVE_REFERENCES = [
  "Constitución Política de Colombia",
  "Ley Estatutaria 1581 de 2012",
  "Decreto 1377 de 2013 (compilado en el Decreto 1074 de 2015)",
  "Ley 1266 de 2008 (cuando resulte aplicable)",
  "Resolución 839 de 2017 (historia clínica / conservación)",
  "Normas colombianas sobre historia clínica y atención en salud",
  "Google API Services User Data Policy (Limited Use)",
  "Google Workspace User Data and Developer Policy",
] as const;
