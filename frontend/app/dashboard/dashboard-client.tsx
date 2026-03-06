"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchMyProfile } from "@/services/profile";

export function DashboardClient() {
  const profileQuery = useQuery({
    queryKey: ["me", "profile"],
    queryFn: fetchMyProfile,
  });

  if (profileQuery.isLoading) {
    return (
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-40 rounded-3xl" />
        <Skeleton className="h-40 rounded-3xl" />
        <Skeleton className="h-40 rounded-3xl" />
      </div>
    );
  }

  const displayName = profileQuery.data?.full_name ?? null;

  return (
    <div className="space-y-6">
      <div className="rounded-[40px] border border-border/60 bg-card p-8 shadow-sm">
        <div className="text-xs text-muted-foreground">Dashboard</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Hola{displayName ? `, ${displayName}` : ""}.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground">
          Tu espacio está pensado para sostener tu bienestar con suavidad: progreso
          pequeño, claro y real.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-2xl" asChild>
            <Link href="/recursos">Recursos recomendados</Link>
          </Button>
          <Button variant="secondary" className="rounded-2xl" asChild>
            <Link href="/elynthis">Explorar Elynthis</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Progreso</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Próximamente: seguimiento discreto de hábitos y módulos.
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">
              Accesos rápidos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link className="hover:underline" href="/perfil">
                Editar perfil
              </Link>
            </div>
            <div>
              <Link className="hover:underline" href="/recursos">
                Ver recursos
              </Link>
            </div>
            <div>
              <Link className="hover:underline" href="/blog">
                Leer blog
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-3xl border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base tracking-tight">Tu espacio</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Un lugar limpio para practicar, registrar y volver a ti.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
