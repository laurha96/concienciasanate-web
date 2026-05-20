"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import {
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
      transition={{ duration: 0.4, ease: "easeOut" }}
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
        "space-y-5 sm:space-y-6",
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
            centered ? "mx-auto" : undefined
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
  className,
}: {
  variant?: "wave" | "curve" | "fade";
  flip?: boolean;
  className?: string;
}) {
  if (variant === "fade") {
    return (
      <motion.div
        aria-hidden
        className={cn("relative h-16 sm:h-24", className)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={cn(aboutEd.hairline, "absolute inset-x-0 top-1/2 -translate-y-1/2")}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />
      </motion.div>
    );
  }

  const path =
    variant === "wave"
      ? "M0 48 C240 8 480 88 720 48 C880 24 1000 56 1200 40 L1200 80 L0 80 Z"
      : "M0 56 Q600 0 1200 56 L1200 80 L0 80 Z";

  return (
    <div
      aria-hidden
      className={cn(
        "relative -mt-px h-14 w-full overflow-hidden sm:h-20",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-brand-background"
      >
        <path d={path} fill="currentColor" className="opacity-90" />
      </svg>
    </div>
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
        "pointer-events-none absolute top-1/4 size-[min(100%,640px)] rounded-full bg-[rgb(var(--brand-primary-rgb)/0.06)] blur-3xl",
        positionClass,
        className
      )}
      animate={{ opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
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
