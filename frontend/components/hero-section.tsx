import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-2">
              Psicología basada en evidencia · autocuidado · crecimiento
            </Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Bienestar emocional con calma, claridad y contención.
            </h1>
            <p className="max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Conciencia Sánate es un ecosistema digital para acompañarte a
              construir hábitos de autocuidado, fortalecer tu salud mental y
              avanzar con suavidad — sin ruido, sin presión.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/elynthis">Descubrir Elynthis</Link>
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
              Un enfoque humano, minimalista y profesional. Diseñado para sentirse
              seguro.
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-[48px] bg-gradient-to-br from-primary/10 via-accent/20 to-transparent blur-2xl" />
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm font-medium">Tu espacio, a tu ritmo</div>
                <div className="grid gap-3">
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-sm font-medium">Respiración & foco</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Microprácticas de 3–5 minutos.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-sm font-medium">Diario emocional</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Registrar sin juicio, con claridad.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-muted p-4">
                    <div className="text-sm font-medium">Plan suave</div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Progreso pequeño, consistente y real.
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background p-4">
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
