"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  aboutDividerFillClass,
  aboutEd,
  aboutSectionToneClass,
  type AboutSectionTone,
} from "@/components/about/about-editorial-tokens";
import { aboutFadeUp } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

export function AboutPageShell({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className={cn(aboutEd.page, "overflow-x-clip")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection({
  children,
  id,
  "aria-labelledby": ariaLabelledby,
  tone = "canvas",
  cinematic = false,
  className,
}: {
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  tone?: AboutSectionTone;
  cinematic?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        cinematic ? aboutEd.sectionCinematic : aboutEd.section,
        aboutSectionToneClass[tone],
        className
      )}
    >
      {children}
    </section>
  );
}

export function AboutContainer({
  children,
  size = "default",
  className,
}: {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
}) {
  const sizeClass =
    size === "wide"
      ? aboutEd.containerWide
      : size === "narrow"
        ? aboutEd.containerNarrow
        : aboutEd.container;

  return <motion.div className={cn(sizeClass, className)}>{children}</motion.div>;
}

export function AboutEditorialHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  size = "default",
  className,
}: {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <header
      className={cn(
        "space-y-6 sm:space-y-7",
        centered && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className={cn(aboutEd.eyebrow, centered && "mx-auto")}>{eyebrow}</p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          size === "large" ? aboutEd.titleHero : aboutEd.title,
          centered && "mx-auto max-w-3xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            aboutEd.lead,
            centered ? "mx-auto max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function AboutOrganicDivider({
  variant = "wave",
  flip = false,
  fillTone = "canvas",
  className,
}: {
  variant?: "wave" | "curve" | "fade" | "breathe";
  flip?: boolean;
  /** Tono de la sección que el divisor debe “rellenar” visualmente */
  fillTone?: AboutSectionTone;
  className?: string;
}) {
  if (variant === "fade" || variant === "breathe") {
    return (
      <div
        aria-hidden
        className={cn(
          variant === "breathe" ? "relative h-24 sm:h-32" : "relative h-20 sm:h-28",
          className
        )}
      >
        <motion.div
          className={cn(aboutEd.hairline, "absolute inset-x-8 top-1/2 sm:inset-x-16")}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center" }}
        />
        {variant === "breathe" ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-1/2 h-28 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent/10 to-transparent blur-3xl"
            aria-hidden
          />
        ) : null}
      </div>
    );
  }

  const fillClass = aboutDividerFillClass[fillTone];
  const path =
    variant === "wave"
      ? "M0 52 C280 4 520 96 720 52 C920 8 1080 44 1200 36 L1200 88 L0 88 Z"
      : "M0 60 Q400 8 800 48 T1200 52 L1200 88 L0 88 Z";

  return (
    <motion.div
      aria-hidden
      className={cn(
        "relative -mt-px w-full overflow-hidden",
        variant === "wave" ? "h-16 sm:h-24" : "h-14 sm:h-20",
        flip && "rotate-180",
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 1200 88"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", fillClass)}
      >
        <path d={path} fill="currentColor" className="opacity-95" />
      </svg>
    </motion.div>
  );
}

export function AboutAmbientGlow({
  position = "center",
  className,
}: {
  position?: "center" | "left" | "right";
  className?: string;
}) {
  const positionClass =
    position === "left"
      ? "left-0 -translate-x-1/3"
      : position === "right"
        ? "right-0 translate-x-1/3"
        : "left-1/2 -translate-x-1/2";

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/5 size-[min(110%,720px)] rounded-full bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.07)_0%,transparent_68%)] blur-3xl",
        positionClass,
        className
      )}
      animate={{ opacity: [0.25, 0.45, 0.25] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function AboutReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={aboutFadeUp.initial}
      whileInView={aboutFadeUp.whileInView}
      viewport={aboutFadeUp.viewport}
      transition={{ ...aboutFadeUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AboutPullQuote({
  children,
  attribution,
  className,
}: {
  children: ReactNode;
  attribution?: string;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "relative border-none py-2 pl-0",
        className
      )}
    >
      <motion.div
        className={aboutEd.hairlineAccent}
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      <p className={cn(aboutEd.pullQuote, "mt-8 max-w-2xl")}>{children}</p>
      {attribution ? (
        <footer className={cn(aboutEd.eyebrow, "mt-5 normal-case tracking-[0.14em]")}>
          {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}

export function AboutEditorialGrid({
  children,
  className,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <motion.ul
      className={cn(
        "grid list-none gap-x-12 gap-y-16 p-0 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-20 lg:gap-x-20 lg:gap-y-24",
        className
      )}
      aria-label={ariaLabel}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.ul>
  );
}
