"use client";

import * as React from "react";
import { motion } from "framer-motion";

type Particle = {
  leftPct: number;
  topPct: number;
  duration: number;
  delay: number;
  size: number;
};

export default function Particles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => {
        const leftPct = Math.random() * 100;
        const topPct = Math.random() * 100;
        const duration = 6 + Math.random() * 4;
        const delay = Math.random() * 1.2;
        const size = 6 + Math.random() * 6;
        return { leftPct, topPct, duration, delay, size };
      })
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 opacity-40"
          style={{
            left: `${p.leftPct}%`,
            top: `${p.topPct}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
