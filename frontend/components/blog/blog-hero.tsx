import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-border/50 bg-card shadow-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-light/20 via-transparent to-transparent" />
      <div className="relative px-6 py-14 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center">
            <Badge
              variant="secondary"
              className="rounded-full px-4 py-1 text-[11px]"
            >
              Salud · bienestar · evidencia
            </Badge>
          </div>

          <div className="mt-6 text-[11px] font-medium tracking-wide text-muted-foreground">
            Blog
          </div>

          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Educación en salud basada en evidencia
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Artículos, guías y recursos sobre salud mental, bienestar, hábitos,
            mente-cuerpo y cuidado integral.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            Contenido desarrollado con enfoque científico, lenguaje claro y propósito humano.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="#articulos">Explorar artículos</Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full">
              <Link href="#series">Ver guías esenciales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
