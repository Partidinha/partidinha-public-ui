"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FloatingDotsCtaLink } from "@/components/ui/floating-dots-cta";
import Logo from "../../app/logo-icon.png";

const AnimatedNavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a href={href} className="group relative inline-block h-4 overflow-hidden">
    <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
      <span className="text-sky-200/80">{children}</span>
      <span className="text-white">{children}</span>
    </span>
  </a>
);

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-40 pt-4 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto billow-glass-pill-navy px-6 h-16 flex items-center justify-between shadow-cta-glow transition-colors duration-300 hover:border-sky-300/40">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3 group">
          <Image src={Logo} alt="Partidinha Logo" className="w-10 h-10" />
          <span
            className="font-bold text-xl text-white font-lastik"
            style={{ letterSpacing: "0.03em" }}
          >
            Partidinha
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
          <AnimatedNavLink href="#como-funciona">Como funciona</AnimatedNavLink>
          <AnimatedNavLink href="#features">Recursos</AnimatedNavLink>
          <AnimatedNavLink href="#depoimentos">Depoimentos</AnimatedNavLink>
          <AnimatedNavLink href="#planos">Planos</AnimatedNavLink>
          <AnimatedNavLink href="#faq">FAQ</AnimatedNavLink>
        </nav>

        {/* CTA Nav */}
        <div className="flex items-center gap-3">
          <FloatingDotsCtaLink
            href="https://app.partidinha.com/"
            className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:brightness-110 text-white font-bold text-xs px-5 py-2.5 rounded-full transition shadow-cta-glow hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5"
          >
            Criar grupo
          </FloatingDotsCtaLink>
        </div>
      </div>
    </header>
  );
};
