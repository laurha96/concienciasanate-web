"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function ArticleCard({
  title,
  description,
  featured,
  className,
}: {
  title: string;
  description: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative h-full rounded-[28px] border border-border bg-card p-6 shadow-card",
        className
      )}
    >
      <div className="inline-flex rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-[var(--green-secondary)]">
        Educación
      </div>

      <div className="mt-4 text-[22px] font-medium text-foreground">{title}</div>
      <p className="mt-3 text-[16px] leading-[1.6] text-muted-foreground">
        {description}
      </p>

      {featured ? (
        <div className="pointer-events-none absolute bottom-5 right-5 h-20 w-24 rounded-[20px] bg-[linear-gradient(135deg,var(--accent),var(--background))] opacity-80" />
      ) : null}

      <div className="mt-6">
        <Link
          href="/blog"
          className="text-[14px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Leer más →
        </Link>
      </div>
    </motion.div>
  );
}
