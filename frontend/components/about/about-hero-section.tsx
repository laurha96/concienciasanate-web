"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { aboutHeroCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { AboutHeroPremiumVisual } from "@/components/about/about-hero-premium-visual";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { BrandCtaLink } from "@/components/brand";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

function HeroMicrobadge({ label }: { label: string }) {
  return (
    <motion.li
      variants={fadeUp}
      className="list-none"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full",
          "border border-border/40 bg-brand-surface/50 px-3.5 py-2",
          "text-[13px] text-muted-foreground backdrop-blur-sm",
          "shadow-[0_8px_24px_rgba(34,34,34,0.04)]",
          "transition-colors duration-300 hover:border-primary/20 hover:bg-brand-surface/70 hover:text-foreground"
        )}
      >
        <Check
          className="size-3.5 shrink-0 text-[var(--green-secondary)] opacity-90"
          strokeWidth={2.25}
          aria-hidden
        />
        {label}
      </span>
    </motion.li>
  );
}

export function AboutHeroSection() {
  return (
    <AboutSection
      id="sobre-hero"
      tone="cinematic"
      cinematic
      aria-labelledby="about-hero-heading"
      className="overflow-hidden"
    >
      <AboutAmbientGlow position="center" className="top-0 opacity-80" />
      <AboutAmbientGlow position="left" className="top-1/3 opacity-40" />

      {/* Velo editorial */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-background/20 to-brand-background/60"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <AboutContainer size="wide" className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-24">
          <motion.div
            className="max-w-2xl lg:py-4 xl:max-w-[34rem]"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp}>
              <span
                className={cn(
                  "inline-flex items-center rounded-full",
                  "border border-border/45 bg-brand-surface/55 px-3.5 py-1.5",
                  "shadow-[0_6px_20px_rgba(34,34,34,0.04)] backdrop-blur-md",
                  aboutEd.eyebrow,
                  "normal-case tracking-[0.2em]"
                )}
              >
                {aboutHeroCopy.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="about-hero-heading"
              variants={fadeUp}
              className={cn(
                aboutEd.titleHero,
                "mt-8 text-balance sm:mt-9"
              )}
            >
              {aboutHeroCopy.title}
            </motion.h1>

            {/* Subtexto editorial */}
            <motion.p
              variants={fadeUp}
              className={cn(aboutEd.lead, "mt-7 max-w-xl lg:mt-8")}
            >
              {aboutHeroCopy.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center"
            >
              <BrandCtaLink
                href={aboutHeroCopy.primaryCta.href}
                variant="primary"
                size="lg"
                className="w-full shadow-[0_12px_32px_rgb(var(--brand-primary-rgb)/0.22)] sm:w-auto"
              >
                {aboutHeroCopy.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </BrandCtaLink>
              <BrandCtaLink
                href={aboutHeroCopy.secondaryCta.href}
                variant="secondary"
                size="lg"
                className={cn(
                  "w-full border-border/50 bg-brand-surface/60 backdrop-blur-sm sm:w-auto",
                  "hover:bg-brand-surface/90"
                )}
              >
                {aboutHeroCopy.secondaryCta.label}
              </BrandCtaLink>
            </motion.div>

            {/* Microbadges / indicadores de valor */}
            <motion.ul
              className="mt-10 flex list-none flex-col gap-2.5 p-0 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-2"
              aria-label="Indicadores de enfoque clínico"
              variants={stagger}
            >
              {aboutHeroCopy.microbadges.map((label) => (
                <HeroMicrobadge key={label} label={label} />
              ))}
            </motion.ul>

            {/* Nota ética */}
            <motion.p
              variants={fadeUp}
              className={cn(aboutEd.body, "mt-10 max-w-md text-sm opacity-80 sm:mt-12")}
            >
              {aboutHeroCopy.ethicsNote}{" "}
              <Link
                href={aboutHeroCopy.ethicsLink.href}
                className="font-medium text-[var(--green-secondary)] underline-offset-[5px] transition-opacity hover:underline"
              >
                {aboutHeroCopy.ethicsLink.label}
              </Link>
            </motion.p>
          </motion.div>

          <motion.div
            className="relative lg:pl-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
          >
            <AboutHeroPremiumVisual />
          </motion.div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
