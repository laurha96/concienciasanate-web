"use client";

import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { BrandCtaLink } from "@/components/brand";
import { HomeCompactCard } from "@/components/homepage/home-compact-card";
import type { ResourcesToolsTab } from "@/components/homepage/resources-tools-data";
import { ToolPreviewCard } from "@/components/homepage/ToolPreviewCard";
import { homeLayout } from "@/lib/home-layout";

const panelMotion = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as const },
};

export function TabsSectionPanel({
  tab,
  toolIcon: ToolIcon,
}: {
  tab: ResourcesToolsTab;
  toolIcon: LucideIcon;
}) {
  return (
    <motion.div {...panelMotion} className="space-y-3">
      <motion.div
        className={`grid grid-cols-1 gap-2.5 md:grid-cols-3 ${homeLayout.gridGap}`}
      >
        {tab.resources.map((resource, index) => (
          <motion.div
            key={resource.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: index * 0.05 }}
            className="h-full min-h-0"
          >
            <HomeCompactCard
              href={resource.href}
              title={resource.title}
              description={resource.description}
              icon={<BookOpen strokeWidth={1.75} aria-hidden />}
              actionLabel="Leer"
              layout="row"
            />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: 0.1 }}
          className="h-full min-h-0 md:col-span-1"
        >
          <ToolPreviewCard
            tool={tab.tool}
            icon={<ToolIcon strokeWidth={1.75} aria-hidden />}
            layout="row"
            className="h-full border-primary/20 bg-gradient-to-br from-brand-surface to-accent/30"
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
        <BrandCtaLink href={tab.cta.href} variant="primary" size="default" className="sm:w-auto">
          {tab.cta.label}
        </BrandCtaLink>
      </div>
    </motion.div>
  );
}
