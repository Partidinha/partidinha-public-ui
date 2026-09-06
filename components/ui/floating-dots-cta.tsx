"use client";

import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ComponentProps,
  type ReactNode,
} from "react";
import Link, { type LinkProps } from "next/link";
import posthog from "posthog-js";

import { cn } from "@/lib/utils";

function FdcPoints() {
  return (
    <span className="fdc-points_wrapper">
      {Array.from({ length: 10 }).map((_, i) => (
        <i key={i} className="fdc-point" />
      ))}
    </span>
  );
}

function FdcArrowIcon() {
  return (
    <svg
      className="fdc-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export interface FloatingDotsCtaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function FloatingDotsCta({
  label = "Sign Up",
  className,
  children,
  ...props
}: FloatingDotsCtaProps) {
  return (
    <button type="button" className={cn("fdc-button", className)} {...props}>
      <FdcPoints />
      <span className="fdc-inner">
        {children ?? label}
        <FdcArrowIcon />
      </span>
    </button>
  );
}

export interface FloatingDotsCtaLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label?: ReactNode;
}

export function FloatingDotsCtaLink({
  label,
  className,
  children,
  onClick,
  ...props
}: FloatingDotsCtaLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    posthog.capture("cta_clicked", {
      cta_label: typeof children === "string" ? children : label,
      cta_href: props.href,
      cta_location: "floating_dots_link",
    });
    onClick?.(e);
  };

  return (
    <a className={cn("fdc-button", className)} onClick={handleClick} {...props}>
      <FdcPoints />
      <span className="fdc-inner">
        {children ?? label}
        <FdcArrowIcon />
      </span>
    </a>
  );
}

export interface FloatingDotsCtaNextLinkProps
  extends Omit<ComponentProps<"a">, "href">,
    LinkProps {
  label?: ReactNode;
}

export function FloatingDotsCtaNextLink({
  label,
  className,
  children,
  onClick,
  ...props
}: FloatingDotsCtaNextLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    posthog.capture("cta_clicked", {
      cta_label: typeof children === "string" ? children : label,
      cta_href: typeof props.href === "string" ? props.href : String(props.href),
      cta_location: "floating_dots_next_link",
    });
    onClick?.(e);
  };

  return (
    <Link className={cn("fdc-button", className)} onClick={handleClick} {...props}>
      <FdcPoints />
      <span className="fdc-inner">
        {children ?? label}
        <FdcArrowIcon />
      </span>
    </Link>
  );
}
