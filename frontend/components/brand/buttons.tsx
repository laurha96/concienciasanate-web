import { Slot } from "radix-ui";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const brandButtonBase = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      size: {
        default: "px-6 py-3 text-[15px]",
        sm: "px-4 py-2 text-sm",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const primaryVariants = cva(
  "bg-primary text-primary-foreground shadow-soft hover:bg-[var(--green-primary-hover)] hover:-translate-y-px active:translate-y-0"
);

const secondaryVariants = cva(
  "border border-border/80 bg-card text-foreground shadow-soft hover:bg-brand-muted/80 hover:-translate-y-px active:translate-y-0"
);

const ghostVariants = cva(
  "border border-transparent bg-transparent text-[var(--green-secondary)] hover:border-border/60 hover:bg-brand-muted/60"
);

type BrandButtonProps = ComponentProps<"button"> &
  VariantProps<typeof brandButtonBase> & {
    asChild?: boolean;
    className?: string;
  };

function BrandButton({
  className,
  size,
  asChild = false,
  ...props
}: BrandButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      className={cn(brandButtonBase({ size }), className)}
      {...props}
    />
  );
}

export function PrimaryButton({
  className,
  size,
  asChild,
  ...props
}: BrandButtonProps) {
  return (
    <BrandButton
      asChild={asChild}
      size={size}
      className={cn(primaryVariants(), className)}
      {...props}
    />
  );
}

export function SecondaryButton({
  className,
  size,
  asChild,
  ...props
}: BrandButtonProps) {
  return (
    <BrandButton
      asChild={asChild}
      size={size}
      className={cn(secondaryVariants(), className)}
      {...props}
    />
  );
}

export function GhostButton({
  className,
  size,
  asChild,
  ...props
}: BrandButtonProps) {
  return (
    <BrandButton
      asChild={asChild}
      size={size}
      className={cn(ghostVariants(), className)}
      {...props}
    />
  );
}

/** Enlace CTA con estilos de marca (compat. Home) */
export function BrandCtaLink({
  href,
  children,
  variant = "primary",
  className,
  size,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  size?: VariantProps<typeof brandButtonBase>["size"];
}) {
  const Button =
    variant === "primary"
      ? PrimaryButton
      : variant === "secondary"
        ? SecondaryButton
        : GhostButton;

  return (
    <Button asChild size={size} className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
