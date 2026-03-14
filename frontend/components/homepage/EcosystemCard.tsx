"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function EcosystemCard({
  icon,
  title,
  text,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-[28px] border border-border/70 bg-card p-7 shadow-card",
        className
      )}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="mb-2 text-xl font-medium text-foreground">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </motion.div>
  );
}
