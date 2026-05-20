/**
 * Tokens semánticos de marca (referencia).
 * Los valores reales viven en `app/globals.css` como CSS variables.
 */
export const brandTokens = {
  colors: {
    primary: "#76B041",
    primaryDark: "#355E2B",
    sage: "#DCE8D4",
    background: "#F4F8F1",
    beige: "#F6F1E8",
    textMain: "#222222",
    textSoft: "#667065",
    white: "#FFFFFF",
  },
} as const;

/** Clases utilitarias definidas en globals.css (@layer components) */
export const brandClasses = {
  section: "cs-section",
  container: "cs-container",
  displayTitle: "cs-display-title",
  sectionTitle: "cs-section-title",
  sectionDesc: "cs-section-desc",
  badge: "cs-badge",
  glass: "cs-glass",
  cardSoft: "cs-card-soft",
  cardFeature: "cs-card-feature",
  cardMetric: "cs-card-metric",
  cardPreview: "cs-card-preview",
  sectionHome: "cs-section-home",
  displayTitleHome: "cs-display-title-home",
  displayTitleHero: "cs-display-title-hero",
  heroSubtitle: "cs-hero-subtitle",
  heroBadge: "cs-hero-badge",
  heroMicrocopy: "cs-hero-microcopy",
  sectionTitleHome: "cs-section-title-home",
  sectionDescHome: "cs-section-desc-home",
  cardFeatureCompact: "cs-card-feature-compact",
  cardPreviewCompact: "cs-card-preview-compact",
  cardPreviewMini: "cs-card-preview-mini",
  cardPremium: "cs-card-premium",
  cardPremiumHover: "cs-card-premium-hover",
  cardPremiumIcon: "cs-card-premium-icon",
  cardPremiumTitle: "cs-card-premium-title",
  cardPremiumDesc: "cs-card-premium-desc",
  cardPremiumAction: "cs-card-premium-action",
} as const;
