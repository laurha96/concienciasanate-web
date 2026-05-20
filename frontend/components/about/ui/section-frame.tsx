"use client";

import type { ReactNode } from "react";

import type { AboutStoryChapter } from "@/components/about/about-editorial-story";
import {
  aboutEd,
  type AboutHeaderTier,
} from "@/components/about/about-editorial-tokens";
import {
  AboutContainer,
  AboutEditorialHeader,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import {
  AboutDecorativeLines,
  AboutSectionAtmosphere,
  type AboutAtmospherePreset,
} from "@/components/about/about-section-atmosphere";
import { AboutSectionHairline } from "@/components/about/ui/section-hairline";
import { cn } from "@/lib/utils";

export type AboutSectionVariant = "editorial" | "compact" | "interactive";

const variantConfig: Record<
  AboutSectionVariant,
  {
    sectionClass: string;
    headerTier: AboutHeaderTier;
    headerAlign: "left" | "center";
    atmosphere: AboutAtmospherePreset;
    showChapter: boolean;
  }
> = {
  editorial: {
    sectionClass: aboutEd.section,
    headerTier: "section",
    headerAlign: "left",
    atmosphere: "whisper",
    showChapter: true,
  },
  compact: {
    sectionClass: aboutEd.sectionCompact,
    headerTier: "compact",
    headerAlign: "left",
    atmosphere: "none",
    showChapter: true,
  },
  interactive: {
    sectionClass: aboutEd.section,
    headerTier: "compact",
    headerAlign: "left",
    atmosphere: "whisper",
    showChapter: true,
  },
};

export type AboutSectionFrameProps = {
  chapter: AboutStoryChapter;
  variant?: AboutSectionVariant;
  header: {
    titleId: string;
    eyebrow?: ReactNode;
    title: string;
    description?: string;
    titleClassName?: string;
    tier?: AboutHeaderTier;
    align?: "left" | "center";
  };
  children: ReactNode;
  footer?: ReactNode;
  atmosphere?: {
    preset?: AboutAtmospherePreset;
    glowPosition?: "center" | "left" | "right";
  };
  decorativeLines?: {
    paths: readonly string[];
    gradientId: string;
  };
  containerSize?: "default" | "wide" | "narrow";
  containerClassName?: string;
  headerClassName?: string;
  showHeaderHairline?: boolean;
  hairlineClassName?: string;
  ariaLabel?: string;
  className?: string;
  animate?: boolean;
};

export function AboutSectionFrame({
  chapter,
  variant = "editorial",
  header,
  children,
  footer,
  atmosphere,
  decorativeLines,
  containerSize = "wide",
  containerClassName,
  headerClassName,
  showHeaderHairline = false,
  hairlineClassName = "max-w-md",
  ariaLabel,
  className,
  animate = true,
}: AboutSectionFrameProps) {
  const cfg = variantConfig[variant];
  const atmospherePreset = atmosphere?.preset ?? cfg.atmosphere;

  return (
    <AboutSection
      id={chapter.id}
      tone={chapter.tone}
      aria-labelledby={header.titleId}
      aria-label={ariaLabel}
      animate={animate}
      className={cn(cfg.sectionClass, "relative overflow-hidden", className)}
    >
      {atmospherePreset !== "none" ? (
        <AboutSectionAtmosphere
          preset={atmospherePreset}
          glowPosition={atmosphere?.glowPosition ?? "center"}
        />
      ) : null}

      {decorativeLines ? (
        <AboutDecorativeLines
          paths={decorativeLines.paths}
          gradientId={decorativeLines.gradientId}
        />
      ) : null}

      <AboutContainer size={containerSize} className={cn("relative", containerClassName)}>
        <AboutEditorialHeader
          titleId={header.titleId}
          chapter={cfg.showChapter ? chapter.index : undefined}
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
          align={header.align ?? cfg.headerAlign}
          tier={header.tier ?? cfg.headerTier}
          titleClassName={header.titleClassName}
          className={cn("max-w-3xl", headerClassName)}
        />

        {showHeaderHairline ? (
          <AboutSectionHairline
            className={cn(hairlineClassName, aboutEd.sectionGapTight)}
          />
        ) : null}

        {children}
        {footer}
      </AboutContainer>
    </AboutSection>
  );
}
