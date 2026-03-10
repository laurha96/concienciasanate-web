import * as React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/about/section-header";

export function AboutClosingSection() {
  return (
    <section className="bg-background-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader align="center" title="Bienestar con conciencia" />
          <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Conciencia Sánate busca contribuir a una cultura de bienestar
              basada en conocimiento, cuidado y comprensión.
            </p>
            <p>
              Pequeños cambios en la forma en que pensamos, sentimos y vivimos
              pueden generar transformaciones profundas en nuestra salud y
              calidad de vida.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/">Explorar plataforma</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/recursos">Ver recursos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
