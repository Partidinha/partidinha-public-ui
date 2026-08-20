import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps {
  variant?: "light" | "focused";
  className?: string;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = "light",
  className,
  children,
}) => {
  const variantStyles = {
    light: "billow-glass-card-light p-8 relative group",
    focused: "focused-grid-card-light p-8 relative group border-2 border-sky-400/50 shadow-md",
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      {children}
    </div>
  );
};
