import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  showName?: boolean;
};

export function Logo({
  className,
  markClassName,
  nameClassName,
  showName = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "grid h-11 w-11 place-items-center rounded-3xl border border-border/70 bg-card shadow-sm",
          markClassName
        )}
        aria-hidden="true"
      >
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={34}
          height={34}
          className="h-8 w-8"
          priority
        />
      </div>

      {showName ? (
        <div className="leading-tight">
          <div
            className={cn(
              "text-sm font-semibold tracking-tight text-foreground",
              nameClassName
            )}
          >
            Conciencia Sánate
          </div>
          <div className="text-xs text-muted-foreground">bienestar emocional</div>
        </div>
      ) : null}
    </div>
  );
}
