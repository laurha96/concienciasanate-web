"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent } from "react";

import {
  aboutHeroVisualBadge,
  aboutHeroVisualChips,
} from "@/components/about/about-data";
import { aboutEase } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

const FLOAT_ORBS = [
  { size: 168, x: "4%", y: "14%", delay: 0, opacity: 0.22 },
  { size: 112, x: "68%", y: "4%", delay: 0.35, opacity: 0.18 },
  { size: 84, x: "76%", y: "58%", delay: 0.7, opacity: 0.16 },
  { size: 64, x: "18%", y: "68%", delay: 1, opacity: 0.14 },
  { size: 44, x: "52%", y: "78%", delay: 1.25, opacity: 0.12 },
] as const;

const RING_LAYERS = [
  { size: 420, opacity: 0.14, border: "border-white/25" },
  { size: 320, opacity: 0.2, border: "border-primary/12" },
] as const;

const NEURAL_PATHS = [
  "M56 176 C128 96, 208 104, 256 136",
  "M256 136 C308 176, 348 80, 400 116",
  "M128 96 C176 56, 228 64, 256 136",
  "M256 136 C276 196, 328 208, 368 176",
  "M400 116 C432 88, 456 120, 472 148",
] as const;

const NODES = [
  { cx: 128, cy: 96, r: 3.5 },
  { cx: 256, cy: 136, r: 4 },
  { cx: 400, cy: 116, r: 3.5 },
  { cx: 368, cy: 176, r: 3 },
] as const;

export function AboutHeroPremiumVisual() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 72, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 72, damping: 24 });

  const layerX = useTransform(springX, [-1, 1], [-12, 12]);
  const layerY = useTransform(springY, [-1, 1], [-10, 10]);
  const deepX = useTransform(springX, [-1, 1], [-6, 6]);
  const deepY = useTransform(springY, [-1, 1], [-5, 5]);
  const ringRotate = useTransform(springX, [-1, 1], [-2, 2]);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
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
      className="relative mx-auto w-full max-w-[540px] lg:max-w-none"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, ease: aboutEase, delay: 0.18 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden
    >
      {/* Glow orgánico verde suave */}
      <motion.div
        className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(ellipse_at_48%_40%,rgb(var(--brand-primary-rgb)/0.06),transparent_72%)] blur-3xl"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.4, 0.62, 0.4], scale: [1, 1.05, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute left-[38%] top-[52%] size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--brand-accent-rgb)/0.35)] blur-3xl"
        aria-hidden
      />

      {/* Anillos translúcidos */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2"
        style={{ rotate: reduceMotion ? 0 : ringRotate }}
      >
        {RING_LAYERS.map((ring) => (
          <div
            key={ring.size}
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border",
              ring.border,
              "bg-brand-surface/8 backdrop-blur-[2px]"
            )}
            style={{
              width: ring.size,
              height: ring.size,
              opacity: ring.opacity,
            }}
          />
        ))}
      </motion.div>

      <motion.div style={{ x: layerX, y: layerY }} className="relative">
        {/* Panel glass principal */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[40px]",
            "border border-white/55 bg-brand-surface/32",
            "shadow-[0_36px_88px_rgba(34,34,34,0.045),0_0_0_1px_rgba(255,255,255,0.32)_inset]",
            "backdrop-blur-2xl backdrop-saturate-[1.06]",
            "ring-1 ring-border/25"
          )}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/55 via-white/10 to-accent/12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-[rgb(var(--brand-primary-rgb)/0.08)] blur-2xl"
            aria-hidden
          />

          <div className="relative px-5 py-9 sm:px-8 sm:py-11">
            <svg
              viewBox="0 0 480 280"
              className="mx-auto h-[200px] w-full sm:h-[248px] lg:h-[268px]"
              role="img"
              aria-label="Composición abstracta de conexiones cognitivas y regulación emocional"
            >
              <defs>
                <linearGradient id="about-hero-neural" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgb(118 176 65)" stopOpacity="0.05" />
                  <stop offset="45%" stopColor="rgb(118 176 65)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="rgb(53 94 43)" stopOpacity="0.08" />
                </linearGradient>
                <radialGradient id="about-hero-node" cx="50%" cy="50%" r="50%">
                  <stop
                    offset="0%"
                    stopColor="rgb(var(--brand-accent-rgb))"
                    stopOpacity="0.45"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(var(--brand-accent-rgb))"
                    stopOpacity="0"
                  />
                </radialGradient>
                <filter id="about-hero-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {NEURAL_PATHS.map((d, i) => (
                <motion.path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="url(#about-hero-neural)"
                  strokeWidth="0.95"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + i * 0.1,
                    ease: aboutEase,
                  }}
                />
              ))}

              {NODES.map((node, i) => (
                <g key={`${node.cx}-${node.cy}`} filter="url(#about-hero-soft-glow)">
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="36"
                    fill="url(#about-hero-node)"
                  />
                  <motion.circle
                    cx={node.cx}
                    cy={node.cy}
                    r="22"
                    fill="rgb(var(--brand-surface))"
                    stroke="rgb(118 176 65)"
                    strokeWidth="0.85"
                    strokeOpacity="0.3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.55,
                      ease: aboutEase,
                    }}
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="rgb(var(--brand-primary-rgb))"
                    opacity="0.35"
                  />
                </g>
              ))}

              <text
                x="128"
                y="148"
                textAnchor="middle"
                fontSize="8.5"
                letterSpacing="0.16em"
                fill="currentColor"
                className="uppercase opacity-45"
              >
                Comprender
              </text>
              <text
                x="256"
                y="188"
                textAnchor="middle"
                fontSize="8.5"
                letterSpacing="0.16em"
                fill="currentColor"
                className="uppercase opacity-45"
              >
                Regular
              </text>
              <text
                x="400"
                y="168"
                textAnchor="middle"
                fontSize="8.5"
                letterSpacing="0.16em"
                fill="currentColor"
                className="uppercase opacity-45"
              >
                Sostener
              </text>
            </svg>

            {/* Barra de señal clínica (minimal) */}
            <motion.div
              className={cn(
                "mx-auto mt-2 flex max-w-[280px] items-center justify-between gap-3 rounded-2xl",
                "border border-white/40 bg-brand-surface/50 px-4 py-2.5",
                "shadow-[0_12px_32px_rgba(34,34,34,0.05)] backdrop-blur-lg"
              )}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5, ease: aboutEase }}
            >
              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Señal
              </span>
              <div className="flex flex-1 items-center gap-1 px-1">
                {[0.35, 0.55, 0.72, 0.48, 0.62, 0.4, 0.58].map((h, i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] rounded-full bg-[var(--green-secondary)]/50"
                    style={{ height: `${h * 18}px` }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 1 + i * 0.04,
                      duration: 0.35,
                      ease: aboutEase,
                    }}
                  />
                ))}
              </div>
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-foreground/70">
                Regulación
              </span>
            </motion.div>
          </div>
        </div>

        {/* Orbes flotantes translúcidos */}
        {FLOAT_ORBS.map((orb) => (
          <motion.div
            key={`${orb.x}-${orb.y}-${orb.size}`}
            className={cn(
              "pointer-events-none absolute rounded-full",
              "border border-white/35 bg-gradient-to-br from-brand-surface/30 to-white/10",
              "shadow-[0_20px_60px_rgba(34,34,34,0.04)] backdrop-blur-xl"
            )}
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                    opacity: [orb.opacity, orb.opacity + 0.1, orb.opacity],
                  }
            }
            transition={{
              duration: 8 + orb.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}

        {/* Chips glass — lenguaje clínico */}
        {aboutHeroVisualChips.map((chip) => (
          <motion.div
            key={chip.title}
            className={cn(
              "absolute max-w-[9.5rem] rounded-2xl px-3.5 py-2.5",
              "border border-white/50 bg-brand-surface/58",
              "shadow-[0_14px_40px_rgba(34,34,34,0.034)] backdrop-blur-xl",
              chip.className
            )}
            style={{ x: deepX, y: deepY }}
            initial={{ opacity: 0, x: chip.enterX }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: chip.delay, duration: 0.6, ease: aboutEase }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <p className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {chip.title}
            </p>
            <p className="mt-0.5 text-[11.5px] leading-snug text-foreground/82">
              {chip.body}
            </p>
          </motion.div>
        ))}

        {/* Badge evidencia flotante */}
        <motion.div
          className={cn(
            "absolute left-1/2 -top-3 -translate-x-1/2",
            "rounded-full border border-white/50 bg-brand-surface/65 px-4 py-1.5",
            "text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--green-secondary)]",
            "shadow-[0_12px_36px_rgba(34,34,34,0.06)] backdrop-blur-lg"
          )}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5, ease: aboutEase }}
          style={{ x: deepX }}
        >
          {aboutHeroVisualBadge}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
