import * as React from "react";

import { cn } from "@/lib/utils";

type Block = {
  title: string;
  description: string;
};

const BLOCKS: Block[] = [
  {
    title: "Centraliza información",
    description:
      "Reúne pacientes, agenda, consultas y documentación en una sola experiencia.",
  },
  {
    title: "Facilita el seguimiento",
    description:
      "Permite dar continuidad a los procesos clínicos con mayor orden y trazabilidad.",
  },
  {
    title: "Reduce fricción administrativa",
    description:
      "Disminuye la dispersión de tareas y mejora la organización cotidiana del trabajo profesional.",
  },
];

export type ProblemSolutionBlocksProps = {
  className?: string;
};

export function ProblemSolutionBlocks({ className }: ProblemSolutionBlocksProps) {
  return (
    <section className={cn("bg-background-soft py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Una plataforma para reducir desorden y facilitar el trabajo clínico
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              Elynthis nace para resolver necesidades reales de la práctica
              clínica: organizar pacientes, documentar procesos, mantener
              seguimiento y reducir la carga operativa que suele fragmentar la
              atención.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {BLOCKS.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-border/60 bg-background px-5 py-4 shadow-sm"
              >
                <div className="text-sm font-semibold tracking-tight">
                  {block.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {block.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
