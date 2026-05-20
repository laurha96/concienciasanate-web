import OrganicBackground from "@/components/homepage/OrganicBackground";
import { HeroSection } from "@/components/homepage/HeroSection";
import { HOME_SECTIONS } from "@/components/homepage/home-sections";

/**
 * Home de Conciencia Sánate — narrativa de conversión en `home-sections.ts`.
 * Header y Footer: `app/layout.tsx`.
 */
export default function HomePage() {
  const sectionsAfterHero = HOME_SECTIONS.filter(({ id }) => id !== "hero");

  return (
    <div className="relative isolate -mt-px min-h-screen text-foreground">
      <OrganicBackground />
      <div className="relative flex flex-col">
        <HeroSection />
        <div className="relative bg-[#f7f6ef]">
          {sectionsAfterHero.map(({ id, Component }) => (
            <Component key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
