"use client";

import { useCallback, useMemo, useState } from "react";
import {
  BookOpen,
  Brain,
  Footprints,
  Heart,
  ListChecks,
  NotebookPen,
  PauseCircle,
  Sparkles,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatePresence } from "framer-motion";

import { BrandCtaLink } from "@/components/brand";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { SectionHeaderRow } from "@/components/homepage/section-header-row";
import { TabsSectionPanel } from "@/components/homepage/tabs-section-panel";
import {
  RESOURCES_TOOLS_TABS,
  resourcesToolsCopy,
} from "@/components/homepage/resources-tools-data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const DEFAULT_TAB = RESOURCES_TOOLS_TABS[0]?.key ?? "ansiedad";

const tabIcons: Record<string, typeof Brain> = {
  ansiedad: Brain,
  estres: Zap,
  "regulacion-emocional": Heart,
  habitos: Sparkles,
  herramientas: Wrench,
};

const toolIcons: Record<string, typeof Wind> = {
  breathing: Wind,
  "emotional-log": NotebookPen,
  "regulation-pause": PauseCircle,
  "habits-journal": BookOpen,
  "body-anchor": Footprints,
  "self-care-plan": ListChecks,
};

export type TabsSectionProps = {
  id?: string;
  /** Monta paneles solo tras la primera visita a cada tab. */
  lazy?: boolean;
  className?: string;
};

export function TabsSection({
  id = "aprende",
  lazy = true,
  className,
}: TabsSectionProps) {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
  const [visitedTabs, setVisitedTabs] = useState<Set<string>>(
    () => new Set([DEFAULT_TAB])
  );

  const activeTabData = useMemo(
    () => RESOURCES_TOOLS_TABS.find((t) => t.key === activeTab),
    [activeTab]
  );

  const markVisited = useCallback((key: string) => {
    setVisitedTabs((prev) => {
      if (prev.has(key)) return prev;
      const next = new Set(prev);
      next.add(key);
      return next;
    });
  }, []);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    markVisited(value);
  };

  const shouldRenderPanel = !lazy || visitedTabs.has(activeTab);
  const ToolIcon = activeTabData
    ? (toolIcons[activeTabData.tool.key] ?? Wind)
    : Wind;

  return (
    <SectionContainer
      variant="home"
      id={id}
      aria-labelledby="tabs-section-heading"
      className={cn(
        "border-t border-border/40 bg-gradient-to-b from-brand-background via-brand-muted/15 to-brand-surface/50",
        className
      )}
    >
      <SectionHeaderRow
        titleId="tabs-section-heading"
        title={resourcesToolsCopy.title}
        description={resourcesToolsCopy.subtitle}
        seeMoreHref={resourcesToolsCopy.ctaBlog.href}
        seeMoreLabel={resourcesToolsCopy.ctaBlog.label}
        align="center"
        className="sm:flex-col sm:items-center"
      />

      <Tabs value={activeTab} onValueChange={handleTabChange} className="gap-3">
        <div className="-mx-1 overflow-x-auto px-1 pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <TabsList
            variant="line"
            className="inline-flex h-auto min-w-full w-max flex-nowrap justify-start gap-0.5 rounded-none border-b border-border/50 bg-transparent p-0 sm:min-w-0 sm:w-full sm:flex-wrap"
          >
            {RESOURCES_TOOLS_TABS.map((tab) => {
              const Icon = tabIcons[tab.key] ?? BookOpen;
              return (
                <TabsTrigger
                  key={tab.key}
                  id={`tab-${tab.key}`}
                  value={tab.key}
                  aria-controls="tabs-section-panel"
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                    "data-[state=active]:bg-accent/85 data-[state=active]:text-[var(--green-secondary)]",
                    "hover:bg-accent/40 sm:text-sm"
                  )}
                >
                  <Icon className="size-3.5 sm:size-4" aria-hidden />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        <div
          id="tabs-section-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="relative min-h-[min(260px,40vh)] sm:min-h-[220px]"
        >
          <AnimatePresence mode="wait">
            {shouldRenderPanel && activeTabData ? (
              <TabsSectionPanel
                key={activeTabData.key}
                tab={activeTabData}
                toolIcon={ToolIcon}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </Tabs>

      <div className="mt-3 flex flex-col items-center justify-center gap-2 border-t border-border/40 pt-4 sm:flex-row sm:gap-3">
        <BrandCtaLink
          href={resourcesToolsCopy.ctaBlog.href}
          variant="secondary"
          size="default"
        >
          {resourcesToolsCopy.ctaBlog.label}
        </BrandCtaLink>
        <BrandCtaLink href={resourcesToolsCopy.ctaTools.href} variant="ghost" size="default">
          {resourcesToolsCopy.ctaTools.label}
        </BrandCtaLink>
      </div>
    </SectionContainer>
  );
}
