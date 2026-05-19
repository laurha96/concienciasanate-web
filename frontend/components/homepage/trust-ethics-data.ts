export type TrustEthicsBlock = {
  key: string;
  title: string;
  body: string;
};

export const trustEthicsCopy = {
  title: "Bienestar con responsabilidad",
  subtitle:
    "La salud mental merece información clara, herramientas útiles y límites éticos.",
  disclaimer:
    "Conciencia Sánate ofrece educación y herramientas de bienestar. No sustituye evaluación, diagnóstico ni tratamiento por un profesional de la salud.",
} as const;

export const TRUST_ETHICS_BLOCKS: TrustEthicsBlock[] = [
  {
    key: "clear-info",
    title: "Información clara",
    body: "Los contenidos buscan educar y orientar, no etiquetar ni diagnosticar.",
  },
  {
    key: "support-tools",
    title: "Herramientas de apoyo",
    body: "Los ejercicios pueden acompañar tu bienestar, pero no reemplazan atención profesional cuando es necesaria.",
  },
  {
    key: "evidence",
    title: "Enfoque basado en evidencia",
    body: "Priorizamos recursos inspirados en psicología clínica, ciencia del comportamiento y regulación emocional.",
  },
  {
    key: "crisis",
    title: "Cuidado en crisis",
    body: "Si estás en riesgo o en una situación de emergencia, busca apoyo inmediato en servicios de urgencia o líneas de crisis de tu país.",
  },
];
