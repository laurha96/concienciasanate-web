import { BrandCtaLink, DisplayTitle } from "@/components/brand";
import { heroCopy } from "@/components/homepage/data";
import { HeroNetworkVisual } from "@/components/homepage/HeroNetworkVisual";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <SectionContainer
      className="overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-14 lg:pt-16"
      id="inicio"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(75vh,680px)] bg-[radial-gradient(ellipse_90%_70%_at_30%_-15%,rgb(var(--brand-primary-rgb)/0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_90%_20%,rgb(var(--brand-accent-rgb)/0.5),transparent_50%)]"
        aria-hidden
      />
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="order-1 max-w-xl lg:order-1 lg:max-w-none">
          <p
            className={cn(
              "mb-5 inline-flex max-w-full flex-wrap items-center gap-x-1.5 gap-y-1 rounded-full",
              "border border-border/60 bg-brand-surface/80 px-3 py-1.5 text-[11px] font-medium leading-snug",
              "text-[var(--green-secondary)] shadow-soft backdrop-blur-sm sm:text-xs"
            )}
          >
            {heroCopy.badge}
          </p>

          <DisplayTitle id="hero-heading" className="text-balance">
            {heroCopy.title}
          </DisplayTitle>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed">
            {heroCopy.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <BrandCtaLink
              href={heroCopy.ctas.primary.href}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroCopy.ctas.primary.label}
            </BrandCtaLink>
            <BrandCtaLink
              href={heroCopy.ctas.secondary.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {heroCopy.ctas.secondary.label}
            </BrandCtaLink>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground/95">
            {heroCopy.microcopy}
          </p>
        </div>

        <div className="order-2 lg:order-2">
          <HeroNetworkVisual
            className="mx-auto w-full max-w-[520px] lg:max-w-none"
            tags={[...heroCopy.visualTags]}
          />
        </div>
      </div>
    </SectionContainer>
  );
}
