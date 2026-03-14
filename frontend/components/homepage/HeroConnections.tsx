"use client";

import { motion } from "framer-motion";

export default function HeroConnections() {
  return (
    <svg
      width="500"
      height="300"
      viewBox="0 0 500 300"
      className="absolute inset-0 h-full w-full text-primary"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M80 200 C200 50 300 250 420 120"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        opacity={0.55}
      />

      <circle cx="80" cy="200" r="6" fill="currentColor" opacity={0.7} />
      <circle cx="420" cy="120" r="6" fill="currentColor" opacity={0.7} />
    </svg>
  );
}
