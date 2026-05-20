"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Cpu,
  HeartPulse,
  Repeat,
  Sparkles,
} from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import {
  ecosystemCopy,
  type EcosystemNode,
  type EcosystemNodeKey,
} from "@/components/about/about-data";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutFocusRing } from "@/components/about/about-a11y";
import { aboutDuration, aboutEase, aboutHover } from "@/components/about/about-motion";
import { aboutCardPremium } from "@/components/about/about-premium-card";
import { cn } from "@/lib/utils";

const nodeIcons: Record<EcosystemNodeKey, LucideIcon> = {
  psychology: Brain,
  education: BookOpen,
  regulation: HeartPulse,
  habits: Repeat,
  clinicalTechnology: Cpu,
  elynthis: Sparkles,
};

const CENTER = { x: 50, y: 50 };

function getNode(key: EcosystemNodeKey): EcosystemNode {
  const node = ecosystemCopy.nodes.find((n) => n.key === key);
  if (!node) throw new Error(`Unknown ecosystem node: ${key}`);
  return node;
}

function connectionKey(a: EcosystemNodeKey, b: EcosystemNodeKey) {
  return [a, b].sort().join("--");
}

export function EcosystemInteractiveDiagram() {
  const reduceMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState<EcosystemNodeKey>("psychology");
  const [hoveredKey, setHoveredKey] = useState<EcosystemNodeKey | null>(null);

  const focusKey = hoveredKey ?? activeKey;
  const activeNode = getNode(focusKey);

  const activeConnections = useMemo(() => {
    const set = new Set<string>();
    for (const [a, b] of ecosystemCopy.connections) {
      if (a === focusKey || b === focusKey) {
        set.add(connectionKey(a, b));
      }
    }
    return set;
  }, [focusKey]);

  const connectedNodes = useMemo(() => {
    const keys = new Set<EcosystemNodeKey>();
    for (const [a, b] of ecosystemCopy.connections) {
      if (a === focusKey) keys.add(b);
      if (b === focusKey) keys.add(a);
    }
    return ecosystemCopy.nodes.filter((n) => keys.has(n.key));
  }, [focusKey]);

  const selectNode = useCallback((key: EcosystemNodeKey) => {
    setActiveKey(key);
    setHoveredKey(null);
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 xl:gap-20">
      {/* Diagrama */}
      <div
        className="relative mx-auto w-full max-w-xl lg:max-w-none"
        role="group"
        aria-label="Diagrama interactivo del ecosistema"
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 size-[min(340px,85%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--brand-primary-rgb)/0.05),transparent_70%)] blur-3xl"
          aria-hidden
          animate={
            reduceMotion ? undefined : { opacity: [0.22, 0.34, 0.22] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className={cn(
            aboutCardPremium.shell,
            aboutCardPremium.shellLg,
            "relative aspect-[5/4] w-full"
          )}
        >
          <div className={aboutCardPremium.gradientLight} aria-hidden />
          <div className={aboutCardPremium.gradientDepth} aria-hidden />

          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 size-full"
            aria-hidden
          >
            <defs>
              <linearGradient id="eco-edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgb(118 176 65)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(53 94 43)" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="eco-edge-active" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgb(118 176 65)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="rgb(118 176 65)" stopOpacity="0.75" />
              </linearGradient>
              <filter id="eco-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {ecosystemCopy.connections.map(([a, b]) => {
              const na = getNode(a);
              const nb = getNode(b);
              const isActive = activeConnections.has(connectionKey(a, b));
              return (
                <motion.line
                  key={connectionKey(a, b)}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  stroke={isActive ? "url(#eco-edge-active)" : "url(#eco-edge)"}
                  strokeWidth={isActive ? 0.55 : 0.35}
                  strokeOpacity={isActive ? 1 : 0.28}
                  filter={isActive ? "url(#eco-glow)" : undefined}
                  animate={
                    reduceMotion
                      ? undefined
                      : isActive
                        ? { strokeOpacity: [0.75, 1, 0.75] }
                        : { strokeOpacity: 0.28 }
                  }
                  transition={{
                    duration: isActive ? 2.5 : 0.35,
                    repeat: isActive ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            {/* Núcleo */}
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="8"
              fill="rgb(var(--brand-accent-rgb))"
              opacity="0.35"
            />
            <circle
              cx={CENTER.x}
              cy={CENTER.y}
              r="5.5"
              fill="rgb(var(--brand-surface))"
              stroke="rgb(118 176 65)"
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
          </svg>

          {/* Nodos HTML para mejor interacción */}
          {ecosystemCopy.nodes.map((node) => {
            const Icon = nodeIcons[node.key];
            const isFocus = node.key === focusKey;
            const isConnected =
              node.key !== focusKey &&
              activeConnections.has(connectionKey(focusKey, node.key));
            const isHighlighted = isFocus || isConnected;

            return (
              <motion.button
                key={node.key}
                type="button"
                className={cn(
                  "absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5",
                  aboutCardPremium.node,
                  "px-2.5 py-2 sm:px-3 sm:py-2.5",
                  aboutFocusRing,
                  isFocus
                    ? "border-[rgb(var(--brand-primary-rgb)/0.18)] shadow-[0_16px_40px_rgb(var(--brand-primary-rgb)/0.08)]"
                    : isHighlighted
                      ? "border-[rgb(var(--brand-primary-rgb)/0.12)]"
                      : "opacity-82 hover:border-[rgb(var(--brand-primary-rgb)/0.14)] hover:opacity-100"
                )}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
                onMouseEnter={() => setHoveredKey(node.key)}
                onMouseLeave={() => setHoveredKey(null)}
                onFocus={() => setHoveredKey(node.key)}
                onBlur={() => setHoveredKey(null)}
                onClick={() => selectNode(node.key)}
                aria-pressed={activeKey === node.key}
                aria-label={`${node.label}: ${node.tagline}`}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: aboutHover.scaleCard,
                        y: aboutHover.lift,
                        transition: { duration: aboutDuration.fast, ease: aboutEase },
                      }
                }
                whileTap={
                  reduceMotion ? undefined : { scale: aboutHover.scale }
                }
                transition={{ duration: aboutDuration.fast, ease: aboutEase }}
              >
                <span
                  className={cn(
                    aboutCardPremium.icon,
                    aboutCardPremium.iconSm,
                    isFocus && "border-primary/26 bg-accent/45"
                  )}
                  aria-hidden
                >
                  <Icon className="size-4 opacity-90" strokeWidth={1.45} />
                </span>
                <span
                  className={cn(
                    "max-w-[5.5rem] text-center text-[9px] font-medium leading-tight tracking-wide sm:max-w-[6.5rem] sm:text-[10px]",
                    isFocus ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {node.label}
                </span>
              </motion.button>
            );
          })}

          <p
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-center text-[7px] font-medium uppercase tracking-[0.22em] text-muted-foreground/45 sm:text-[8px]"
            aria-hidden
          >
            {ecosystemCopy.centerLabel}
          </p>
        </div>
      </div>

      {/* Panel lateral */}
      <div className="lg:py-4" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          <motion.div
            key={focusKey}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -6 }}
            transition={{ duration: 0.45, ease: aboutEase }}
          >
            <p className={aboutEd.eyebrow}>{activeNode.tagline}</p>
            <h3 className="mt-5 font-display text-[1.85rem] font-medium tracking-tight text-foreground sm:text-[2.15rem]">
              {activeNode.label}
            </h3>
            <p className={cn(aboutEd.bodyLarge, "mt-6 max-w-md leading-[1.82]")}>
              {activeNode.description}
            </p>

            {connectedNodes.length > 0 ? (
              <div className="mt-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/80">
                  Conecta con
                </p>
                <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                  {connectedNodes.map((n) => (
                    <li key={n.key} className="list-none">
                      <button
                        type="button"
                        onClick={() => selectNode(n.key)}
                        className={cn(
                          aboutFocusRing,
                          "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors duration-200",
                          n.key === focusKey
                            ? "border-primary/25 bg-accent/40 text-[var(--green-secondary)]"
                            : "border-border/40 bg-brand-surface/50 text-foreground/68 hover:border-primary/18 hover:text-foreground"
                        )}
                      >
                        {n.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {activeNode.href ? (
              <Link
                href={activeNode.href}
                className={cn(
                  aboutFocusRing,
                  "mt-8 inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-[var(--green-secondary)] transition-opacity hover:opacity-80"
                )}
              >
                {ecosystemCopy.elynthisLinkLabel}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : null}

            <p className={cn(aboutEd.body, "mt-10 text-[13px] opacity-65")}>
              {ecosystemCopy.panelHint}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
