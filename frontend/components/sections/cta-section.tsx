import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-border/60 bg-card p-10 shadow-sm">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-2xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <h3 className="text-balance text-2xl font-semibold tracking-tight">
                Empieza con un paso pequeño, sostenido y real.
              </h3>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                Explora recursos gratuitos o entra al dashboard para construir tu
                espacio de bienestar. Sin presión. Con claridad.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/registro">Crear cuenta</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl"
                asChild
              >
                <Link href="/recursos">Ver recursos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
