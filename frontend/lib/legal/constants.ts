/** Identidad jurídica y operativa del ecosistema Conciencia Sánate / Elynthis. */
export const LEGAL_ENTITY = {
  tradeName: "Conciencia Sánate",
  softwareName: "Elynthis",
  siteUrl: "https://concienciasanate.com",
  siteUrlWww: "https://www.concienciasanate.com",
  products: [
    "Elynthis Clinical",
    "Elynthis Care",
    "Elynthis Lite",
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

export const LEGAL_HUB_PATH = "/Centro-Legal";

/** Versión del corpus documental publicado en el sitio. */
export const LEGAL_CORPUS_VERSION = "1.0.0";
export const LEGAL_CORPUS_UPDATED_AT = "2026-08-04";

export const THIRD_PARTY_SERVICES = [
  {
    name: "Google",
    purpose:
      "Autenticación OAuth, servicios de identidad, Google Calendar y, cuando aplique, analítica.",
  },
  {
    name: "Apple",
    purpose:
      "Inicio de sesión con Apple, distribución de aplicaciones móviles y Apple Calendar.",
  },
  {
    name: "Cloudflare",
    purpose:
      "CDN, protección DDoS, WAF, DNS y cookies técnicas de seguridad/rendimiento.",
  },
  {
    name: "Supabase",
    purpose:
      "Base de datos PostgreSQL, autenticación, almacenamiento de archivos, Row Level Security (RLS) y respaldos.",
  },
  {
    name: "Resend",
    purpose: "Envío transaccional de correos electrónicos del ecosistema.",
  },
  {
    name: "OpenAI",
    purpose:
      "Procesamiento de asistencias de IA no diagnósticas, siempre bajo controles de privacidad y sin sustituir criterio clínico.",
  },
  {
    name: "Google Calendar",
    purpose: "Sincronización opcional de agenda del profesional o del paciente.",
  },
  {
    name: "Apple Calendar",
    purpose: "Sincronización opcional de agenda en dispositivos Apple.",
  },
  {
    name: "Stripe",
    purpose: "Procesamiento de pagos y facturación de suscripciones cuando esté habilitado.",
  },
] as const;

export const NORMATIVE_REFERENCES = [
  "Constitución Política de Colombia",
  "Ley 23 de 1981 (Ética Médica y reserva de la historia clínica)",
  "Resolución 1995 de 1999 (Historia Clínica)",
  "Resolución 839 de 2017 (modifica la Resolución 1995 de 1999)",
  "Ley 1581 de 2012 (Protección de Datos Personales)",
  "Decreto 1377 de 2013",
  "Decreto 1074 de 2015",
  "Ley 1266 de 2008 (Habeas Data)",
  "Ley Estatutaria 1751 de 2015 (Derecho Fundamental a la Salud)",
  "Decreto Único Reglamentario 780 de 2016",
  "Ley 2015 de 2020 (Historia Clínica Electrónica Interoperable)",
  "Resolución 866 de 2021 (Elementos de datos clínicos e interoperabilidad)",
  "Resolución 1888 de 2025 (Resumen Digital de Atención — RDA e implementación de la IHCE)",
  "Circulares vigentes del Ministerio de Salud sobre interoperabilidad de HCE",
  "Guías de Gobierno Digital del MinTIC (cuando resulten aplicables)",
] as const;
