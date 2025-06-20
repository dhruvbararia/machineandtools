// src/components/ui/ResponsiveGrid.tsx
import { ReactNode } from "react";

interface ResponsiveGridProps {
  children: ReactNode;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export default function ResponsiveGrid({
  children,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className = "",
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: "gap-4",
    md: "gap-6 lg:gap-8",
    lg: "gap-8 lg:gap-12",
  };

  // Build grid classes dynamically
  const gridClasses = [
    "grid",
    `grid-cols-${cols.mobile || 1}`,
    cols.tablet ? `sm:grid-cols-${cols.tablet}` : "",
    cols.desktop ? `lg:grid-cols-${cols.desktop}` : "",
    gapClasses[gap],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={gridClasses}>{children}</div>;
}
