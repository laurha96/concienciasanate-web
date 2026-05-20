export const aboutFadeUp = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
} as const;

export const aboutFadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

export function aboutStaggerDelay(index: number, step = 0.05) {
  return { ...aboutFadeUp.transition, delay: index * step };
}
