"use client";

import { motion, useReducedMotion } from "framer-motion";

import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutEase, aboutStaggerChild } from "@/components/about/about-motion";
import { cn } from "@/lib/utils";

export type MentalHealthManifestStatementProps = {
  index: number;
  title: string;
  body: string;
  isLast: boolean;
  useStagger?: boolean;
};

export function MentalHealthManifestStatement({
  index,
  title,
  body,
  isLast,
  useStagger = false,
}: MentalHealthManifestStatementProps) {
  const reduceMotion = useReducedMotion();

  if (useStagger) {
    return (
      <motion.li variants={aboutStaggerChild} className="list-none">
        <ManifestStatementContent
          index={index}
          title={title}
          body={body}
          isLast={isLast}
        />
      </motion.li>
    );
  }

  return (
    <motion.li
      className="list-none"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: aboutEase,
        delay: index * 0.06,
      }}
    >
      <ManifestStatementContent
        index={index}
        title={title}
        body={body}
        isLast={isLast}
      />
    </motion.li>
  );
}

function ManifestStatementContent({
  index,
  title,
  body,
  isLast,
}: Omit<MentalHealthManifestStatementProps, "useStagger">) {
  return (
    <>
      <article className="relative mx-auto max-w-[36rem] px-2 text-center xl:max-w-[40rem]">
        <span
          className={cn(aboutEd.indexMarker, "text-primary/35")}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <blockquote className="mt-10 border-none p-0 sm:mt-12">
          <p
            className={cn(
              aboutEd.titleStatement,
              "text-pretty text-foreground/92 sm:text-[2.05rem] lg:text-[2.2rem]"
            )}
          >
            {title}
          </p>
        </blockquote>

        <p
          className={cn(
            aboutEd.bodyLarge,
            "mx-auto mt-7 max-w-md text-pretty leading-[1.85] sm:mt-8 sm:max-w-lg"
          )}
        >
          {body}
        </p>
      </article>

      {!isLast ? (
        <motion.div
          className={cn(
            aboutEd.hairline,
            "mx-auto mt-20 max-w-[9rem] sm:mt-24 lg:mt-32 xl:mt-36"
          )}
          aria-hidden
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: aboutEase }}
          style={{ transformOrigin: "center" }}
        />
      ) : null}
    </>
  );
}
