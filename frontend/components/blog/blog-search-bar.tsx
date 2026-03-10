import * as React from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type BlogSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export function BlogSearchBar({
  value,
  onChange,
  placeholder,
  className,
}: BlogSearchBarProps) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor="blog-search" className="sr-only">
        Buscar artículos
      </label>
      <Input
        id="blog-search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-2xl bg-background px-4"
        inputMode="search"
        autoComplete="off"
      />
    </div>
  );
}
