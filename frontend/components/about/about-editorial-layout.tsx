"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  aboutDividerFillClass,
  aboutEd,
  aboutHeaderTierClass,
  aboutSectionToneClass,
  type AboutHeaderTier,
  type AboutSectionTone,
} from "@/components/about/about-editorial-tokens";
import { aboutVisual } from "@/components/about/about-visual-tokens";
import {
  aboutDuration,
  aboutEase,
  aboutFadeUp,
  aboutHairlineGrow,
  aboutHeaderItem,
  aboutHeaderStagger,
  aboutSectionEnter,
  aboutStaggerContainer,
} from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

export function AboutPageShell({ children }: { children: ReactNode }) {
  return (
    <div className={cn(aboutEd.page, "about-page-enter overflow-x-clip")}>
      {children}
    </div>
  );
}

export function AboutSection({
  children,
  id,
  "aria-labelledby": ariaLabelledby,
  "aria-label": ariaLabel,
  tone = "canvas",
  cinematic = false,
  className,
  animate = true,
}: {
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
  /** Si no hay encabezado visible con id, usar aria-label. */
  "aria-label"?: string;
  tone?: AboutSectionTone;
  cinematic?: boolean;
  className?: string;
  /** Fade-up al entrar en viewport */
  animate?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const motionProps = animate && !reduceMotion ? aboutSectionEnter : {};

  return (
    <motion.section
      id={id}
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabelledby ? undefined : ariaLabel}
      className={cn(
        cinematic ? aboutEd.sectionHero : aboutEd.section,
        aboutSectionToneClass[tone],
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}

export function AboutContainer({
  children,
  size = "default",
  className,
  parallax = false,
}: {
  children: ReactNode;
  size?: "default" | "wide" | "narrow";
  className?: string;
  /** Parallax vertical muy sutil */
  parallax?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [6, -6]);

  const sizeClass =
    size === "wide"
      ? aboutEd.containerWide
      : size === "narrow"
        ? aboutEd.containerNarrow
        : aboutEd.container;

  return (
    <motion.div
      ref={ref}
      className={cn(sizeClass, className)}
      style={parallax && !reduceMotion ? { y } : undefined}
    >
      {children}
    </motion.div>
  );
}

export function AboutStaggerGrid({
  children,
  className,
  "aria-label": ariaLabel,
  as = "ul",
}: {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  as?: "ul" | "ol";
}) {
  const reduceMotion = useReducedMotion();
  const Component = as === "ol" ? motion.ol : motion.ul;

  return (
    <Component
      className={className}
      aria-label={ariaLabel}
      variants={aboutStaggerContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </Component>
  );
}

function AboutChapterMarker({
  index,
  centered,
}: {
  index: string;
  centered: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        centered ? "mx-auto justify-center" : "justify-start"
      )}
      aria-hidden
    >
      <span className={aboutEd.chapterIndex}>{index}</span>
      <span className={aboutEd.chapterRule} />
    </div>
  );
}

export function AboutEditorialHeader({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  tier = "section",
  className,
  titleClassName,
  animated = true,
  chapter,
  /** @deprecated Usar tier="hero" */
  size,
}: {
  eyebrow?: ReactNode;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  tier?: AboutHeaderTier;
  className?: string;
  titleClassName?: string;
  animated?: boolean;
  chapter?: string;
  size?: "default" | "large";
}) {
  const resolvedTier: AboutHeaderTier =
    size === "large" ? "hero" : tier;
  const tierStyles = aboutHeaderTierClass[resolvedTier];
  const centered = align === "center";
  const reduceMotion = useReducedMotion();
  const useMotion = animated && !reduceMotion;
  const HeadingTag = resolvedTier === "hero" ? "h1" : "h2";

  const headerClass = cn(tierStyles.stack, centered && "text-center", className);

  const titleClass = cn(
    tierStyles.title,
    centered && "mx-auto max-w-3xl",
    titleClassName
  );

  const descriptionClass = cn(
    tierStyles.description,
    centered ? "mx-auto max-w-2xl" : "max-w-2xl"
  );

  if (!useMotion) {
    return (
      <header className={headerClass}>
        {chapter ? <AboutChapterMarker index={chapter} centered={centered} /> : null}
        {eyebrow ? (
          <p className={cn(aboutEd.eyebrow, centered && "mx-auto")}>{eyebrow}</p>
        ) : null}
        <HeadingTag id={titleId} className={titleClass}>
          {title}
        </HeadingTag>
        {description ? (
          <p className={descriptionClass}>{description}</p>
        ) : null}
      </header>
    );
  }

  const MotionHeading = resolvedTier === "hero" ? motion.h1 : motion.h2;

  return (
    <motion.header
      className={headerClass}
      variants={aboutHeaderStagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {chapter ? (
        <motion.div variants={aboutHeaderItem}>
          <AboutChapterMarker index={chapter} centered={centered} />
        </motion.div>
      ) : null}
      {eyebrow ? (
        <motion.p
          variants={aboutHeaderItem}
          className={cn(aboutEd.eyebrow, centered && "mx-auto")}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <MotionHeading
        id={titleId}
        variants={aboutHeaderItem}
        className={titleClass}
      >
        {title}
      </MotionHeading>
      {description ? (
        <motion.p variants={aboutHeaderItem} className={descriptionClass}>
          {description}
        </motion.p>
      ) : null}
    </motion.header>
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
  fillTone?: AboutSectionTone;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (variant === "fade" || variant === "breathe") {
    return (
      <div
        aria-hidden
        className={cn(
          variant === "breathe" ? "relative h-28 sm:h-36 lg:h-40" : "relative h-24 sm:h-32 lg:h-36",
          className
        )}
      >
        <motion.div
          className={cn(aboutEd.hairline, "absolute inset-x-8 top-1/2 sm:inset-x-16")}
          {...(reduceMotion
            ? { style: { opacity: 1 } }
            : {
                initial: aboutHairlineGrow.initial,
                whileInView: aboutHairlineGrow.whileInView,
                viewport: aboutHairlineGrow.viewport,
                transition: aboutHairlineGrow.transition,
              })}
          style={{ transformOrigin: "center" }}
        />
        {variant === "breathe" ? (
          <motion.div
            className={aboutVisual.gradient.dividerBreath}
            aria-hidden
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.2, 0.32, 0.2] }
            }
            transition={{
              duration: aboutDuration.ambient,
              repeat: Infinity,
              ease: "easeInOut",
            }}
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
        variant === "wave" ? "h-20 sm:h-28 lg:h-32" : "h-16 sm:h-24 lg:h-28",
        flip && "rotate-180",
        className
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 6 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: aboutDuration.base, ease: aboutEase }}
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
  interactive = true,
  intensity = "soft",
}: {
  position?: "center" | "left" | "right";
  className?: string;
  /** Pulso orgánico muy suave */
  interactive?: boolean;
  intensity?: "soft" | "medium";
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [6, -6]);

  const positionClass =
    position === "left"
      ? "left-0 -translate-x-1/3"
      : position === "right"
        ? "right-0 translate-x-1/3"
        : "left-1/2 -translate-x-1/2";

  const softPulse = {
    opacity: [0.11, 0.19, 0.11],
    scale: [1, 1.015, 1],
  };
  const mediumPulse = {
    opacity: [0.16, 0.28, 0.16],
    scale: [1, 1.02, 1],
  };

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-1/5",
        aboutVisual.glow.ambientSize,
        aboutVisual.glow.ambient,
        "transition-opacity duration-700",
        positionClass,
        className
      )}
      style={interactive && !reduceMotion ? { y } : undefined}
      animate={
        reduceMotion || !interactive
          ? undefined
          : intensity === "soft"
            ? softPulse
            : mediumPulse
      }
      transition={{
        duration: aboutDuration.ambient,
        repeat: Infinity,
        ease: "easeInOut",
      }}
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
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : aboutFadeUp.initial}
      whileInView={reduceMotion ? undefined : aboutFadeUp.whileInView}
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
  const reduceMotion = useReducedMotion();

  return (
    <blockquote className={cn("relative border-none py-2 pl-0", className)}>
      <motion.div
        className={aboutEd.hairlineAccent}
        aria-hidden
        {...(reduceMotion
          ? { style: { transformOrigin: "left" } }
          : {
              ...aboutHairlineGrow,
              style: { transformOrigin: "left" },
            })}
      />
      <motion.p
        className={cn(aboutEd.pullQuote, "mt-8 max-w-2xl")}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: aboutDuration.base, ease: aboutEase, delay: 0.06 }}
      >
        {children}
      </motion.p>
      {attribution ? (
        <footer className={cn(aboutEd.eyebrow, "mt-5 normal-case tracking-[0.14em]")}>
          {attribution}
        </footer>
      ) : null}
    </blockquote>
  );
}

/** @deprecated Usar AboutStaggerGrid */
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
    <AboutStaggerGrid className={className} aria-label={ariaLabel}>
      {children}
    </AboutStaggerGrid>
  );
}
