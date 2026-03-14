import Link from "next/link";

import { BackgroundDecor } from "@/components/homepage/BackgroundDecor";
import { HeroNetworkVisual } from "@/components/homepage/HeroNetworkVisual";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundDecor />

      <div className="relative flex justify-center pb-28 pt-20">
        <div className="w-full max-w-[1200px] px-5">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h1 className="text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[56px] lg:text-[64px]">
                Conciencia Sánate
              </h1>

              <p className="mb-4 mt-6 text-[18px] text-muted-foreground md:text-[20px] lg:text-[22px]">
                Plataforma digital de bienestar basada en ciencia.
              </p>

              <p className="mb-8 text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                Comprende tu mente. Cuida tu cuerpo. Construye hábitos sostenibles.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/recursos"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-[15px] font-medium text-primary-foreground shadow-card transition-transform duration-200 hover:-translate-y-[1px] hover:bg-[var(--green-primary-hover)]"
                >
                  Explorar recursos
                </Link>

                <Link
                  href="/elynthis"
                  className="inline-flex items-center justify-center rounded-full border border-border/70 bg-card px-6 py-3 text-[15px] font-medium text-foreground/90 shadow-card transition-transform duration-200 hover:-translate-y-[1px]"
                >
                  Conocer Elynthis
                </Link>
              </div>
            </div>

            <HeroNetworkVisual className="mx-auto w-full max-w-[620px]" />
          </div>
        </div>
      </div>

      <div className="relative h-14">
        <div className="absolute inset-x-0 -bottom-20 h-40 rounded-t-[96px] bg-background" />
      </div>
    </section>
  );
}
