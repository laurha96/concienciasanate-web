import Link from "next/link";
import { Check, Layers, Monitor, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HomeEcosystemSectionProps = {
  className?: string;
};

export function HomeEcosystemSection({ className }: HomeEcosystemSectionProps) {
  return (
    <section className={cn("relative bg-background-soft py-16 sm:py-20", className)}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-main opacity-40" />
        <div className="absolute left-10 top-10 size-1.5 rounded-full bg-primary/20" />
        <div className="absolute left-24 top-32 size-1 rounded-full bg-primary/18" />
        <div className="absolute right-16 top-20 size-1.5 rounded-full bg-primary/16" />
        <div className="absolute right-40 bottom-20 size-1 rounded-full bg-primary/18" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Un ecosistema digital de salud
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <EcosystemCard
            icon={<Layers className="size-5" aria-hidden="true" />}
            title="Educación"
            description="Artículos basados en evidencia para comprender salud mental, hábitos y cuerpo"
            bullets={["estrés", "regulación emocional", "sueño", "hábitos"]}
            right={
              <div className="space-y-2">
                <IllustrationCard variant="education" />
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <div className="max-w-[190px]">
                    Cómo el estrés afecta al cuerpo y a la mente.
                  </div>
                  <Link
                    href="/blog"
                    className="whitespace-nowrap transition-colors hover:text-foreground"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            }
            footer={
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver artículos →
              </Link>
            }
          />

          <EcosystemCard
            icon={<Monitor className="size-5" aria-hidden="true" />}
            title="Herramientas"
            description="Prácticas guiadas para regulación emocional y hábitos sostenibles"
            bullets={["respiración", "diario emocional", "autoevaluaciones"]}
            right={<IllustrationCard variant="tools" />}
            footer={
              <Button className="w-full rounded-2xl" asChild>
                <Link href="/herramientas">Probar ahora</Link>
              </Button>
            }
          />

          <EcosystemCard
            icon={<Stethoscope className="size-5" aria-hidden="true" />}
            title="Tecnología clínica"
            description="Elynthis conecta a los profesionales de la salud con seguimiento y documenta."
            bullets={["pacientes", "historia clínica", "seguimiento"]}
            right={<IllustrationCard variant="clinical" />}
            footer={
              <Button variant="secondary" className="w-full rounded-2xl" asChild>
                <Link href="/elynthis">Conocer Elynthis</Link>
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}

function EcosystemCard({
  icon,
  title,
  description,
  bullets,
  right,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  right: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden rounded-3xl border-border/70 bg-card shadow-card">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <div className="grid size-11 place-items-center rounded-2xl border border-border bg-background-soft text-primary shadow-soft">
            <div className="text-primary [&_svg]:stroke-[1.75]">{icon}</div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-base tracking-tight">{title}</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-5 pb-6">
        <div className="grid grid-cols-[1fr_220px] items-start gap-5">
          <div className="space-y-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  <span className="capitalize">{b}</span>
                </li>
              ))}
            </ul>
            <div>{footer}</div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-white/55 p-3 shadow-soft">
            {right}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function IllustrationCard({
  variant,
}: {
  variant: "education" | "tools" | "clinical";
}) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-main">
      <div className="absolute inset-0 opacity-65">
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/18 blur-2xl" />
        <div className="absolute -left-10 bottom-0 size-28 rounded-full bg-primary/14 blur-2xl" />
      </div>

      {variant === "education" ? (
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4 h-2 w-24 rounded-full bg-border/70" />
          <div className="absolute left-4 top-9 h-2 w-32 rounded-full bg-border/60" />
          <div className="absolute left-4 bottom-4 h-16 w-24 rounded-2xl bg-white/65" />
          <div className="absolute right-4 top-10 h-20 w-24 rounded-2xl bg-white/60" />
          <div className="absolute right-10 bottom-8 size-2 rounded-full bg-primary/40" />
          <div className="absolute right-16 bottom-12 size-1.5 rounded-full bg-primary/24" />
        </div>
      ) : null}

      {variant === "tools" ? (
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4 h-2 w-24 rounded-full bg-border/70" />
          <div className="absolute left-4 top-9 h-2 w-32 rounded-full bg-border/60" />
          <div className="absolute right-4 bottom-4 h-28 w-20 rounded-2xl bg-white/60" />
          <div className="absolute right-12 top-14 h-14 w-12 rounded-2xl bg-white/55" />
          <div className="absolute left-6 bottom-6 size-2 rounded-full bg-primary/35" />
        </div>
      ) : null}

      {variant === "clinical" ? (
        <div className="absolute inset-0">
          <div className="absolute left-4 top-4 h-2 w-24 rounded-full bg-border/70" />
          <div className="absolute left-4 top-9 h-2 w-36 rounded-full bg-border/60" />
          <div className="absolute left-4 top-16 h-24 w-[calc(100%-2rem)] rounded-2xl bg-white/60" />
          <div className="absolute left-8 top-20 h-2 w-28 rounded-full bg-border/65" />
          <div className="absolute left-8 top-28 h-2 w-40 rounded-full bg-border/60" />
          <div className="absolute right-8 bottom-6 size-2 rounded-full bg-primary/35" />
        </div>
      ) : null}
    </div>
  );
}
