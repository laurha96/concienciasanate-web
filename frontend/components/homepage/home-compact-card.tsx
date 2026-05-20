import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { brandClasses } from "@/lib/brand/tokens";
import { cn } from "@/lib/utils";

export type HomeCompactCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  actionLabel?: string;
  layout?: "stack" | "row";
  className?: string;
  interactive?: boolean;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]";

export function homeCompactCardClassName({
  interactive = true,
  className,
}: {
  interactive?: boolean;
  className?: string;
}) {
  return cn(
    brandClasses.cardPremium,
    interactive && brandClasses.cardPremiumHover,
    "group h-full",
    className
  );
}

/** Card premium compacta — Home (estilo Linear / Notion + identidad clínica). */
export function HomeCompactCard({
  title,
  description,
  icon,
  href,
  actionLabel,
  layout = "stack",
  className,
  interactive = true,
}: HomeCompactCardProps) {
  const isRow = layout === "row";

  const content = (
    <>
      {icon ? (
        <div className={cn(brandClasses.cardPremiumIcon, isRow && "mt-0.5")} aria-hidden>
          {icon}
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <h3 className={brandClasses.cardPremiumTitle}>{title}</h3>
        <p className={brandClasses.cardPremiumDesc}>{description}</p>
        {actionLabel ? (
          <span className={brandClasses.cardPremiumAction}>
            {actionLabel}
            <ArrowRight
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        ) : null}
      </div>
    </>
  );

  const innerClass = cn("flex h-full", isRow ? "flex-row items-start gap-3" : "flex-col");

  if (href) {
    return (
      <Link
        href={href}
        className={cn(homeCompactCardClassName({ interactive, className }), focusRing, innerClass)}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn(homeCompactCardClassName({ interactive, className }), innerClass)}>{content}</div>
  );
}
