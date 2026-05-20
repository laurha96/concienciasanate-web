/** Sistema de motion — página Sobre (calmo, clínico, sofisticado) */
export const aboutEase = [0.22, 1, 0.36, 1] as const;

export const aboutDuration = {
  fast: 0.38,
  base: 0.58,
  slow: 0.72,
  ambient: 16,
} as const;

export const aboutViewport = {
  once: true,
  amount: 0.12,
  margin: "-4% 0px -6% 0px",
} as const;

export const aboutParallax = {
  subtle: 14,
  medium: 22,
} as const;

export const aboutHover = {
  lift: -3,
  liftCard: -4,
  scale: 1.003,
  scaleCard: 1.005,
} as const;

export const aboutHeroStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
} as const;

export const aboutHeroFadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: aboutDuration.slow, ease: aboutEase },
  },
} as const;

export const aboutStaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
} as const;

export const aboutStaggerChild = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: aboutDuration.base, ease: aboutEase },
  },
} as const;

export const aboutFadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: aboutViewport,
  transition: { duration: aboutDuration.base, ease: aboutEase },
} as const;

export const aboutFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: aboutDuration.base, ease: aboutEase },
} as const;

export const aboutSectionEnter = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.06, margin: "-2% 0px -4% 0px" },
  transition: { duration: aboutDuration.slow, ease: aboutEase },
} as const;

export const aboutHeaderStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.02 },
  },
} as const;

export const aboutHeaderItem = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: aboutDuration.base, ease: aboutEase },
  },
} as const;

export const aboutHairlineGrow = {
  initial: { scaleX: 0, opacity: 0 },
  whileInView: { scaleX: 1, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: aboutEase },
} as const;

export const aboutHoverLift = {
  whileHover: {
    y: aboutHover.lift,
    transition: { duration: aboutDuration.fast, ease: aboutEase },
  },
} as const;

export function aboutStaggerDelay(index: number, step = 0.06) {
  return {
    duration: aboutDuration.base,
    ease: aboutEase,
    delay: index * step,
  };
}

export function aboutTransition(delay = 0) {
  return { duration: aboutDuration.base, ease: aboutEase, delay };
}
