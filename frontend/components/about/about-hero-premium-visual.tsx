"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PointerEvent } from "react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const FLOAT_ORBS = [
  { size: 140, x: "12%", y: "18%", delay: 0, opacity: 0.35 },
  { size: 96, x: "72%", y: "8%", delay: 0.4, opacity: 0.28 },
  { size: 72, x: "78%", y: "62%", delay: 0.8, opacity: 0.22 },
  { size: 52, x: "22%", y: "70%", delay: 1.1, opacity: 0.2 },
] as const;

const NEURAL_PATHS = [
  "M48 168 C120 88, 200 96, 248 128",
  "M248 128 C300 168, 340 72, 392 108",
  "M120 88 C168 48, 220 56, 248 128",
  "M248 128 C268 188, 320 200, 360 168",
] as const;

const NODES = [
  { cx: 120, cy: 88, label: "Comprender" },
  { cx: 248, cy: 128, label: "Regular" },
  { cx: 360, cy: 108, label: "Transformar" },
] as const;

export function AboutHeroPremiumVisual() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 22 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 22 });

  const layerX = useTransform(springX, [-1, 1], [-10, 10]);
  const layerY = useTransform(springY, [-1, 1], [-8, 8]);
  const deepX = useTransform(springX, [-1, 1], [-5, 5]);
  const deepY = useTransform(springY, [-1, 1], [-4, 4]);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(x * 2);
    pointerY.set(y * 2);
  }

  function onPointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[520px] lg:max-w-none"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden
    >
      {/* Glow base */}
      <motion.div
        className="pointer-events-none absolute -inset-12 rounded-full bg-[radial-gradient(ellipse_at_50%_42%,rgb(var(--brand-primary-rgb)/0.14),transparent_68%)] blur-3xl"
        animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ x: layerX, y: layerY }} className="relative">
        {/* Capa glass principal */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[36px]",
            "border border-white/50 bg-brand-surface/40 shadow-[0_40px_100px_rgba(34,34,34,0.07)]",
            "backdrop-blur-xl backdrop-saturate-150",
            "ring-1 ring-border/30"
          )}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-accent/15"
            aria-hidden
          />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12">
            <svg
              viewBox="0 0 440 260"
              className="mx-auto h-[220px] w-full sm:h-[260px]"
              role="img"
              aria-label="Visualización abstracta de conexiones cognitivas y regulación emocional"
            >
              <defs>
                <linearGradient id="hero-neural" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgb(118 176 65)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="rgb(118 176 65)" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="rgb(53 94 43)" stopOpacity="0.12" />
                </linearGradient>
                <radialGradient id="hero-node-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgb(var(--brand-accent-rgb))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(var(--brand-accent-rgb))" stopOpacity="0" />
                </radialGradient>
              </defs>

              {NEURAL_PATHS.map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#hero-neural)"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.35 + i * 0.12,
                    ease: EASE,
                  }}
                />
              ))}

              {NODES.map((node, i) => (
                <g key={node.label}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="42"
                    fill="url(#hero-node-glow)"
                  />
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="28"
                    fill="rgb(var(--brand-surface))"
                    stroke="rgb(118 176 65)"
                    strokeWidth="1"
                    strokeOpacity="0.35"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.55 + i * 0.1, duration: 0.5, ease: EASE }}
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="5"
                    fill="rgb(var(--brand-primary-rgb))"
                    opacity="0.4"
                  />
                  <text
                    x={node.cx}
                    y={node.cy + 52}
                    textAnchor="middle"
                    fontSize="9.5"
                    letterSpacing="0.14em"
                    fill="currentColor"
                    className="uppercase opacity-55"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>

        {/* Orbes flotantes */}
        {FLOAT_ORBS.map((orb) => (
          <motion.div
            key={`${orb.x}-${orb.y}`}
            className="pointer-events-none absolute rounded-full border border-white/40 bg-brand-surface/25 backdrop-blur-md"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [orb.opacity, orb.opacity + 0.12, orb.opacity],
            }}
            transition={{
              duration: 7 + orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}

        {/* Chips glass flotantes */}
        <motion.div
          className={cn(
            "absolute -left-2 top-[22%] max-w-[9rem] rounded-2xl px-3.5 py-2.5 sm:left-0",
            "border border-white/45 bg-brand-surface/55 shadow-[0_16px_48px_rgba(34,34,34,0.06)]",
            "backdrop-blur-lg"
          )}
          style={{ x: deepX, y: deepY }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.55, ease: EASE }}
          whileHover={{ y: -2, transition: { duration: 0.25 } }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Claridad
          </p>
          <p className="mt-0.5 text-xs leading-snug text-foreground/85">
            Psicoeducación estructurada
          </p>
        </motion.div>

        <motion.div
          className={cn(
            "absolute -right-1 bottom-[18%] max-w-[9.5rem] rounded-2xl px-3.5 py-2.5 sm:right-0",
            "border border-white/45 bg-brand-surface/55 shadow-[0_16px_48px_rgba(34,34,34,0.06)]",
            "backdrop-blur-lg"
          )}
          style={{ x: deepX, y: deepY }}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.85, duration: 0.55, ease: EASE }}
          whileHover={{ y: -2, transition: { duration: 0.25 } }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Confianza
          </p>
          <p className="mt-0.5 text-xs leading-snug text-foreground/85">
            Límites clínicos claros
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
