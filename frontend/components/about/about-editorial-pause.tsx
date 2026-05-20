import { aboutEd } from "@/components/about/about-editorial-tokens";
import { cn } from "@/lib/utils";

type AboutEditorialPauseProps = {
  /** Pausa entre capítulos */
  size?: "md" | "lg" | "xl";
  /** Tono del fondo inferior (continuidad con la siguiente sección) */
  tone?: "canvas" | "transparent";
  showHairline?: boolean;
  className?: string;
};

const sizeClass = {
  md: "h-14 sm:h-20",
  lg: "h-20 sm:h-28 lg:h-32",
  xl: "h-24 sm:h-36 lg:h-44",
} as const;

/** Respiración vertical entre bloques — ritmo tipo Notion / Linear */
export function AboutEditorialPause({
  size = "lg",
  tone = "transparent",
  showHairline = true,
  className,
}: AboutEditorialPauseProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative w-full",
        sizeClass[size],
        tone === "canvas" && "bg-brand-background",
        className
      )}
    >
      {showHairline ? (
        <div
          className={cn(
            aboutEd.hairline,
            "absolute left-1/2 top-1/2 w-[min(88%,720px)] -translate-x-1/2 -translate-y-1/2 opacity-80"
          )}
        />
      ) : null}
    </div>
  );
}
