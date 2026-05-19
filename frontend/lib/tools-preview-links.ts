import type { ToolCategoryQueryKey } from "@/components/healthtech/tool-explorer";
import type { ToolsPreviewItem } from "@/components/homepage/tools-preview-data";

const VALID_TOOL_CATEGORIES = new Set<ToolCategoryQueryKey>([
  "Breathing",
  "Journaling",
  "Plans",
  "Guided",
]);

/**
 * Enlace seguro hacia `/herramientas` con filtro de categoría validado.
 */
export function buildToolsPreviewHref(
  item: Pick<ToolsPreviewItem, "href" | "toolCategory">,
): string {
  if (item.href?.startsWith("/")) {
    return item.href;
  }

  if (item.toolCategory && VALID_TOOL_CATEGORIES.has(item.toolCategory)) {
    const params = new URLSearchParams({ categoria: item.toolCategory });
    return `/herramientas?${params.toString()}`;
  }

  return "/herramientas";
}
