import { SectionHeading } from "@/components/homepage/section-heading";
import { SectionSeeMoreLink } from "@/components/homepage/section-see-more-link";
import { cn } from "@/lib/utils";

export function SectionHeaderRow({
  titleId,
  title,
  description,
  seeMoreHref,
  seeMoreLabel = "Ver más",
  align = "left",
  className,
}: {
  titleId?: string;
  title: string;
  description?: string;
  seeMoreHref: string;
  seeMoreLabel?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "sm:flex-col sm:items-center sm:text-center",
        className
      )}
    >
      <SectionHeading
        variant="home"
        titleId={titleId}
        title={title}
        description={description}
        align={align}
        className="mb-0 max-w-2xl"
      />
      <SectionSeeMoreLink
        href={seeMoreHref}
        className={cn(align === "center" && "sm:mx-auto")}
      >
        {seeMoreLabel}
      </SectionSeeMoreLink>
    </div>
  );
}
