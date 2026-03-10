import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 via-background to-transparent blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Conciencia Sánate
              </h1>
              <p className="text-pretty text-base font-medium text-muted-foreground sm:text-lg">
                Plataforma digital de salud y bienestar basada en evidencia científica.
              </p>
            </div>

            <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Integra psicología, medicina preventiva y herramientas prácticas
              para comprender la mente, cuidar el cuerpo y desarrollar hábitos
              sostenibles de bienestar.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/herramientas">Explorar recursos</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl"
                asChild
              >
                <Link href="/registro">Crear cuenta</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="w-fit rounded-full">
                Psicología basada en evidencia
              </Badge>
              <Badge variant="secondary" className="w-fit rounded-full">
                Regulación emocional
              </Badge>
              <Badge variant="secondary" className="w-fit rounded-full">
                Bienestar integral
              </Badge>
              <Badge variant="secondary" className="w-fit rounded-full">
                Tecnología clínica
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[56px] bg-gradient-to-br from-primary/10 via-background-soft to-transparent blur-2xl" />

            <div
              className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm"
              role="img"
              aria-label="Ilustración abstracta: mente, cuerpo y salud conectadas"
            >
              <div className="space-y-4">
                <div className="text-sm font-medium tracking-tight">
                  Mente · Cuerpo · Salud
                </div>
                <div className="rounded-3xl border border-border/70 bg-background-soft p-6">
                  <svg
                    viewBox="0 0 520 220"
                    className="h-[200px] w-full text-muted-foreground"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="cs-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.25" />
                        <stop offset="1" stopColor="currentColor" stopOpacity="0.12" />
                      </linearGradient>
                    </defs>

                    <path
                      d="M70 140 C140 70, 210 70, 260 110 S380 170, 450 95"
                      fill="none"
                      stroke="url(#cs-line)"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />

                    <g>
                      <circle cx="110" cy="120" r="34" fill="currentColor" opacity="0.08" />
                      <circle cx="110" cy="120" r="18" fill="currentColor" opacity="0.18" />
                    </g>
                    <g>
                      <circle cx="280" cy="110" r="42" fill="currentColor" opacity="0.06" />
                      <circle cx="280" cy="110" r="20" fill="currentColor" opacity="0.16" />
                    </g>
                    <g>
                      <circle cx="420" cy="95" r="34" fill="currentColor" opacity="0.08" />
                      <circle cx="420" cy="95" r="18" fill="currentColor" opacity="0.18" />
                    </g>

                    <g fontSize="12" fill="currentColor" opacity="0.75">
                      <text x="82" y="175">Mente</text>
                      <text x="256" y="175">Cuerpo</text>
                      <text x="395" y="175">Hábitos</text>
                    </g>
                  </svg>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border/70 bg-card px-4 py-3">
                    <div className="text-[11px] font-medium text-muted-foreground">
                      Claridad
                    </div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">
                      Entender
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card px-4 py-3">
                    <div className="text-[11px] font-medium text-muted-foreground">
                      Práctica
                    </div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">
                      Regular
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-card px-4 py-3">
                    <div className="text-[11px] font-medium text-muted-foreground">
                      Proceso
                    </div>
                    <div className="mt-1 text-sm font-semibold tracking-tight">
                      Sostener
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
