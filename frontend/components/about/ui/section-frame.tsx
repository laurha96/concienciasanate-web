"use client";

import type { ReactNode } from "react";

import type { AboutStoryChapter } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
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

export type AboutSectionFrameProps = {
  chapter: AboutStoryChapter;
  header: {
    titleId: string;
    eyebrow?: ReactNode;
    title: string;
    description?: string;
    titleClassName?: string;
    size?: "default" | "large";
    align?: "left" | "center";
  };
  children: ReactNode;
  /** Cierre editorial opcional (pull quote) */
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
  cinematic?: boolean;
  animate?: boolean;
};

/**
 * Marco reutilizable para secciones editoriales — arquitectura unificada.
 * Encapsula: sección, tono, atmósfera, header, hairline, contenedor.
 */
export function AboutSectionFrame({
  chapter,
  header,
  children,
  footer,
  atmosphere = { preset: "calm", glowPosition: "center" },
  decorativeLines,
  containerSize = "wide",
  containerClassName,
  headerClassName = "mx-auto max-w-3xl xl:max-w-4xl",
  showHeaderHairline = true,
  hairlineClassName = "max-w-xl",
  ariaLabel,
  className,
  cinematic,
  animate = true,
}: AboutSectionFrameProps) {
  const { id, tone, index } = chapter;
  const cinematicSection = cinematic ?? chapter.cinematic ?? false;

  return (
    <AboutSection
      id={id}
      tone={tone}
      cinematic={cinematicSection}
      aria-labelledby={header.titleId}
      aria-label={ariaLabel}
      animate={animate}
      className={cn("relative overflow-hidden", className)}
    >
      <AboutSectionAtmosphere
        preset={atmosphere.preset}
        glowPosition={atmosphere.glowPosition}
      />

      {decorativeLines ? (
        <AboutDecorativeLines
          paths={decorativeLines.paths}
          gradientId={decorativeLines.gradientId}
        />
      ) : null}

      <AboutContainer size={containerSize} className={cn("relative", containerClassName)}>
        <AboutEditorialHeader
          titleId={header.titleId}
          chapter={index}
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
          align={header.align ?? "center"}
          size={header.size}
          titleClassName={header.titleClassName}
          className={headerClassName}
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
