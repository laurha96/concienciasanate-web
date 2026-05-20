"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { aboutHeroCopy } from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { BrandCtaLink } from "@/components/brand";
import { cn } from "@/lib/utils";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      className="relative mx-auto w-full lg:sticky lg:top-28"
      aria-hidden
    >
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-[48px] bg-[radial-gradient(circle_at_40%_30%,rgb(var(--brand-primary-rgb)/0.1),transparent_60%)] blur-2xl"
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={cn(aboutEd.floatSurface, "relative overflow-hidden p-8 sm:p-10")}>
        <p className={aboutEd.eyebrow}>Estructura clínica</p>

        <svg
          viewBox="0 0 400 240"
          className="mt-6 h-[200px] w-full sm:h-[220px]"
          role="img"
          aria-label="Diagrama abstracto: comprensión, regulación y sostenibilidad"
        >
          <defs>
            <linearGradient id="about-hero-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.06" />
              <stop offset="0.5" stopColor="rgb(118 176 65)" stopOpacity="0.28" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path
            d="M32 160 C110 72, 190 80, 210 118 S310 188, 372 88"
            fill="none"
            stroke="url(#about-hero-line)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {[
            { cx: 88, cy: 138, label: "Comprender" },
            { cx: 210, cy: 116, label: "Regular" },
            { cx: 322, cy: 100, label: "Sostener" },
          ].map((node) => (
            <g key={node.label}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="32"
                fill="rgb(var(--brand-accent-rgb))"
                opacity="0.45"
              />
              <circle
                cx={node.cx}
                cy={node.cy}
                r="8"
                fill="rgb(var(--brand-primary-rgb))"
                opacity="0.3"
              />
              <text
                x={node.cx}
                y={node.cy + 52}
                textAnchor="middle"
                fontSize="11"
                fill="currentColor"
                opacity="0.7"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>

        <motion.div
          className="mt-8 flex flex-wrap gap-6 border-t border-border/40 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          {["Evidencia", "Calma", "Estructura"].map((label) => (
            <span
              key={label}
              className="text-[12px] font-medium tracking-wide text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
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
      <AboutAmbientGlow position="center" className="top-0" />
      <AboutAmbientGlow position="right" className="top-1/3 opacity-60" />

      <AboutContainer size="wide">
        <div className="grid items-start gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-24">
          <AboutReveal className="max-w-2xl pt-4 lg:pt-8">
            <p className={aboutEd.eyebrow}>{aboutHeroCopy.eyebrow}</p>
            <h1
              id="about-hero-heading"
              className={cn(aboutEd.titleHero, "mt-6 text-balance")}
            >
              {aboutHeroCopy.title}
            </h1>
            <p className={cn(aboutEd.lead, "mt-7 max-w-xl")}>
              {aboutHeroCopy.subtitle}
            </p>

            <motion.div
              className="mt-12 border-l border-primary/25 pl-6 sm:pl-8"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
            >
              <p className={aboutEd.eyebrow}>{aboutHeroCopy.whatWeDo.label}</p>
              <ul
                className="mt-4 space-y-3"
                aria-label={aboutHeroCopy.whatWeDo.label}
              >
                {aboutHeroCopy.whatWeDo.items.map((item) => (
                  <li key={item} className={aboutEd.body}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
            >
              <BrandCtaLink
                href={aboutHeroCopy.primaryCta.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {aboutHeroCopy.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </BrandCtaLink>
              <BrandCtaLink
                href={aboutHeroCopy.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {aboutHeroCopy.secondaryCta.label}
              </BrandCtaLink>
            </motion.div>

            <p className={cn(aboutEd.body, "mt-8 max-w-md text-sm opacity-90")}>
              Sin promesas de cura ni diagnósticos automáticos.{" "}
              <Link
                href="#etica-limites"
                className="font-medium text-[var(--green-secondary)] underline-offset-[5px] transition-opacity hover:underline"
              >
                Ver ética y límites
              </Link>
            </p>
          </AboutReveal>

          <HeroVisual />
        </div>
      </AboutContainer>
    </AboutSection>
  );
}
