export type EthicsSectionKey =
  | "we-do"
  | "we-dont"
  | "professional-help"
  | "emotional-safety";

export type EthicsSectionVariant = "positive" | "negative" | "guidance" | "safety";

export type EthicsSectionItem = {
  label: string;
  detail: string;
};

export type EthicsSection = {
  key: EthicsSectionKey;
  variant: EthicsSectionVariant;
  badge: string;
  title: string;
  lead: string;
  items: readonly EthicsSectionItem[];
};

export const aboutEthicsCopy = {
  eyebrow: "Ética y límites",
  title: "Transparencia como parte del cuidado",
  description:
    "En salud mental, la confianza no se gana con promesas amplias, sino con honestidad sobre el alcance de una herramienta digital. Decimos con claridad qué puedes esperar aquí y qué debe seguir en manos de un profesional — para que puedas elegir con tranquilidad y criterio.",
  clinicalBadges: [
    "Alcance explícito",
    "Límites del producto",
    "Seguridad emocional",
    "Sin diagnóstico automático",
  ] as const,
  sections: [
    {
      key: "we-do",
      variant: "positive",
      badge: "Alcance",
      title: "Lo que sí ofrecemos",
      lead: "Acompañamos procesos de comprensión y regulación mediante educación y herramientas prácticas, dentro de un marco ético que no sustituye una evaluación clínica individual.",
      items: [
        {
          label: "Psicoeducación",
          detail:
            "Contenido estructurado para entender experiencias emocionales, con lenguaje claro y modelos con respaldo científico.",
        },
        {
          label: "Herramientas prácticas",
          detail:
            "Ejercicios y protocolos aplicables en la vida cotidiana, con instrucciones concretas y ritmo ajustable.",
        },
        {
          label: "Regulación emocional",
          detail:
            "Habilidades para modular ansiedad, estrés y activación, sin prometer mejoras instantáneas ni resultados garantizados.",
        },
        {
          label: "Contenido con evidencia",
          detail:
            "Marcos de TCC, regulación emocional y ciencia del comportamiento traducidos con rigor y accesibilidad.",
        },
      ],
    },
    {
      key: "we-dont",
      variant: "negative",
      badge: "Límites",
      title: "Lo que no hacemos",
      lead: "Estos límites no son obstáculos comerciales: son parte de un cuidado responsable de tu salud mental y de la relación con el tratamiento profesional cuando lo necesitas.",
      items: [
        {
          label: "Diagnóstico automatizado",
          detail:
            "No clasificamos ni etiquetamos mediante algoritmos, cuestionarios automáticos ni perfiles generados por la plataforma.",
        },
        {
          label: "Sustituto de terapia",
          detail:
            "No reemplazamos psicoterapia, vínculo terapéutico ni el criterio de un profesional acreditado.",
        },
        {
          label: "Promesas de cura",
          detail:
            "No garantizamos curación, plazos fijos de mejora ni resultados iguales para todas las personas.",
        },
        {
          label: "Urgencias y crisis",
          detail:
            "No somos un servicio de emergencia ni de contención inmediata en situaciones de riesgo.",
        },
      ],
    },
    {
      key: "professional-help",
      variant: "guidance",
      badge: "Derivación",
      title: "Cuándo conviene ayuda profesional",
      lead: "El autocuido tiene un lugar importante. También lo tiene reconocer cuándo el malestar desborda tus recursos habituales y requiere evaluación o tratamiento especializado.",
      items: [
        {
          label: "Malestar intenso o persistente",
          detail:
            "Cuando el sufrimiento es fuerte, no cede con el tiempo o interfiere de forma sostenida con tu vida.",
        },
        {
          label: "Crisis aguda",
          detail:
            "Episodios de descompensación que necesitan evaluación y contención profesional en el momento.",
        },
        {
          label: "Riesgo para la vida",
          detail:
            "Pensamientos de hacerte daño, de dañar a otras personas o de no querer seguir viviendo requieren atención especializada de inmediato.",
        },
        {
          label: "Trauma complejo",
          detail:
            "Experiencias traumáticas que conviene abordar con un profesional formado en trauma y regulación del sistema nervioso.",
        },
        {
          label: "Deterioro en lo cotidiano",
          detail:
            "Cuando trabajar, relacionarte, descansar o cuidar de ti se vuelve de forma continua más difícil de lo habitual.",
        },
      ],
    },
    {
      key: "emotional-safety",
      variant: "safety",
      badge: "Experiencia",
      title: "Seguridad emocional en el diseño",
      lead: "Diseñamos la experiencia para que se sienta predecible, respetuosa y contenida — no invasiva, culpabilizante ni exigente.",
      items: [
        {
          label: "Lenguaje cuidadoso",
          detail:
            "Nombramos experiencias sin avergonzar, sin culpar y sin convertir el malestar en un defecto de carácter.",
        },
        {
          label: "Respeto al ritmo",
          detail:
            "Tus decisiones y tu dignidad orientan cómo presentamos cada recurso. Puedes pausar o dejar de usar algo sin presión.",
        },
        {
          label: "Autonomía",
          detail:
            "Tú eliges qué profundizar. La plataforma informa y acompaña; no dirige tu vida emocional.",
        },
        {
          label: "Límites visibles",
          detail:
            "Explicamos con transparencia qué ofrecemos y qué queda fuera de nuestro alcance.",
        },
      ],
    },
  ] satisfies EthicsSection[],
  crisisNote: {
    title: "Si necesitas apoyo ahora mismo",
    body: "Si hay riesgo para tu integridad o la de otras personas, contacta con servicios de urgencias o con una línea de crisis de tu país. Conciencia Sánate puede acompañar procesos de bienestar, pero no sustituye una respuesta de emergencia.",
  },
} as const;

/** @deprecated Usar EthicsSectionKey — alias de compatibilidad */
export type EthicsPillarKey = EthicsSectionKey;

/** @deprecated Usar EthicsSection */
export type EthicsPillar = EthicsSection;
