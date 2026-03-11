import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Accesos rápidos a contenido público y configuración.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild className="rounded-2xl">
          <Link href="/admin/blog">Gestionar Blog</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-2xl">
          <Link href="/admin/herramientas">Gestionar Herramientas</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-2xl">
          <Link href="/admin/testimonios">Gestionar Testimonios</Link>
        </Button>
        <Button asChild variant="secondary" className="rounded-2xl">
          <Link href="/admin/planes">Gestionar Planes</Link>
        </Button>
      </div>
    </div>
  );
}
