"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

function Card({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "rounded-[28px] border border-border bg-card p-7 shadow-card",
        className
      )}
    >
      <div className="text-[18px] font-medium text-foreground">{title}</div>
      <p className="mt-2 text-[14px] leading-[1.6] text-muted-foreground">{text}</p>
    </motion.div>
  );
}

export function ArticlesSection() {
  return (
    <section className="flex justify-center py-24">
      <div className="w-full max-w-[1200px] px-5">
        <h2 className="text-[40px] font-semibold mb-10 text-center text-foreground">
          Educación en salud
        </h2>

        <div className="grid grid-cols-4 gap-6">
          <Card title="Estrés" text="Cómo afecta al cuerpo y mente." />
          <Card
            title="Regulación emocional"
            text="Qué es y por qué es importante."
          />
          <Card
            title="Sueño y salud mental"
            text="La conexión entre ambos."
          />
          <Card title="Hábitos sostenibles" text="Pequeños cambios diarios." />
        </div>
      </div>
    </section>
  );
}
