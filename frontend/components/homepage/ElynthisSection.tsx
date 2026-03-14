"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ElynthisSection() {
  return (
    <section className="flex justify-center py-24">
      <div className="w-full max-w-[1200px] grid grid-cols-2 gap-16 items-center px-5">
        <div>
          <h2 className="text-[40px] font-semibold mb-6 text-foreground">
            Tecnología clínica para profesionales
          </h2>

          <p className="text-muted-foreground mb-6">
            Elynthis permite gestionar pacientes, historias clínicas y seguimiento dentro de un entorno claro y organizado.
          </p>

          <div className="flex gap-4">
            <Link
              href="/elynthis"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-[var(--green-primary-hover)]"
            >
              Conocer Elynthis
            </Link>

            <Link
              href="/contacto"
              className="border border-border px-6 py-3 rounded-full bg-background text-foreground"
            >
              Solicitar demo
            </Link>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-card rounded-[28px] shadow-card p-6 border border-border/70"
        >
          <p className="text-muted-foreground text-sm">Dashboard preview</p>
        </motion.div>
      </div>
    </section>
  );
}
