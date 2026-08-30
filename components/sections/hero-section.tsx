"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
//import { WhatsAppSimulator } from "@/components/widgets/whatsapp-simulator";
import { HEADLINES } from "@/lib/copy";
import heroimg from "../../public/hero-phone.png";

export interface HeroSectionProps {
  selectedHeadlineKey: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ selectedHeadlineKey }) => {
  const currentHeadline =
    HEADLINES.find((h) => h.key === selectedHeadlineKey) || HEADLINES[0];

  return (
    <section className="relative pt-6 pb-20 lg:pt-8 lg:pb-32 overflow-hidden bg-[#0B1926] text-white bg-grid-pattern-dark border-b border-sky-950">
      {/* HERO CONIC LIGHT BEAM */}
      <div id="hero-light-beam" className="hero-light-ray-navy" />

      {/* FLOATING GLASS PILL NAVBAR */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left gsap-hero-text">
            <div className="billow-glass-pill-navy inline-flex items-center gap-2 px-4 py-1.5 text-sky-300 text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
              <span>{"  "}O Bot do Partidinha no seu WhatsApp</span>
            </div>

            <h1
              id="hero-headline"
              className="headline-title text-4xl sm:text-6xl lg:text-7xl font-lastik text-white tracking-tight leading-[1.05]"
              dangerouslySetInnerHTML={{ __html: currentHeadline.titleHtml }}
            />

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Organize sua pelada sem sair do WhatsApp. Confirmações automáticas, cobrança dos veacos do grupo, sorteio de times e estatísticas — tudo gerido por um bot inteligente no seu grupo.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#bot-simulator"
                className="w-full sm:w-auto bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:opacity-95 text-slate-950 font-extrabold px-9 py-4 rounded-full shadow-cta-glow transition hover:-translate-y-0.5 active:scale-95 text-center flex items-center justify-center gap-2 text-base"
              >
                <span>Criar meu grupo grátis</span>
                <Sparkles className="w-5 h-5" />
              </a>
              <a
                href="#como-funciona"
                className="w-full sm:w-auto billow-glass-pill-navy hover:opacity-90 font-semibold px-7 py-4 rounded-full transition text-center flex items-center justify-center gap-2 text-base"
              >
                <span>Ver como funciona</span>
                <ArrowDown className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-sky-900/40 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-[#0B1926]">
                    FC
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#1E4A6B] text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-[#0B1926]">
                    TB
                  </div>
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-[#0B1926]">
                    CR
                  </div>
                </div>
                <span>
                  <strong className="text-white font-bold">1.200+</strong> grupos ativos
                </span>
              </div>
              <div className="hidden sm:inline opacity-30">•</div>
              <div>
                <strong className="text-white font-bold">45.000+</strong> peladeiros
              </div>
              <div className="hidden sm:inline opacity-30">•</div>
              <div className="flex items-center gap-1 text-amber-400">
                <span>★ 4.8</span>
                <span className="text-slate-300 font-normal">na App Store</span>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Simulator */}
          <div className="lg:col-span-5 flex justify-center relative gsap-hero-card">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/40 via-cyan-400/30 to-sky-600/30 rounded-[50px] blur-3xl -z-10 scale-110" />
            {/* <WhatsAppSimulator /> */}
            <Image height={600} src={heroimg} alt="Partidinha no WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
};
