import Link from "next/link";

import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCards } from "@/components/feature-cards";
import { TestimonialCard } from "@/components/testimonial-card";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Qué es"
            title="Conciencia Sánate"
            description="Una plataforma de bienestar emocional que integra educación, herramientas prácticas y un diseño emocionalmente seguro. Todo con una estética limpia, serena y profesional."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Contención</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Un espacio que acompaña sin exigencia: claridad, calma y pasos
                sostenibles.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Evidencia</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Psicología basada en evidencia, traducida a hábitos simples y
                aplicables.
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Ritmo humano</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                Progreso pequeño y consistente. Menos ruido. Más presencia.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Producto"
                title="Descubre Elynthis"
                description="El corazón del ecosistema: una experiencia wellness-tech para acompañarte con estructura, suavidad y seguimiento."
              />

              <FeatureCards
                items={[
                  {
                    title: "Guía clara",
                    description:
                      "Orientación práctica para tomar decisiones emocionales con calma.",
                  },
                  {
                    title: "Herramientas suaves",
                    description:
                      "Ejercicios breves, repetibles y sostenibles para tu día a día.",
                  },
                  {
                    title: "Tu progreso",
                    description:
                      "Seguimiento discreto que te ayuda a notar cambios reales sin presión.",
                  },
                ]}
              />

              <div className="flex gap-3">
                <Button className="rounded-2xl" asChild>
                  <Link href="/elynthis">Ver Elynthis</Link>
                </Button>
                <Button variant="secondary" className="rounded-2xl" asChild>
                  <Link href="/registro">Solicitar acceso</Link>
                </Button>
              </div>
            </div>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Qué encontrarás
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Rutas de práctica emocional
                </div>
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Recursos guiados
                </div>
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Un dashboard limpio y sereno
                </div>
                <div className="pt-2 text-xs">
                  Diseñado para evolucionar como plataforma real.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pilares"
            title="Herramientas, recursos y acompañamiento"
            description="Todo lo que ves aquí está pensado para ser simple, estético y emocionalmente seguro."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "Recursos gratuitos",
                  description:
                    "Guías, ejercicios y plantillas para empezar con claridad.",
                },
                {
                  title: "Educación emocional",
                  description:
                    "Artículos editoriales con un tono sereno y profesional.",
                },
                {
                  title: "Tu espacio",
                  description:
                    "Un dashboard privado para sostener hábitos sin saturación.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonios"
            title="Experiencias (simuladas por ahora)"
            description="Copys de ejemplo para definir tono, ritmo y estilo. Luego se conectan a Supabase."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <TestimonialCard
              quote="La experiencia se siente ligera, segura y muy clara. Me ayudó a ordenar mis días sin presión."
              name="María"
              role="Profesional"
            />
            <TestimonialCard
              quote="Me gustó que todo es minimalista, pero cálido. El lenguaje es respetuoso y humano."
              name="Andrés"
              role="Emprendedor"
            />
            <TestimonialCard
              quote="Las herramientas son pequeñas, pero consistentes. Se nota un enfoque basado en evidencia."
              name="Camila"
              role="Estudiante"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
