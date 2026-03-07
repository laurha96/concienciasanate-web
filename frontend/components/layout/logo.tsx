import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  nameClassName?: string;
  subtitleClassName?: string;
  showName?: boolean;
};

export function Logo({
  className,
  markClassName,
  nameClassName,
  subtitleClassName,
  showName = true,
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "grid h-12 w-12 place-items-center",
          markClassName
        )}
        aria-hidden="true"
      >
        <Image
          src="/logos/logo-mark.png"
          alt=""
          width={40}
          height={40}
          className="h-9 w-9"
          unoptimized
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
          <div
            className={cn(
              "text-xs text-muted-foreground",
              subtitleClassName
            )}
          >
            bienestar emocional
          </div>
        </div>
      ) : null}
    </div>
  );
}
