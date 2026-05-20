export const aboutHeroCopy = {
  eyebrow: "Salud mental · criterio clínico",
  title:
    "Psicología con evidencia para comprender, regular y sostener lo que vives.",
  subtitle:
    "Ofrecemos psicoeducación rigurosa, herramientas de regulación emocional y tecnología clínica pensada para acompañar procesos reales — con claridad, límites explícitos y respeto por tu autonomía.",
  microbadges: [
    "Evidencia aplicada",
    "Regulación emocional",
    "Ética digital clínica",
  ] as const,
  valueIndicators: [
    {
      label: "Fundamento",
      detail: "TCC, regulación emocional y neurociencia traducida con rigor",
    },
    {
      label: "Método",
      detail: "Estructura y práctica sostenida, sin estímulos motivacionales",
    },
    {
      label: "Límites",
      detail: "Sin diagnóstico automático ni promesas de cura o resultado",
    },
  ] as const,
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Conocer Elynthis", href: "/elynthis" },
  ethicsNote:
    "No sustituimos una evaluación clínica ni una relación terapéutica.",
  ethicsLink: { label: "Marco ético y límites", href: "#etica-limites" },
} as const;

export type ClinicalVisionPillarKey =
  | "understand"
  | "regulation"
  | "science"
  | "autonomy";

export const clinicalVisionCopy = {
  eyebrow: "Visión clínica",
  title: "Cómo acompañamos la experiencia emocional",
  lead:
    "Entendemos el bienestar como un proceso que requiere tiempo, contexto y criterio. No lo reducimos a consejos rápidos ni a mensajes que presionan por sentirse mejor. Trabajamos desde la comprensión, la regulación y la ciencia aplicada con un lenguaje claro y un acompañamiento que devuelve capacidad de decisión.",
  pillars: [
    {
      key: "understand" as ClinicalVisionPillarKey,
      title: "Comprender antes de intervenir",
      body: "Observamos patrones, emociones y circunstancias antes de proponer cambios. Tener un mapa — aunque sea provisional — reduce la desorientación y evita intervenir desde la urgencia o la culpa.",
    },
    {
      key: "regulation" as ClinicalVisionPillarKey,
      title: "Regulación que se puede practicar",
      body: "Enseñamos habilidades para modular ansiedad, estrés y activación emocional en la vida cotidiana. Regular no es reprimir: es recuperar margen de respuesta cuando el sistema nervioso se adelanta al contexto.",
    },
    {
      key: "science" as ClinicalVisionPillarKey,
      title: "Ciencia al alcance, sin simplismos",
      body: "Traducimos marcos con respaldo empírico — TCC, regulación emocional, neurociencia aplicada, ciencia del comportamiento — en recursos comprensibles. La profundidad clínica no tiene por qué sonar inaccesible.",
    },
    {
      key: "autonomy" as ClinicalVisionPillarKey,
      title: "Autonomía como objetivo clínico",
      body: "Buscamos que puedas sostener el proceso con criterio propio, no que dependas de la plataforma. Educamos y organizamos; no reemplazamos el vínculo terapéutico ni el juicio de un profesional.",
    },
  ],
  closingQuote:
    "Una salud mental sostenible no pide más intensidad: pide más comprensión, más regulación y más honestidad sobre lo que un entorno digital puede — y no puede — ofrecer.",
} as const;

export type ScientificFoundationKey =
  | "evidence"
  | "tcc"
  | "regulation"
  | "neuroscience"
  | "behavior"
  | "habits";

export type ScientificFoundationArea = {
  key: ScientificFoundationKey;
  label: string;
  discipline: string;
  body: string;
};

export const scientificFoundationCopy = {
  eyebrow: "Base científica",
  title: "Lo que sostiene cada herramienta",
  description:
    "Diseñamos contenidos y recursos a partir de marcos con respaldo en investigación clínica. Los presentamos con rigor en el fondo y claridad en la forma — para que puedas usarlos con criterio, no con fe ciega.",
  areas: [
    {
      key: "evidence",
      label: "Psicología basada en evidencia",
      discipline: "Marco integrador",
      body: "Priorizamos modelos y protocolos con soporte empírico, adaptados a psicoeducación y autocuidado estructurado — sin presentarlos como soluciones universales.",
    },
    {
      key: "tcc",
      label: "TCC",
      discipline: "Terapia cognitivo-conductual",
      body: "Relacionamos pensamiento, conducta y mantenimiento de dificultades en mapas prácticos. La TCC orienta el diseño; no implica que cada usuario esté en psicoterapia cognitivo-conductual formal.",
    },
    {
      key: "regulation",
      label: "Regulación emocional",
      discipline: "Modulación y habilidades",
      body: "Trabajamos la identificación, nombramiento y modulación de estados emocionales — ansiedad, estrés, activación — con práctica repetida y expectativas realistas.",
    },
    {
      key: "neuroscience",
      label: "Neurociencia aplicada",
      discipline: "Mente, cuerpo y contexto",
      body: "Usamos principios de neurociencia para explicar patrones y respuestas del sistema nervioso, sin biologizar el sufrimiento ni prometer recableados rápidos.",
    },
    {
      key: "behavior",
      label: "Ciencia del comportamiento",
      discipline: "Conducta y cambio",
      body: "Analizamos qué mantiene conductas y hábitos en el entorno real. El cambio se apoya en estructura y repetición, no en fuerza de voluntad ni en picos de motivación.",
    },
    {
      key: "habits",
      label: "Hábitos sostenibles",
      discipline: "Adherencia y ritmo",
      body: "Favorecemos micro-cambios repetibles y seguimiento ligero. La continuidad importa más que la perfección o la productividad emocional.",
    },
  ] satisfies ScientificFoundationArea[],
  closingLine:
    "La evidencia orienta el diseño de la plataforma. No reemplaza una evaluación individual ni las decisiones de un profesional de la salud mental.",
} as const;

export type DifferentialBlockKey =
  | "evidence"
  | "regulation"
  | "technology"
  | "minimalism";

export const differentialCopy = {
  eyebrow: "Por qué somos distintos",
  title: "Criterio clínico, no volumen de contenido",
  description:
    "No competimos por saturar tu atención ni por generar dependencia emocional del producto. Cada decisión — educativa, clínica y tecnológica — responde a cómo las personas comprenden, regulan y sostienen cambios cuando hay estructura, evidencia y límites claros.",
  closingLine:
    "Menos estímulo. Más sentido. Un entorno que se comporta como un espacio clínico digital, no como un feed de bienestar.",
  blocks: [
    {
      key: "evidence" as DifferentialBlockKey,
      title: "Evidencia, no tendencias",
      summary:
        "Integramos marcos validados y los traducimos con precisión y accesibilidad. Ni simplificamos de más ni ocultamos la complejidad que el malestar suele traer.",
      points: [
        {
          label: "TCC",
          detail:
            "Modelos cognitivo-conductuales aplicados a educación y autocuidado con estructura progresiva.",
        },
        {
          label: "Regulación emocional",
          detail:
            "Habilidades con respaldo en investigación para identificar, nombrar y modular estados emocionales.",
        },
        {
          label: "Neurociencia",
          detail:
            "Explicaciones del sistema nervioso y del contexto, sin reducir la experiencia humana a un diagrama.",
        },
        {
          label: "Ciencia del comportamiento",
          detail:
            "Conducta y hábitos entendidos en función de su mantenimiento, no como fallo de carácter.",
        },
        {
          label: "Psicoeducación",
          detail:
            "Conceptos ordenados, ejemplos clínicos y práctica guiada — sin jerga innecesaria.",
        },
      ],
    },
    {
      key: "regulation" as DifferentialBlockKey,
      title: "Regulación con método",
      summary:
        "Ofrecemos protocolos y ejercicios concretos para habitar emociones difíciles con más seguridad. No confundimos contención con evitación ni calma con ausencia de malestar.",
      points: [
        {
          label: "Herramientas aplicables",
          detail:
            "Instrucciones claras, duración breve y encaje en la rutina — no listas interminables de tareas.",
        },
        {
          label: "Ansiedad",
          detail:
            "Estrategias para activación, anticipación y rumiación, con lenguaje clínico y sin alarmismo.",
        },
        {
          label: "Estrés",
          detail:
            "Recuperación del sistema de alerta cuando las demandas superan los recursos disponibles.",
        },
        {
          label: "Sobrecarga emocional",
          detail:
            "Organización y contención cuando sentir parece desbordar la capacidad de actuar.",
        },
        {
          label: "Continuidad",
          detail:
            "Repetición con sentido clínico, no exigencia de constancia perfecta ni culpa por pausar.",
        },
      ],
    },
    {
      key: "technology" as DifferentialBlockKey,
      title: "Tecnología al servicio del criterio",
      summary:
        "Elynthis ordena procesos clínicos con claridad. La tecnología facilita seguimiento y estructura; no decide por el profesional ni sustituye el vínculo terapéutico.",
      points: [
        {
          label: "Elynthis",
          detail:
            "Flujos limpios para pacientes, sesiones y documentación — pensado para la práctica diaria.",
        },
        {
          label: "Criterio profesional",
          detail:
            "Sin diagnóstico automatizado ni recomendaciones que reemplacen el juicio clínico.",
        },
        {
          label: "Seguimiento",
          detail:
            "Historial y continuidad al servicio del tratamiento, no del engagement vacío.",
        },
        {
          label: "Legibilidad",
          detail:
            "Interfaces que reducen fricción cognitiva y permiten leer el proceso de un vistazo.",
        },
      ],
    },
    {
      key: "minimalism" as DifferentialBlockKey,
      title: "Diseño que no añade ruido",
      summary:
        "Reducimos carga cognitiva para que puedas concentrarte en lo que importa. Un entorno calmado no es estética vacía: es una decisión clínica sobre cómo la interfaz afecta al sistema nervioso.",
      points: [
        {
          label: "Menos interrupciones",
          detail:
            "Sin notificaciones agresivas, gamificación vacía ni presión por consumir más contenido.",
        },
        {
          label: "Ritmo visual",
          detail:
            "Espaciado, tipografía y transiciones que invitan a leer con calma, no a reaccionar.",
        },
        {
          label: "Jerarquía clara",
          detail:
            "Cada pantalla indica qué hacer a continuación sin competir por tu atención.",
        },
        {
          label: "Seguridad percibida",
          detail:
            "Un tono visual y verbal que transmite contención, previsibilidad y respeto.",
        },
      ],
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
  /** Posición normalizada en el diagrama (0–100) */
  x: number;
  y: number;
  href?: string;
};

export const ecosystemCopy = {
  eyebrow: "Ecosistema",
  title: "Un mismo proceso, varias piezas articuladas",
  description:
    "Psicología, educación, regulación, hábitos, tecnología clínica y Elynthis no funcionan como módulos aislados. Se articulan en un circuito: comprender, practicar, sostener y organizar — con los mismos criterios de evidencia y los mismos límites éticos.",
  centerLabel: "Coherencia clínica",
  nodes: [
    {
      key: "psychology",
      label: "Psicología",
      tagline: "Marco de comprensión",
      description:
        "Integra modelos con respaldo empírico para entender patrones cognitivos y emocionales antes de intervenir. Orienta qué observar y qué nombrar.",
      x: 50,
      y: 12,
    },
    {
      key: "education",
      label: "Educación",
      tagline: "Psicoeducación estructurada",
      description:
        "Traduce la ciencia en secuencias claras y progresivas. Prepara el terreno para practicar sin abrumar con información suelta.",
      x: 14,
      y: 36,
    },
    {
      key: "regulation",
      label: "Regulación emocional",
      tagline: "Práctica situada",
      description:
        "Protocolos para modular ansiedad, estrés y activación — utilizables entre sesiones y en autocuidado guiado, con expectativas realistas.",
      x: 86,
      y: 36,
    },
    {
      key: "habits",
      label: "Hábitos",
      tagline: "Continuidad en lo cotidiano",
      description:
        "Micro-rutinas y seguimiento ligero que anclan los cambios en la vida real, sin métricas de rendimiento ni dashboards que exigen rendir.",
      x: 20,
      y: 74,
    },
    {
      key: "clinicalTechnology",
      label: "Tecnología clínica",
      tagline: "Infraestructura digital",
      description:
        "Plataforma diseñada para reducir fricción y sostener procesos con ética explícita. La tecnología facilita; no diagnostica ni promete cura.",
      x: 80,
      y: 74,
    },
    {
      key: "elynthis",
      label: "Elynthis",
      tagline: "Organización de la práctica",
      description:
        "Software para estructurar flujos, sesiones y seguimiento profesional. Conecta la práctica clínica con el marco psicológico y la regulación del paciente.",
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
  panelHint:
    "Elige un nodo para ver cómo se relaciona con el resto del ecosistema.",
  elynthisLinkLabel: "Sobre Elynthis",
} as const;

export type MentalHealthManifestoKey =
  | "not-perfection"
  | "regulate-not-avoid"
  | "understand-first"
  | "small-steps"
  | "clarity-reduces-suffering"
  | "regulation-trained";

export const mentalHealthManifestoCopy = {
  eyebrow: "Criterios clínicos",
  title: "Cómo entendemos la salud mental",
  lead:
    "Estas ideas guían el diseño de la educación, las herramientas y la tecnología. No son frases para compartir: son principios de trabajo que priorizan claridad, límites y respeto por la complejidad de lo que una persona puede estar viviendo.",
  statements: [
    {
      key: "not-perfection" as MentalHealthManifestoKey,
      title: "La salud mental no es estar bien todo el tiempo.",
      body: "Incluye habitar malestar, ambivalencia y cansancio sin convertirlos en fracaso personal. Buscamos más flexibilidad y sentido, no un estado ideal permanente.",
    },
    {
      key: "regulate-not-avoid" as MentalHealthManifestoKey,
      title: "Regular no es evitar lo que duele.",
      body: "Modular intensidad y duración permite seguir funcionando y reflexionando. Las emociones difíciles también aportan información cuando se pueden nombrar sin juicio.",
    },
    {
      key: "understand-first" as MentalHealthManifestoKey,
      title: "Comprender suele preceder al cambio.",
      body: "Actuar sin mapa — aunque sea un mapa provisional — suele aumentar la resistencia. Contextualizar y dar sentido orienta mejor que exigir transformación inmediata.",
    },
    {
      key: "small-steps" as MentalHealthManifestoKey,
      title: "Lo que perdura suele ser gradual.",
      body: "Los cambios sostenibles son repetibles y compatibles con la vida real. Los picos motivacionales rara vez sostienen lo que el sistema nervioso necesita para aprender algo nuevo.",
    },
    {
      key: "clarity-reduces-suffering" as MentalHealthManifestoKey,
      title: "La claridad puede aliviar sufrimiento evitable.",
      body: "Parte del malestar lleva confusión: no saber qué nos pasa, qué necesitamos o qué opciones tenemos. Un lenguaje claro y una estructura honesta pueden reducir esa capa sin negar el dolor.",
    },
    {
      key: "regulation-trained" as MentalHealthManifestoKey,
      title: "La regulación se entrena, no se exige.",
      body: "Como otras habilidades clínicas aplicables: con práctica, tiempo y ajuste al contexto — sin atajos, sin garantías universales ni culpa por avanzar despacio.",
    },
  ],
  closingLine:
    "Cuidar la mente es un proceso continuo. No tiene fecha de entrega ni nota final.",
} as const;

export const aboutPreFooterCopy = {
  title: "Cuando quieras dar el siguiente paso",
  subtitle:
    "Puedes explorar herramientas con base clínica o conocer cómo Elynthis apoya el trabajo de profesionales — siempre con transparencia sobre alcance y límites.",
  primaryCta: { label: "Explorar herramientas", href: "/herramientas" },
  secondaryCta: { label: "Crear cuenta", href: "/registro" },
  tertiaryCta: { label: "Ver Elynthis", href: "/elynthis" },
  footnote: "Sin prisa. Sin presión. Tú defines el ritmo.",
} as const;

/** Badge del visual hero */
export const aboutHeroVisualBadge = "Criterio clínico";

/** Chips del visual hero — copy alineado al tono clínico */
export const aboutHeroVisualChips = [
  {
    title: "Claridad",
    body: "Nombrar lo que ocurre",
    className: "left-0 top-[20%] sm:left-2",
    enterX: -14,
    delay: 0.75,
  },
  {
    title: "Estructura",
    body: "Ritmo sostenible en el día a día",
    className: "right-0 bottom-[20%] sm:right-2",
    enterX: 14,
    delay: 0.92,
  },
] as const;

/** @deprecated Importar desde `@/components/about/about-seo`. */
export { ABOUT_SEO, ABOUT_PAGE_SECTIONS } from "@/components/about/about-seo";
