"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Logo from "../../app/logo-icon.png";

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-40 pt-4 px-4 sm:px-6 lg:px-8 mb-6">
      <div className="max-w-7xl mx-auto billow-glass-pill-navy px-6 h-16 flex items-center justify-between shadow-cta-glow">
        {/* Logo */}

        <Link href="/" className="flex items-center gap-3 group">
          <Image src={Logo} alt="Partidinha Logo" className="w-10 h-10" />
          <span className="font-bold text-lg text-white tracking-tight flex items-center gap-1.5 font-lastik">
            partidinha
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-sky-200/80 uppercase tracking-wider">
          <a href="#como-funciona" className="hover:text-sky-400 transition">
            Como funciona
          </a>
          <a href="#features" className="hover:text-sky-400 transition">
            Recursos
          </a>
          <a href="#depoimentos" className="hover:text-sky-400 transition">
            Depoimentos
          </a>
          <a href="#planos" className="hover:text-sky-400 transition">
            Planos
          </a>
          <a href="#faq" className="hover:text-sky-400 transition">
            FAQ
          </a>
        </nav>

        {/* CTA Nav */}
        <div className="flex items-center gap-3">
          <a
            href="#bot-simulator"
            className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:opacity-95 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition shadow-cta-glow hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5"
          >
            <span>Criar grupo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
