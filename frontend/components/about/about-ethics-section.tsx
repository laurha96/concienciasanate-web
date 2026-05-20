"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  HandHeart,
  Lock,
  Stethoscope,
} from "lucide-react";

import { aboutEthicsCopy } from "@/components/about/about-ethics-data";
import type { EthicsPillarKey } from "@/components/about/about-ethics-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { EthicsBoundaryPanel } from "@/components/about/ethics-boundary-panel";
import { EthicsClinicalBadge } from "@/components/about/ethics-clinical-badge";
import { EthicsPillarCard } from "@/components/about/ethics-pillar-card";
import { cn } from "@/lib/utils";

const pillarIcons: Record<EthicsPillarKey, typeof HandHeart> = {
  "professional-help": Stethoscope,
  "emotional-safety": HandHeart,
  evidence: FlaskConical,
  privacy: Lock,
};

export function AboutEthicsSection() {
  const { boundaries, pillars, crisisNote } = aboutEthicsCopy;

  return (
    <AboutSection
      id="etica-limites"
      tone="paper"
      aria-labelledby="about-ethics-heading"
      className="overflow-hidden"
    >
      <AboutAmbientGlow position="center" className="opacity-60" />

      <AboutContainer size="wide">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-ethics-heading"
            eyebrow={aboutEthicsCopy.eyebrow}
            title={aboutEthicsCopy.title}
            description={aboutEthicsCopy.description}
          />
        </AboutReveal>

        <motion.ul
          className="mt-12 flex list-none flex-wrap gap-2 p-0 sm:mt-14"
          aria-label="Criterios clínicos de la sección"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          {aboutEthicsCopy.clinicalBadges.map((badge, index) => (
            <motion.li
              key={badge}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: index * 0.04 }}
              className="list-none"
            >
              <EthicsClinicalBadge label={badge} />
            </motion.li>
          ))}
        </motion.ul>

        <div
          className={cn(aboutEd.hairline, "my-20 sm:my-24 lg:my-28")}
          aria-hidden
        />

        <ul
          className="grid list-none gap-x-12 gap-y-16 p-0 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-20"
          aria-label="Pilares éticos"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.key];
            return (
              <EthicsPillarCard
                key={pillar.key}
                pillar={pillar}
                icon={Icon}
                index={index}
                editorial
              />
            );
          })}
        </ul>

        <div
          className={cn(aboutEd.hairline, "my-20 sm:my-24 lg:my-28")}
          aria-hidden
        />

        <motion.div
          className="grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-28"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <EthicsBoundaryPanel
            variant="do"
            title={boundaries.weDo.title}
            lead={boundaries.weDo.lead}
            items={boundaries.weDo.items}
            panelId="about-ethics-we-do"
            index={0}
            editorial
          />
          <EthicsBoundaryPanel
            variant="dont"
            title={boundaries.weDoNot.title}
            lead={boundaries.weDoNot.lead}
            items={boundaries.weDoNot.items}
            panelId="about-ethics-we-do-not"
            index={1}
            editorial
          />
        </motion.div>

        <AboutReveal className="mt-20 sm:mt-28 lg:mt-32" delay={0.05}>
          <aside
            className="max-w-xl"
            aria-labelledby="about-ethics-crisis-heading"
          >
            <motion.div
              className={aboutEd.hairlineAccent}
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ transformOrigin: "left" }}
            />
            <h3
              id="about-ethics-crisis-heading"
              className="mt-8 font-display text-xl font-medium tracking-tight sm:text-2xl"
            >
              {crisisNote.title}
            </h3>
            <p className={cn(aboutEd.bodyLarge, "mt-5")}>{crisisNote.body}</p>
          </aside>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
