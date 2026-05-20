"use client";

import { mentalHealthManifestoCopy } from "@/components/about/about-data";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutVisual } from "@/components/about/about-visual-tokens";
import { MentalHealthManifestStatement } from "@/components/about/mental-health-manifest-statement";
import {
  AboutReveal,
  AboutSectionFrame,
  AboutSectionHairline,
  AboutStaggerGrid,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

export function AboutManifestoSection() {
  const { statements } = mentalHealthManifestoCopy;

  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.manifesto}
      header={{
        titleId: "about-manifesto-heading",
        eyebrow: mentalHealthManifestoCopy.eyebrow,
        title: mentalHealthManifestoCopy.title,
        description: mentalHealthManifestoCopy.lead,
        titleClassName: "lg:text-[2.95rem] xl:text-[3.15rem]",
      }}
      containerSize="narrow"
      containerClassName="relative"
      headerClassName="mx-auto max-w-2xl xl:max-w-3xl"
      atmosphere={{ preset: "whisper" }}
      showHeaderHairline={false}
      cinematic
    >
      <div className={aboutVisual.manifestVeil} aria-hidden />
      <AboutSectionHairline
        variant="accent"
        className={cn("max-w-lg", aboutEd.sectionGapTight)}
      />

      <AboutStaggerGrid
        as="ol"
        className={cn(
          "list-none space-y-0 p-0",
          aboutEd.sectionGap,
          "xl:mt-36"
        )}
        aria-label="Manifiesto: cómo entendemos la salud mental"
      >
        {statements.map((statement, index) => (
          <MentalHealthManifestStatement
            key={statement.key}
            index={index}
            title={statement.title}
            body={statement.body}
            isLast={index === statements.length - 1}
            useStagger
          />
        ))}
      </AboutStaggerGrid>

      <AboutReveal className={cn(aboutEd.sectionGap, "xl:mt-40")} delay={0.05}>
        <p
          className={cn(
            aboutEd.pullQuote,
            "mx-auto max-w-lg text-center text-pretty text-foreground/76"
          )}
        >
          {mentalHealthManifestoCopy.closingLine}
        </p>
      </AboutReveal>
    </AboutSectionFrame>
  );
}

export const AboutMentalHealthSection = AboutManifestoSection;
