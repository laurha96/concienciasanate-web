/** Tokens — jerarquía visual Sobre (hero dominante → secciones densas) */
export const aboutEd = {
  page: "about-page",

  /** Secciones — h-auto, sin min-h-screen */
  section: "relative h-auto py-16 md:py-20 [&:not(:first-child)]:scroll-mt-20",
  sectionHero: "relative h-auto py-20 md:py-24 [&:not(:first-child)]:scroll-mt-20",
  sectionCompact: "relative h-auto py-14 md:py-16 [&:not(:first-child)]:scroll-mt-20",
  sectionCta: "relative h-auto py-12 md:py-16 [&:not(:first-child)]:scroll-mt-20",

  sectionGap: "mt-8 md:mt-10",
  sectionGapTight: "mt-6 md:mt-8",

  container:
    "relative mx-auto w-full max-w-[1080px] px-5 sm:px-8 lg:px-10",
  containerWide:
    "relative mx-auto w-full max-w-[1140px] px-5 sm:px-8 lg:px-10",
  containerNarrow:
    "relative mx-auto w-full max-w-[640px] px-5 sm:px-8",

  /** Ritmo de cabeceras por nivel */
  headerStackHero: "space-y-4 sm:space-y-5",
  headerStackSection: "space-y-3 sm:space-y-4",
  headerStackCompact: "space-y-2.5 sm:space-y-3",

  chapterIndex:
    "font-mono text-[10px] font-medium tracking-[0.26em] text-foreground/38 tabular-nums",
  chapterRule:
    "h-px w-7 bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.18)] to-transparent",
  eyebrow:
    "text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/52",

  /** H1 — solo hero */
  h1: "font-display text-balance text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground md:text-6xl",
  /** H2 — secciones */
  h2: "font-display text-balance text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-foreground md:text-4xl",
  /** H3 — cards / ítems */
  h3: "font-display text-lg font-medium leading-snug tracking-[-0.02em] text-foreground md:text-xl",
  /** CTA / cierre */
  h2Compact:
    "font-display text-balance text-2xl font-medium leading-[1.12] tracking-[-0.03em] text-foreground md:text-[1.65rem]",

  lead: "max-w-2xl text-pretty text-base font-normal leading-relaxed text-foreground/72 md:text-lg",
  body: "text-base font-normal leading-relaxed text-foreground/68 md:text-lg",
  bodySm: "text-sm font-normal leading-relaxed text-foreground/65 md:text-[15px]",
  /** @deprecated Usar body */
  bodyLarge: "text-base font-normal leading-relaxed text-foreground/72 md:text-lg",
  pullQuote:
    "font-display text-pretty text-xl font-medium leading-snug tracking-[-0.025em] text-foreground/82 md:text-2xl",

  stack: "flex flex-col gap-6 md:gap-8",
  stackTight: "flex flex-col gap-4 md:gap-5",
  gridEditorial: "gap-4 md:gap-5",
  gridPillars: "gap-3 sm:gap-4",

  hairline:
    "h-px w-full bg-gradient-to-r from-transparent via-border/50 to-transparent",
  hairlineAccent:
    "h-px w-10 bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.16)] to-transparent",

  /** Ítems editoriales ligeros (visión) */
  editorialItem:
    "border-l-2 border-[rgb(var(--brand-primary-rgb)/0.14)] pl-4 sm:pl-5",
  softPanel:
    "rounded-xl border border-border/40 bg-brand-surface/40 shadow-[0_4px_20px_rgba(34,34,34,0.022)]",

  indexMarker:
    "font-mono text-[9px] font-medium tracking-[0.22em] text-primary/45 tabular-nums",

  /** @deprecated aliases */
  title: "font-display text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-foreground md:text-4xl",
  titleHero:
    "font-display text-balance text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground md:text-6xl",
  titleStatement:
    "font-display text-2xl font-medium leading-[1.12] tracking-[-0.03em] text-foreground md:text-[1.65rem]",
  stackLoose: "flex flex-col gap-8 md:gap-10",
  openFigure: "relative isolate",
} as const;

export type AboutHeaderTier = "hero" | "section" | "compact" | "cta";

export const aboutHeaderTierClass: Record<
  AboutHeaderTier,
  { stack: string; title: string; description: string }
> = {
  hero: {
    stack: aboutEd.headerStackHero,
    title: aboutEd.h1,
    description: aboutEd.lead,
  },
  section: {
    stack: aboutEd.headerStackSection,
    title: aboutEd.h2,
    description: aboutEd.lead,
  },
  compact: {
    stack: aboutEd.headerStackCompact,
    title: aboutEd.h2,
    description: aboutEd.bodySm,
  },
  cta: {
    stack: aboutEd.headerStackCompact,
    title: aboutEd.h2Compact,
    description: aboutEd.body,
  },
};

export type AboutSectionTone =
  | "canvas"
  | "paper"
  | "mist"
  | "depth"
  | "linen"
  | "cinematic"
  | "veil";

export const aboutSectionToneClass: Record<AboutSectionTone, string> = {
  canvas: "bg-brand-background",
  paper: "bg-brand-surface/15",
  mist: "bg-brand-background",
  depth: "bg-brand-muted/8",
  linen: "bg-brand-background",
  cinematic: "bg-brand-background",
  veil: "bg-brand-background",
};

export const aboutDividerFillClass: Record<AboutSectionTone, string> = {
  canvas: "text-brand-background",
  paper: "text-brand-surface",
  mist: "text-brand-background",
  depth: "text-brand-muted",
  linen: "text-brand-background",
  cinematic: "text-brand-background",
  veil: "text-brand-background",
};
