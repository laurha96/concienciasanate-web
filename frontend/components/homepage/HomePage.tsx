import OrganicBackground from "@/components/homepage/OrganicBackground";
import { HOME_SECTIONS } from "@/components/homepage/home-sections";

/**
 * Home de Conciencia Sánate — narrativa completa en `home-sections.ts`.
 * Header y Footer: `app/layout.tsx`.
 */
export default function HomePage() {
  return (
    <div className="relative isolate -mt-px min-h-screen overflow-x-hidden bg-background text-foreground">
      <OrganicBackground />
      <div className="relative flex flex-col">
        {HOME_SECTIONS.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </div>
  );
}
