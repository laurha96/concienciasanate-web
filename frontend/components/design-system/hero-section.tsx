"use client";

import * as React from "react";

import { PrimaryButton, SecondaryButton } from "@/components/design-system/buttons";
import { TagPill } from "@/components/design-system/tag-pill";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-main">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-green-primary/18 blur-3xl motion-safe:animate-float motion-reduce:animate-none" />
        <div className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-green-soft/35 blur-3xl" />
        <div className="absolute -right-24 top-24 size-[380px] rounded-full bg-green-light/80 blur-3xl" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.35]"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="net" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="var(--green-soft)" stopOpacity="0.55" />
              <stop offset="1" stopColor="var(--green-primary)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <g stroke="url(#net)" strokeWidth="1" fill="none">
            <path d="M80 120 C 220 80, 320 140, 460 110 S 720 90, 860 130 S 1040 200, 1160 120" />
            <path d="M60 360 C 240 300, 360 420, 520 360 S 760 300, 920 380 S 1080 460, 1180 360" />
            <path d="M160 520 C 320 460, 460 560, 620 500 S 820 420, 980 520 S 1120 620, 1200 520" />
          </g>
          <g fill="var(--green-primary)" fillOpacity="0.18">
            <circle cx="200" cy="130" r="5" />
            <circle cx="460" cy="110" r="4" />
            <circle cx="740" cy="100" r="5" />
            <circle cx="980" cy="140" r="4" />
            <circle cx="320" cy="340" r="5" />
            <circle cx="520" cy="360" r="4" />
            <circle cx="820" cy="330" r="5" />
            <circle cx="1040" cy="400" r="4" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex justify-center">
            <TagPill className="bg-white/70 backdrop-blur">Wellness tech + neurociencia</TagPill>
          </div>

          <h1 className="font-display text-5xl tracking-tight text-text-primary">
            Calma, claridad y herramientas basadas en evidencia
          </h1>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            Una plataforma digital de salud mental con diseño orgánico y minimal.
            Aprende, practica y acompaña tu bienestar con recursos prácticos.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton size="lg">Explorar herramientas</PrimaryButton>
            <SecondaryButton size="lg">Ver planes</SecondaryButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="glass-panel px-4 py-3 text-left shadow-soft">
              <div className="text-sm font-semibold text-text-primary">Ritmo sereno</div>
              <div className="text-xs text-text-secondary">Diseño calmado, sin ruido visual</div>
            </div>
            <div className="glass-panel px-4 py-3 text-left shadow-soft">
              <div className="text-sm font-semibold text-text-primary">Neuro-inspired</div>
              <div className="text-xs text-text-secondary">Estructura clara, simple y humana</div>
            </div>
            <div className="glass-panel px-4 py-3 text-left shadow-soft">
              <div className="text-sm font-semibold text-text-primary">Listo para producto</div>
              <div className="text-xs text-text-secondary">Tokens + componentes reutilizables</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
