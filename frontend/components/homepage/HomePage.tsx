"use client";

import { motion } from "framer-motion";
import { BookOpen, Wrench, Brain, Moon, Leaf, Activity } from "lucide-react";

import { Navbar } from "@/components/homepage/Navbar";
import { HeroSection } from "@/components/homepage/HeroSection";
import { EcosystemSection } from "@/components/homepage/EcosystemSection";
import { ElynthisSection } from "@/components/homepage/ElynthisSection";
import { ScientificSection } from "@/components/homepage/ScientificSection";
import { ArticlesSection } from "@/components/homepage/ArticlesSection";
import { FinalCTASection } from "@/components/homepage/FinalCTASection";
import { Footer } from "@/components/homepage/Footer";
import OrganicBackground from "@/components/homepage/OrganicBackground";

const sectionMotion = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut" },
} as const;

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      <OrganicBackground />
      <Navbar />
      <motion.div {...sectionMotion}>
        <HeroSection />
      </motion.div>

      <motion.div {...sectionMotion}>
        <EcosystemSection
          icons={{
            education: <BookOpen />,
            tools: <Wrench />,
            clinical: <Activity />,
          }}
        />
      </motion.div>

      <motion.div {...sectionMotion}>
        <ElynthisSection />
      </motion.div>

      <motion.div {...sectionMotion}>
        <ScientificSection
          icons={[
            <Brain key="b" />,
            <Activity key="a" />,
            <Moon key="m" />,
            <Leaf key="l" />,
          ]}
        />
      </motion.div>

      <motion.div {...sectionMotion}>
        <ArticlesSection />
      </motion.div>

      <motion.div {...sectionMotion}>
        <FinalCTASection />
      </motion.div>
      <Footer />
    </div>
  );
}
