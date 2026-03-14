import * as React from "react";

import { cn } from "@/lib/utils";

export function BackgroundDecor({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)}>
      <Waves />
      <SoftBlobs />
      <LeafDecor />
      <Sparkles />
      {children}
    </div>
  );
}

export function Waves() {
  return (
    <svg
      className="absolute inset-x-0 -top-12 h-[520px] w-full opacity-70"
      viewBox="0 0 1440 520"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cs-wave" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.95" />
          <stop offset="1" stopColor="var(--background)" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <path
        d="M0,210 C220,260 360,120 560,165 C780,215 880,310 1120,280 C1280,260 1360,215 1440,230 L1440,0 L0,0 Z"
        fill="url(#cs-wave)"
      />
      <path
        d="M0,300 C220,360 380,210 560,250 C770,295 910,420 1120,380 C1280,355 1360,305 1440,330 L1440,0 L0,0 Z"
        fill="var(--accent)"
        opacity="0.45"
      />
    </svg>
  );
}

export function SoftBlobs() {
  return (
    <>
      <div className="absolute -left-40 top-28 size-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-1/2 top-16 size-[520px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-56 top-0 size-[760px] rounded-full bg-primary/12 blur-3xl" />
    </>
  );
}

export function Sparkles() {
  return (
    <>
      {[
        { left: "14%", top: "20%", size: 2, o: 0.45 },
        { left: "22%", top: "42%", size: 1, o: 0.35 },
        { left: "58%", top: "26%", size: 1.5, o: 0.35 },
        { left: "72%", top: "18%", size: 2, o: 0.35 },
        { left: "84%", top: "48%", size: 1.5, o: 0.28 },
      ].map((s, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.10)] motion-safe:animate-[csSparkle_6s_ease-in-out_infinite]"
          style={{
            left: s.left,
            top: s.top,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.o,
            animationDelay: `${idx * 0.7}s`,
          }}
        />
      ))}
    </>
  );
}

export function LeafDecor() {
  return (
    <>
      <div className="absolute right-[9%] top-[10%] h-10 w-16 rotate-[14deg] rounded-[999px] bg-primary/10 blur-[0.5px]" />
      <div className="absolute right-[6%] top-[18%] h-8 w-12 rotate-[-10deg] rounded-[999px] bg-primary/8 blur-[0.5px]" />
      <div className="absolute left-[6%] top-[58%] h-10 w-14 rotate-[-18deg] rounded-[999px] bg-primary/8 blur-[0.5px]" />
    </>
  );
}
