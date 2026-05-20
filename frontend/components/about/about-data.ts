export const aboutHeroCopy = {
  eyebrow: "Psicología aplicada · salud mental digital",
  title:
    "Comprender, regular y sostener procesos psicológicos — con evidencia y límites explícitos.",
  subtitle:
    "Psicoeducación y ejercicios de regulación emocional informados por ciencia clínica. No ofrecemos psicoterapia ni evaluación diagnóstica en línea.",
  microbadges: [
    "Evidencia empírica",
    "Regulación emocional",
    "Límites éticos",
  ] as const,
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Conocer Elynthis", href: "/elynthis" },
  ethicsNote:
    "Este entorno no reemplaza la consulta con un profesional de salud mental.",
  ethicsLink: { label: "Alcance y límites", href: "#etica-limites" },
} as const;

/** Principios editoriales — marco clínico (no manifiesto motivacional) */
export type ClinicalEditorialPrincipleKey =
  | "not-productivity"
  | "regulation-not-perfection"
  | "clarity-before-pressure"
  | "understand-before-change"
  | "sustainable-process"
  | "regulation-trained";

export const clinicalEditorialCopy = {
  eyebrow: "Visión clínica",
  title: "Un marco para la experiencia emocional",
  lead:
    "Entendemos el bienestar psicológico como un proceso situado en el tiempo y el contexto, no como rendimiento afectivo ni ausencia de malestar. Priorizamos comprensión, habilidades de regulación emocional y cambios conductuales graduales que puedan sostenerse en la vida cotidiana.",
  principles: [
    {
      key: "not-productivity" as ClinicalEditorialPrincipleKey,
      title: "Bienestar psicológico ≠ optimización emocional",
      body: "La variación del estado de ánimo y la presencia de malestar forman parte de la experiencia humana. No las interpretamos como fracaso personal ni como objetivo de rendimiento.",
    },
    {
      key: "regulation-not-perfection" as ClinicalEditorialPrincipleKey,
      title: "Regulación emocional ≠ supresión",
      body: "Se refiere a modular intensidad y duración de las respuestas, no a eliminar emociones desagradables ni a exigir calma permanente.",
    },
    {
      key: "clarity-before-pressure" as ClinicalEditorialPrincipleKey,
      title: "Claridad puede reducir sufrimiento secundario",
      body: "Parte del malestar se amplía por confusión o falta de lenguaje. Nombrar con precisión ayuda a orientarse; no sustituye intervención clínica cuando esta es necesaria.",
    },
    {
      key: "understand-before-change" as ClinicalEditorialPrincipleKey,
      title: "La comprensión suele preceder al cambio",
      body: "Formular hipótesis sobre patrones, emociones y contexto facilita decisiones más coherentes que actuar solo desde la urgencia o la autocrítica.",
    },
    {
      key: "sustainable-process" as ClinicalEditorialPrincipleKey,
      title: "Cambios graduales y repetibles",
      body: "La adherencia en contextos reales importa más que la intensidad del esfuerzo o los picos de motivación, que suelen ser poco sostenibles.",
    },
    {
      key: "regulation-trained" as ClinicalEditorialPrincipleKey,
      title: "Habilidades que se practican",
      body: "Como otras capacidades conductuales: requieren repetición, tiempo y ajuste al entorno. El progreso no es lineal ni equivalente entre personas.",
    },
  ],
  closingLine:
    "El cuidado de la salud mental es un proceso continuo, sin metas de rendimiento ni plazos universales de mejora.",
  ethics: {
    title: "Alcance del servicio",
    body: "Contenido psicoeducativo y herramientas de autoaprendizaje estructurado. Sin diagnóstico, sin prescripción de tratamiento ni atención de urgencias clínicas en línea.",
    link: {
      label: "Información legal y de privacidad",
      href: "/privacidad",
    },
  },
} as const;

/** @deprecated Usar clinicalEditorialCopy */
export const clinicalVisionCopy = clinicalEditorialCopy;

/** @deprecated Usar ClinicalPillarKey */
export type ClinicalVisionPillarKey = ClinicalEditorialPrincipleKey;

export type ClinicalPillarKey =
  | "tcc"
  | "regulation"
  | "neuroscience"
  | "habits"
  | "psychoeducation"
  | "clinicalTech";

export type ClinicalPillar = {
  key: ClinicalPillarKey;
  label: string;
  discipline: string;
  body: string;
};

export const clinicalPillarsCopy = {
  eyebrow: "Pilares clínicos",
  title: "Fundamentos que orientan el diseño",
  description:
    "Los recursos se inspiran en literatura clínica y modelos con respaldo empírico, adaptados a formato psicoeducativo. No equivalen a psicoterapia individual ni a un plan de tratamiento personalizado.",
  pillars: [
    {
      key: "tcc",
      label: "TCC",
      discipline: "Modelo cognitivo-conductual",
      body: "Relacionamos pensamientos, conductas y factores de mantenimiento en material educativo. Informa el diseño; no implica que cada persona esté en terapia cognitivo-conductual formal.",
    },
    {
      key: "regulation",
      label: "Regulación emocional",
      discipline: "Habilidades de modulación",
      body: "Identificación, nombramiento y estrategias para modular ansiedad, estrés y activación fisiológica, con expectativas realistas sobre su alcance fuera de terapia.",
    },
    {
      key: "neuroscience",
      label: "Neurociencia aplicada",
      discipline: "Psicoeducación biológica",
      body: "Explicamos respuestas del sistema nervioso y el papel del contexto sin reducir el sufrimiento a un defecto cerebral ni prometer cambios neurobiológicos rápidos.",
    },
    {
      key: "habits",
      label: "Hábitos y conducta",
      discipline: "Ciencia del comportamiento",
      body: "Microcambios repetibles y seguimiento ligero, centrados en mantenimiento conductual en el entorno real, no en métricas de productividad personal.",
    },
    {
      key: "psychoeducation",
      label: "Psicoeducación",
      discipline: "Traducción clínica",
      body: "Conceptos ordenados, definiciones precisas y ejemplos aplicables. El rigor conceptual importa tanto como la accesibilidad del lenguaje.",
    },
    {
      key: "clinicalTech",
      label: "Tecnología clínica",
      discipline: "Salud digital",
      body: "Infraestructura para organizar información y continuidad al servicio del criterio profesional. Sin algoritmos diagnósticos ni recomendaciones que sustituyan el juicio clínico.",
    },
  ] satisfies ClinicalPillar[],
} as const;

/** @deprecated Usar clinicalPillarsCopy */
export type ScientificFoundationKey = ClinicalPillarKey;
export type ScientificFoundationArea = ClinicalPillar;
export const scientificFoundationCopy = {
  eyebrow: clinicalPillarsCopy.eyebrow,
  title: clinicalPillarsCopy.title,
  description: clinicalPillarsCopy.description,
  areas: clinicalPillarsCopy.pillars,
  closingLine:
    "La evidencia orienta el diseño educativo. No reemplaza evaluación clínica individual ni decisiones de un profesional habilitado.",
} as const;

export type DifferentialBlockKey = "evidence" | "clarity" | "ethics" | "tools";

export const differentialCopy = {
  eyebrow: "Diferencial",
  title: "Criterio clínico frente al ruido informativo",
  description:
    "Diseñamos para la comprensión y la práctica sostenida, en línea con principios de salud digital responsable — no para maximizar tiempo en pantalla.",
  blocks: [
    {
      key: "evidence" as DifferentialBlockKey,
      title: "Evidencia",
      body: "Priorizamos modelos y hallazgos con respaldo empírico, presentados con matices. Evitamos simplificar el malestar ni ocultar su complejidad.",
    },
    {
      key: "clarity" as DifferentialBlockKey,
      title: "Claridad",
      body: "Jerarquía visual y verbal que reduce carga cognitiva. Facilita leer y decidir con calma, sin estímulos diseñados para reacción impulsiva.",
    },
    {
      key: "ethics" as DifferentialBlockKey,
      title: "Ética",
      body: "Alcance del servicio explícito: sin diagnóstico automático, sin prometer resultados clínicos ni sustituir la relación terapéutica.",
    },
    {
      key: "tools" as DifferentialBlockKey,
      title: "Herramientas aplicables",
      body: "Ejercicios breves con instrucciones concretas y duración definida. Complementan el aprendizaje; no constituyen un protocolo de tratamiento completo.",
    },
  ],
} as const;

export type EcosystemNodeKey =
  | "psychology"
  | "education"
  | "regulation"
  | "habits"
  | "clinicalTechnology"
  | "elynthis";

/** @deprecated Usar EcosystemNodeKey */
export type EcosystemPillarKey = EcosystemNodeKey;

export type EcosystemNode = {
  key: EcosystemNodeKey;
  label: string;
  tagline: string;
  description: string;
  x: number;
  y: number;
  href?: string;
};

export const ecosystemCopy = {
  eyebrow: "Ecosistema",
  title: "Cómo se articulan los componentes",
  description:
    "Psicoeducación, regulación emocional, hábitos y tecnología clínica en un flujo coherente: comprender, practicar, sostener y —para profesionales— organizar la práctica.",
  centerLabel: "Coherencia clínica",
  nodes: [
    {
      key: "psychology",
      label: "Psicología",
      tagline: "Marco de comprensión",
      description:
        "Modelos con respaldo empírico para observar patrones cognitivos, emocionales y conductuales antes de proponer estrategias. Orienta qué revisar y cómo nombrarlo.",
      x: 50,
      y: 12,
    },
    {
      key: "education",
      label: "Psicoeducación",
      tagline: "Contenido estructurado",
      description:
        "Secuencias progresivas que traducen evidencia en lenguaje accesible. Reduce la dispersión informativa sin sustituir formación clínica del usuario.",
      x: 14,
      y: 36,
    },
    {
      key: "regulation",
      label: "Regulación emocional",
      tagline: "Práctica entre sesiones",
      description:
        "Ejercicios para modular ansiedad, estrés y activación, utilizables como apoyo al autoaprendizaje o entre sesiones con un profesional, con expectativas acotadas.",
      x: 86,
      y: 36,
    },
    {
      key: "habits",
      label: "Hábitos",
      tagline: "Conducta en contexto",
      description:
        "Rutinas breves y seguimiento ligero anclados al entorno real. El foco es adherencia y mantenimiento, no rendimiento ni comparación entre usuarios.",
      x: 20,
      y: 74,
    },
    {
      key: "clinicalTechnology",
      label: "Tecnología clínica",
      tagline: "Infraestructura digital",
      description:
        "Herramientas para reducir fricción administrativa y documentar procesos con transparencia. Facilitan el trabajo profesional; no emiten diagnósticos ni planes de tratamiento.",
      x: 80,
      y: 74,
    },
    {
      key: "elynthis",
      label: "Elynthis",
      tagline: "Práctica profesional",
      description:
        "Software para estructurar pacientes, sesiones y seguimiento en contextos de salud mental. Pensado para profesionales habilitados, no para autodiagnóstico.",
      x: 50,
      y: 88,
      href: "/elynthis",
    },
  ] satisfies EcosystemNode[],
  connections: [
    ["psychology", "education"],
    ["psychology", "regulation"],
    ["psychology", "habits"],
    ["psychology", "clinicalTechnology"],
    ["education", "regulation"],
    ["education", "habits"],
    ["regulation", "habits"],
    ["regulation", "elynthis"],
    ["regulation", "clinicalTechnology"],
    ["habits", "clinicalTechnology"],
    ["habits", "elynthis"],
    ["clinicalTechnology", "elynthis"],
    ["psychology", "elynthis"],
    ["education", "clinicalTechnology"],
  ] as const satisfies readonly [EcosystemNodeKey, EcosystemNodeKey][],
  panelHint: "Selecciona un nodo para ver su relación con el resto del ecosistema.",
  elynthisLinkLabel: "Conocer Elynthis",
} as const;

/** @deprecated Usar ClinicalEditorialPrincipleKey */
export type MentalHealthManifestoKey = ClinicalEditorialPrincipleKey;

/** @deprecated Fusionado en clinicalEditorialCopy */
export const mentalHealthManifestoCopy = {
  eyebrow: clinicalEditorialCopy.eyebrow,
  title: clinicalEditorialCopy.title,
  lead: clinicalEditorialCopy.lead,
  statements: clinicalEditorialCopy.principles.map((p) => ({
    key: p.key as MentalHealthManifestoKey,
    title: p.title,
    body: p.body,
  })),
  closingLine: clinicalEditorialCopy.closingLine,
} as const;

export const aboutPreFooterCopy = {
  eyebrow: "Explora el ecosistema",
  title: "Psicoeducación y herramientas con criterio clínico.",
  subtitle:
    "Recursos para comprender y practicar regulación emocional, y tecnología para profesionales de la salud mental.",
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Ver Elynthis", href: "/elynthis" },
} as const;

export const aboutHeroVisualBadge = "Marco clínico";

export const aboutHeroVisualChips = [
  {
    title: "Nombrar",
    body: "Precisión en lo que ocurre",
    className: "left-0 top-[20%] sm:left-2",
    enterX: -14,
    delay: 0.75,
  },
  {
    title: "Practicar",
    body: "Habilidades repetibles",
    className: "right-0 bottom-[20%] sm:right-2",
    enterX: 14,
    delay: 0.92,
  },
] as const;

/** @deprecated Importar desde `@/components/about/about-seo`. */
export { ABOUT_SEO, ABOUT_PAGE_SECTIONS } from "@/components/about/about-seo";
