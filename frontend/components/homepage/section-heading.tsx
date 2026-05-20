import { SectionSubtitle, SectionTitle } from "@/components/brand";
import { brandClasses } from "@/lib/brand/tokens";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  titleId,
  variant = "default",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
  variant?: "default" | "home";
}) {
  const isHome = variant === "home";

  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {isHome ? (
        <h2
          id={titleId}
          className={cn(brandClasses.sectionTitleHome, "text-balance")}
        >
          {title}
        </h2>
      ) : (
        <SectionTitle id={titleId}>{title}</SectionTitle>
      )}
      {description ? (
        isHome ? (
          <p
            className={cn(
              brandClasses.sectionDescHome,
              "mt-2 text-balance",
              align === "center" && "mx-auto max-w-xl"
            )}
          >
            {description}
          </p>
        ) : (
          <SectionSubtitle
            className={cn("mt-4", align === "center" && "mx-auto max-w-2xl")}
          >
            {description}
          </SectionSubtitle>
        )
      ) : null}
    </div>
  );
}
