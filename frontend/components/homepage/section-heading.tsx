import { SectionSubtitle, SectionTitle } from "@/components/brand";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  align = "left",
  className,
  titleId,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <SectionTitle id={titleId}>{title}</SectionTitle>
      {description ? (
        <SectionSubtitle
          className={cn("mt-4", align === "center" && "mx-auto max-w-2xl")}
        >
          {description}
        </SectionSubtitle>
      ) : null}
    </div>
  );
}
