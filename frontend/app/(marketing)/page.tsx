import Link from "next/link";

import { TestimonialCard } from "@/components/cards/testimonial-card";
import { CTASection } from "@/components/sections/cta-section";
import { FeatureCards } from "@/components/sections/feature-cards";
import { HeroSection } from "@/components/sections/hero-section";
import { SectionHeading } from "@/components/sections/section-heading";
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
            title="Un ecosistema digital de salud y bienestar."
            description="Conciencia Sánate es una plataforma que busca acercar el conocimiento científico sobre salud y bienestar a la vida cotidiana."
          />
          <div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground sm:text-base">
            <p>
              Integra psicología basada en evidencia, medicina preventiva,
              educación emocional y herramientas prácticas que ayudan a las
              personas a desarrollar hábitos sostenibles de bienestar.
            </p>
            <p>
              Nuestro objetivo no es ofrecer soluciones rápidas, sino acompañar
              procesos reales de comprensión, autocuidado y crecimiento
              personal.
            </p>
            <p>
              El bienestar se construye a través de pequeños cambios sostenidos
              en el tiempo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Modelo"
            title="Un enfoque integral del bienestar humano."
            description="La investigación científica moderna muestra que la salud depende de múltiples dimensiones interconectadas. Por eso Conciencia Sánate integra tres pilares fundamentales del bienestar."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "MENTE",
                  description:
                    "Comprender nuestros pensamientos y emociones permite desarrollar mayor regulación emocional, claridad mental y resiliencia psicológica.",
                },
                {
                  title: "CUERPO",
                  description:
                    "La salud física, el descanso, la respiración y el movimiento influyen directamente en nuestro equilibrio emocional y bienestar general.",
                },
                {
                  title: "ESPÍRITU",
                  description:
                    "Las personas experimentan mayor bienestar cuando viven en conexión con sus valores, su propósito y una vida con significado.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Herramientas"
            title="Herramientas prácticas para tu salud."
            description="La ciencia del comportamiento muestra que el bienestar se construye a través de hábitos pequeños y sostenidos. Conciencia Sánate ofrece herramientas simples que ayudan a integrar el bienestar en la vida cotidiana."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "Respiración y regulación",
                  description:
                    "Prácticas breves para regular el sistema nervioso.",
                },
                {
                  title: "Diario emocional",
                  description:
                    "Registro guiado para comprender pensamientos y emociones.",
                },
                {
                  title: "Prácticas de conciencia",
                  description:
                    "Ejercicios breves de presencia y autorreflexión.",
                },
                {
                  title: "Planes de bienestar",
                  description:
                    "Pequeños pasos para desarrollar hábitos saludables.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Educación"
            title="Conocimiento científico aplicado a la vida diaria."
            description="Comprender cómo funciona nuestra mente y nuestro cuerpo es una de las herramientas más poderosas para mejorar nuestra calidad de vida. En Conciencia Sánate encontrarás artículos, guías y recursos educativos desarrollados a partir de investigación científica en psicología, medicina y bienestar."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "Artículos recientes",
                  description: "Lecturas claras, serenas y basadas en evidencia.",
                },
                {
                  title: "Guías prácticas",
                  description: "Pasos aplicables para hábitos y autocuidado.",
                },
                {
                  title: "Contenido educativo",
                  description:
                    "Recursos para comprender salud mental, cuerpo y bienestar.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Tecnología clínica"
                title="Elynthis para profesionales de la salud."
                description="Elynthis es una plataforma tecnológica diseñada para profesionales de la salud que necesitan gestionar pacientes, consultas y documentación clínica de forma organizada. Permite administrar agendas, historias clínicas y procesos de seguimiento dentro de un entorno digital claro y eficiente."
              />

              <FeatureCards
                items={[
                  {
                    title: "Agenda y consultas",
                    description:
                      "Organiza tu agenda y tu día clínico de forma clara y consistente.",
                  },
                  {
                    title: "Historias clínicas",
                    description:
                      "Documentación organizada y accesible cuando la necesitas.",
                  },
                  {
                    title: "Seguimiento",
                    description:
                      "Continuidad del proceso con un flujo humano y eficiente.",
                  },
                ]}
              />

              <div className="flex gap-3">
                <Button className="rounded-2xl" asChild>
                  <Link href="/elynthis">Ver Elynthis</Link>
                </Button>
                <Button variant="secondary" className="rounded-2xl" asChild>
                  <Link href="/contactenos">Solicitar demo</Link>
                </Button>
              </div>
            </div>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">
                  Qué incluye
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Agenda, consultas y seguimiento
                </div>
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Historias clínicas
                </div>
                <div className="rounded-3xl border border-border/70 bg-accent p-4">
                  Documentación clínica
                </div>
                <div className="pt-2 text-xs">
                  Parte del ecosistema Conciencia Sánate.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experiencias"
            title="Experiencias de bienestar."
            description="Las herramientas basadas en evidencia pueden ayudar a las personas a desarrollar mayor claridad emocional, regulación del estrés y bienestar general."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <TestimonialCard
              quote="La experiencia se siente ligera y clara. Me ayudó a ordenar mis pensamientos y comprender mejor lo que estaba sintiendo."
              name="Usuario"
              role="Testimonio"
            />
            <TestimonialCard
              quote="Me gustó que las herramientas son simples pero significativas. No se siente abrumador."
              name="Usuario"
              role="Testimonio"
            />
            <TestimonialCard
              quote="Me ayudó a sostener hábitos pequeños con más calma. La información se siente seria, pero accesible."
              name="Usuario"
              role="Testimonio"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
