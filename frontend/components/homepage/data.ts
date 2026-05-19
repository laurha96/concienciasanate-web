/** Copy de la Hero (home). */
export const heroCopy = {
  badge:
    "Psicología basada en evidencia · Regulación emocional · Tecnología clínica",
  title:
    "Bienestar emocional basado en ciencia, claridad y herramientas prácticas",
  subtitle:
    "Conciencia Sánate integra educación psicológica, regulación emocional, hábitos sostenibles y tecnología clínica para ayudarte a comprender tu mente, cuidar tu cuerpo y construir bienestar real.",
  microcopy:
    "Sin promesas mágicas. Solo herramientas reales, ciencia aplicada y procesos sostenibles.",
  ctas: {
    primary: { label: "Explorar recursos", href: "/herramientas" },
    secondary: { label: "Conocer Elynthis", href: "/elynthis" },
  },
  visualTags: ["mente", "regulación", "hábitos", "evidencia"] as const,
} as const;

/** Copy institucional de marca (home, footer, metadata). */
export const brandCopy = {
  lead:
    "Conciencia Sánate es una plataforma digital de salud mental y bienestar emocional basada en evidencia.",
  body:
    "Integra educación psicológica, herramientas prácticas de regulación emocional, hábitos sostenibles y tecnología clínica para ayudar a las personas a comprender su mente, cuidar su cuerpo y construir bienestar real.",
  closing:
    "Desde recursos psicoeducativos hasta Elynthis, nuestro sistema clínico para profesionales, buscamos unir ciencia, claridad y humanidad en una experiencia digital simple, ética y profesional.",
  footer:
    "Plataforma digital de salud mental y bienestar basada en evidencia. Educación, herramientas prácticas y tecnología clínica.",
} as const;

/** @deprecated Usar `siteNavItems` desde `@/lib/site-nav` */
export { siteNavItems as navLinks } from "@/lib/site-nav";

export const ecosystemCopy = {
  title: "Un ecosistema digital de salud mental",
  subtitle:
    "Una plataforma creada para unir educación psicológica, herramientas de regulación emocional y tecnología clínica en un solo lugar.",
} as const;

export const ecosystemCards = [
  {
    key: "education",
    title: "Educación basada en evidencia",
    body: "Artículos y recursos para comprender ansiedad, estrés, emociones, hábitos y salud mental desde una mirada científica y cercana.",
  },
  {
    key: "tools",
    title: "Herramientas prácticas",
    body: "Ejercicios guiados para regulación emocional, autocuidado, hábitos sostenibles y conexión mente-cuerpo.",
  },
  {
    key: "clinical",
    title: "Tecnología clínica",
    body: "Elynthis facilita la gestión clínica, el seguimiento terapéutico y la organización profesional para psicólogos y profesionales de la salud.",
  },
  {
    key: "wellbeing",
    title: "Bienestar sostenible",
    body: "Pequeños pasos consistentes para construir cambios reales, sin promesas mágicas ni soluciones rápidas.",
  },
] as const;

export const methodCopy = {
  title: "Comprender, regular y transformar",
  intro:
    "El bienestar emocional empieza cuando puedes comprender lo que te ocurre, aprender a regularlo y construir nuevas formas de relacionarte contigo, con tu cuerpo y con tu vida.",
  microcopy:
    "No buscamos soluciones rápidas. Buscamos procesos claros y sostenibles.",
} as const;

export const methodBlocks = [
  {
    key: "understand",
    number: "01",
    title: "Comprender",
    body: "Identificar patrones, emociones y necesidades.",
  },
  {
    key: "regulate",
    number: "02",
    title: "Regular",
    body: "Desarrollar herramientas para manejar ansiedad, estrés y sobrecarga emocional.",
  },
  {
    key: "transform",
    number: "03",
    title: "Transformar",
    body: "Construir hábitos, claridad y bienestar sostenible.",
  },
] as const;

export const elynthisCopy = {
  badge: "Elynthis",
  title: "Elynthis: tecnología clínica para profesionales",
  subtitle:
    "Organiza tu práctica clínica en un entorno claro, seguro y profesional.",
  body: "Elynthis permite gestionar pacientes, historias clínicas, documentos y seguimiento terapéutico dentro de un entorno claro, seguro y profesional.",
  ctas: {
    primary: { label: "Conocer Elynthis", href: "/elynthis" },
    secondary: { label: "Solicitar demo", href: "/contacto" },
  },
} as const;

export const elynthisFeatures = [
  "Gestión de pacientes",
  "Historias clínicas",
  "Documentos clínicos",
  "Seguimiento terapéutico",
  "Planes de intervención",
  "Agenda y organización",
  "Reportes y evolución",
  "Seguridad de la información",
] as const;

export const evidenceCopy = {
  badge: "Basado en evidencia",
  title: "Ciencia aplicada al bienestar cotidiano",
  subtitle:
    "Creemos en una salud mental clara, ética y basada en evidencia.",
} as const;

export const evidenceCards = [
  {
    key: "evidence",
    title: "Psicología basada en evidencia",
    body: "Contenido orientado por modelos clínicos y hallazgos científicos, explicado de forma simple y aplicable.",
  },
  {
    key: "behavior",
    title: "Ciencia del comportamiento",
    body: "Herramientas para comprender patrones, hábitos, decisiones y cambios sostenibles.",
  },
  {
    key: "regulation",
    title: "Regulación emocional",
    body: "Recursos para identificar, nombrar y gestionar emociones de forma más consciente.",
  },
  {
    key: "mind-body",
    title: "Intervenciones mente-cuerpo",
    body: "Prácticas complementarias para reconocer la relación entre cuerpo, estrés, emoción y autocuidado.",
  },
  {
    key: "habits",
    title: "Hábitos sostenibles",
    body: "Pequeñas acciones repetidas con sentido, más allá de la motivación momentánea.",
  },
  {
    key: "tracking",
    title: "Seguimiento y medición",
    body: "La claridad también se construye observando avances, patrones y necesidades.",
  },
] as const;

/** @deprecated Use evidenceCards */
export const scientificCards = evidenceCards;

export const finalCtaCopy = {
  title: "Empieza con un paso pequeño, sostenido y real",
  subtitle:
    "Explora recursos, conoce herramientas prácticas o descubre cómo Elynthis puede apoyar una práctica clínica más organizada.",
  microcopy:
    "Puedes empezar leyendo, practicando una herramienta o explorando la tecnología clínica.",
  ctas: {
    resources: { label: "Explorar recursos", href: "/herramientas" },
    register: { label: "Crear cuenta" },
    elynthis: { label: "Conocer Elynthis", href: "/elynthis" },
  },
} as const;

/** @deprecated Usar `EDUCATION_HUB_CATEGORIES` desde `education-hub-data.ts` */
export {
  EDUCATION_HUB_CATEGORIES as educationCategories,
  educationHubCopy,
} from "@/components/homepage/education-hub-data";
