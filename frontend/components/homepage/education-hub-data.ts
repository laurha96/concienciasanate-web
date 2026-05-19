import type { BlogCategoryKey } from "@/content/blog/catalog";

/** Destino principal de una categoría del hub educativo. */
export type EducationHubDestination = "blog" | "herramientas";

/**
 * Categoría educativa de la Home.
 * Sustituir por datos de API cuando exista `GET /public/blog/categories` o similar.
 */
export type EducationHubCategory = {
  key: string;
  title: string;
  microcopy: string;
  /** Ruta absoluta opcional (prioridad sobre query params). */
  href?: string;
  destination?: EducationHubDestination;
  /** Clave de categoría del blog (`?category=`). Debe existir en `BLOG_CATEGORIES`. */
  blogCategory?: BlogCategoryKey;
  /** Término de búsqueda editorial (`?q=`), acotado al filtrar en el blog. */
  blogQuery?: string;
};

export const educationHubCopy = {
  title: "Aprende a cuidar tu salud mental",
  subtitle:
    "Explora contenidos claros y prácticos para comprender mejor tu mente, tus emociones y tus hábitos.",
  cta: { label: "Ver recursos", href: "/blog" },
} as const;

/**
 * Datos estáticos temporales. Para escalar:
 * - Mapear respuesta de API a `EducationHubCategory[]`
 * - Pasar el array a `EducationHubSection` vía prop `categories`
 */
export const EDUCATION_HUB_CATEGORIES: EducationHubCategory[] = [
  {
    key: "estres",
    title: "Estrés",
    microcopy: "Cómo afecta al cuerpo, la mente y la conducta.",
    blogCategory: "salud-mental",
    blogQuery: "estrés",
  },
  {
    key: "ansiedad",
    title: "Ansiedad",
    microcopy: "Qué ocurre en tu sistema de alarma y cómo regularlo.",
    blogCategory: "salud-mental",
    blogQuery: "ansiedad",
  },
  {
    key: "regulacion-emocional",
    title: "Regulación emocional",
    microcopy: "Nombrar, comprender y gestionar lo que sientes.",
    blogCategory: "regulacion-emocional",
  },
  {
    key: "sueno",
    title: "Sueño y salud mental",
    microcopy:
      "La relación entre descanso, emoción y funcionamiento diario.",
    blogCategory: "neurociencia",
    blogQuery: "sueño",
  },
  {
    key: "habitos",
    title: "Hábitos sostenibles",
    microcopy: "Cambios pequeños, consistentes y realistas.",
    blogCategory: "habitos",
  },
  {
    key: "autocuidado",
    title: "Autocuidado",
    microcopy: "Cuidarte sin exigirte perfección.",
    blogCategory: "bienestar",
    blogQuery: "autocuidado",
  },
  {
    key: "trauma",
    title: "Trauma y dolor emocional",
    microcopy: "Comprender heridas, respuestas de defensa y recuperación.",
    blogCategory: "salud-mental",
    blogQuery: "duelo",
  },
  {
    key: "mente-cuerpo",
    title: "Mente-cuerpo",
    microcopy: "La conexión entre emoción, cuerpo y bienestar.",
    blogCategory: "neurociencia",
    blogQuery: "mente-cuerpo",
  },
];
