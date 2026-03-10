export type BlogCategoryKey =
  | "salud-mental"
  | "psicologia-comportamiento"
  | "mente-cuerpo"
  | "medicina-preventiva"
  | "habitos-bienestar"
  | "proposito-desarrollo"
  | "educacion-salud"
  | "tecnologia-salud";

export type BlogCategory = {
  key: BlogCategoryKey;
  label: string;
  description: string;
  subcategories: string[];
};

export type BlogSeriesKey =
  | "sueño"
  | "estres-y-ansiedad"
  | "regulacion-nerviosa"
  | "habitos-sostenibles"
  | "alfabetizacion-cientifica";

export type BlogSeries = {
  key: BlogSeriesKey;
  label: string;
  description: string;
};

export type BlogArticleType =
  | "Guía clínica accesible"
  | "Explicador científico"
  | "Herramienta práctica"
  | "Mitos y evidencia"
  | "Preguntas frecuentes"
  | "Lectura comentada"
  | "Tecnología y salud";

export type BlogArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategoryKey;
  subcategory: string;
  type: BlogArticleType;
  series?: BlogSeriesKey;
  readingTimeMin: number;
  updatedAt: string; // ISO date
  reviewedLabel: "Revisión clínica" | "Edición editorial";
  apaReferences: string[];
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    key: "salud-mental",
    label: "Salud mental",
    description:
      "Ansiedad, estrés, estado de ánimo y señales de cuidado, con lenguaje clínico accesible.",
    subcategories: [
      "Ansiedad y pánico",
      "Estrés y burnout",
      "Estado de ánimo",
      "Duelo",
      "Cuándo pedir ayuda",
    ],
  },
  {
    key: "psicologia-comportamiento",
    label: "Psicología y comportamiento",
    description:
      "Hábitos, toma de decisiones, regulación emocional y habilidades para la vida cotidiana.",
    subcategories: [
      "Regulación emocional",
      "Ciencia del comportamiento",
      "Relaciones y comunicación",
      "Psicología positiva (PERMA)",
    ],
  },
  {
    key: "mente-cuerpo",
    label: "Mente–cuerpo",
    description:
      "Interacción entre fisiología, estrés, sueño, respiración y bienestar psicológico.",
    subcategories: [
      "Sistema nervioso y estrés",
      "Respiración",
      "Sueño",
      "Dolor y somatización",
      "Mindfulness basado en evidencia",
    ],
  },
  {
    key: "medicina-preventiva",
    label: "Medicina preventiva",
    description:
      "Educación en salud física, prevención y decisiones informadas sin alarmismo.",
    subcategories: [
      "Prevención cardiometabólica",
      "Chequeos y tamizajes",
      "Nutrición práctica",
      "Actividad física",
    ],
  },
  {
    key: "habitos-bienestar",
    label: "Hábitos y bienestar",
    description:
      "Rutinas realistas, bienestar digital, descanso y diseño de hábitos sostenibles.",
    subcategories: [
      "Sueño y descanso",
      "Bienestar digital",
      "Rutinas y energía",
      "Autocuidado sostenible",
    ],
  },
  {
    key: "proposito-desarrollo",
    label: "Propósito y desarrollo",
    description:
      "Valores, sentido, metas realistas y crecimiento personal con enfoque humano.",
    subcategories: ["Valores", "Sentido y propósito", "Metas", "Identidad y cambio"],
  },
  {
    key: "educacion-salud",
    label: "Educación en salud",
    description:
      "Alfabetización científica: cómo leer evidencia, riesgos, sesgos y decisiones informadas.",
    subcategories: [
      "Cómo leer evidencia",
      "Mitos comunes",
      "Riesgo vs. certeza",
      "Guías clínicas (qué son)",
      "Salud pública",
    ],
  },
  {
    key: "tecnologia-salud",
    label: "Tecnología y salud",
    description:
      "Salud digital, privacidad, herramientas y tecnología clínica para apoyar la atención.",
    subcategories: [
      "Privacidad y datos",
      "Herramientas digitales",
      "Historia clínica digital",
      "Ética y límites",
    ],
  },
];

export const BLOG_SERIES: BlogSeries[] = [
  {
    key: "sueño",
    label: "Sueño",
    description: "Guías y prácticas para dormir mejor con un enfoque realista.",
  },
  {
    key: "estres-y-ansiedad",
    label: "Estrés y ansiedad",
    description: "Entender la activación y entrenar respuestas más reguladas.",
  },
  {
    key: "regulacion-nerviosa",
    label: "Regulación del sistema nervioso",
    description: "Respiración, atención y hábitos que influyen en la respuesta al estrés.",
  },
  {
    key: "habitos-sostenibles",
    label: "Hábitos sostenibles",
    description: "Diseño de hábitos pequeños, consistentes y aplicables.",
  },
  {
    key: "alfabetizacion-cientifica",
    label: "Alfabetización científica",
    description: "Cómo interpretar evidencia y evitar conclusiones apresuradas.",
  },
];

const d = (ymd: string) => `${ymd}T00:00:00.000Z`;

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "a01",
    slug: "como-el-estres-afecta-al-cuerpo-y-a-la-mente",
    title: "Cómo el estrés afecta al cuerpo y a la mente",
    excerpt:
      "El estrés es una respuesta natural, pero cuando se vuelve crónico puede impactar el sistema nervioso, el sistema inmunológico y el bienestar psicológico. Esta guía explica qué ocurre y por qué importa.",
    category: "mente-cuerpo",
    subcategory: "Sistema nervioso y estrés",
    type: "Explicador científico",
    series: "estres-y-ansiedad",
    readingTimeMin: 8,
    updatedAt: d("2026-03-10"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "McEwen, B. S. (2007). Physiology and neurobiology of stress and adaptation: Central role of the brain. Physiological Reviews, 87(3), 873–904. https://doi.org/10.1152/physrev.00041.2006",
      "Sapolsky, R. M. (2004). Why zebras don’t get ulcers (3rd ed.). Holt Paperbacks.",
    ],
  },
  {
    id: "a02",
    slug: "regulacion-emocional-que-es-y-por-que-importa",
    title: "Regulación emocional: qué es y por qué es importante",
    excerpt:
      "La regulación emocional se refiere a la capacidad de comprender, modular y responder a nuestras emociones de forma adaptativa. Esta habilidad se asocia con mejor salud mental, relaciones más saludables y mayor resiliencia.",
    category: "psicologia-comportamiento",
    subcategory: "Regulación emocional",
    type: "Explicador científico",
    readingTimeMin: 8,
    updatedAt: d("2026-03-09"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "Gross, J. J. (1998). The emerging field of emotion regulation: An integrative review. Review of General Psychology, 2(3), 271–299. https://doi.org/10.1037/1089-2680.2.3.271",
      "Gross, J. J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1–26.",
    ],
  },
  {
    id: "a03",
    slug: "conexion-entre-sueno-y-salud-mental",
    title: "La conexión entre sueño y salud mental",
    excerpt:
      "El sueño desempeña un papel fundamental en la regulación emocional, la memoria y el funcionamiento cognitivo. La falta de sueño puede aumentar el riesgo de ansiedad, depresión y dificultades en la regulación emocional.",
    category: "mente-cuerpo",
    subcategory: "Sueño",
    type: "Explicador científico",
    series: "sueño",
    readingTimeMin: 9,
    updatedAt: d("2026-03-08"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "Walker, M. P. (2017). Why we sleep: Unlocking the power of sleep and dreams. Scribner.",
      "Palmer, C. A., & Alfano, C. A. (2017). Sleep and emotion regulation: An organizing, integrative review. Sleep Medicine Reviews, 31, 6–16.",
    ],
  },
  {
    id: "a04",
    slug: "respiracion-y-sistema-nervioso",
    title: "Respiración y sistema nervioso: cómo influye en el bienestar",
    excerpt:
      "Las técnicas de respiración pueden influir directamente en el sistema nervioso autónomo. Ciertas prácticas pueden reducir la activación fisiológica asociada al estrés y favorecer estados de calma.",
    category: "mente-cuerpo",
    subcategory: "Respiración",
    type: "Explicador científico",
    series: "regulacion-nerviosa",
    readingTimeMin: 6,
    updatedAt: d("2026-03-07"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "Jerath, R., Edry, J. W., Barnes, V. A., & Jerath, V. (2006). Physiology of long pranayamic breathing. Medical Hypotheses, 67(3), 566–571.",
      "Brown, R. P., & Gerbarg, P. L. (2005). Sudarshan kriya yogic breathing in the treatment of stress, anxiety, and depression. Journal of Alternative and Complementary Medicine, 11(4), 711–717.",
    ],
  },
  {
    id: "a05",
    slug: "habitos-pequenos-y-cambio-de-comportamiento",
    title: "Hábitos pequeños y cambio de comportamiento",
    excerpt:
      "La ciencia del comportamiento muestra que los cambios sostenibles suelen ocurrir a través de pequeñas modificaciones en hábitos cotidianos. Entender cómo se forman hábitos ayuda a crear estrategias más efectivas.",
    category: "psicologia-comportamiento",
    subcategory: "Ciencia del comportamiento",
    type: "Explicador científico",
    series: "habitos-sostenibles",
    readingTimeMin: 8,
    updatedAt: d("2026-03-06"),
    reviewedLabel: "Edición editorial",
    apaReferences: [
      "Lally, P., van Jaarsveld, C. H., Potts, H. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. European Journal of Social Psychology, 40(6), 998–1009.",
      "Wood, W., & Neal, D. T. (2007). A new look at habits and the habit-goal interface. Psychological Review, 114(4), 843–863.",
    ],
  },
  {
    id: "a06",
    slug: "bienestar-psicologico-mas-que-ausencia-de-enfermedad",
    title: "Bienestar psicológico: más que la ausencia de enfermedad",
    excerpt:
      "El bienestar psicológico no se limita a la ausencia de síntomas: incluye sentido de vida, crecimiento personal y relaciones. Este enfoque se desarrolló dentro de la psicología positiva.",
    category: "psicologia-comportamiento",
    subcategory: "Psicología positiva (PERMA)",
    type: "Explicador científico",
    readingTimeMin: 7,
    updatedAt: d("2026-03-05"),
    reviewedLabel: "Edición editorial",
    apaReferences: [
      "Ryff, C. D. (1989). Happiness is everything, or is it? Explorations on the meaning of psychological well-being. Journal of Personality and Social Psychology, 57(6), 1069–1081.",
      "Seligman, M. E. P. (2011). Flourish: A visionary new understanding of happiness and well-being. Free Press.",
    ],
  },
  {
    id: "a07",
    slug: "ansiedad-comprender-una-emocion-adaptativa",
    title: "Ansiedad: comprender una emoción adaptativa",
    excerpt:
      "La ansiedad es una respuesta natural ante situaciones percibidas como amenazantes. Comprender su función adaptativa ayuda a reducir el estigma y a desarrollar estrategias más efectivas.",
    category: "salud-mental",
    subcategory: "Ansiedad y pánico",
    type: "Explicador científico",
    series: "estres-y-ansiedad",
    readingTimeMin: 8,
    updatedAt: d("2026-03-04"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "Barlow, D. H. (2002). Anxiety and its disorders: The nature and treatment of anxiety and panic (2nd ed.). Guilford Press.",
      "Craske, M. G., & Stein, M. B. (2016). Anxiety. The Lancet, 388(10063), 3048–3059.",
    ],
  },
  {
    id: "a08",
    slug: "conexion-mente-cuerpo-en-la-salud",
    title: "La conexión mente-cuerpo en la salud",
    excerpt:
      "La investigación contemporánea muestra que los procesos psicológicos pueden influir en la salud física a través de mecanismos biológicos como el sistema nervioso y el sistema inmunológico.",
    category: "educacion-salud",
    subcategory: "Guías clínicas (qué son)",
    type: "Explicador científico",
    readingTimeMin: 8,
    updatedAt: d("2026-03-03"),
    reviewedLabel: "Revisión clínica",
    apaReferences: [
      "Engel, G. L. (1977). The need for a new medical model: A challenge for biomedicine. Science, 196(4286), 129–136.",
      "Cohen, S., Janicki-Deverts, D., & Miller, G. E. (2007). Psychological stress and disease. JAMA, 298(14), 1685–1687.",
    ],
  },
  {
    id: "a09",
    slug: "mindfulness-y-regulacion-emocional",
    title: "Mindfulness y regulación emocional",
    excerpt:
      "Las prácticas de mindfulness han sido estudiadas en psicología y medicina. La evidencia sugiere que pueden contribuir a mejorar atención, regulación emocional y bienestar psicológico.",
    category: "mente-cuerpo",
    subcategory: "Mindfulness basado en evidencia",
    type: "Explicador científico",
    readingTimeMin: 8,
    updatedAt: d("2026-03-02"),
    reviewedLabel: "Edición editorial",
    apaReferences: [
      "Kabat-Zinn, J. (2003). Mindfulness-based interventions in context. Clinical Psychology: Science and Practice, 10(2), 144–156.",
      "Goyal, M., et al. (2014). Meditation programs for psychological stress and well-being. JAMA Internal Medicine, 174(3), 357–368.",
    ],
  },
  {
    id: "a10",
    slug: "sentido-de-vida-y-bienestar-psicologico",
    title: "Sentido de vida y bienestar psicológico",
    excerpt:
      "Diversas investigaciones sugieren que un mayor sentido de propósito se asocia con mejores indicadores de bienestar y salud general. Qué dice la evidencia y cómo pensarlo con realismo.",
    category: "proposito-desarrollo",
    subcategory: "Sentido y propósito",
    type: "Explicador científico",
    readingTimeMin: 7,
    updatedAt: d("2026-03-01"),
    reviewedLabel: "Edición editorial",
    apaReferences: [
      "Hill, P. L., & Turiano, N. A. (2014). Purpose in life as a predictor of mortality across adulthood. Psychological Science, 25(7), 1482–1486.",
      "Frankl, V. E. (2006). Man’s search for meaning. Beacon Press.",
    ],
  },
];

export function getCategoryLabel(key: BlogCategoryKey): string {
  return BLOG_CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function getSeriesLabel(key: BlogSeriesKey): string {
  return BLOG_SERIES.find((s) => s.key === key)?.label ?? key;
}

export function formatReadingTime(min: number): string {
  return `${min} min`;
}
