import * as React from "react";

export function EcosystemIntegrationSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Elynthis dentro del ecosistema Conciencia Sánate
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Conciencia Sánate es el ecosistema digital orientado a salud,
              bienestar, educación basada en evidencia y herramientas centradas
              en el cuidado humano.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-muted-foreground">
              {[
                "educación en salud",
                "bienestar",
                "herramientas basadas en ciencia",
                "cuidado digital centrado en la persona",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-soft"
                  />
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border/60 bg-background-soft p-6 shadow-sm">
            <div className="rounded-2xl border border-border/60 bg-background p-5">
              <div className="text-sm font-semibold tracking-tight">
                Conciencia Sánate
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Ecosistema de salud y bienestar basado en evidencia.
              </p>

              <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border/60" />
                <span>rama clínica</span>
                <span className="h-px flex-1 bg-border/60" />
              </div>

              <div className="rounded-2xl border border-border/60 bg-background-soft p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Elynthis
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Tecnología clínica
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-green-soft"
                  />
                </div>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                  {[
                    "organización de práctica",
                    "flujos clínicos",
                    "documentación en salud",
                    "soporte para profesionales",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-soft"
                      />
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
