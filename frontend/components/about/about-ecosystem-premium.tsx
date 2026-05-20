"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Cpu,
  Repeat,
  Wrench,
} from "lucide-react";

import {
  ecosystemCopy,
  type EcosystemPillarKey,
} from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import {
  AboutAmbientGlow,
  AboutContainer,
  AboutEditorialHeader,
  AboutReveal,
  AboutSection,
} from "@/components/about/about-editorial-layout";
import { cn } from "@/lib/utils";

const pillarIcons: Record<EcosystemPillarKey, typeof Brain> = {
  psychology: Brain,
  education: BookOpen,
  tools: Wrench,
  habits: Repeat,
  technology: Cpu,
};

const NODE_POSITIONS: Record<
  EcosystemPillarKey,
  { x: number; y: number; labelAnchor: "start" | "middle" | "end" }
> = {
  psychology: { x: 200, y: 52, labelAnchor: "middle" },
  education: { x: 72, y: 130, labelAnchor: "start" },
  tools: { x: 328, y: 130, labelAnchor: "end" },
  habits: { x: 112, y: 208, labelAnchor: "start" },
  technology: { x: 288, y: 208, labelAnchor: "end" },
};

const CONNECTIONS: [EcosystemPillarKey, EcosystemPillarKey][] = [
  ["psychology", "education"],
  ["psychology", "tools"],
  ["education", "habits"],
  ["tools", "habits"],
  ["habits", "technology"],
  ["psychology", "technology"],
  ["education", "tools"],
];

export function AboutEcosystemPremium() {
  const [activeKey, setActiveKey] = React.useState<EcosystemPillarKey>("psychology");
  const active =
    ecosystemCopy.pillars.find((p) => p.key === activeKey) ??
    ecosystemCopy.pillars[0];

  return (
    <AboutSection
      id="ecosistema"
      tone="cinematic"
      cinematic
      aria-labelledby="about-ecosystem-heading"
      className="overflow-hidden"
    >
      <AboutAmbientGlow position="left" />
      <AboutContainer size="wide">
        <AboutReveal>
          <AboutEditorialHeader
            titleId="about-ecosystem-heading"
            eyebrow={ecosystemCopy.eyebrow}
            title={ecosystemCopy.title}
            description={ecosystemCopy.description}
          />
        </AboutReveal>

        <motion.div
          className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-20"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <motion.div
            className={cn(aboutEd.ghostSurface, "relative overflow-hidden p-6 sm:p-10")}
          >
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-3xl"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />

            <svg
              viewBox="0 0 400 260"
              className="mx-auto h-[260px] w-full max-w-lg sm:h-[300px]"
              role="img"
              aria-label="Diagrama del ecosistema Conciencia Sánate"
            >
              <defs>
                <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="rgb(118 176 65)" stopOpacity="0.12" />
                  <stop offset="1" stopColor="rgb(53 94 43)" stopOpacity="0.28" />
                </linearGradient>
              </defs>

              {CONNECTIONS.map(([from, to]) => {
                const a = NODE_POSITIONS[from];
                const b = NODE_POSITIONS[to];
                const isActive = activeKey === from || activeKey === to;

                return (
                  <line
                    key={`${from}-${to}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="url(#eco-line)"
                    strokeWidth={isActive ? 1.5 : 1}
                    strokeOpacity={isActive ? 0.8 : 0.3}
                    className="transition-all duration-300"
                  />
                );
              })}

              <circle
                cx="200"
                cy="130"
                r="34"
                fill="rgb(var(--brand-accent-rgb))"
                opacity="0.4"
              />
              <text
                x="200"
                y="134"
                textAnchor="middle"
                fontSize="10"
                fill="currentColor"
                className="opacity-60"
              >
                Coherencia
              </text>

              {ecosystemCopy.pillars.map((pillar) => {
                const pos = NODE_POSITIONS[pillar.key];
                const isActive = pillar.key === activeKey;

                return (
                  <g
                    key={pillar.key}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveKey(pillar.key)}
                    onFocus={() => setActiveKey(pillar.key)}
                    onClick={() => setActiveKey(pillar.key)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={`${pillar.label}: ${pillar.tagline}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveKey(pillar.key);
                      }
                    }}
                  >
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 28 : 24}
                      fill="rgb(var(--brand-surface))"
                      stroke={
                        isActive
                          ? "rgb(118 176 65)"
                          : "rgb(var(--brand-accent-rgb))"
                      }
                      strokeWidth={isActive ? 1.5 : 1}
                      className="transition-all duration-300"
                    />
                    <text
                      x={pos.x}
                      y={pos.y + 42}
                      textAnchor={pos.labelAnchor}
                      fontSize="11"
                      fill="currentColor"
                      className={cn(
                        "transition-opacity duration-300",
                        isActive ? "opacity-90" : "opacity-55"
                      )}
                    >
                      {pillar.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 border-t border-border/40 pt-6">
              {ecosystemCopy.pillars.map((pillar) => {
                const Icon = pillarIcons[pillar.key];
                const isActive = pillar.key === activeKey;

                return (
                  <motion.button
                    key={pillar.key}
                    type="button"
                    onClick={() => setActiveKey(pillar.key)}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all duration-300",
                      isActive
                        ? "bg-accent/60 text-[var(--green-secondary)]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    whileHover={{ y: -1 }}
                    aria-pressed={isActive}
                  >
                    <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
                    {pillar.label}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="lg:py-4"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className={aboutEd.eyebrow}>{active.tagline}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {active.label}
            </h3>
            <p className={cn(aboutEd.bodyLarge, "mt-6 max-w-md")}>
              {active.description}
            </p>
            <p className={cn(aboutEd.body, "mt-8 text-sm opacity-75")}>
              Selecciona un nodo para explorar cómo se conecta el ecosistema.
            </p>
          </motion.div>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  );
}
