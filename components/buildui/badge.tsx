"use client";

import * as React from "react";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define shape variants
const badgeVariants = cva(
  "inline-flex items-center rounded-none justify-center gap-1 whitespace-nowrap text-xs font-medium px-5 transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline: "border text-primary shadow-xs",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      },
      shape: {
        square: "",
        round: "rounded-full",
        triangle: "badge-shape-triangle",
        "ribbon-1": "badge-shape-ribbon-1",
        "ribbon-2": "badge-shape-ribbon-2",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "square",
    },
  }
);

type BadgeProps = React.ComponentProps<typeof ShadcnBadge> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, shape, ...props }: BadgeProps) {
  return (
    <>
      <ShadcnBadge
        {...props}
        className={cn(badgeVariants({ shape, className, variant }))}
        variant={variant}
      />
    </>
  );
}
