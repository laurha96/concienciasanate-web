import { Suspense } from "react";

import { AdminLoginClient } from "./login-client";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="px-4 py-20 text-sm text-muted-foreground">Cargando…</div>}>
      <AdminLoginClient />
    </Suspense>
  );
}
