export const aboutHeroCopy = {
  eyebrow: "Sobre Conciencia Sánate",
  title: "Psicología basada en evidencia, con calma y estructura",
  subtitle:
    "Una plataforma health-tech que integra educación psicológica, regulación emocional y herramientas prácticas — con tecnología clínica ética (Elynthis) — para acompañar procesos reales, sin ruido ni promesas vacías.",
  whatWeDo: {
    label: "Qué hacemos",
    items: [
      "Educación psicológica clara y aplicable",
      "Habilidades de regulación emocional sostenibles",
      "Hábitos de salud mental con estructura ligera",
      "Tecnología clínica que organiza, no sustituye",
    ],
  },
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Conocer Elynthis", href: "/elynthis" },
} as const;

export const clinicalVisionCopy = {
  eyebrow: "Nuestra visión clínica",
  title: "Comprender antes de intervenir",
  lead:
    "La salud mental sostenible empieza por entender qué ocurre — en la mente, en el cuerpo y en los hábitos — antes de pedir cambios que no se sostienen. Diseñamos experiencias que regulan, no saturan.",
  pillars: [
    {
      key: "understand",
      title: "Comprender antes de intervenir",
      body: "Priorizamos psicoeducación y claridad conceptual para que cada paso tenga sentido clínico y personal.",
    },
    {
      key: "regulation",
      title: "Regulación emocional sostenible",
      body: "Enseñamos habilidades aplicables — no frases motivacionales — para habitar emociones con más seguridad.",
    },
    {
      key: "evidence",
      title: "Evidencia aplicada",
      body: "Traducimos modelos respaldados (TCC, ciencia del comportamiento, neurociencia aplicada) a práctica cotidiana.",
    },
    {
      key: "practical",
      title: "Salud mental práctica",
      body: "Intervenciones pequeñas, medibles y repetibles que encajan en la vida real, no en un ideal de productividad.",
    },
    {
      key: "autonomy",
      title: "Autonomía emocional",
      body: "Fomentamos criterio propio y herramientas que la persona puede usar sin depender de la plataforma.",
    },
    {
      key: "accompaniment",
      title: "Acompañamiento sin dependencia",
      body: "Acompañamos procesos con límites claros: apoyo digital responsable, no sustituto de relación terapéutica.",
    },
  ],
} as const;

export const differentialCopy = {
  eyebrow: "Por qué somos distintos",
  title: "Ciencia, regulación y diseño con criterio clínico",
  description:
    "No competimos por volumen de contenido ni por hype wellness. Construimos una experiencia donde cada decisión de producto responde a cómo la mente aprende, regula y sostiene cambios.",
  blocks: [
    {
      key: "evidence",
      title: "Psicología basada en evidencia",
      summary:
        "Modelos respaldados científicamente, traducidos con rigor y accesibilidad clínica.",
      points: [
        "Terapia cognitivo-conductual (TCC) y derivados aplicados a educación y autocuidado",
        "Regulación emocional con marcos validados en investigación",
        "Ciencia del comportamiento para hábitos sostenibles",
        "Psicoeducación estructurada: conceptos, ejemplos y práctica guiada",
      ],
    },
    {
      key: "regulation",
      title: "Regulación emocional real",
      summary:
        "Habilidades concretas para comprender, nombrar y modular estados emocionales.",
      points: [
        "Comprensión funcional de emociones (función, señal, contexto)",
        "Estrategias aplicables para ansiedad, activación y rumiación",
        "Prácticas breves integrables en el día a día",
        "Hábitos emocionales que priorizan consistencia sobre perfección",
      ],
    },
    {
      key: "technology",
      title: "Tecnología clínica ética",
      summary:
        "Elynthis organiza el trabajo profesional; la plataforma educativa organiza el aprendizaje.",
      points: [
        "Estructura de seguimiento sin reemplazar criterio clínico",
        "Flujos limpios para profesionales y personas en proceso",
        "Datos y organización al servicio de la práctica, no del espectáculo",
        "Transparencia sobre límites: herramienta, no diagnóstico automático",
      ],
    },
    {
      key: "minimalism",
      title: "Minimalismo terapéutico",
      summary:
        "Menos saturación visual y cognitiva para favorecer claridad y adherencia.",
      points: [
        "Jerarquía tipográfica y espaciado que reduce carga mental",
        "Interacciones suaves (300ms) sin estímulos competitivos",
        "Diseño emocionalmente regulador: calma, confianza, estructura",
        "Contenido escaneable con profundidad opcional para quien la necesite",
      ],
    },
  ],
} as const;

export type EcosystemPillarKey =
  | "psychology"
  | "education"
  | "tools"
  | "habits"
  | "technology";

export const ecosystemCopy = {
  eyebrow: "Ecosistema",
  title: "Un sistema coherente, no piezas sueltas",
  description:
    "Psicología, educación, herramientas, hábitos y tecnología clínica se conectan con un mismo criterio: claridad, evidencia y sostenibilidad.",
  pillars: [
    {
      key: "psychology" as const,
      label: "Psicología",
      tagline: "Comprensión clínica",
      description:
        "Marco conceptual basado en evidencia para entender patrones emocionales, cognitivos y conductuales.",
    },
    {
      key: "education" as const,
      label: "Educación",
      tagline: "Psicoeducación clara",
      description:
        "Contenidos estructurados que traducen la ciencia en lenguaje accesible sin perder rigor.",
    },
    {
      key: "tools" as const,
      label: "Herramientas",
      tagline: "Práctica en el momento",
      description:
        "Ejercicios breves y activables para regular, reflexionar y sostener procesos entre sesiones o en autocuidado.",
    },
    {
      key: "habits" as const,
      label: "Hábitos",
      tagline: "Sostenibilidad real",
      description:
        "Micro-rutinas y seguimiento ligero que favorecen adherencia sin dashboards abrumadores.",
    },
    {
      key: "technology" as const,
      label: "Tecnología clínica",
      tagline: "Elynthis",
      description:
        "Software que estructura flujo profesional y seguimiento — criterio clínico humano, tecnología organizada.",
    },
  ],
} as const;

export const mentalHealthManifestoCopy = {
  eyebrow: "Cómo pensamos la salud mental",
  title: "Un manifiesto de claridad, no de presión",
  lead:
    "Creemos que cuidar la mente no es optimizar rendimiento ni perseguir estados perfectos. Es construir capacidad para habitar la vida con más regulación, sentido y autonomía.",
  statements: [
    {
      key: "not-productivity",
      title: "La salud mental no es productividad extrema",
      body: "Rechazamos el marco de “hacer más” como métrica de bienestar. Priorizamos funcionamiento emocional, relacional y vital.",
    },
    {
      key: "not-perfection",
      title: "Regulación ≠ perfección",
      body: "Regular no es eliminar emociones difíciles, sino ampliar la capacidad de responder con flexibilidad y autocompasión.",
    },
    {
      key: "small-steps",
      title: "Procesos pequeños y sostenibles",
      body: "Los cambios duraderos suelen ser graduales. Diseñamos para la repetición tranquila, no para el pico motivacional.",
    },
    {
      key: "clarity-first",
      title: "Claridad antes que presión",
      body: "Cuando entendemos qué nos pasa, la acción deja de sentirse como exigencia y pasa a ser elección informada.",
    },
    {
      key: "understand-first",
      title: "Comprender antes de cambiar",
      body: "Intervenir sin comprensión genera resistencia. Por eso educamos antes de pedir transformaciones rápidas.",
    },
  ],
} as const;

export const aboutPreFooterCopy = {
  title: "Empieza desde claridad, no desde presión",
  subtitle:
    "Explora herramientas basadas en evidencia o conoce cómo Elynthis apoya el trabajo clínico con estructura y ética.",
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Crear cuenta", href: "/registro" },
  tertiaryCta: { label: "Ver Elynthis", href: "/elynthis" },
} as const;

export const ABOUT_SEO = {
  title: "Sobre Conciencia Sánate | Psicología basada en evidencia",
  description:
    "Conoce Conciencia Sánate: plataforma health-tech de salud mental con educación psicológica, regulación emocional, hábitos sostenibles y tecnología clínica Elynthis. Ética, evidencia y diseño minimalista.",
  path: "/sobre",
} as const;
