import * as React from "react";

import { Button } from "@/components/ui/button";

type NoResultsStateProps = {
  onClear: () => void;
};

export function NoResultsState({ onClear }: NoResultsStateProps) {
  return (
    <div className="rounded-3xl border border-border/50 bg-card p-8 text-center shadow-sm">
      <h3 className="text-balance text-lg font-semibold tracking-tight">
        No encontramos artículos
      </h3>
      <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-muted-foreground">
        Prueba con otra categoría o una búsqueda más amplia.
      </p>
      <div className="mt-6">
        <Button
          type="button"
          variant="secondary"
          className="rounded-full"
          onClick={onClear}
        >
          Limpiar filtros
        </Button>
      </div>
    </div>
  );
}
