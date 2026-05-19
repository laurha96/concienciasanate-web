import type { ReactNode } from "react";

import { BrandCtaLink } from "@/components/brand";

type HomeCtaVariant = "primary" | "secondary" | "outline";

const variantMap = {
  primary: "primary",
  secondary: "secondary",
  outline: "ghost",
} as const;

/** @deprecated Prefer BrandCtaLink from @/components/brand */
export function HomeCtaLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: HomeCtaVariant;
  className?: string;
}) {
  return (
    <BrandCtaLink
      href={href}
      variant={variantMap[variant]}
      className={className}
    >
      {children}
    </BrandCtaLink>
  );
}
