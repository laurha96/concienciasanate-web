import * as React from "react";

import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  { title: "Registra pacientes", description: "Crea fichas y organiza información base." },
  { title: "Organiza citas y consultas", description: "Mantén agenda y actividad clínica en orden." },
  { title: "Documenta procesos clínicos", description: "Notas, historia clínica y documentación clara." },
  { title: "Da seguimiento con mayor claridad", description: "Evolución y continuidad del cuidado." },
];

export function WorkflowSteps() {
  return (
    <section className="bg-background-soft py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Cómo acompaña la práctica diaria
          </h2>
        </div>

        <div className="mt-10">
          <ol className="grid gap-4 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative">
                <div className="rounded-2xl border border-border/60 bg-background px-5 py-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-muted-foreground">
                      Paso {index + 1}
                    </div>
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-green-soft"
                    />
                  </div>
                  <div className="mt-2 text-sm font-semibold tracking-tight">
                    {step.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className={cn(
                    "hidden lg:block",
                    index < STEPS.length - 1 &&
                      "absolute right-[-14px] top-1/2 h-px w-7 -translate-y-1/2 bg-border/60"
                  )}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
