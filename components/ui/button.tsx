import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "glass" | "emerald" | "amber" | "purple";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:opacity-95 text-slate-950 shadow-cta-glow",
    secondary:
      "bg-white border border-slate-300 hover:border-slate-400 text-slate-800 shadow-xs hover:bg-slate-100",
    outline:
      "bg-transparent border border-sky-400/40 text-sky-300 hover:bg-sky-500/10",
    glass:
      "billow-glass-pill-navy hover:opacity-90 text-sky-200 font-semibold",
    emerald:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs",
    amber:
      "bg-amber-600 hover:bg-amber-500 text-white shadow-xs",
    purple:
      "bg-purple-600 hover:bg-purple-500 text-white shadow-xs",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-xs sm:text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
