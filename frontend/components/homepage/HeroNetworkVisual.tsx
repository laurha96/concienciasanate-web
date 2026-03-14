import * as React from "react";

import { cn } from "@/lib/utils";
import HeroConnections from "@/components/homepage/HeroConnections";
import Particles from "@/components/homepage/Particles";

export function HeroNetworkVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[350px] w-full", className)}>
      <div className="absolute inset-0 rounded-[60px] bg-[linear-gradient(90deg,var(--accent),color-mix(in_oklab,var(--accent)_70%,var(--primary)_10%))] blur-xl opacity-70" />

      <div className="absolute inset-0 overflow-hidden rounded-[60px] border border-border/60 bg-card/35 shadow-card backdrop-blur">
        <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_30%_25%,rgb(var(--brand-accent-rgb)/0.75),transparent_55%),radial-gradient(circle_at_75%_55%,rgb(var(--brand-primary-rgb)/0.14),transparent_60%)]" />

        <div className="absolute inset-0 opacity-35">
          <HeroConnections />
        </div>

        <div className="pointer-events-none absolute inset-0 opacity-60">
          <Particles />
        </div>

        <div className="absolute inset-0 opacity-45">
          <NetworkLines />
        </div>
        <div className="absolute inset-0 opacity-55">
          <GlowNodes />
        </div>

        <NodePill className="absolute left-10 top-28">Mente</NodePill>
        <NodePill className="absolute right-24 top-16">Regulación</NodePill>
        <NodePill className="absolute bottom-10 right-10">Hábitos</NodePill>

        <div className="absolute left-[56%] top-[58%] h-20 w-40 -rotate-[5deg] rounded-[22px] border border-border/40 bg-card/20 blur-[0.6px] opacity-25" />
      </div>
    </div>
  );
}

function NodePill({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-6 py-2 rounded-full bg-card shadow-card ring-2 ring-primary/10 text-[15px] font-medium text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-75"
      viewBox="0 0 920 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cs-net" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--green-soft)" stopOpacity="0.7" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="cs-net-2" x1="1" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.35" />
          <stop offset="1" stopColor="var(--green-soft)" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="2">
        <path stroke="url(#cs-net)" d="M200 292 C 320 248, 390 312, 490 276 S 650 236, 760 292" />
        <path stroke="url(#cs-net)" d="M205 328 C 310 372, 410 380, 520 342 S 675 320, 770 362" opacity="0.55" />
        <path stroke="url(#cs-net-2)" d="M280 210 C 360 260, 420 240, 500 270 S 650 322, 720 255" opacity="0.5" />
        <path stroke="url(#cs-net-2)" d="M250 380 C 360 345, 420 372, 520 336 S 650 290, 730 330" opacity="0.35" />
      </g>
    </svg>
  );
}

function GlowNodes() {
  const nodes = [
    { cx: 285, cy: 292, r: 7, d: 0 },
    { cx: 480, cy: 280, r: 8, d: 1 },
    { cx: 680, cy: 296, r: 7, d: 2 },
    { cx: 440, cy: 342, r: 6, d: 3 },
    { cx: 520, cy: 330, r: 6, d: 4 },
    { cx: 340, cy: 250, r: 6, d: 5 },
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 920 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {nodes.map((n) => (
        <g key={`${n.cx}-${n.cy}`}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r * 2.3}
            fill="var(--primary)"
            opacity={0.08}
          />
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--primary)"
            opacity={0.22}
            className="motion-safe:animate-[csGlow_5.5s_ease-in-out_infinite]"
            style={{ animationDelay: `${n.d * 0.7}s` }}
          />
        </g>
      ))}
    </svg>
  );
}


