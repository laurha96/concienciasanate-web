"use client";

import { motion } from "framer-motion";

import { methodBlocks, methodCopy } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { cn } from "@/lib/utils";

const stepMotion = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.45, ease: "easeOut" },
} as const;

function MethodStep({
  block,
  index,
  isLast,
}: {
  block: (typeof methodBlocks)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.li
      {...stepMotion}
      transition={{
        ...stepMotion.transition,
        delay: index * 0.1,
      }}
      className={cn(
        "relative",
        !isLast &&
          "pb-12 before:absolute before:left-[1.4375rem] before:top-12 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary/30 before:to-primary/5 lg:pb-0 lg:before:hidden"
      )}
    >
      <div className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
        <motion.div
          className="relative z-10 flex size-[2.875rem] shrink-0 items-center justify-center rounded-full border border-primary/15 bg-brand-surface shadow-[0_1px_0_rgba(53,94,43,0.06)] ring-4 ring-brand-background/80 lg:mx-auto lg:mb-6 lg:size-12"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <span
            className="font-mono text-xs font-medium tracking-widest text-primary/90 sm:text-sm"
            aria-hidden
          >
            {block.number}
          </span>
          <span className="sr-only">Paso {index + 1}:</span>
        </motion.div>

        <motion.div className="min-w-0 flex-1 pt-0.5 lg:pt-0">
          <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {block.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-[15px] sm:leading-relaxed">
            {block.body}
          </p>
        </motion.div>
      </div>
    </motion.li>
  );
}

export function MethodSection() {
  return (
    <SectionContainer
      id="metodo"
      aria-labelledby="method-heading"
      className="relative overflow-hidden border-y border-border/40 bg-gradient-to-b from-brand-muted/20 via-brand-background to-brand-surface/40 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 bg-gradient-to-b from-brand-muted/30 to-transparent"
        aria-hidden
      />

      <SectionHeading
        titleId="method-heading"
        title={methodCopy.title}
        description={methodCopy.intro}
        align="center"
        className="mb-12 max-w-3xl sm:mb-14 lg:mx-auto"
      />

      <div className="relative">
        <div
          className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent lg:block"
          aria-hidden
        />

        <ol className="relative grid list-none gap-0 p-0 lg:grid-cols-3 lg:gap-10">
          {methodBlocks.map((block, index) => (
            <MethodStep
              key={block.key}
              block={block}
              index={index}
              isLast={index === methodBlocks.length - 1}
            />
          ))}
        </ol>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mx-auto mt-12 max-w-2xl border-t border-border/50 pt-8 text-center text-sm leading-relaxed text-muted-foreground sm:mt-14 sm:text-[15px]"
      >
        <span className="font-medium text-foreground/80">{methodCopy.microcopy}</span>
      </motion.p>
    </SectionContainer>
  );
}
