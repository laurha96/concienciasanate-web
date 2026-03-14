import * as React from "react";

import { cn } from "@/lib/utils";

type DashboardCardProps = React.ComponentProps<"div">;

export function DashboardCard({ className, ...props }: DashboardCardProps) {
  return (
    <div
      className={cn("glass-panel p-6 shadow-card", className)}
      {...props}
    />
  );
}
