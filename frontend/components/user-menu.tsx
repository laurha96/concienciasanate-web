"use client";

import Link from "next/link";
import * as React from "react";

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

type SessionUser = {
  id: string;
  email: string | null;
};

export function UserMenu() {
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

  if (!envReady) {
    return (
      <Button variant="secondary" size="sm" asChild>
        <Link href="/login">Configurar acceso</Link>
      </Button>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" asChild>
          <Link href="/login">Entrar</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/registro">Crear cuenta</Link>
        </Button>
      </div>
    );
  }

  const initials = (user.email ?? "U").slice(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="gap-2 rounded-2xl">
          <Avatar className="h-6 w-6">
            <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">Tu cuenta</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="truncate">
          {user.email ?? "Sesión"}
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
