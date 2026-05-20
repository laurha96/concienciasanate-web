import Image from "next/image";

import { cn } from "@/lib/utils";

export const HERO_HOME_IMAGE = "/images/hero/home1.png";

const HERO_IMAGE_WIDTH = 1920;
const HERO_IMAGE_HEIGHT = 1280;

const HERO_IMAGE_ALT =
  "Ilustración de bienestar mental: mente, regulación emocional y hábitos saludables.";

export function HeroVisual({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "pointer-events-none relative z-0 w-full overflow-visible",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute left-[42%] top-[46%] z-0 h-[min(380px,68vw)] w-[min(480px,82vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dce8cf] opacity-[0.22] blur-3xl sm:opacity-[0.24] lg:left-[54%] lg:h-[min(460px,42vw)] lg:w-[min(580px,48vw)] lg:opacity-[0.26]"
      />
      <div
        aria-hidden
        className="absolute left-[48%] top-[50%] z-0 h-[min(320px,58vw)] w-[min(400px,72vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eef3e5] opacity-[0.18] blur-3xl lg:left-[58%] lg:h-[min(400px,36vw)] lg:w-[min(500px,42vw)] lg:opacity-20"
      />

      <div className="relative z-[1] -translate-y-3 sm:-translate-y-4 lg:translate-y-0 lg:scale-[1.49] lg:origin-[80%_22%] xl:translate-y-0.5 xl:scale-[1.54]">
        <Image
          src={HERO_HOME_IMAGE}
          alt={HERO_IMAGE_ALT}
          width={HERO_IMAGE_WIDTH}
          height={HERO_IMAGE_HEIGHT}
          priority
          fetchPriority="high"
          sizes="(max-width: 1023px) 94vw, 960px"
          className="block h-auto w-full object-contain object-right lg:ml-auto"
        />
      </div>
    </figure>
  );
}
