import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-green-light/70 via-background-main to-transparent blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[520px] w-[520px] rounded-full bg-green-soft/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-2">
              Psicología clínica · medicina preventiva · bienestar basado en evidencia
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Salud y bienestar integral con claridad, calma y evidencia.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Conciencia Sánate es una plataforma digital de salud que integra
              psicología, medicina preventiva y bienestar integral para ayudarte
              a comprender tu mente, cuidar tu cuerpo y vivir con mayor
              conciencia.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/dashboard">Explorar plataforma</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl"
                asChild
              >
                <Link href="/recursos">Explorar recursos</Link>
              </Button>
            </div>
            <div className="text-xs leading-5 text-muted-foreground">
              Educación en salud, herramientas prácticas y tecnología para el bienestar humano.
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-[56px] bg-gradient-to-br from-green-light/70 via-background-soft to-transparent blur-2xl" />
            <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-medium">Tu espacio, a tu ritmo</div>
                <div className="grid gap-3">
                  <div className="rounded-3xl border border-border/70 bg-accent p-4">
                    <div className="text-sm font-medium">Respiración & foco</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Microprácticas de 3–5 minutos.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-accent p-4">
                    <div className="text-sm font-medium">Diario emocional</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Registrar sin juicio, con claridad.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-border/70 bg-accent p-4">
                    <div className="text-sm font-medium">Plan suave</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Progreso pequeño, consistente y real.
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-3xl border border-border/70 bg-background-soft p-4">
                  <div>
                    <div className="text-xs text-muted-foreground">Hoy</div>
                    <div className="text-sm font-medium">1 intención</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Calma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
