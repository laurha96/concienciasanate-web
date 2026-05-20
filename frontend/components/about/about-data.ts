export const aboutHeroCopy = {
  eyebrow: "Salud mental · evidencia clínica",
  title:
    "Psicología basada en evidencia para comprender, regular y transformar.",
  subtitle:
    "Educación psicológica, herramientas clínicas y tecnología diseñada para acompañar procesos emocionales reales con claridad y estructura.",
  microbadges: [
    "Basado en evidencia",
    "Regulación emocional",
    "Tecnología clínica ética",
  ] as const,
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Conocer Elynthis", href: "/elynthis" },
  ethicsNote: "Sin promesas de cura ni diagnósticos automáticos.",
  ethicsLink: { label: "Ver ética y límites", href: "#etica-limites" },
} as const;

export type ClinicalVisionPillarKey =
  | "understand"
  | "regulation"
  | "science"
  | "autonomy";

export const clinicalVisionCopy = {
  eyebrow: "Nuestra visión clínica",
  title: "Cómo entendemos la salud mental",
  lead:
    "En Conciencia Sánate, el bienestar emocional no se reduce a consejos rápidos ni a contenido motivacional. Lo abordamos como un proceso humano que requiere comprensión, regulación, ciencia aplicada con claridad y un acompañamiento que devuelve autonomía.",
  pillars: [
    {
      key: "understand" as ClinicalVisionPillarKey,
      title: "Comprender antes de intervenir",
      body: "Identificamos patrones, emociones, contexto y necesidades reales antes de buscar cambios rápidos. Comprender primero orienta mejor cada paso y reduce la frustración de intervenir sin mapa.",
    },
    {
      key: "regulation" as ClinicalVisionPillarKey,
      title: "Regulación emocional sostenible",
      body: "Enseñamos habilidades prácticas para la ansiedad, el estrés, la activación por trauma emocional y la sobrecarga — aplicables en el día a día, con calma y estructura clínica.",
    },
    {
      key: "science" as ClinicalVisionPillarKey,
      title: "Ciencia aplicada a la vida real",
      body: "Traducimos modelos clínicos complejos — TCC, neurociencia aplicada, ciencia del comportamiento — en herramientas comprensibles que puedes integrar sin jerga innecesaria.",
    },
    {
      key: "autonomy" as ClinicalVisionPillarKey,
      title: "Autonomía emocional",
      body: "Ofrecemos un acompañamiento que fortalece la independencia, no la dependencia. La plataforma educa y organiza; no sustituye una relación terapéutica ni genera apego a la herramienta.",
    },
  ],
} as const;

export type DifferentialBlockKey =
  | "evidence"
  | "regulation"
  | "technology"
  | "minimalism";

export const differentialCopy = {
  eyebrow: "Por qué somos distintos",
  title: "Un enfoque estratégico, no otro producto de wellness",
  description:
    "Conciencia Sánate no compite por volumen de contenido ni por estímulos motivacionales. Cada decisión — clínica, educativa y tecnológica — responde a cómo la mente comprende, regula y sostiene cambios con evidencia y límites claros.",
  blocks: [
    {
      key: "evidence" as DifferentialBlockKey,
      title: "Psicología basada en evidencia",
      summary:
        "Integramos marcos clínicos validados y los traducimos con rigor y accesibilidad — sin simplificar en exceso ni perder el criterio profesional.",
      points: [
        {
          label: "TCC",
          detail:
            "Terapia cognitivo-conductual y derivados aplicados a educación y autocuidado estructurado.",
        },
        {
          label: "Regulación emocional",
          detail:
            "Marcos validados en investigación para comprender, nombrar y modular estados emocionales.",
        },
        {
          label: "Neurociencia",
          detail:
            "Principios de neurociencia aplicada para explicar patrones sin reduccionismos.",
        },
        {
          label: "Ciencia del comportamiento",
          detail:
            "Hábitos y conductas sostenibles basados en evidencia, no en fuerza de voluntad.",
        },
        {
          label: "Psicoeducación",
          detail:
            "Contenido estructurado: conceptos claros, ejemplos clínicos y práctica guiada.",
        },
      ],
    },
    {
      key: "regulation" as DifferentialBlockKey,
      title: "Regulación emocional real",
      summary:
        "Habilidades concretas y aplicables — no frases inspiradoras — para habitar emociones difíciles con más seguridad y estructura.",
      points: [
        {
          label: "Herramientas aplicables",
          detail:
            "Ejercicios breves, protocolos claros y prácticas integrables en la vida cotidiana.",
        },
        {
          label: "Ansiedad",
          detail:
            "Estrategias para activación, anticipación y rumiación con enfoque clínico.",
        },
        {
          label: "Estrés",
          detail:
            "Regulación del sistema de alerta y recuperación sin patologizar la experiencia humana.",
        },
        {
          label: "Sobrecarga emocional",
          detail:
            "Contención y organización cuando las demandas superan los recursos disponibles.",
        },
        {
          label: "Hábitos emocionales sostenibles",
          detail:
            "Consistencia y repetición con sentido clínico, no perfección ni productividad emocional.",
        },
      ],
    },
    {
      key: "technology" as DifferentialBlockKey,
      title: "Tecnología clínica ética",
      summary:
        "Elynthis organiza procesos clínicos con estructura y claridad. La tecnología acompaña; no sustituye el criterio profesional ni el vínculo terapéutico.",
      points: [
        {
          label: "Elynthis",
          detail:
            "Organiza procesos clínicos, sesiones y seguimiento con flujos limpios para profesionales.",
        },
        {
          label: "Criterio profesional",
          detail:
            "No reemplaza juicio clínico, diagnóstico ni decisiones terapéuticas del especialista.",
        },
        {
          label: "Seguimiento estructurado",
          detail:
            "Historial y continuidad al servicio de la práctica, no del espectáculo digital.",
        },
        {
          label: "Claridad clínica",
          detail:
            "Interfaces que reducen fricción y aumentan legibilidad del proceso, sin ruido.",
        },
      ],
    },
    {
      key: "minimalism" as DifferentialBlockKey,
      title: "Minimalismo terapéutico",
      summary:
        "Diseñamos para reducir carga cognitiva y favorecer calma mental. Menos estímulos, más claridad — como una plataforma clínica moderna debe funcionar.",
      points: [
        {
          label: "Menos ruido cognitivo",
          detail:
            "Sin notificaciones agresivas, gamificación vacía ni saturación de contenido.",
        },
        {
          label: "Diseño regulador",
          detail:
            "Interacciones suaves, ritmo visual calmado y jerarquía que orienta sin abrumar.",
        },
        {
          label: "Claridad visual",
          detail:
            "Tipografía, espaciado y contraste pensados para escaneo sereno y comprensión.",
        },
        {
          label: "Calma mental",
          detail:
            "Un entorno digital que transmite seguridad, estructura y confianza clínica.",
        },
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
