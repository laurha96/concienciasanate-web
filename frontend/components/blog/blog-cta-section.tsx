import Link from "next/link";

import { Button } from "@/components/ui/button";

type BlogCTASectionProps = {
  onExploreCategories?: () => void;
};

export function BlogCTASection({ onExploreCategories }: BlogCTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-border/50 bg-card shadow-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-light/15 via-transparent to-transparent" />
      <div className="relative px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Explora recursos para cuidar tu salud con más claridad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Conciencia Sánate reúne contenidos basados en evidencia para ayudarte a
            comprender mejor tu mente, tu cuerpo y tu bienestar.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="#articulos">Ver todos los artículos</Link>
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="rounded-full"
              onClick={onExploreCategories}
            >
              Explorar categorías
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
