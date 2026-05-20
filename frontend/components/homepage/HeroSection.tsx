import { BrandCtaLink } from "@/components/brand";
import { heroCopy } from "@/components/homepage/data";
import { HeroVisual } from "@/components/homepage/HeroVisual";
import { brandClasses } from "@/lib/brand/tokens";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className={cn(
        "relative -mt-[88px] overflow-visible bg-transparent",
        "pb-4 pt-[120px] sm:pb-5 lg:pb-6"
      )}
    >
      <HeroVisual
        className={cn(
          "z-0 w-full max-w-[800px] sm:max-w-[840px]",
          "mx-auto mt-8 lg:pointer-events-none lg:absolute lg:right-0 lg:top-[-3.25rem] lg:z-0 lg:mx-0 lg:mt-0",
          "lg:w-[min(66vw,960px)] lg:max-w-[960px] lg:-translate-y-9 xl:top-[-4rem] xl:-translate-y-11"
        )}
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 md:px-7 lg:px-8">
        <div className="relative flex flex-col gap-8 lg:min-h-[min(420px,58vh)]">
          <div className="relative z-20 flex min-w-0 flex-col justify-center lg:max-w-[580px] lg:py-1">
            <p className={cn(brandClasses.heroBadge, "mb-4 sm:mb-[1.125rem]")}>
              {heroCopy.badge}
            </p>

            <h1
              id="hero-heading"
              className={cn(
                brandClasses.displayTitleHero,
                "max-w-[32rem] text-balance lg:max-w-[520px]"
              )}
            >
              {heroCopy.title}
            </h1>

            <p
              className={cn(
                brandClasses.heroSubtitle,
                "mt-3.5 max-w-[28rem] sm:mt-4 lg:max-w-[440px]"
              )}
            >
              {heroCopy.subtitle}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center">
              <BrandCtaLink
                href={heroCopy.ctas.primary.href}
                variant="primary"
                size="default"
                className="w-full sm:w-auto"
              >
                {heroCopy.ctas.primary.label}
              </BrandCtaLink>
              <BrandCtaLink
                href={heroCopy.ctas.secondary.href}
                variant="secondary"
                size="default"
                className="w-full sm:w-auto"
              >
                {heroCopy.ctas.secondary.label}
              </BrandCtaLink>
            </div>

            <p
              className={cn(
                brandClasses.heroMicrocopy,
                "mt-3.5 max-w-[28rem] sm:mt-4 lg:max-w-[460px]"
              )}
            >
              {heroCopy.microcopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
