"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";

import { aboutHeroCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFocusRing } from "@/components/about/about-a11y";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { aboutVisual } from "@/components/about/about-visual-tokens";
import {
  aboutHeroFadeUp,
  aboutHeroStagger,
  aboutHover,
  aboutParallax,
} from "@/components/about/about-motion";
import { aboutCardPremium } from "@/components/about/about-premium-card";
import { BrandCtaLink } from "@/components/brand";
import { cn } from "@/lib/utils";

const AboutHeroPremiumVisual = dynamic(
  () =>
    import("@/components/about/about-hero-premium-visual").then((mod) => ({
      default: mod.AboutHeroPremiumVisual,
    })),
  {
    loading: () => (
      <div
        className="relative mx-auto aspect-[4/3] w-full max-w-[420px] min-h-[220px] rounded-2xl bg-brand-muted/15 lg:max-w-none"
        role="presentation"
        aria-hidden
      />
    ),
  }
);

function HeroMicrobadge({ label }: { label: string }) {
  return (
    <motion.li
      variants={aboutHeroFadeUp}
      className="list-none"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className={aboutCardPremium.chip}>
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, aboutParallax.subtle]
  );
  const veilOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.72]);

  return (
    <AboutSection
      id="sobre-hero"
      tone="cinematic"
      animate={false}
      aria-labelledby="about-hero-heading"
      className={cn("overflow-hidden", aboutEd.sectionHero)}
    >
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none" aria-hidden />
      <AboutAmbientGlow position="center" className="top-[-6%]" intensity="soft" />
      <div className={aboutVisual.heroVeil} aria-hidden />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-background/10 to-brand-background/65"
        aria-hidden
        style={{ opacity: veilOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-background via-brand-background/85 to-transparent sm:h-28"
        aria-hidden
      />

      <AboutContainer size="wide" className="relative">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <motion.div
            className="max-w-xl lg:max-w-2xl"
            variants={aboutHeroStagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={aboutHeroFadeUp}>
              <span
                className={cn(
                  aboutCardPremium.chip,
                  aboutEd.eyebrow,
                  "normal-case tracking-[0.2em]"
                )}
              >
                <span
                  className="relative flex size-1.5 shrink-0"
                  aria-hidden
                >
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-[var(--green-secondary)] opacity-30" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-[var(--green-secondary)]/80" />
                </span>
                {aboutHeroCopy.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              id="about-hero-heading"
              variants={aboutHeroFadeUp}
              className={cn(aboutEd.h1, "mt-4 text-balance sm:mt-5")}
            >
              {aboutHeroCopy.title.split(/(comprender|regular|sostener)/).map(
                (part, i) =>
                  /^(comprender|regular|sostener)$/.test(part) ? (
                    <span
                      key={`${part}-${i}`}
                      className="text-foreground/[0.88]"
                    >
                      {part}
                    </span>
                  ) : (
                    <span key={`t-${i}`}>{part}</span>
                  )
              )}
            </motion.h1>

            <motion.p
              variants={aboutHeroFadeUp}
              className={cn(aboutEd.lead, "mt-4 max-w-lg")}
            >
              {aboutHeroCopy.subtitle}
            </motion.p>

            <motion.div
              variants={aboutHeroFadeUp}
              className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center"
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { y: aboutHover.lift }}
                whileTap={reduceMotion ? undefined : { scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <BrandCtaLink
                  href={aboutHeroCopy.primaryCta.href}
                  variant="primary"
                  size="default"
                  className="w-full sm:w-auto"
                >
                  {aboutHeroCopy.primaryCta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </BrandCtaLink>
              </motion.div>
              <motion.div
                whileHover={reduceMotion ? undefined : { y: aboutHover.lift }}
                transition={{ duration: 0.2 }}
                className="w-full sm:w-auto"
              >
                <BrandCtaLink
                  href={aboutHeroCopy.secondaryCta.href}
                  variant="secondary"
                  size="default"
                  className="w-full sm:w-auto"
                >
                  {aboutHeroCopy.secondaryCta.label}
                </BrandCtaLink>
              </motion.div>
            </motion.div>

            <motion.ul
              className="mt-5 flex list-none flex-col gap-2 p-0 sm:flex-row sm:flex-wrap sm:gap-2"
              aria-label="Enfoque clínico"
              variants={aboutHeroStagger}
            >
              {aboutHeroCopy.microbadges.map((label) => (
                <HeroMicrobadge key={label} label={label} />
              ))}
            </motion.ul>

            <motion.p
              variants={aboutHeroFadeUp}
              className={cn(
                aboutEd.bodySm,
                "mt-5 max-w-md border-t border-border/30 pt-4 opacity-80"
              )}
            >
              {aboutHeroCopy.ethicsNote}{" "}
              <Link
                href={aboutHeroCopy.ethicsLink.href}
                className={cn(
                  aboutFocusRing,
                  "font-medium text-[var(--green-secondary)] underline-offset-[5px] transition-opacity hover:underline"
                )}
              >
                {aboutHeroCopy.ethicsLink.label}
              </Link>
            </motion.p>
          </motion.div>

          {/* Columna visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end lg:pl-2"
            style={{ y: visualY }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            <AboutHeroPremiumVisual />
          </motion.div>
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
