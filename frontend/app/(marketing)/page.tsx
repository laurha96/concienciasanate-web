import Link from "next/link";

import { ArticleCard } from "@/components/cards/article-card";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
import { ProductMockupCard } from "@/components/elynthis/product-mockup-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchHomePageData } from "@/modules/home";

export default function HomePage() {
  const {
    collections: { recentArticles },
  } = fetchHomePageData();

  return (
    <div>
      <HeroSection />

      {/* SECTION 2 — THREE PILLARS */}
      <section className="bg-background-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Un enfoque integral de la salud" />
          <div className="mt-10">
            <FeatureCards
              items={[
                {
                  title: "Mente",
                  description:
                    "Comprender pensamientos, emociones y patrones psicológicos permite desarrollar mayor claridad mental y resiliencia.",
                },
                {
                  title: "Cuerpo",
                  description:
                    "El descanso, la respiración, el movimiento y los hábitos físicos influyen directamente en la salud emocional.",
                },
                {
                  title: "Espíritu",
                  description:
                    "La búsqueda de sentido, valores y propósito contribuye al bienestar y la estabilidad psicológica.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — WELLBEING TOOLS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Herramientas para el bienestar cotidiano"
            description="Pequeñas prácticas basadas en ciencia que ayudan a regular el sistema nervioso y desarrollar bienestar sostenible."
          />
          <div className="mt-10">
            <FeatureCards
              items={[
                {
                  title: "Respiración consciente",
                  description:
                    "Microprácticas para regular el sistema nervioso.",
                },
                {
                  title: "Diario emocional",
                  description:
                    "Registra pensamientos y emociones para comprender mejor los procesos internos.",
                },
                {
                  title: "Planes de bienestar",
                  description:
                    "Desarrolla hábitos pequeños que generan cambios sostenibles.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — SCIENTIFIC FOUNDATION */}
      <section className="bg-background-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                title="Basado en investigación científica"
                description="Conciencia Sánate integra hallazgos de disciplinas que explican cómo se forman hábitos, cómo se regula el estrés y cómo se construye bienestar sostenido."
              />
              <div className="text-sm leading-6 text-muted-foreground">
                Trabajamos con un enfoque que prioriza claridad, lenguaje clínico
                accesible y prácticas aplicables sin promesas rápidas.
              </div>
            </div>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Integra conocimiento de
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>• psicología basada en evidencia</div>
                <div>• ciencia del comportamiento</div>
                <div>• regulación emocional</div>
                <div>• medicina preventiva</div>
                <div>• intervenciones mente-cuerpo</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ECOSYSTEM */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Un ecosistema digital de salud"
            description="Conciencia Sánate integra educación, herramientas de salud y tecnología clínica para cubrir el ciclo completo: entender, practicar y dar seguimiento."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Educación
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Artículos basados en evidencia para comprender salud mental,
                hábitos y mente–cuerpo.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Herramientas de salud
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Prácticas breves y guías para apoyar regulación emocional y
                hábitos sostenibles.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Tecnología clínica
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Elynthis conecta la organización clínica con seguimiento y
                documentación en un entorno claro.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ELYNTHIS */}
      <section className="bg-background-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                title="Tecnología clínica para profesionales"
                description="Elynthis es la plataforma clínica del ecosistema Conciencia Sánate."
              />
              <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                Permite gestionar pacientes, agenda, historias clínicas y
                seguimiento dentro de un entorno digital claro y organizado.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="rounded-2xl" asChild>
                  <Link href="/elynthis">Conocer Elynthis</Link>
                </Button>
                <Button variant="secondary" className="rounded-2xl" asChild>
                  <Link href="/contactenos">Solicitar demo</Link>
                </Button>
              </div>
            </div>

            <ProductMockupCard className="max-w-xl" />
          </div>
        </div>
      </section>

      {/* SECTION 7 — ARTICLES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Educación en salud" />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {recentArticles.map((item) => (
              <ArticleCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[40px] border border-border/60 bg-card p-10 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Empieza con un paso pequeño, sostenido y real.
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
                  <Link href="/herramientas">Explorar recursos</Link>
                </Button>
                <Button size="lg" className="rounded-2xl" asChild>
                  <Link href="/registro">Crear cuenta</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
