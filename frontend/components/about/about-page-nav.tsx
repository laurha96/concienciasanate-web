import { ABOUT_PAGE_SECTIONS } from "@/components/about/about-seo";
import { aboutFocusRingPill, aboutSkipLinkClass } from "@/components/about/about-a11y";
import { aboutEd } from "@/components/about/about-editorial-tokens";
import { aboutVisual } from "@/components/about/about-visual-tokens";
import { cn } from "@/lib/utils";

export function AboutSkipLink() {
  return (
    <a href="#sobre-contenido-principal" className={aboutSkipLinkClass}>
      Saltar al contenido principal
    </a>
  );
}

export function AboutPageNav() {
  return (
    <nav
      aria-label="Secciones de la página Sobre"
      className={cn("about-page-nav-sticky", aboutVisual.nav.bar)}
    >
      <div className={cn(aboutEd.containerWide, "py-3 sm:py-4")}>
        <h2 className="sr-only">Navegación por secciones</h2>
        <ol className="flex list-none flex-wrap justify-center gap-2 p-0 sm:gap-2.5">
          {ABOUT_PAGE_SECTIONS.filter((s) => s.id !== "sobre-hero").map(
            (section) => (
              <li key={section.id} className="list-none">
                <a
                  href={`#${section.id}`}
                  className={cn(
                    aboutEd.eyebrow,
                    aboutFocusRingPill,
                    aboutVisual.nav.pill,
                    "inline-flex px-3 py-1.5 normal-case tracking-[0.14em] text-foreground/72 transition-colors duration-200 hover:text-foreground/88"
                  )}
                >
                  {section.label}
                </a>
              </li>
            )
          )}
        </ol>
      </div>
    </nav>
  );
}
