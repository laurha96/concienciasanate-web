"use client";

import type { ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

import {
  aboutEase,
  aboutHover,
  aboutStaggerChild,
  aboutStaggerDelay,
} from "@/components/about/about-motion";
import { aboutCardVisual } from "@/components/about/about-visual-tokens";
import { cn } from "@/lib/utils";

/** Tokens visuales compartidos — cards página Sobre (sistema regulador) */
export const aboutCardPremium = aboutCardVisual;

export function useAboutPremiumCardHover(
  lift: number = aboutHover.liftCard,
  scale: number = aboutHover.scaleCard
) {
  const reduceMotion = useReducedMotion();
  return reduceMotion
    ? {}
    : {
        whileHover: {
          y: lift,
          scale,
          transition: { duration: 0.45, ease: aboutEase },
        },
      };
}

export type AboutPremiumCardListItemProps = {
  children: ReactNode;
  index: number;
  className?: string;
  staggerStep?: number;
  y?: number;
  /** Dentro de AboutStaggerGrid — evita doble animación */
  useStagger?: boolean;
};

export function AboutPremiumCardListItem({
  children,
  index,
  className,
  staggerStep = 0.09,
  y = 22,
  useStagger = false,
}: AboutPremiumCardListItemProps) {
  if (useStagger) {
    return (
      <motion.li variants={aboutStaggerChild} className={cn("list-none", className)}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.li
      className={cn("list-none", className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={aboutStaggerDelay(index, staggerStep)}
    >
      {children}
    </motion.li>
  );
}

export type AboutPremiumCardShellProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "large";
  lift?: number;
  glowPosition?: "left" | "right";
  sideAccent?: boolean;
  glowClassName?: string;
} & Omit<HTMLMotionProps<"article">, "children">;

export function AboutPremiumCardShell({
  children,
  className,
  size = "default",
  lift = aboutHover.liftCard,
  glowPosition = "right",
  sideAccent = false,
  glowClassName,
  ...props
}: AboutPremiumCardShellProps) {
  const hover = useAboutPremiumCardHover(lift);

  return (
    <motion.article
      className={cn(
        aboutCardPremium.shell,
        size === "large" && aboutCardPremium.shellLg,
        className
      )}
      {...hover}
      transition={{ duration: 0.42, ease: aboutEase }}
      {...props}
    >
      <div
        className={cn(
          aboutCardPremium.glow,
          glowPosition === "left"
            ? aboutCardPremium.glowLeft
            : aboutCardPremium.glowRight,
          glowClassName
        )}
        aria-hidden
      />
      <div className={aboutCardPremium.gradientLight} aria-hidden />
      <div className={aboutCardPremium.gradientDepth} aria-hidden />
      {sideAccent ? (
        <div className={aboutCardPremium.sideAccent} aria-hidden />
      ) : null}
      <AboutPremiumCardTopLine />
      {children}
    </motion.article>
  );
}

export function AboutPremiumCardTopLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(aboutCardPremium.topLine, className)}
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: aboutEase }}
      style={{ transformOrigin: "center" }}
    />
  );
}

export function AboutPremiumCardBottomLine({
  className,
  delay = 0.08,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn(aboutCardPremium.bottomLine, className)}
      aria-hidden
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: aboutEase }}
      style={{ transformOrigin: "left" }}
    />
  );
}

export function AboutPremiumCardIcon({
  children,
  size = "md",
  className,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const sizeClass =
    size === "sm"
      ? aboutCardPremium.iconSm
      : size === "lg"
        ? aboutCardPremium.iconLg
        : aboutCardPremium.iconMd;

  return (
    <motion.span
      className={cn(aboutCardPremium.icon, sizeClass, className)}
      aria-hidden
      whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      transition={{ duration: 0.28, ease: aboutEase }}
    >
      {children}
    </motion.span>
  );
}

export function AboutPremiumCardWatermark({
  index,
  align = "right",
}: {
  index: number;
  align?: "left" | "right";
}) {
  return (
    <span
      className={cn(
        aboutCardPremium.watermark,
        align === "left" ? "left-3 top-5" : "-right-1 top-4"
      )}
      aria-hidden
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export type AboutPremiumCardNestedProps = {
  children: ReactNode;
  className?: string;
};

export function AboutPremiumCardNested({
  children,
  className,
}: AboutPremiumCardNestedProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(aboutCardPremium.nested, className)}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.006 }}
      transition={{ duration: 0.32, ease: aboutEase }}
    >
      <div className={aboutCardPremium.nestedTopLine} aria-hidden />
      <div
        className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/[0.04] blur-2xl opacity-0 transition-opacity duration-300 group-hover/nested:opacity-100"
        aria-hidden
      />
      {children}
    </motion.div>
  );
}
