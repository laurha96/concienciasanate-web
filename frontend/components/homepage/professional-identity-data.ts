export type ProfessionalIdentityPillar = {
  key: string;
  title: string;
  body: string;
};

export const professionalIdentityCopy = {
  title: "Una mirada integral, clara y humana",
  body: "Conciencia Sánate nace de una forma de entender la salud mental donde el bienestar no se reduce a pensar positivo. Se trata de comprender la historia, los patrones, el cuerpo, las emociones y los recursos que permiten construir una vida con más claridad y sentido.",
  quote:
    "No se trata de cambiar quién eres. Se trata de comprenderte mejor para vivir con más libertad.",
} as const;

export const PROFESSIONAL_IDENTITY_PILLARS: ProfessionalIdentityPillar[] = [
  {
    key: "clarity",
    title: "Claridad psicológica",
    body: "Entender qué ocurre y por qué ocurre.",
  },
  {
    key: "regulation",
    title: "Regulación emocional",
    body: "Aprender a sostener lo que se siente sin quedar atrapado en ello.",
  },
  {
    key: "body",
    title: "Cuerpo y sistema nervioso",
    body: "Reconocer cómo el estrés y las emociones también se expresan físicamente.",
  },
  {
    key: "habits",
    title: "Hábitos y conducta",
    body: "Convertir la comprensión en acciones pequeñas y sostenibles.",
  },
  {
    key: "identity",
    title: "Identidad y futuro",
    body: "Reconstruir dirección, sentido y relación contigo mismo.",
  },
];
