import { cn } from "@/lib/utils";

/**
 * Sistema visual regulador — página Sobre.
 * Verdes suaves, velos orgánicos, glow ligero, blur premium.
 * Evita contraste agresivo, saturación y sombras pesadas.
 */
export const aboutVisual = {
  /** Gradiente de línea decorativa SVG (opacidad baja) */
  lineGradient: {
    color: "rgb(118 176 65)",
    peakOpacity: 0.14,
  },

  decorLines: "pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]",

  veil: {
    top: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_52%_at_50%_-8%,rgb(var(--brand-accent-rgb)/0.07),transparent_60%)]",
    warmCorner:
      "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_52%_40%_at_90%_14%,rgb(var(--brand-accent-rgb)/0.05),transparent_62%)]",
    coolCorner:
      "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_36%_at_8%_86%,rgb(var(--brand-primary-rgb)/0.028),transparent_58%)]",
    floor:
      "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-background/80 to-transparent",
  },

  heroVeil:
    "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_48%_at_68%_36%,rgb(var(--brand-primary-rgb)/0.04),transparent_58%)]",

  manifestVeil:
    "pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-background via-brand-background to-[rgb(var(--brand-accent-rgb)/0.04)]",

  nav: {
    bar: "border-b border-[rgb(var(--brand-primary-rgb)/0.08)] bg-brand-background/72 backdrop-blur-md",
    pill: cn(
      "border border-[rgb(var(--brand-primary-rgb)/0.1)]",
      "bg-[rgb(var(--brand-accent-rgb)/0.35)]",
      "hover:border-[rgb(var(--brand-primary-rgb)/0.14)]",
      "hover:bg-[rgb(var(--brand-accent-rgb)/0.5)]"
    ),
  },

  /** Pulso ambiental — muy contenido */
  ambientPulse: {
    opacity: [0.11, 0.19, 0.11],
    scale: [1, 1.015, 1],
  },

  glass: {
    border: "border-white/[0.5]",
    borderSoft: "border-[rgb(var(--brand-primary-rgb)/0.08)]",
    blur: "backdrop-blur-xl",
    blurLg: "backdrop-blur-2xl",
    saturate: "backdrop-saturate-[1.06]",
  },

  shadow: {
    card: "shadow-[0_18px_48px_rgba(34,34,34,0.034)]",
    cardHover: "shadow-[0_24px_56px_rgba(34,34,34,0.042)]",
    cardInset: "shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]",
    soft: "shadow-[0_12px_32px_rgba(34,34,34,0.028)]",
    chip: "shadow-[0_8px_22px_rgba(34,34,34,0.03)]",
  },

  glow: {
    card: "pointer-events-none absolute size-48 rounded-full bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.07),transparent_70%)] blur-2xl opacity-[0.32] transition-[opacity,transform] duration-[560ms] ease-out group-hover:opacity-[0.55] group-hover:scale-[1.02]",
    cardLeft: "-left-16 -top-16",
    cardRight: "-right-16 -top-16",
    ambient:
      "pointer-events-none absolute rounded-full bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.042)_0%,transparent_72%)] blur-3xl",
    ambientSize: "size-[min(100%,680px)]",
  },

  surface: {
    card: cn(
      "bg-gradient-to-br",
      "from-brand-surface/[0.5] via-brand-surface/[0.36] to-[rgb(var(--brand-accent-rgb)/0.22)]"
    ),
    cardNested: cn(
      "bg-gradient-to-br",
      "from-brand-background/48 via-brand-surface/34 to-brand-background/40"
    ),
    panel: cn(
      "rounded-[28px]",
      "border border-white/[0.48]",
      "bg-gradient-to-br from-brand-surface/44 via-brand-surface/32 to-[rgb(var(--brand-accent-rgb)/0.18)]",
      "backdrop-blur-xl backdrop-saturate-[1.05]",
      "shadow-[0_20px_52px_rgba(34,34,34,0.032)]",
      "ring-1 ring-[rgb(var(--brand-primary-rgb)/0.06)]"
    ),
  },

  gradient: {
    cardLight:
      "pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.38] via-white/[0.04] to-[rgb(var(--brand-accent-rgb)/0.06)] opacity-[0.85] transition-opacity duration-[500ms] group-hover:opacity-95",
    cardDepth:
      "pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-background/[0.05] via-transparent to-transparent",
    hairline: "via-[rgb(var(--brand-primary-rgb)/0.14)]",
    accentLine: "from-transparent via-[rgb(var(--brand-primary-rgb)/0.2)] to-transparent",
    dividerBreath:
      "pointer-events-none absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-b from-transparent via-[rgb(var(--brand-accent-rgb)/0.06)] to-transparent blur-3xl",
  },
} as const;

/** Shell de card premium — tono regulador */
export const aboutCardVisual = {
  shell: cn(
    "group relative overflow-hidden rounded-[32px]",
    aboutVisual.glass.border,
    aboutVisual.surface.card,
    aboutVisual.shadow.card,
    aboutVisual.shadow.cardInset,
    aboutVisual.glass.blur,
    aboutVisual.glass.saturate,
    "ring-1 ring-[rgb(var(--brand-primary-rgb)/0.06)]",
    "transition-[border-color,box-shadow,transform] duration-[480ms]",
    "hover:border-[rgb(var(--brand-primary-rgb)/0.14)]",
    "hover:shadow-[0_26px_60px_rgba(34,34,34,0.04)]"
  ),
  shellLg: "rounded-[34px]",
  gradientLight: aboutVisual.gradient.cardLight,
  gradientDepth: aboutVisual.gradient.cardDepth,
  glow: aboutVisual.glow.card,
  glowLeft: aboutVisual.glow.cardLeft,
  glowRight: aboutVisual.glow.cardRight,
  sideAccent:
    "pointer-events-none absolute inset-y-7 left-0 w-[3px] rounded-full bg-gradient-to-b from-[rgb(var(--brand-primary-rgb)/0.28)] via-[rgb(var(--brand-primary-rgb)/0.1)] to-transparent sm:inset-y-8",
  topLine: cn(
    "pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r",
    aboutVisual.gradient.accentLine,
    "sm:inset-x-8"
  ),
  bottomLine:
    "h-px w-full bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.18)] via-border/24 to-transparent",
  icon: cn(
    "grid shrink-0 place-items-center rounded-[18px]",
    "border border-[rgb(var(--brand-primary-rgb)/0.1)]",
    "bg-[rgb(var(--brand-accent-rgb)/0.4)]",
    "text-[var(--green-secondary)]",
    aboutVisual.shadow.chip,
    "backdrop-blur-sm",
    "transition-[border-color,background-color,transform,box-shadow] duration-[420ms]",
    "group-hover:border-[rgb(var(--brand-primary-rgb)/0.16)]",
    "group-hover:bg-[rgb(var(--brand-accent-rgb)/0.55)]"
  ),
  iconSm: "size-10 rounded-[16px]",
  iconMd: "size-12 rounded-[18px]",
  iconLg: "size-[52px] rounded-[20px]",
  nested: cn(
    "group/nested relative overflow-hidden rounded-[20px]",
    "border border-white/[0.44]",
    aboutVisual.surface.cardNested,
    aboutVisual.shadow.soft,
    "backdrop-blur-md backdrop-saturate-[1.04]",
    "ring-1 ring-[rgb(var(--brand-primary-rgb)/0.05)]",
    "transition-[border-color,background-color,box-shadow,transform] duration-[400ms]",
    "hover:border-[rgb(var(--brand-primary-rgb)/0.12)]",
    "hover:bg-brand-surface/52",
    "hover:shadow-[0_16px_40px_rgba(34,34,34,0.038)]"
  ),
  nestedTopLine:
    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[rgb(var(--brand-primary-rgb)/0.14)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/nested:opacity-100",
  node: cn(
    "rounded-2xl border border-white/[0.48]",
    "bg-gradient-to-br from-brand-surface/72 via-brand-surface/56 to-[rgb(var(--brand-accent-rgb)/0.28)]",
    aboutVisual.shadow.soft,
    "backdrop-blur-lg backdrop-saturate-[1.05]",
    "ring-1 ring-[rgb(var(--brand-primary-rgb)/0.06)]",
    "transition-[border-color,box-shadow,background-color,transform,opacity] duration-[420ms]"
  ),
  watermark:
    "pointer-events-none absolute font-display font-medium leading-none tracking-tighter text-foreground/[0.028] select-none text-[5rem] sm:text-[5.5rem]",
  chip: cn(
    "inline-flex items-center gap-2 rounded-full",
    "border border-white/[0.46]",
    "bg-gradient-to-br from-brand-surface/48 to-[rgb(var(--brand-accent-rgb)/0.32)]",
    "px-3.5 py-2 text-[12.5px] leading-none text-foreground/62",
    aboutVisual.shadow.chip,
    "backdrop-blur-md ring-1 ring-[rgb(var(--brand-primary-rgb)/0.05)]",
    "transition-[border-color,background-color,color,box-shadow,transform] duration-[380ms]",
    "hover:border-[rgb(var(--brand-primary-rgb)/0.12)]",
    "hover:bg-brand-surface/58 hover:text-foreground/78"
  ),
  compact: cn(
    "rounded-[22px] border border-white/[0.44]",
    "bg-gradient-to-br from-brand-surface/42 via-brand-surface/30 to-[rgb(var(--brand-accent-rgb)/0.2)]",
    "p-4",
    aboutVisual.shadow.soft,
    "backdrop-blur-lg ring-1 ring-[rgb(var(--brand-primary-rgb)/0.05)]",
    "transition-[border-color,box-shadow,transform] duration-[380ms]",
    "hover:border-[rgb(var(--brand-primary-rgb)/0.11)]",
    "hover:shadow-[0_18px_44px_rgba(34,34,34,0.036)]"
  ),
} as const;
