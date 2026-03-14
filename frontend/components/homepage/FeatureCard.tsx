"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  body,
  bullets,
  footer,
  right,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  bullets: string[];
  footer?: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-[32px] border border-border/70 bg-card p-8 shadow-card",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="grid size-12 place-items-center rounded-full bg-accent text-[var(--green-secondary)]">
          <div className="[&_svg]:size-5 [&_svg]:stroke-[1.75]">{icon}</div>
        </div>
        <div className="min-w-0">
          <div className="text-[22px] font-medium text-foreground">
            {title}
          </div>
          <p className="mt-2 text-[16px] leading-[1.6] text-muted-foreground">
            {body}
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-[1fr_252px] gap-7">
        <div>
          <ul className="space-y-2.5 text-[14px] text-muted-foreground">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-accent text-[var(--green-secondary)]">
                  <span className="text-[12px]">✓</span>
                </span>
                <span className="capitalize">{b}</span>
              </li>
            ))}
          </ul>

          {footer ? <div className="mt-6">{footer}</div> : null}
        </div>

        <div className="rounded-[24px] border border-border bg-card/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
          {right}
        </div>
      </div>
    </motion.div>
  );
}
