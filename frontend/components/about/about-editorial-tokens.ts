/** Tokens Tailwind — página Sobre (ritmo editorial premium) */
export const aboutEd = {
  page: "about-page",
  section:
    "relative py-24 sm:py-32 lg:py-40 [&:not(:first-child)]:scroll-mt-20",
  sectionCinematic:
    "relative py-28 sm:py-36 lg:min-h-[72vh] lg:py-44 [&:not(:first-child)]:scroll-mt-20",
  sectionCompact: "relative py-20 sm:py-28 lg:py-32",
  container:
    "relative mx-auto w-full max-w-[1080px] px-6 sm:px-8 md:px-10 lg:px-12",
  containerWide:
    "relative mx-auto w-full max-w-[1180px] px-6 sm:px-8 md:px-10 lg:px-12",
  containerNarrow:
    "relative mx-auto w-full max-w-[720px] px-6 sm:px-8 md:px-10",
  eyebrow:
    "text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/85",
  title:
    "font-display text-balance text-[1.875rem] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-[2.35rem] lg:text-[2.65rem] lg:leading-[1.06]",
  titleHero:
    "font-display text-balance text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-[2.65rem] md:text-5xl lg:text-[3.25rem] lg:leading-[1.02] xl:text-[3.5rem]",
  lead: "max-w-xl text-pretty text-[17px] leading-[1.72] text-muted-foreground sm:text-lg sm:leading-[1.75] lg:max-w-2xl",
  body: "text-[15px] leading-[1.72] text-muted-foreground sm:text-base sm:leading-[1.75]",
  bodyLarge:
    "text-[16px] leading-[1.75] text-muted-foreground sm:text-[17px] sm:leading-[1.78]",
  stackLoose: "flex flex-col gap-16 sm:gap-20 lg:gap-24",
  stack: "flex flex-col gap-10 sm:gap-12 lg:gap-14",
  hairline:
    "h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent",
  floatSurface:
    "rounded-[28px] border border-border/40 bg-brand-surface/60 shadow-[0_24px_64px_rgba(34,34,34,0.04)] backdrop-blur-md",
  ghostSurface:
    "rounded-3xl border border-border/35 bg-brand-surface/45 backdrop-blur-sm",
} as const;

export type AboutSectionTone =
  | "canvas"
  | "paper"
  | "mist"
  | "depth"
  | "linen"
  | "cinematic";

export const aboutSectionToneClass: Record<AboutSectionTone, string> = {
  canvas: "bg-brand-background",
  paper: "bg-brand-surface/80",
  mist: "bg-gradient-to-b from-accent/25 via-brand-background to-brand-background",
  depth:
    "bg-gradient-to-b from-brand-muted/40 via-brand-surface/50 to-brand-background",
  linen:
    "bg-gradient-to-b from-brand-background via-soft-beige/30 to-brand-background",
  cinematic:
    "bg-gradient-to-b from-brand-background via-accent/20 to-brand-surface/30",
};
