import { cn } from "@/lib/utils";

const DEFAULT_TAGS = ["mente", "regulación", "hábitos", "evidencia"] as const;

const TAG_POSITIONS: Record<string, string> = {
  mente: "left-[8%] top-[22%] sm:left-[10%]",
  regulación: "right-[10%] top-[14%] sm:right-[14%]",
  evidencia: "bottom-[28%] left-[34%] sm:left-[38%]",
  hábitos: "bottom-[10%] right-[8%] sm:right-[10%]",
};

export function HeroNetworkVisual({
  className,
  tags = [...DEFAULT_TAGS],
}: {
  className?: string;
  tags?: string[];
}) {
  return (
    <div
      className={cn("relative mx-auto aspect-[5/4] w-full max-h-[420px] min-h-[280px]", className)}
      aria-hidden
    >
      <div className="absolute inset-4 rounded-[2rem] bg-[rgb(var(--brand-primary-rgb)/0.08)] blur-2xl" />

      <div className="cs-card-preview relative h-full overflow-hidden rounded-[2rem] border-border/50 bg-gradient-to-br from-brand-background via-brand-surface/90 to-brand-muted/40 shadow-[var(--brand-shadow-glow)] backdrop-blur-md sm:rounded-[2.25rem]">
        <div
          className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_25%_20%,rgb(var(--brand-accent-rgb)/0.9),transparent_50%),radial-gradient(circle_at_80%_70%,rgb(var(--brand-primary-rgb)/0.12),transparent_55%)]"
        />

        <ProgressGraphic />

        <ul className="absolute inset-0">
          {tags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "absolute animate-[csFloat_7s_ease-in-out_infinite]",
                TAG_POSITIONS[tag] ?? "left-1/2 top-1/2 -translate-x-1/2"
              )}
              style={{
                animationDelay:
                  tag === "regulación"
                    ? "0.5s"
                    : tag === "hábitos"
                      ? "1s"
                      : tag === "evidencia"
                        ? "1.5s"
                        : "0s",
              }}
            >
              <span className="inline-block rounded-full border border-border/50 bg-brand-surface/95 px-4 py-2 text-xs font-medium capitalize tracking-wide text-foreground shadow-soft ring-1 ring-[rgb(var(--brand-primary-rgb)/0.12)] backdrop-blur-sm sm:text-sm">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProgressGraphic() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 480 400"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-progress" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--green-soft)" stopOpacity="0.4" />
          <stop offset="50%" stopColor="var(--green-primary)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--green-secondary)" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M 48 280 C 120 220, 160 300, 220 240 S 340 200, 420 260"
        fill="none"
        stroke="url(#hero-progress)"
        strokeWidth="3"
        strokeLinecap="round"
        className="opacity-90"
      />
      <path
        d="M 48 280 C 120 220, 160 300, 220 240 S 340 200, 420 260"
        fill="none"
        stroke="var(--green-primary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="6 10"
        opacity="0.35"
      />
      {[
        { cx: 48, cy: 280 },
        { cx: 160, cy: 268 },
        { cx: 220, cy: 240 },
        { cx: 300, cy: 218 },
        { cx: 420, cy: 260 },
      ].map((point, i) => (
        <g key={`${point.cx}-${point.cy}`}>
          <circle
            cx={point.cx}
            cy={point.cy}
            r={10}
            fill="var(--green-primary)"
            opacity={0.1}
          />
          <circle
            cx={point.cx}
            cy={point.cy}
            r={5}
            fill="var(--brand-surface)"
            stroke="var(--green-primary)"
            strokeWidth="2"
            className="motion-safe:animate-[csGlow_5.5s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
