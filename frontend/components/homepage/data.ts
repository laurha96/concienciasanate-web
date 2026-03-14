export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/herramientas", label: "Herramientas" },
  { href: "/elynthis", label: "Elynthis" },
  { href: "/planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const ecosystemCards = [
  {
    key: "education",
    title: "Educación",
    body:
      "Artículos basados en evidencia para comprender salud mental, hábitos y cuerpo",
    bullets: ["estrés", "regulación emocional", "sueño", "hábitos"],
    footerLeft: { label: "Ver artículos", href: "/blog" },
    footerRight: { label: "Leer más", href: "/blog" },
  },
  {
    key: "tools",
    title: "Herramientas",
    body: "Prácticas guiadas para regulación emocional y hábitos sostenibles",
    bullets: ["respiración", "diario emocional", "autoevaluaciones"],
    cta: { label: "Probar ahora", href: "/herramientas" },
  },
  {
    key: "clinical",
    title: "Tecnología clínica",
    body:
      "Elynthis conecta a los profesionales de la salud con seguimiento y documenta.",
    bullets: ["pacientes", "historia clínica", "seguimiento"],
    cta: { label: "Conocer Elynthis", href: "/elynthis" },
  },
] as const;

export const scientificCards = [
  {
    title: "Psicología basada en evidencia",
    body: "Marcos y prácticas con fundamento clínico y claridad editorial.",
  },
  {
    title: "Ciencia del comportamiento",
    body: "Diseño de hábitos sostenibles con foco en contexto y adherencia.",
  },
  {
    title: "Regulación emocional: qué es y por qué",
    body: "Comprensión y herramientas para responder con más flexibilidad.",
  },
  {
    title: "Intervenciones mente-cuerpo",
    body: "Prácticas simples para apoyar calma, enfoque y recuperación.",
  },
] as const;

export const articles = [
  {
    title: "Estrés",
    description:
      "Señales, fisiología y microintervenciones para recuperar estabilidad.",
  },
  {
    title: "Regulación emocional: qué es y por qué es importante",
    description:
      "Comprender el sistema nervioso para actuar con más claridad y compasión.",
  },
  {
    title: "La conexión entre sueño y salud mental",
    description: "Un puente clave entre energía, ánimo y resiliencia diaria.",
  },
  {
    title: "Pequeños hábitos para un cambio sostenible",
    description:
      "Diseño de rutinas realistas: menos fricción, más consistencia.",
  },
] as const;
