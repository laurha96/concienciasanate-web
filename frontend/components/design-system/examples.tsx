import * as React from "react";

import { Navbar } from "@/components/design-system/navbar";
import { HeroSection } from "@/components/design-system/hero-section";
import { FeatureCardsGrid } from "@/components/design-system/feature-cards-grid";
import { DesignSystemFooter } from "@/components/design-system/footer";

export function DesignSystemExample() {
  return (
    <div className="min-h-screen bg-background-main">
      <Navbar />
      <HeroSection />
      <FeatureCardsGrid />
      <DesignSystemFooter />
    </div>
  );
}
