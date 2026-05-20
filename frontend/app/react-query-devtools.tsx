"use client";

import { useEffect, useState } from "react";

/**
 * Devtools montados solo en cliente tras hydration.
 * Evita el error de React 19: "script tag inside React component".
 */
export function ReactQueryDevtoolsLazy() {
  const [Devtools, setDevtools] = useState<React.ComponentType<{
    initialIsOpen?: boolean;
    buttonPosition?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  }> | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    void import("@tanstack/react-query-devtools").then((mod) => {
      setDevtools(() => mod.ReactQueryDevtools);
    });
  }, []);

  if (!Devtools) return null;

  return <Devtools initialIsOpen={false} buttonPosition="bottom-left" />;
}
