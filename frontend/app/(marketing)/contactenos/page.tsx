import type { Metadata } from "next";

import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacto de Conciencia Sánate. Escríbenos con tu motivo y te responderemos lo antes posible.",
};

export default function ContactenosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="space-y-16">
        <section aria-labelledby="contact-hero">
          <h1
            id="contact-hero"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Contacto
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Si tienes preguntas sobre Conciencia Sánate, la plataforma Elynthis
            o el ecosistema de salud, puedes escribirnos y te responderemos lo
            antes posible.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Intentamos responder en un plazo de 24–48 horas.
          </p>
        </section>

        <section aria-labelledby="contact-reasons">
          <h2
            id="contact-reasons"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            ¿En qué podemos ayudarte?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-border/60 py-5 shadow-sm">
              <CardHeader className="gap-1">
                <CardTitle className="text-base tracking-tight">
                  Información general
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                Preguntas sobre la plataforma Conciencia Sánate.
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 py-5 shadow-sm">
              <CardHeader className="gap-1">
                <CardTitle className="text-base tracking-tight">
                  Soporte técnico
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                Problemas con acceso, cuentas o herramientas.
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 py-5 shadow-sm">
              <CardHeader className="gap-1">
                <CardTitle className="text-base tracking-tight">
                  Profesionales de salud
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                Información sobre Elynthis o uso profesional.
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-border/60 py-5 shadow-sm">
              <CardHeader className="gap-1">
                <CardTitle className="text-base tracking-tight">
                  Alianzas o investigación
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-6 text-muted-foreground">
                Propuestas académicas o institucionales.
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="contact-form">
          <h2
            id="contact-form"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Formulario de contacto
          </h2>
          <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <ContactForm toEmail="laurarojas@concienciasanate.org" />
          </div>
        </section>

        <section aria-labelledby="privacy-note">
          <h2
            id="privacy-note"
            className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Privacidad
          </h2>
          <div className="mt-10 rounded-2xl border border-border/60 bg-background-soft p-6 text-sm leading-7 text-muted-foreground shadow-sm">
            <p>
              La información enviada a través de este formulario se utiliza
              únicamente para responder a tu consulta y no será compartida con
              terceros.
            </p>

            <details className="mt-5 rounded-xl border border-border/60 bg-background px-4 py-3">
              <summary className="cursor-pointer text-sm font-medium text-foreground">
                Importante: emergencias
              </summary>
              <div className="mt-3 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>
                  Si estás en una situación de emergencia, riesgo inminente o
                  peligro para ti o para otra persona, busca ayuda inmediata.
                </p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">
                    Colombia
                  </div>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>
                      <span className="font-medium text-foreground">123</span>
                      : línea de emergencias (urgencias, policía, ambulancia).
                    </li>
                    <li>
                      <span className="font-medium text-foreground">119</span>
                      : bomberos.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">132</span>
                      : Cruz Roja.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">144</span>
                      : Defensa Civil.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Línea 106
                      </span>
                      (Bogotá): apoyo emocional y orientación.
                    </li>
                    <li>
                      <span className="font-medium text-foreground">192</span>
                      : orientación en salud (opciones pueden variar según el
                      servicio).
                    </li>
                  </ul>
                  <p className="text-xs leading-5 text-muted-foreground">
                    Los números pueden variar por ciudad u operador. Si no te
                    contestan, intenta nuevamente o acude al servicio de
                    urgencias más cercano.
                  </p>
                </div>

                <p>
                  Si estás fuera de Colombia, usa la línea de emergencias o
                  crisis de tu país.
                </p>
              </div>
            </details>
          </div>
        </section>

        <section aria-labelledby="final-cta">
          <div className="rounded-2xl border border-border/60 bg-background-soft p-8 text-center shadow-sm">
            <h2
              id="final-cta"
              className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Empieza por una herramienta
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/herramientas">Explorar herramientas</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/elynthis">Conocer Elynthis</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
