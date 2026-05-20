/** Tokens Tailwind — página Sobre (ritmo editorial premium) */
export const aboutEd = {
  page: "about-page",
  section:
    "relative py-28 sm:py-36 lg:py-44 [&:not(:first-child)]:scroll-mt-20",
  sectionCinematic:
    "relative py-32 sm:py-40 lg:min-h-[78vh] lg:flex lg:flex-col lg:justify-center lg:py-48 [&:not(:first-child)]:scroll-mt-20",
  sectionCompact: "relative py-24 sm:py-32 lg:py-36",
  container:
    "relative mx-auto w-full max-w-[1040px] px-6 sm:px-8 md:px-10 lg:px-12",
  containerWide:
    "relative mx-auto w-full max-w-[1160px] px-6 sm:px-8 md:px-10 lg:px-12",
  containerNarrow:
    "relative mx-auto w-full max-w-[680px] px-6 sm:px-8 md:px-10",
  eyebrow:
    "text-[10.5px] font-medium uppercase tracking-[0.24em] text-muted-foreground/80",
  title:
    "font-display text-balance text-[1.95rem] font-medium leading-[1.06] tracking-[-0.04em] text-foreground sm:text-[2.5rem] lg:text-[2.75rem] lg:leading-[1.04]",
  titleHero:
    "font-display text-balance text-[2.15rem] font-medium leading-[1.02] tracking-[-0.045em] text-foreground sm:text-[2.75rem] md:text-[3.15rem] lg:text-[3.5rem] lg:leading-[1.02] xl:text-[3.85rem]",
  titleStatement:
    "font-display text-balance text-[1.65rem] font-medium leading-[1.12] tracking-[-0.03em] text-foreground sm:text-[2rem] lg:text-[2.25rem]",
  lead: "max-w-xl text-pretty text-[17px] font-normal leading-[1.78] text-muted-foreground sm:text-[18px] sm:leading-[1.8] lg:max-w-2xl",
  body: "text-[15px] font-normal leading-[1.78] text-muted-foreground sm:text-base sm:leading-[1.8]",
  bodyLarge:
    "text-[16px] font-normal leading-[1.8] text-muted-foreground sm:text-[17px] sm:leading-[1.82]",
  pullQuote:
    "font-display text-pretty text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-foreground/90 sm:text-[1.75rem] lg:text-[2rem]",
  stackLoose: "flex flex-col gap-20 sm:gap-28 lg:gap-36",
  stack: "flex flex-col gap-12 sm:gap-16 lg:gap-20",
  stackTight: "flex flex-col gap-8 sm:gap-10",
  hairline:
    "h-px w-full bg-gradient-to-r from-transparent via-border/55 to-transparent",
  hairlineAccent:
    "h-px w-16 bg-gradient-to-r from-primary/30 via-primary/15 to-transparent",
  openFigure:
    "relative isolate",
  softPanel:
    "rounded-[32px] border border-border/25 bg-brand-surface/35 shadow-[0_32px_80px_rgba(34,34,34,0.03)] backdrop-blur-sm",
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
    "bg-gradient-to-b from-brand-surface/55 via-brand-surface/35 to-brand-background",
  mist: "bg-gradient-to-b from-accent/18 via-brand-background to-brand-background",
  depth:
    "bg-gradient-to-b from-brand-muted/35 via-brand-surface/40 to-brand-background",
  linen:
    "bg-gradient-to-b from-brand-background via-soft-beige/22 to-brand-background",
  cinematic:
    "bg-gradient-to-b from-brand-background via-accent/14 to-brand-surface/25",
  veil:
    "bg-gradient-to-b from-brand-surface/30 via-brand-background to-brand-background",
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
