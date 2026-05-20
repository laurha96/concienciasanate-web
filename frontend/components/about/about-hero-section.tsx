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
        className="relative mx-auto aspect-[5/4] w-full max-w-[540px] min-h-[280px] rounded-[32px] bg-brand-muted/20 lg:max-w-none"
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

function HeroValueIndicator({
  label,
  detail,
  index,
}: {
  label: string;
  detail: string;
  index: number;
}) {
  return (
    <motion.li
      variants={aboutHeroFadeUp}
      className={cn("list-none", aboutCardPremium.compact)}
      whileHover={{ y: -2, transition: { duration: 0.3 } }}
    >
      <span
        className={cn(
          aboutEd.indexMarker,
          "block text-[9.5px] text-primary/45"
        )}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className="mt-2 text-[13px] font-medium tracking-tight text-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-[12.5px] leading-snug text-foreground/65">
        {detail}
      </p>
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
      cinematic
      animate={false}
      aria-labelledby="about-hero-heading"
      className="overflow-hidden"
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
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-background via-brand-background/80 to-transparent sm:h-48"
        aria-hidden
      />

      <AboutContainer size="wide" className="relative">
        <div className="grid items-center gap-16 sm:gap-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 xl:gap-28">
          {/* Columna editorial */}
          <motion.div
            className="max-w-2xl lg:py-10 xl:max-w-[38rem] xl:py-14"
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
              className={cn(
                aboutEd.titleHero,
                "mt-7 text-balance sm:mt-8 lg:mt-9"
              )}
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

            <motion.div
              variants={aboutHeroFadeUp}
              className="relative mt-7 max-w-xl lg:mt-8"
            >
              <div
                className="absolute -left-3 top-1 bottom-1 w-px bg-gradient-to-b from-primary/35 via-primary/15 to-transparent sm:-left-4"
                aria-hidden
              />
              <p
                className={cn(
                  aboutEd.lead,
                  "pl-0 text-[16.5px] leading-[1.82] sm:text-[17.5px] sm:leading-[1.84]"
                )}
              >
                {aboutHeroCopy.subtitle}
              </p>
            </motion.div>

            <motion.div
              variants={aboutHeroFadeUp}
              className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
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
                  size="lg"
                  className="w-full shadow-[0_12px_32px_rgb(var(--brand-primary-rgb)/0.1)] sm:w-auto"
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
                  size="lg"
                  className={cn(
                    "w-full border-[rgb(var(--brand-primary-rgb)/0.1)] bg-brand-surface/48 backdrop-blur-md sm:w-auto",
                    "shadow-[0_8px_22px_rgba(34,34,34,0.03)] hover:bg-brand-surface/72"
                  )}
                >
                  {aboutHeroCopy.secondaryCta.label}
                </BrandCtaLink>
              </motion.div>
            </motion.div>

            <motion.ul
              className="mt-9 grid list-none gap-3 p-0 sm:mt-10 sm:grid-cols-3 sm:gap-2.5"
              aria-label="Indicadores de valor clínico"
              variants={aboutHeroStagger}
            >
              {aboutHeroCopy.valueIndicators.map((item, i) => (
                <HeroValueIndicator
                  key={item.label}
                  label={item.label}
                  detail={item.detail}
                  index={i}
                />
              ))}
            </motion.ul>

            <motion.ul
              className="mt-8 flex list-none flex-col gap-2 p-0 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-2"
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
                aboutEd.body,
                "mt-8 max-w-md border-t border-border/25 pt-7 text-[13.5px] leading-relaxed opacity-75 sm:mt-9"
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
            className="relative flex justify-center lg:justify-end lg:py-8 lg:pl-4 xl:py-12"
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
