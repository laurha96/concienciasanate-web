"use client";

import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

import { safeGetClientEnv } from "@/lib/env";
import { apiGetMyProfile } from "@/services/api";
import { clearAuth, getAccessToken } from "@/services/auth-store";

function hasStatus(value: unknown): value is { status?: number } {
  return typeof value === "object" && value !== null && "status" in value;
}

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = React.useState(false);
  const envReady = safeGetClientEnv() !== null;

  React.useEffect(() => {
    const target = `/login?redirect=${encodeURIComponent(pathname)}`;
    if (!envReady) {
      router.replace(target);
      return;
    }

    const token = getAccessToken();
    if (!token) {
      router.replace(target);
      return;
    }

    apiGetMyProfile()
      .then(() => setReady(true))
      .catch((err: unknown) => {
        if (hasStatus(err) && err.status === 401) {
          clearAuth();
        }
        router.replace(target);
      });
  }, [envReady, pathname, router]);

  if (!ready) return null;
  return <>{children}</>;
}
