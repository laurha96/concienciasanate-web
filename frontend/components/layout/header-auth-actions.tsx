"use client";

import Link from "next/link";
import * as React from "react";

import { PrimaryButton, SecondaryButton } from "@/components/brand";
import { authRoutes } from "@/lib/site-nav";
import { safeGetClientEnv } from "@/lib/env";
import { getStoredUser } from "@/services/auth-store";
import { signOut } from "@/services/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type SessionUser = {
  id: string;
  email: string | null;
};

type HeaderAuthActionsProps = {
  className?: string;
  /** En el sheet móvil los botones van a ancho completo */
  layout?: "inline" | "stacked";
  /** Clases extra para cada botón (p. ej. padding responsive en desktop) */
  buttonClassName?: string;
};

export function HeaderAuthActions({
  className,
  layout = "inline",
  buttonClassName,
}: HeaderAuthActionsProps) {
  const [user, setUser] = React.useState<SessionUser | null>(null);
  const envReady = safeGetClientEnv() !== null;

  React.useEffect(() => {
    if (!envReady) return;

    const sync = () => setUser(getStoredUser());
    sync();

    window.addEventListener("storage", sync);
    window.addEventListener("auth:change", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("auth:change", sync as EventListener);
    };
  }, [envReady]);

  const stackClass =
    layout === "stacked" ? "flex w-full flex-col gap-2" : "flex items-center gap-2";

  if (!envReady) {
    return (
      <div className={cn(stackClass, className)}>
        <SecondaryButton
          asChild
          size="sm"
          className={cn(layout === "stacked" && "w-full", buttonClassName)}
        >
          <Link href={authRoutes.login}>Entrar</Link>
        </SecondaryButton>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={cn(stackClass, className)}>
        <SecondaryButton
          asChild
          size="sm"
          className={cn(layout === "stacked" && "w-full", buttonClassName)}
        >
          <Link href={authRoutes.login}>Entrar</Link>
        </SecondaryButton>
        <PrimaryButton
          asChild
          size="sm"
          className={cn(layout === "stacked" && "w-full", buttonClassName)}
        >
          <Link href={authRoutes.register}>Crear cuenta</Link>
        </PrimaryButton>
      </div>
    );
  }

  const initials = (user.email ?? "U").slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="sm"
          className={cn(
            "gap-2 rounded-full border-border/80 bg-brand-surface/90 shadow-soft",
            buttonClassName
          )}
        >
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
          </Avatar>
          <span className="max-w-[140px] truncate">Tu cuenta</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="truncate">
          {user.email ?? "Sesión activa"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/perfil">Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await signOut();
            window.location.assign("/");
          }}
        >
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
