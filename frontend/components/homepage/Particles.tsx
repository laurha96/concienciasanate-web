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

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    leftPct: Math.random() * 100,
    topPct: Math.random() * 100,
    duration: 6 + Math.random() * 4,
    delay: Math.random() * 1.2,
    size: 6 + Math.random() * 6,
  }));
}

export default function Particles({ count = 20 }: { count?: number }) {
  const particles = React.useMemo(() => createParticles(count), [count]);

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
