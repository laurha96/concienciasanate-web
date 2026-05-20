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
      <AboutAmbientGlow position="center" className="opacity-70" />

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
          className="mt-10 flex list-none flex-wrap gap-2 p-0 sm:mt-12"
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
          className={cn(
            aboutEd.hairline,
            "my-16 sm:my-20 lg:my-24"
          )}
          aria-hidden
        />

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5">
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
        </div>

        <motion.div
          className={cn(aboutEd.hairline, "my-16 sm:my-20 lg:my-24")}
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "center" }}
        />

        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
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

        <AboutReveal className="mt-16 sm:mt-20 lg:mt-24" delay={0.05}>
          <aside
            className="max-w-2xl"
            aria-labelledby="about-ethics-crisis-heading"
          >
            <div
              className="mb-5 h-px w-12 bg-gradient-to-r from-primary/35 to-transparent"
              aria-hidden
            />
            <h3
              id="about-ethics-crisis-heading"
              className="font-display text-lg font-semibold tracking-tight sm:text-xl"
            >
              {crisisNote.title}
            </h3>
            <p className={cn(aboutEd.bodyLarge, "mt-4")}>{crisisNote.body}</p>
          </aside>
        </AboutReveal>
      </AboutContainer>
    </AboutSection>
  );
}
