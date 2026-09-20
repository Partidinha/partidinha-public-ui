"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";
import { FloatingDotsCtaLink } from "@/components/ui/floating-dots-cta";
import { BOT_START_PATH } from "@/lib/copy";
import Logo from "../../app/logo-icon.png";

const AnimatedNavLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    className="group relative inline-block h-4 overflow-hidden"
    onClick={() =>
      posthog.capture("navbar_link_clicked", {
        link_label: label,
        link_href: href,
      })
    }
  >
    <span className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
      <span className="text-sky-200/80">{children}</span>
      <span className="text-white">{children}</span>
    </span>
  </a>
);

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-40 pt-4 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto billow-glass-pill-navy px-4 sm:px-6 h-16 flex items-center justify-between gap-3 shadow-cta-glow transition-colors duration-300 hover:border-sky-300/40">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink-0">
          <Image src={Logo} alt="Partidinha Logo" className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
          <span
            className="hidden min-[400px]:inline font-bold text-lg sm:text-xl text-white font-lastik whitespace-nowrap"
            style={{ letterSpacing: "0.03em" }}
          >
            Partidinha
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
          <AnimatedNavLink href="#como-funciona" label="Como funciona">
            Como funciona
          </AnimatedNavLink>
          <AnimatedNavLink href="#features" label="Recursos">
            Recursos
          </AnimatedNavLink>
          <AnimatedNavLink href="#depoimentos" label="Depoimentos">
            Depoimentos
          </AnimatedNavLink>
          <AnimatedNavLink href="#planos" label="Planos">
            Planos
          </AnimatedNavLink>
          <AnimatedNavLink href="#faq" label="FAQ">
            FAQ
          </AnimatedNavLink>
        </nav>

        {/* CTA Nav */}
        <div className="flex items-center gap-3 shrink-0">
          <FloatingDotsCtaLink
            href={BOT_START_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:brightness-110 text-white font-bold text-xs px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition shadow-cta-glow hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5 whitespace-nowrap"
            onClick={() =>
              posthog.capture("navbar_cta_clicked", {
                cta_label: "Acessar o bot",
                cta_href: BOT_START_PATH,
                cta_location: "navbar",
                destination: "whatsapp",
              })
            }
          >
            Acessar o bot
          </FloatingDotsCtaLink>
        </div>
      </div>
    </header>
  );
};
