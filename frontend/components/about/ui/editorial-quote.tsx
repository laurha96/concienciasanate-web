"use client";

import { motion } from "framer-motion";

import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutEase } from "@/components/about/about-motion";
import { AboutReveal } from "@/components/about/about-editorial-layout";
import { cn } from "@/lib/utils";

type AboutEditorialQuoteProps = {
  children: string;
  className?: string;
  revealClassName?: string;
};

/** Cierre editorial — pull quote centrado con hairline */
export function AboutEditorialQuote({
  children,
  className,
  revealClassName,
}: AboutEditorialQuoteProps) {
  return (
    <AboutReveal className={revealClassName} delay={0.08}>
      <blockquote
        className={cn(
          "relative mx-auto max-w-2xl text-center xl:max-w-3xl",
          className
        )}
      >
        <motion.div
          className={cn(aboutEd.hairlineAccent, "mx-auto")}
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: aboutEase }}
          style={{ transformOrigin: "center" }}
        />
        <motion.p
          className={cn(aboutEd.pullQuote, "mx-auto mt-8 text-pretty")}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease: aboutEase }}
        >
          {children}
        </motion.p>
      </blockquote>
    </AboutReveal>
  );
}
