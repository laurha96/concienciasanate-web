import type { LegalBlock } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

function Callout({
  tone = "info",
  title,
  text,
}: {
  tone?: "info" | "warning" | "legal";
  title?: string;
  text: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-2xl border px-4 py-3.5 text-sm leading-relaxed sm:px-5 sm:py-4",
        tone === "warning" &&
          "border-amber-500/25 bg-amber-500/[0.06] text-foreground",
        tone === "legal" &&
          "border-primary/25 bg-primary/[0.06] text-foreground",
        tone === "info" &&
          "border-border/70 bg-brand-surface/80 text-foreground"
      )}
    >
      {title ? (
        <p className="font-display text-[13px] font-semibold tracking-tight">
          {title}
        </p>
      ) : null}
      <p className={cn("text-muted-foreground", title && "mt-1.5")}>{text}</p>
    </aside>
  );
}

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "p") {
          return (
            <p
              key={key}
              className="text-[15px] leading-[1.8] text-muted-foreground sm:text-[15.5px]"
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={key}
              className="list-disc space-y-2 pl-5 text-[15px] leading-[1.75] text-muted-foreground marker:text-primary/70"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "ol") {
          return (
            <ol
              key={key}
              className="list-decimal space-y-2 pl-5 text-[15px] leading-[1.75] text-muted-foreground marker:font-medium marker:text-foreground/70"
            >
              {block.items.map((item) => (
                <li key={item.slice(0, 48)}>{item}</li>
              ))}
            </ol>
          );
        }

        if (block.type === "note") {
          return (
            <Callout
              key={key}
              tone="info"
              title={block.title ?? "Nota"}
              text={block.text}
            />
          );
        }

        if (block.type === "callout") {
          return (
            <Callout
              key={key}
              tone={block.tone}
              title={block.title}
              text={block.text}
            />
          );
        }

        return (
          <div
            key={key}
            className="overflow-x-auto rounded-2xl border border-border/60 bg-brand-surface/70"
          >
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-brand-background/80">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      className="px-4 py-3 font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-foreground/80"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={`row-${rowIndex}`}
                    className="border-b border-border/40 last:border-0"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className="px-4 py-3 align-top leading-relaxed text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
