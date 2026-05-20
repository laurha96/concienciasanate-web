/** Tokens Tailwind — página Sobre (ritmo editorial premium) */
export const aboutEd = {
  page: "about-page",
  /** Ritmo vertical — Apple / Linear / Stripe */
  section:
    "relative py-32 sm:py-44 lg:py-56 xl:py-64 [&:not(:first-child)]:scroll-mt-24",
  sectionCinematic:
    "relative py-36 sm:py-48 lg:min-h-[86vh] lg:flex lg:flex-col lg:justify-center lg:py-56 xl:min-h-[88vh] xl:py-64 [&:not(:first-child)]:scroll-mt-24",
  sectionCompact: "relative py-28 sm:py-36 lg:py-44",
  /** Espacio título → contenido */
  sectionGap: "mt-16 sm:mt-20 lg:mt-28 xl:mt-32",
  sectionGapTight: "mt-12 sm:mt-16 lg:mt-20",
  /** Márgenes horizontales generosos */
  container:
    "relative mx-auto w-full max-w-[1080px] px-6 sm:px-10 lg:px-14 xl:px-16",
  containerWide:
    "relative mx-auto w-full max-w-[1240px] px-6 sm:px-10 lg:px-14 xl:px-[4.5rem]",
  containerNarrow:
    "relative mx-auto w-full max-w-[720px] px-6 sm:px-10 lg:px-12 xl:px-14",
  chapterIndex:
    "font-mono text-[11px] font-medium tracking-[0.32em] text-foreground/38 tabular-nums",
  chapterRule: "h-px w-10 bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.22)] to-transparent",
  eyebrow:
    "text-[10.5px] font-medium uppercase tracking-[0.26em] text-foreground/58",
  title:
    "font-display text-balance text-[2rem] font-medium leading-[1.05] tracking-[-0.042em] text-foreground sm:text-[2.55rem] lg:text-[2.85rem] lg:leading-[1.03] xl:text-[3rem]",
  titleHero:
    "font-display text-balance text-[2.25rem] font-medium leading-[1.01] tracking-[-0.048em] text-foreground sm:text-[2.85rem] md:text-[3.25rem] lg:text-[3.65rem] lg:leading-[1.01] xl:text-[4rem] xl:leading-[1.02]",
  titleStatement:
    "font-display text-balance text-[1.65rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground sm:text-[2rem] lg:text-[2.25rem]",
  lead: "max-w-xl text-pretty text-[17px] font-normal leading-[1.82] text-foreground/70 sm:text-[18.5px] sm:leading-[1.84] lg:max-w-2xl xl:max-w-[40rem] xl:text-[19px]",
  body: "text-[15px] font-normal leading-[1.78] text-foreground/68 sm:text-base sm:leading-[1.8]",
  bodyLarge:
    "text-[16px] font-normal leading-[1.8] text-foreground/72 sm:text-[17px] sm:leading-[1.82]",
  pullQuote:
    "font-display text-pretty text-[1.65rem] font-medium leading-[1.22] tracking-[-0.032em] text-foreground/82 sm:text-[1.85rem] lg:text-[2.05rem] lg:leading-[1.2]",
  stackLoose: "flex flex-col gap-24 sm:gap-32 lg:gap-40",
  stack: "flex flex-col gap-14 sm:gap-16 lg:gap-24",
  stackTight: "flex flex-col gap-10 sm:gap-12",
  gridEditorial: "gap-6 sm:gap-8 lg:gap-10",
  hairline:
    "h-px w-full bg-gradient-to-r from-transparent via-[rgb(var(--brand-primary-rgb)/0.12)] to-transparent",
  hairlineAccent:
    "h-px w-16 bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.22)] via-[rgb(var(--brand-primary-rgb)/0.08)] to-transparent",
  openFigure:
    "relative isolate",
  softPanel:
    "rounded-[28px] border border-white/[0.46] bg-gradient-to-br from-brand-surface/42 via-brand-surface/30 to-[rgb(var(--brand-accent-rgb)/0.2)] shadow-[0_20px_52px_rgba(34,34,34,0.032)] backdrop-blur-xl ring-1 ring-[rgb(var(--brand-primary-rgb)/0.06)]",
  indexMarker:
    "font-mono text-[10px] font-medium tracking-[0.28em] text-primary/55 tabular-nums",
} as const;

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
  paper:
    "bg-gradient-to-b from-brand-surface/32 via-[rgb(var(--brand-accent-rgb)/0.1)] to-brand-background",
  mist:
    "bg-gradient-to-b from-[rgb(var(--brand-accent-rgb)/0.07)] via-brand-background/98 to-brand-background",
  depth:
    "bg-gradient-to-b from-brand-muted/18 via-brand-surface/20 to-brand-background",
  linen:
    "bg-gradient-to-b from-soft-beige/12 via-brand-background to-brand-background",
  cinematic:
    "bg-gradient-to-b from-brand-background via-[rgb(var(--brand-accent-rgb)/0.05)] to-brand-surface/14",
  veil:
    "bg-gradient-to-b from-brand-surface/18 via-brand-background to-brand-background",
};

/** Color de relleno para divisores SVG (clase text-* → fill currentColor) */
export const aboutDividerFillClass: Record<AboutSectionTone, string> = {
  canvas: "text-brand-background",
  paper: "text-brand-surface",
  mist: "text-brand-background",
  depth: "text-brand-muted",
  linen: "text-brand-background",
  cinematic: "text-brand-surface",
  veil: "text-brand-background",
};
