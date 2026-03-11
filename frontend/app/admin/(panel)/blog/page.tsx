"use client";

import Link from "next/link";
import * as React from "react";

import { apiAdminDeleteBlog, apiAdminListBlog } from "@/services/admin-api";
import type { AdminBlogPostListItem } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AdminBlogListPage() {
  const [items, setItems] = React.useState<AdminBlogPostListItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await apiAdminListBlog();
      setItems(data.items ?? []);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    void load();
  }, []);

  async function onDelete(id: string) {
    if (!confirm("¿Eliminar este post?")) return;
    await apiAdminDeleteBlog(id);
    await load();
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Crear, editar y publicar artículos.
          </p>
        </div>
        <Button asChild className="rounded-2xl">
          <Link href="/admin/blog/nuevo">Nuevo post</Link>
        </Button>
      </div>

      <Separator />

      {error ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="text-sm text-muted-foreground">Cargando…</div>
      ) : items.length === 0 ? (
        <div className="text-sm text-muted-foreground">Sin posts aún.</div>
      ) : (
        <div className="grid gap-3">
          {items.map((it) => (
            <Card key={it.id} className="rounded-3xl border-border/60">
              <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
                <div>
                  <CardTitle className="text-base tracking-tight">{it.title}</CardTitle>
                  <div className="mt-1 text-xs text-muted-foreground">
                    slug: {it.slug} · estado: {it.status}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <Link href={`/admin/blog/${it.id}`}>Editar</Link>
                  </Button>
                  <Button
                    variant="destructive"
                    className="rounded-2xl"
                    onClick={() => onDelete(it.id)}
                  >
                    Eliminar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {it.excerpt || "(Sin extracto)"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
