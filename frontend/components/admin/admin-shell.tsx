"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { apiAdminLogout } from "@/services/admin-api";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type NavItem = { href: string; label: string; superAdminOnly?: boolean };

const nav: NavItem[] = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/herramientas", label: "Herramientas" },
  { href: "/admin/testimonios", label: "Testimonios" },
  { href: "/admin/planes", label: "Planes" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/ajustes", label: "Ajustes" },
  { href: "/admin/usuarios", label: "Usuarios", superAdminOnly: true },
];

export function AdminShell({
  adminEmail,
  adminRole,
  children,
}: {
  adminEmail: string;
  adminRole: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  async function onLogout() {
    setLoading(true);
    try {
      await apiAdminLogout();
      router.replace("/admin/login");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-border/60 bg-background-soft p-4">
          <div className="space-y-1">
            <div className="text-sm font-semibold tracking-tight">Panel admin</div>
            <div className="text-xs text-muted-foreground">{adminEmail}</div>
            <div className="text-xs text-muted-foreground">Rol: {adminRole}</div>
          </div>

          <Separator className="my-4" />

          <nav className="space-y-1">
            {nav
              .filter((item) => (item.superAdminOnly ? adminRole === "super_admin" : true))
              .map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    "block rounded-2xl px-3 py-2 text-sm transition-colors " +
                    (active
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Separator className="my-4" />

          <Button
            variant="secondary"
            className="w-full rounded-2xl"
            onClick={onLogout}
            disabled={loading}
          >
            {loading ? "Saliendo…" : "Cerrar sesión"}
          </Button>
        </aside>

        <section className="rounded-3xl border border-border/60 bg-background p-4 lg:p-6">
          {children}
        </section>
      </div>
    </div>
  );
}
