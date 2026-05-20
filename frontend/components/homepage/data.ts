/** Copy de la Hero (home). */
export const heroCopy = {
  badge: "Salud mental basada en evidencia",
  title: "Comprender tu mente también es aprender a sanar",
  subtitle:
    "Educación psicológica, regulación emocional y herramientas prácticas basadas en evidencia para la vida real.",
  microcopy:
    "Claridad clínica, procesos sostenibles y tecnología al servicio del bienestar.",
  ctas: {
    primary: { label: "Explorar recursos", href: "/herramientas" },
    secondary: { label: "Conocer Elynthis", href: "/elynthis" },
  },
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
    body: "Artículos sobre ansiedad, estrés, emociones y hábitos con mirada científica.",
  },
  {
    key: "tools",
    title: "Herramientas prácticas",
    body: "Ejercicios guiados de regulación, autocuidado y conexión mente-cuerpo.",
  },
  {
    key: "clinical",
    title: "Tecnología clínica",
    body: "Gestión clínica y seguimiento para psicólogos y profesionales de la salud.",
  },
  {
    key: "wellbeing",
    title: "Bienestar sostenible",
    body: "Pasos consistentes para cambios reales, sin promesas mágicas.",
  },
] as const;

export const methodCopy = {
  title: "Comprender, regular y transformar",
  intro:
    "Comprende lo que te ocurre, regúlalo y construye una relación más clara contigo y con tu cuerpo.",
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
  badge: "Elynthis · Tecnología clínica",
  title: "Elynthis para profesionales",
  subtitle: "Panel clínico claro, seguro y organizado.",
  body: "Elynthis permite gestionar pacientes, historias clínicas, documentos y seguimiento terapéutico dentro de un entorno claro, seguro y profesional.",
  ctas: {
    primary: { label: "Conocer Elynthis", href: "/elynthis" },
    secondary: { label: "Solicitar demo", href: "/contacto" },
  },
} as const;

/** Etiquetas cortas para pills en la Home */
export const elynthisFeaturePills = [
  "Pacientes",
  "Historias",
  "Documentos",
  "Seguimiento",
  "Planes",
  "Agenda",
  "Reportes",
  "Seguridad",
] as const;

/** @deprecated Usar `elynthisFeaturePills` en la Home */
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
    body: "Modelos clínicos y ciencia explicados de forma simple.",
  },
  {
    key: "behavior",
    title: "Ciencia del comportamiento",
    body: "Patrones, hábitos y cambios sostenibles.",
  },
  {
    key: "regulation",
    title: "Regulación emocional",
    body: "Identificar, nombrar y gestionar emociones.",
  },
  {
    key: "mind-body",
    title: "Intervenciones mente-cuerpo",
    body: "Cuerpo, estrés, emoción y autocuidado integrados.",
  },
  {
    key: "habits",
    title: "Hábitos sostenibles",
    body: "Acciones pequeñas con sentido, más allá de la motivación.",
  },
  {
    key: "tracking",
    title: "Seguimiento y medición",
    body: "Observar avances, patrones y necesidades con claridad.",
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
