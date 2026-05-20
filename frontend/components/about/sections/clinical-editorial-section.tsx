"use client";

import Link from "next/link";

import { clinicalEditorialCopy } from "@/components/about/about-data";
import { aboutFocusRing } from "@/components/about/about-a11y";
import { aboutStoryChapters } from "@/components/about/about-editorial-story";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutReveal,
  AboutSectionFrame,
  AboutStaggerGrid,
} from "@/components/about/ui";
import { cn } from "@/lib/utils";

export function AboutClinicalEditorialSection() {
  const { principles, ethics } = clinicalEditorialCopy;

  return (
    <AboutSectionFrame
      chapter={aboutStoryChapters.editorial}
      variant="editorial"
      header={{
        titleId: "about-editorial-heading",
        eyebrow: clinicalEditorialCopy.eyebrow,
        title: clinicalEditorialCopy.title,
        description: clinicalEditorialCopy.lead,
        tier: "section",
      }}
      footer={
        <AboutReveal className={aboutEd.sectionGapTight}>
          <p className={cn(aboutEd.pullQuote, "max-w-2xl border-t border-border/40 pt-6")}>
            {clinicalEditorialCopy.closingLine}
          </p>
        </AboutReveal>
      }
    >
      <AboutStaggerGrid
        as="ul"
        className={cn(
          "grid list-none gap-4 p-0 md:grid-cols-2 md:gap-5",
          aboutEd.sectionGapTight
        )}
        aria-label="Principios de visión clínica"
      >
        {principles.map((item, index) => (
          <li key={item.key} className={aboutEd.editorialItem}>
            <span className={aboutEd.indexMarker} aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={cn(aboutEd.h3, "mt-2")}>{item.title}</h3>
            <p className={cn(aboutEd.bodySm, "mt-1.5")}>{item.body}</p>
          </li>
        ))}
      </AboutStaggerGrid>

      <div
        id={aboutStoryChapters.ethics.id}
        className={cn(
          aboutEd.sectionGapTight,
          "scroll-mt-20 rounded-xl border border-border/35 bg-brand-muted/10 px-4 py-4 sm:px-5 sm:py-5"
        )}
      >
        <p className={aboutEd.eyebrow}>{ethics.title}</p>
        <p className={cn(aboutEd.bodySm, "mt-2 max-w-2xl")}>{ethics.body}</p>
        <Link
          href={ethics.link.href}
          className={cn(
            aboutFocusRing,
            aboutEd.bodySm,
            "mt-2 inline-block font-medium text-[var(--green-secondary)] underline-offset-4 hover:underline"
          )}
        >
          {ethics.link.label}
        </Link>
      </div>
    </AboutSectionFrame>
  );
}

export const AboutVisionSection = AboutClinicalEditorialSection;
