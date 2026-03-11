"use client";

import * as React from "react";

import {
  apiAdminCreateAdminUser,
  apiAdminListAdminUsers,
  apiAdminResetAdminPassword,
  apiAdminUpdateAdminUser,
} from "@/services/admin-api";
import { apiAdminMe } from "@/services/admin-api";
import type { AdminUserRow } from "@/services/admin-api";
import { getErrorMessage } from "@/lib/errors";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AdminUsersPage() {
  const [meRole, setMeRole] = React.useState<string | null>(null);
  const [items, setItems] = React.useState<AdminUserRow[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("editor");

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const me = await apiAdminMe();
      setMeRole(me.adminUser.role);
      const data = await apiAdminListAdminUsers();
      setItems(data.users ?? []);
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    void load();
  }, []);

  async function onCreate() {
    setSaving(true);
    setError(null);
    try {
      await apiAdminCreateAdminUser({ email, password, role });
      setEmail("");
      setPassword("");
      setRole("editor");
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function onUpdateRole(id: string, nextRole: string) {
    setSaving(true);
    setError(null);
    try {
      await apiAdminUpdateAdminUser(id, { role: nextRole });
      await load();
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  async function onResetPassword(id: string) {
    const next = prompt("Nueva contraseña");
    if (!next) return;
    setSaving(true);
    setError(null);
    try {
      await apiAdminResetAdminPassword(id, next);
      alert("Contraseña actualizada");
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Cargando…</div>;
  }

  if (meRole !== "super_admin") {
    return (
      <div className="rounded-2xl border border-border/60 bg-background-soft px-4 py-3 text-sm">
        No autorizado. Esta sección es solo para <b>super_admin</b>.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Usuarios admin</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Solo super_admin puede crear y administrar usuarios.
        </p>
      </div>

      <Separator />

      {error ? (
        <div className="rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <Card className="rounded-3xl border-border/60">
        <CardHeader>
          <CardTitle className="text-base tracking-tight">Crear usuario</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rol</Label>
              <select
                id="role"
                className="h-10 w-full rounded-2xl border border-input bg-background px-3 text-sm"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="editor">editor</option>
                <option value="admin_professional">admin_professional</option>
                <option value="super_admin">super_admin</option>
              </select>
            </div>
          </div>

          <Button className="rounded-2xl" onClick={onCreate} disabled={saving}>
            {saving ? "Creando…" : "Crear"}
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-3">
        {items.map((it) => (
          <Card key={it.id} className="rounded-3xl border-border/60">
            <CardHeader className="flex-row items-start justify-between gap-3 space-y-0">
              <div>
                <CardTitle className="text-base tracking-tight">{it.email}</CardTitle>
                <div className="mt-1 text-xs text-muted-foreground">rol: {it.role}</div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="h-9 rounded-2xl border border-input bg-background px-3 text-sm"
                  value={it.role}
                  onChange={(e) => onUpdateRole(it.id, e.target.value)}
                  disabled={saving}
                >
                  <option value="editor">editor</option>
                  <option value="admin_professional">admin_professional</option>
                  <option value="super_admin">super_admin</option>
                </select>
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  onClick={() => onResetPassword(it.id)}
                  disabled={saving}
                >
                  Reset password
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
