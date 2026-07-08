"use client";

import * as React from "react";
import { ChevronDown, HeartPulse, Stethoscope } from "lucide-react";

import { SecondaryButton } from "@/components/brand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { elynthisAccess } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

const optionIcons = [Stethoscope, HeartPulse] as const;

type ElynthisAccessMenuProps = {
  className?: string;
  /** "inline" = dropdown (desktop); "stacked" = disclosure a ancho completo (móvil) */
  layout?: "inline" | "stacked";
  /** Se ejecuta al elegir una opción (p. ej. cerrar el menú móvil) */
  onNavigate?: () => void;
};

function optionIcon(index: number) {
  return optionIcons[index] ?? Stethoscope;
}

export function ElynthisAccessMenu({
  className,
  layout = "inline",
  onNavigate,
}: ElynthisAccessMenuProps) {
  if (layout === "stacked") {
    return <ElynthisAccessDisclosure className={className} onNavigate={onNavigate} />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SecondaryButton
          size="sm"
          className={cn(
            "group gap-1.5 text-[var(--green-secondary)]",
            className
          )}
          aria-label={`${elynthisAccess.label}: elegir Clinical o Care`}
        >
          {elynthisAccess.label}
          <ChevronDown
            className="size-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </SecondaryButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-64 rounded-2xl border-border/70 p-1.5 shadow-soft"
      >
        <DropdownMenuLabel className="px-2 pb-1 text-xs font-medium text-muted-foreground">
          {elynthisAccess.label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {elynthisAccess.options.map((option, index) => {
          const Icon = optionIcon(index);
          return (
            <DropdownMenuItem
              key={option.href}
              asChild
              className="cursor-pointer rounded-xl px-2 py-2 focus:bg-accent/70"
            >
              <a href={option.href} onClick={onNavigate}>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[var(--green-secondary)]">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {option.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {option.audience}
                  </span>
                </span>
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ElynthisAccessDisclosure({
  className,
  onNavigate,
}: Pick<ElynthisAccessMenuProps, "className" | "onNavigate">) {
  const [open, setOpen] = React.useState(false);
  const panelId = React.useId();

  return (
    <div className={cn("w-full", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${elynthisAccess.label}: mostrar opciones`}
        className={cn(
          "flex w-full items-center justify-between gap-2 rounded-2xl border border-border/80 bg-card px-4 py-2.5 text-sm font-medium text-[var(--green-secondary)] shadow-soft transition-colors",
          "hover:bg-brand-muted/70 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]"
        )}
      >
        {elynthisAccess.label}
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div id={panelId} className="mt-2 flex flex-col gap-1.5">
          {elynthisAccess.options.map((option, index) => {
            const Icon = optionIcon(index);
            return (
              <a
                key={option.href}
                href={option.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors",
                  "hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[rgb(var(--brand-primary-rgb)/0.35)]"
                )}
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[var(--green-secondary)]">
                  <Icon className="size-4" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">
                    {option.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {option.audience}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
