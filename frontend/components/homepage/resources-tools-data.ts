import type { ToolsPreviewItem } from "@/components/homepage/tools-preview-data";
import { TOOLS_PREVIEW_ITEMS } from "@/components/homepage/tools-preview-data";

export type ResourcePreviewItem = {
  key: string;
  title: string;
  description: string;
  href: string;
};

export type ResourcesToolsTab = {
  key: string;
  label: string;
  resources: [ResourcePreviewItem, ResourcePreviewItem];
  tool: ToolsPreviewItem;
  cta: { label: string; href: string };
};

export const resourcesToolsCopy = {
  title: "Recursos y herramientas",
  subtitle: "Explora por tema: lecturas breves y una práctica guiada.",
  ctaBlog: { label: "Ver todos los recursos", href: "/blog" },
  ctaTools: { label: "Explorar herramientas", href: "/herramientas" },
} as const;

const tool = (key: ToolsPreviewItem["key"]) =>
  TOOLS_PREVIEW_ITEMS.find((t) => t.key === key)!;

/** 5 categorías × (2 recursos + 1 herramienta) */
export const RESOURCES_TOOLS_TABS: ResourcesToolsTab[] = [
  {
    key: "ansiedad",
    label: "Ansiedad",
    resources: [
      {
        key: "ansiedad-1",
        title: "Qué es la ansiedad",
        description: "Cómo funciona tu alarma interna y qué puedes hacer.",
        href: "/blog?category=salud-mental&q=ansiedad",
      },
      {
        key: "ansiedad-2",
        title: "Sistema nervioso y calma",
        description: "Estrategias para bajar la activación fisiológica.",
        href: "/blog?category=neurociencia&q=ansiedad",
      },
    ],
    tool: tool("breathing"),
    cta: { label: "Explorar ansiedad", href: "/blog?category=salud-mental&q=ansiedad" },
  },
  {
    key: "estres",
    label: "Estrés",
    resources: [
      {
        key: "estres-1",
        title: "Estrés y cuerpo",
        description: "Cómo el estrés afecta mente, conducta y descanso.",
        href: "/blog?category=salud-mental&q=estrés",
      },
      {
        key: "estres-2",
        title: "Sueño y recuperación",
        description: "La relación entre descanso y regulación emocional.",
        href: "/blog?category=neurociencia&q=sueño",
      },
    ],
    tool: tool("regulation-pause"),
    cta: { label: "Explorar estrés", href: "/blog?category=salud-mental&q=estrés" },
  },
  {
    key: "regulacion-emocional",
    label: "Regulación emocional",
    resources: [
      {
        key: "reg-1",
        title: "Nombrar emociones",
        description: "Por qué poner palabras a lo que sientes ayuda a regular.",
        href: "/blog?category=regulacion-emocional",
      },
      {
        key: "reg-2",
        title: "Autocuidado consciente",
        description: "Cuidarte sin exigirte perfección ni rendimiento.",
        href: "/blog?category=bienestar&q=autocuidado",
      },
    ],
    tool: tool("emotional-log"),
    cta: {
      label: "Explorar regulación",
      href: "/blog?category=regulacion-emocional",
    },
  },
  {
    key: "habitos",
    label: "Hábitos",
    resources: [
      {
        key: "hab-1",
        title: "Hábitos sostenibles",
        description: "Cambios pequeños, consistentes y realistas.",
        href: "/blog?category=habitos",
      },
      {
        key: "hab-2",
        title: "Mente y cuerpo",
        description: "La conexión entre emoción, cuerpo y bienestar.",
        href: "/blog?category=neurociencia&q=mente-cuerpo",
      },
    ],
    tool: tool("habits-journal"),
    cta: { label: "Explorar hábitos", href: "/blog?category=habitos" },
  },
  {
    key: "herramientas",
    label: "Herramientas",
    resources: [
      {
        key: "tools-1",
        title: "Guía de regulación",
        description: "Cuándo y cómo usar ejercicios de autocuidado.",
        href: "/blog?category=regulacion-emocional&q=herramientas",
      },
      {
        key: "tools-2",
        title: "Ciencia del comportamiento",
        description: "Patrones, decisiones y cambios que perduran.",
        href: "/blog?category=habitos&q=comportamiento",
      },
    ],
    tool: tool("self-care-plan"),
    cta: { label: "Ver todas las herramientas", href: "/herramientas" },
  },
];
