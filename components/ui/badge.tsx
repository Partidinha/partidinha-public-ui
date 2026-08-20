import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "sky" | "emerald" | "amber" | "purple" | "navy";
  pulse?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "sky",
  pulse = false,
  className,
  children,
}) => {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border shadow-xs";

  const variants = {
    sky: "bg-sky-100/90 border-sky-200 text-sky-700",
    emerald: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
    amber: "bg-amber-500/20 border-amber-500/30 text-amber-300",
    purple: "bg-purple-500/20 border-purple-500/30 text-purple-300",
    navy: "billow-glass-pill-navy text-sky-300 border-sky-400/30",
  };

  const pulseColor = {
    sky: "bg-sky-500",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    navy: "bg-sky-400",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)}>
      {pulse && (
        <span
          className={cn(
            "w-2 h-2 rounded-full inline-block animate-ping",
            pulseColor[variant]
          )}
        />
      )}
      {children}
    </span>
  );
};
