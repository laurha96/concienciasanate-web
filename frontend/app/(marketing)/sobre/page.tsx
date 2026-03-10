import type { Metadata } from "next";
import Link from "next/link";

import { FeatureCards } from "@/components/sections/feature-cards";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre Conciencia Sánate: un ecosistema digital de salud y bienestar basado en evidencia, con enfoque integral (mente, cuerpo y propósito).",
};

export default function SobrePage() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Sobre"
            title="Un proyecto dedicado al bienestar humano."
            description="Conciencia Sánate es una plataforma digital de salud y bienestar que integra conocimiento científico, herramientas prácticas y tecnología para ayudar a las personas a cuidar su mente, su cuerpo y su calidad de vida."
          />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Nuestro propósito es acercar el conocimiento sobre salud mental,
            bienestar y desarrollo humano a la vida cotidiana de las personas de
            forma clara, accesible y basada en evidencia.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Misión</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                Acercar conocimiento científico sobre salud mental, medicina
                preventiva y bienestar integral a la vida cotidiana, con
                recursos claros y herramientas prácticas que apoyen hábitos
                sostenibles de autocuidado.
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Visión</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">
                Contribuir a una cultura de bienestar basada en evidencia y
                cuidado humano, donde las personas puedan fortalecer su salud y
                calidad de vida a través de cambios pequeños, sostenidos y
                realistas.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Enfoque"
            title="Un enfoque integral del bienestar"
            description="Conciencia Sánate se basa en una comprensión integral de la salud humana, inspirada en un enfoque biopsicosocial del bienestar."
          />

          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              La investigación científica contemporánea muestra que el bienestar
              no depende únicamente de factores médicos o psicológicos aislados,
              sino de la interacción constante entre procesos biológicos,
              psicológicos, sociales y existenciales.
            </p>
            <p>
              Por esta razón, integramos perspectivas provenientes de distintas
              disciplinas, incluyendo la psicología clínica, la medicina
              preventiva, la neurociencia, la ciencia del comportamiento y la
              investigación en bienestar humano.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Mente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  La dimensión mental incluye procesos psicológicos que influyen
                  en cómo interpretamos la realidad, respondemos a las emociones
                  y tomamos decisiones.
                </p>
                <p>
                  Promovemos herramientas basadas en evidencia que ayudan a:
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Desarrollar conciencia emocional</li>
                  <li>Comprender patrones de pensamiento</li>
                  <li>Mejorar la regulación del estrés</li>
                  <li>Fortalecer la resiliencia psicológica</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Cuerpo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  La salud física influye directamente en el bienestar
                  psicológico. Sueño, respiración, movimiento, nutrición y
                  regulación del sistema nervioso participan en cómo vivimos el
                  estrés y el equilibrio general.
                </p>
                <p>Incorporamos prácticas que ayudan a:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Mejorar la regulación del sistema nervioso</li>
                  <li>Promover hábitos de salud sostenibles</li>
                  <li>Reducir el impacto fisiológico del estrés</li>
                  <li>Fortalecer la conexión mente-cuerpo</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base tracking-tight">Espíritu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-muted-foreground">
                <p>
                  Esta dimensión se refiere a encontrar significado, propósito y
                  dirección. No se trata de una dimensión religiosa específica,
                  sino de un aspecto humano relacionado con valores y sentido.
                </p>
                <p>En Conciencia Sánate lo abordamos a través de:</p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>Reflexión sobre valores personales</li>
                  <li>Desarrollo de una vida con propósito</li>
                  <li>Conexión con experiencias significativas</li>
                  <li>Búsqueda de mayor claridad interior</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
              <div className="text-sm font-medium">Integración</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                Mente, cuerpo y espíritu no funcionan de forma independiente.
                La evidencia sugiere que el bienestar surge cuando existe una
                relación equilibrada entre procesos psicológicos, hábitos físicos
                y experiencia de sentido personal.
              </p>
            </div>
            <div className="rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
              <div className="text-sm font-medium">Enfoque práctico</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                El conocimiento tiene mayor impacto cuando puede aplicarse.
                Por eso combinamos educación en salud con herramientas prácticas
                que se integran en la rutina: ejercicios de regulación emocional,
                respiración, espacios de reflexión y recursos educativos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Base científica"
            title="Basado en investigación científica"
            description="Nuestros contenidos y herramientas se inspiran en líneas de investigación consolidadas en salud mental, medicina preventiva y bienestar humano."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "Psicología basada en evidencia",
                  description:
                    "Intervenciones y psicoeducación fundamentadas en investigación clínica.",
                },
                {
                  title: "Regulación emocional",
                  description:
                    "Comprender y entrenar habilidades para responder con mayor equilibrio.",
                },
                {
                  title: "Psicología positiva",
                  description:
                    "Bienestar, fortalezas y hábitos que sostienen una vida con más sentido.",
                },
                {
                  title: "Intervenciones mente-cuerpo",
                  description:
                    "Prácticas que integran respiración, atención y regulación del sistema nervioso.",
                },
                {
                  title: "Ciencia del comportamiento",
                  description:
                    "Diseño de hábitos: pequeño, sostenible y consistente en el tiempo.",
                },
                {
                  title: "Bienestar integral",
                  description:
                    "Perspectivas integradoras en salud, calidad de vida y desarrollo humano.",
                },
              ]}
            />
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Nuestro objetivo es traducir el conocimiento científico en
            herramientas comprensibles y aplicables en la vida cotidiana.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ecosistema"
            title="Un ecosistema digital de salud"
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
            <div className="max-w-2xl space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                Conciencia Sánate forma parte de un ecosistema digital orientado
                al bienestar y la salud integral. Integra educación en salud,
                herramientas prácticas de autocuidado y tecnología diseñada para
                facilitar procesos de acompañamiento y atención.
              </p>
              <p>
                El objetivo es acercar el conocimiento científico sobre salud y
                bienestar a la vida cotidiana, combinando recursos educativos con
                soluciones tecnológicas que apoyan tanto a las personas como a
                los profesionales de la salud.
              </p>
            </div>

            <Card className="relative justify-self-start overflow-hidden rounded-xl border-border/60 bg-card shadow-sm lg:justify-self-end">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />

              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm"
                    />
                    <CardTitle className="text-base tracking-tight">Elynthis</CardTitle>
                  </div>
                  <span className="rounded-full border border-border/70 bg-accent px-3 py-1 text-xs font-medium text-muted-foreground">
                    Clínica
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Tecnología clínica para profesionales de la salud
                </div>
              </CardHeader>

              <CardContent className="space-y-5 pt-0 text-sm text-muted-foreground">
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-green-soft"
                    />
                    <span>Gestión de pacientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-green-soft"
                    />
                    <span>Agenda y consultas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-green-soft"
                    />
                    <span>Documentación clínica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-green-soft"
                    />
                    <span>Seguimiento de atención</span>
                  </li>
                </ul>

                <Link
                  href="/elynthis"
                  className="inline-flex items-center rounded-full border border-border/70 bg-background-soft px-4 py-2 text-sm font-medium text-foreground transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-green-soft/70 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Conocer Elynthis
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Propósito"
            title="Nuestro propósito"
            description="Vivimos en una época en la que el acceso a información sobre salud es cada vez mayor, pero muchas veces resulta confuso o fragmentado."
          />
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Conciencia Sánate busca ofrecer un espacio claro y confiable donde
              las personas puedan encontrar conocimiento, herramientas y recursos
              que contribuyan a su bienestar.
            </p>
            <p>
              Nuestro propósito es promover una relación más consciente con la
              salud, la mente y la vida cotidiana.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Principios"
            title="Principios del proyecto"
            description="Sostenemos este trabajo con criterios claros: rigor, claridad y cuidado humano."
          />
          <div className="mt-8">
            <FeatureCards
              items={[
                {
                  title: "Rigor científico",
                  description:
                    "Los contenidos se inspiran en investigación científica en salud y bienestar.",
                },
                {
                  title: "Claridad",
                  description:
                    "El conocimiento debe ser accesible y comprensible.",
                },
                {
                  title: "Humanidad",
                  description:
                    "La salud implica comprender la experiencia humana con respeto y cuidado.",
                },
                {
                  title: "Sostenibilidad",
                  description:
                    "El bienestar se construye a través de pequeños cambios sostenidos en el tiempo.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-background-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cierre"
            title="Bienestar con conciencia."
            description="Conciencia Sánate busca contribuir a una cultura de bienestar basada en conocimiento, cuidado y comprensión."
          />
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Pequeños cambios en la forma en que pensamos, sentimos y vivimos
            pueden generar transformaciones profundas en nuestra salud y calidad
            de vida.
          </p>
        </div>
      </section>
    </div>
  );
}
