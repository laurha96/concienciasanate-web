"use client";

import { motion } from "framer-motion";

import { methodBlocks, methodCopy } from "@/components/homepage/data";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeading } from "@/components/homepage/section-heading";
import { homeLayout } from "@/lib/home-layout";
import { cn } from "@/lib/utils";

const stepMotion = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35, ease: "easeOut" },
} as const;

function MethodStep({
  block,
  index,
}: {
  block: (typeof methodBlocks)[number];
  index: number;
}) {
  return (
    <motion.li
      {...stepMotion}
      transition={{ ...stepMotion.transition, delay: index * 0.08 }}
      className="relative text-center lg:px-2"
    >
      <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full border border-primary/15 bg-brand-surface shadow-soft">
        <span className="font-mono text-xs font-medium tracking-widest text-primary/90">
          {block.number}
        </span>
        <span className="sr-only">Paso {index + 1}:</span>
      </div>
      <h3 className="text-base font-semibold tracking-tight text-foreground">{block.title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
        {block.body}
      </p>
    </motion.li>
  );
}

export function MethodSection() {
  return (
    <SectionContainer
      variant="home"
      id="metodo"
      aria-labelledby="method-heading"
      className="border-y border-border/40 bg-gradient-to-b from-brand-muted/20 via-brand-background to-brand-surface/40"
    >
      <SectionHeading
        variant="home"
        titleId="method-heading"
        title={methodCopy.title}
        description={methodCopy.intro}
        align="center"
        className={cn(homeLayout.headingMb, "mx-auto")}
      />

      <ol className="relative grid list-none gap-6 p-0 lg:grid-cols-3 lg:gap-5">
        <div
          className="pointer-events-none absolute left-[12%] right-[12%] top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent lg:block"
          aria-hidden
        />
        {methodBlocks.map((block, index) => (
          <MethodStep key={block.key} block={block} index={index} />
        ))}
      </ol>

      <p className="mx-auto mt-6 max-w-xl border-t border-border/50 pt-5 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
        <span className="font-medium text-foreground/80">{methodCopy.microcopy}</span>
      </p>
    </SectionContainer>
  );
}
