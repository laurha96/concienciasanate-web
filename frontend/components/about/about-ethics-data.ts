export type EthicsPillarKey =
  | "professional-help"
  | "emotional-safety"
  | "evidence"
  | "privacy";

export type EthicsPillar = {
  key: EthicsPillarKey;
  badge: string;
  title: string;
  lead: string;
  points: readonly string[];
};

export const aboutEthicsCopy = {
  eyebrow: "Ética y límites",
  title: "Cuidado informado, con límites que protegen",
  description:
    "Creemos que la confianza no se construye con promesas amplias, sino con honestidad sobre lo que una plataforma digital puede aportar — y lo que debe quedar en manos de un profesional. Hablamos con claridad para que puedas decidir con tranquilidad.",
  clinicalBadges: [
    "Marco clínico",
    "Límites explícitos",
    "Seguridad emocional",
    "Sin diagnóstico automático",
  ] as const,
  boundaries: {
    weDo: {
      title: "Qué hacemos",
      lead: "Acompañamos procesos de comprensión y regulación con herramientas educativas y prácticas, siempre dentro de un marco ético.",
      items: [
        "Psicoeducación basada en evidencia, con lenguaje claro y aplicable",
        "Herramientas de regulación emocional y hábitos sostenibles en la vida cotidiana",
        "Recursos para comprender experiencias emocionales sin etiquetar ni diagnosticar",
        "Orientación respetuosa sobre cuándo conviene ampliar el cuidado con un profesional",
        "Tecnología clínica (Elynthis) para organizar el trabajo profesional, no para sustituirlo",
      ],
    },
    weDoNot: {
      title: "Qué no hacemos",
      lead: "Estos límites no son restricciones comerciales: son parte de un cuidado responsable de tu salud mental.",
      items: [
        "No sustituimos psicoterapia, vínculo terapéutico ni acompañamiento clínico presencial",
        "No diagnosticamos, etiquetamos ni “clasificamos” de forma automática",
        "No prometemos curas, tiempos fijos de mejora ni resultados garantizados",
        "No reemplazamos valoración médica, psiquiátrica ni atención de urgencias",
        "No utilizamos culpa, urgencia artificial ni mensajes de productividad extrema",
      ],
    },
  },
  pillars: [
    {
      key: "professional-help",
      badge: "Derivación",
      title: "Cuándo buscar ayuda profesional",
      lead: "El autocuidado tiene un lugar valioso. También lo tiene saber cuándo conviene un acompañamiento más especializado.",
      points: [
        "Cuando el malestar interfiere de forma persistente con tu trabajo, relaciones o descanso",
        "Si aparecen pensamientos de hacerte daño, de dañar a otros o de no querer seguir viviendo",
        "Si sospechas que necesitas una evaluación formal o un tratamiento específico",
        "Si hay síntomas físicos relevantes que conviene valorar con atención médica",
        "Si llevas tiempo aplicando herramientas y notas que el malestar no disminuye o empeora",
      ],
    },
    {
      key: "emotional-safety",
      badge: "Contención",
      title: "Seguridad emocional",
      lead: "Diseñamos la experiencia para que se sienta contenida y predecible, no invasiva ni exigente.",
      points: [
        "Lenguaje que no avergüenza, no culpa y no apura decisiones importantes",
        "Ritmo y estructura que favorecen la claridad, no la sobreestimulación",
        "Espacio para pausar, reflexionar y elegir qué profundizar",
        "Derivación respetuosa cuando el autocuidado digital no es suficiente",
      ],
    },
    {
      key: "evidence",
      badge: "Evidencia",
      title: "Basado en evidencia",
      lead: "Nos guiamos por modelos y prácticas con respaldo científico, comunicados con honestidad sobre sus alcances.",
      points: [
        "Marco en psicología basada en evidencia, regulación emocional y ciencia del comportamiento",
        "Distinción clara entre educación, herramientas de apoyo y tratamiento clínico",
        "Prioridad por intervenciones pequeñas, repetibles y sostenibles",
        "Revisión de criterios con perspectiva profesional, no solo tendencias digitales",
      ],
    },
    {
      key: "privacy",
      badge: "Respeto",
      title: "Privacidad y respeto",
      lead: "Tu experiencia emocional merece discreción, autonomía y explicaciones comprensibles sobre el uso de la plataforma.",
      points: [
        "Recogemos solo lo necesario para ofrecer las funciones que utilizas",
        "Información sobre finalidad y límites del uso de herramientas digitales",
        "Respeto por tu ritmo, tus decisiones y tu derecho a dejar de usar un recurso",
        "Sin sensacionalismo ni explotación del malestar con fines comerciales",
      ],
    },
  ] satisfies EthicsPillar[],
  crisisNote: {
    title: "Si necesitas apoyo inmediato",
    body: "Si estás en una situación de riesgo para tu integridad o la de otras personas, contacta con servicios de urgencias o con una línea de crisis de tu país. Conciencia Sánate puede acompañar procesos de bienestar, pero no sustituye una respuesta de emergencia.",
  },
} as const;
