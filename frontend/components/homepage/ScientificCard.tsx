"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function ScientificCard({
  icon,
  title,
  body,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "h-full rounded-[24px] border border-border bg-card p-7 text-center shadow-card",
        className
      )}
    >
      <div className="mx-auto grid size-12 place-items-center rounded-full bg-accent text-[var(--green-secondary)]">
        <div className="[&_svg]:size-5 [&_svg]:stroke-[1.75]">{icon}</div>
      </div>
      <div className="mt-5 text-[16px] font-medium text-foreground">
        {title}
      </div>
      {body ? (
        <p className="mt-3 text-[14px] leading-[1.6] text-muted-foreground">
          {body}
        </p>
      ) : null}
    </motion.div>
  );
}
