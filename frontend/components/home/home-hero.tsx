import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HomeHeroProps = {
  className?: string;
};

export function HomeHero({ className }: HomeHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-main" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-24 size-[440px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-[560px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-48 top-4 size-[760px] rounded-full bg-primary/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="font-sans text-4xl font-semibold tracking-[-0.01em] text-foreground sm:text-[56px] sm:leading-[1.05]">
              Conciencia Sánate
            </h1>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Plataforma digital de bienestar basada en ciencia.
            </p>

            <div className="mt-6 space-y-2 text-sm leading-6 text-muted-foreground sm:text-base">
              <div>Comprende tu mente. Cuida tu cuerpo.</div>
              <div>Construye hábitos sostenibles.</div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/recursos">Explorar recursos</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl"
                asChild
              >
                <Link href="/elynthis">Conocer Elynthis</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="relative h-[260px] sm:h-[300px] lg:h-[320px]">
              <div
                className="absolute -right-16 top-1/2 h-[120%] w-[130%] -translate-y-1/2 rounded-[999px] border border-border/60 bg-white/35 shadow-soft backdrop-blur"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-[999px] bg-primary/10" />

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 920 520"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="cs-net" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="rgb(127 191 63)" stopOpacity="0.22" />
                      <stop offset="1" stopColor="rgb(78 143 47)" stopOpacity="0.18" />
                    </linearGradient>
                    <filter id="cs-glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g fill="none" stroke="url(#cs-net)" strokeWidth="2">
                    <path d="M210 300 C 320 260, 380 310, 480 280 S 640 250, 740 300" />
                    <path d="M210 305 C 320 345, 400 370, 510 340 S 665 315, 760 355" opacity="0.5" />
                  </g>

                  <g filter="url(#cs-glow)">
                    <circle cx="285" cy="292" r="7" fill="rgb(127 191 63 / 0.26)" />
                    <circle cx="480" cy="280" r="8" fill="rgb(127 191 63 / 0.26)" />
                    <circle cx="680" cy="296" r="7" fill="rgb(127 191 63 / 0.24)" />
                    <circle cx="440" cy="342" r="6" fill="rgb(127 191 63 / 0.18)" />
                  </g>
                </svg>

                <div className="absolute left-12 top-12">
                  <MiniGlassCard />
                </div>
                <div className="absolute bottom-10 right-16">
                  <MiniGlassCard compact />
                </div>

                <div className="absolute left-[26%] top-1/2 -translate-y-1/2">
                  <Pill>Mente</Pill>
                </div>
                <div className="absolute left-1/2 top-[46%] -translate-x-1/2">
                  <Pill>Regulación</Pill>
                </div>
                <div className="absolute left-[68%] top-[38%]">
                  <Pill>Hábitos</Pill>
                </div>

                <div className="absolute left-16 top-24 size-2 rounded-full bg-primary/35" />
                <div className="absolute left-32 top-40 size-1.5 rounded-full bg-primary/25" />
                <div className="absolute right-32 top-24 size-2 rounded-full bg-primary/28" />
                <div className="absolute right-24 bottom-24 size-1.5 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-border/70 bg-white/70 px-6 py-2 text-sm font-medium text-foreground shadow-soft backdrop-blur">
      {children}
    </div>
  );
}

function MiniGlassCard({ compact = false }: { compact?: boolean }) {
  return (
    <Card
      className={cn(
        "glass-panel border-border/60 bg-white/60 shadow-soft",
        compact ? "w-40" : "w-48"
      )}
    >
      <div className={cn("p-4", compact && "p-3")}>
        <div className="h-2 w-20 rounded-full bg-border/70" />
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded-full bg-border/60" />
          <div className="h-2 w-4/5 rounded-full bg-border/60" />
        </div>
        <div className="mt-4 h-2 w-12 rounded-full bg-primary/25" />
      </div>
    </Card>
  );
}
