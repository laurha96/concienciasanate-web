export type BlogCategoryKey =
  | "psicologia"
  | "regulacion-emocional"
  | "habitos"
  | "bienestar"
  | "neurociencia"
  | "salud-mental";

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
  content: string;
  category: BlogCategoryKey;
  subcategory: string;
  tags: string[];
  date: string; // ISO date
  author: string;
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
    subcategories: ["Ansiedad", "Estrés", "Estado de ánimo", "Duelo", "Cuándo pedir ayuda"],
  },
  {
    key: "psicologia",
    label: "Psicología",
    description:
      "Procesos psicológicos y habilidades para la vida cotidiana, con enfoque basado en evidencia.",
    subcategories: ["Procesos cognitivos", "Relaciones", "Psicología positiva", "Psicoeducación"],
  },
  {
    key: "regulacion-emocional",
    label: "Regulación emocional",
    description:
      "Comprender y modular emociones de forma adaptativa: claridad, práctica y habilidades sostenibles.",
    subcategories: ["Estrategias", "Habilidades", "Autoconciencia", "Regulación"],
  },
  {
    key: "habitos",
    label: "Hábitos",
    description:
      "Ciencia del comportamiento aplicada: diseño de hábitos pequeños, realistas y sostenibles.",
    subcategories: ["Diseño de hábitos", "Motivación", "Contexto", "Consistencia"],
  },
  {
    key: "bienestar",
    label: "Bienestar",
    description:
      "Bienestar psicológico e integral: propósito, autocuidado y prácticas basadas en evidencia.",
    subcategories: ["Autocuidado", "Propósito", "Calma", "Bienestar integral"],
  },
  {
    key: "neurociencia",
    label: "Neurociencia",
    description:
      "Sistema nervioso, estrés, respiración, sueño y procesos mente–cuerpo desde evidencia.",
    subcategories: ["Estrés", "Sistema nervioso", "Respiración", "Sueño", "Mente–cuerpo"],
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
    content:
      "El estrés es una respuesta de adaptación. Cuando se sostiene en el tiempo, puede cambiar cómo dormimos, cómo pensamos y cómo se siente el cuerpo.\n\nEn este artículo revisamos qué se entiende por estrés, por qué se vuelve un problema cuando es crónico y qué señales prácticas pueden ayudarte a identificarlo con claridad.\n\nContenido en construcción: pronto añadiremos ejemplos aplicados y una guía de pasos pequeños.",
    category: "neurociencia",
    subcategory: "Sistema nervioso y estrés",
    tags: ["estrés", "sistema nervioso", "salud mental"],
    date: d("2026-03-10"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "La regulación emocional no significa ‘no sentir’. Significa notar la emoción, darle un nombre, entender qué la dispara y elegir respuestas más útiles.\n\nAquí explicamos el concepto, por qué importa en salud mental y qué habilidades suelen entrenarse en enfoques basados en evidencia.\n\nContenido en construcción: añadiremos un set breve de prácticas y ejemplos cotidianos.",
    category: "regulacion-emocional",
    subcategory: "Regulación emocional",
    tags: ["regulación emocional", "habilidades", "psicología"],
    date: d("2026-03-09"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "Dormir no es solo ‘descansar’: el sueño participa en memoria, atención y regulación emocional. Cuando hay privación de sueño, es común notar más reactividad emocional y peor tolerancia al estrés.\n\nRevisamos qué dice la evidencia y qué señales te pueden orientar para priorizar el descanso.\n\nContenido en construcción: incluiremos una guía práctica de higiene del sueño.",
    category: "salud-mental",
    subcategory: "Sueño",
    tags: ["sueño", "salud mental", "regulación emocional"],
    date: d("2026-03-08"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "La respiración es una vía práctica para modular activación fisiológica. Algunas técnicas influyen en el tono vagal y en la experiencia subjetiva de calma.\n\nEste artículo explica el marco general y cómo pensar la respiración como práctica breve y segura.\n\nContenido en construcción: añadiremos protocolos simples y contraindicaciones comunes.",
    category: "neurociencia",
    subcategory: "Respiración",
    tags: ["respiración", "sistema nervioso", "estrés"],
    date: d("2026-03-07"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "Los hábitos no dependen solo de motivación. Se apoyan en señales, contexto y repetición. Pequeños cambios suelen ser más sostenibles que transformaciones drásticas.\n\nEn este artículo revisamos un marco simple para diseñar hábitos realistas.\n\nContenido en construcción: incluiremos plantillas y ejemplos aplicados.",
    category: "habitos",
    subcategory: "Ciencia del comportamiento",
    tags: ["hábitos", "ciencia del comportamiento", "cambio"],
    date: d("2026-03-06"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "El bienestar psicológico es un concepto multidimensional: propósito, autonomía, crecimiento, relaciones y autoaceptación.\n\nRevisamos qué significa ‘bienestar’ en investigación y por qué es más que ‘no estar mal’.\n\nContenido en construcción: añadiremos ejercicios de reflexión y lectura guiada.",
    category: "bienestar",
    subcategory: "Psicología positiva (PERMA)",
    tags: ["bienestar", "psicología positiva", "propósito"],
    date: d("2026-03-05"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "La ansiedad cumple una función adaptativa: prepara para actuar ante amenaza. Cuando es intensa o persistente, puede volverse limitante.\n\nEn este artículo revisamos señales comunes, un marco de comprensión y por qué pedir ayuda a tiempo es importante.\n\nContenido en construcción: añadiremos recursos y guías de afrontamiento basadas en evidencia.",
    subcategory: "Ansiedad y pánico",
    tags: ["ansiedad", "estrés", "salud mental"],
    date: d("2026-03-04"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "El modelo biopsicosocial explica cómo factores psicológicos y sociales interactúan con lo biológico. Esto no implica ‘todo está en tu mente’, sino un marco más completo para entender salud.\n\nRevisamos conceptos clave y cómo aplicarlos con realismo.\n\nContenido en construcción: añadiremos ejemplos y límites clínicos.",
    category: "neurociencia",
    subcategory: "Guías clínicas (qué son)",
    tags: ["mente-cuerpo", "biopsicosocial", "estrés"],
    date: d("2026-03-03"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "Mindfulness basado en evidencia se centra en entrenar atención y una relación diferente con la experiencia interna. En investigación, suele evaluarse por estrés, bienestar y regulación emocional.\n\nRevisamos qué es, qué no es y cómo pensar su práctica de forma sobria y útil.\n\nContenido en construcción: añadiremos una práctica guiada breve.",
    category: "bienestar",
    subcategory: "Mindfulness basado en evidencia",
    tags: ["mindfulness", "bienestar", "atención"],
    date: d("2026-03-02"),
    author: "Equipo Conciencia Sánate",
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
    content:
      "El propósito suele relacionarse con mayor bienestar y con conductas de autocuidado más consistentes. También puede ser un concepto confuso si se entiende como ‘misión perfecta’.\n\nRevisamos qué se ha encontrado en investigación y cómo pensarlo con una mirada humana.\n\nContenido en construcción: añadiremos preguntas de reflexión y lecturas recomendadas.",
    category: "bienestar",
    subcategory: "Sentido y propósito",
    tags: ["propósito", "bienestar", "valores"],
    date: d("2026-03-01"),
    author: "Equipo Conciencia Sánate",
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
