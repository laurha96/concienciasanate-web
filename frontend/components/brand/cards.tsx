"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { brandClasses } from "@/lib/brand/tokens";

type CardBaseProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  as?: "motion" | "div";
};

function CardShell({
  children,
  className,
  interactive = true,
  as = "motion",
}: CardBaseProps) {
  const base = cn(className);
  if (as === "motion" && interactive) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={base}
      >
        {children}
      </motion.div>
    );
  }
  return <div className={base}>{children}</div>;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  interactive = true,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <CardShell
      interactive={interactive}
      className={cn(brandClasses.cardFeature, "h-full", className)}
    >
      {icon ? (
        <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-accent text-[var(--green-secondary)]">
          <div className="[&_svg]:size-5 [&_svg]:stroke-[1.75]">
            {icon}
          </div>
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {description}
      </p>
    </CardShell>
  );
}

export function SoftCard({
  children,
  className,
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <CardShell
      interactive={interactive}
      className={cn(brandClasses.cardSoft, className)}
    >
      {children}
    </CardShell>
  );
}

export function MetricCard({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={cn(brandClasses.cardMetric, className)}>
      <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
      <div
        className="mt-3 h-1.5 w-16 rounded-full bg-accent/90"
        aria-hidden
      />
    </div>
  );
}

export function PreviewCard({
  children,
  className,
  title,
  subtitle,
}: {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn(brandClasses.cardPreview, className)}>
      {title ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            {subtitle ? (
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {subtitle}
              </p>
            ) : null}
            <p className="text-sm font-semibold text-foreground">{title}</p>
          </div>
          <div
            className="h-2 w-14 rounded-full bg-primary/25"
            aria-hidden
          />
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function MotionCard({
  className,
  children,
  ...motionProps
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(brandClasses.cardSoft, className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
