"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowDown } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
//import { WhatsAppSimulator } from "@/components/widgets/whatsapp-simulator";
import { HEADLINES } from "@/lib/copy";
import heroimg from "@/app/hero.png";
import rankBlock from "@/app/rank-block.webp";
import checkinBlock from "@/app/checkin-block.webp";
import teamBlock from "@/app/team-block.webp";
import paymentsBlock from "@/app/payments-block.webp";
import NoiseDarkBlueGradientWithSquares from "@/components/ui/noise-dark-blue-gradient-with-squares";

export interface HeroSectionProps {
  selectedHeadlineKey: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ selectedHeadlineKey }) => {
  const currentHeadline =
    HEADLINES.find((h) => h.key === selectedHeadlineKey) || HEADLINES[0];

  return (
    <section className="relative pt-4 pb-12 lg:pt-6 lg:pb-16 overflow-hidden bg-[#0B1926] text-white border-b border-sky-950">
      {/* DYNAMIC NOISE & SQUARES BACKGROUND */}
      <NoiseDarkBlueGradientWithSquares className="absolute inset-0 z-0 bg-transparent" />

      {/* HERO CONIC LIGHT BEAM */}
      <div id="hero-light-beam" className="hero-light-ray-navy relative z-10 pointer-events-none" />

      {/* FLOATING GLASS PILL NAVBAR */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left gsap-hero-text pb-16 lg:pb-28 pt-20 lg:pt-24">
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
              Organize sua pelada sem sair do WhatsApp. Confirmações automáticas, cobrança dos veacos do grupo, sorteio de times e estatísticas: tudo gerido por um bot inteligente no seu grupo.
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
          </div>

          {/* Right Column: Hero Image Mockup */}
          <div className="lg:col-span-5 relative gsap-hero-card min-h-[450px] sm:min-h-[580px] lg:min-h-[680px] xl:min-h-[740px]">
            {/* Bottom-Up Blue Light Glow (BEHIND IMAGE - Extra Wide) */}
            <div className="absolute -bottom-10 -left-[255px] sm:-left-[330px] lg:-left-[395px] xl:-left-[415px] w-[770px] sm:w-[980px] lg:w-[1280px] xl:w-[1380px] max-w-none h-64 sm:h-80 bg-gradient-to-t from-sky-400/50 via-cyan-400/20 to-transparent blur-3xl z-10 pointer-events-none" />

            <Image
              src={heroimg}
              alt="Partidinha no WhatsApp"
              sizes="(min-width: 1280px) 1160px, (min-width: 1024px) 1080px, (min-width: 640px) 880px, 650px"
              className="absolute -bottom-14 lg:-bottom-[104px] -left-[210px] sm:-left-[270px] lg:-left-[305px] xl:-left-[315px] w-[650px] sm:w-[880px] lg:w-[1080px] xl:w-[1160px] max-w-none h-auto object-contain drop-shadow-2xl z-30 pointer-events-none"
              priority
            />

            {/* Bottom-Up Blue Light Glow (IN FRONT OF IMAGE - Extra Wide) */}
            <div className="absolute -bottom-10 -left-[255px] sm:-left-[330px] lg:-left-[395px] xl:-left-[415px] w-[770px] sm:w-[980px] lg:w-[1280px] xl:w-[1380px] max-w-none h-44 sm:h-56 bg-gradient-to-t from-sky-400/40 via-cyan-400/15 to-transparent blur-2xl z-40 pointer-events-none mix-blend-screen" />

            {/* Floating app UI element images. Rotation echoes the phone mockup's own perspective tilt */}
            <div
              className="hero-float-item absolute bottom-[5%] right-[-10%] lg:right-[-8%] z-50"
              style={{ animationDelay: "0s", animationDuration: "6s", "--float-rotate": "7deg" } as React.CSSProperties}
            >
              <div className="hero-float-glass-frame">
                <Image src={rankBlock} alt="" className="w-[100px] sm:w-[229px] h-auto" />
              </div>
            </div>
            <div
              className="hero-float-item absolute bottom-[28%] left-[80%] w-max z-50"
              style={{ animationDelay: "0.6s", animationDuration: "5.5s", "--float-rotate": "7deg" } as React.CSSProperties}
            >
              <div className="hero-float-glass-frame">
                <Image src={checkinBlock} alt="" className="w-[100px] sm:w-[231px] h-auto" />
              </div>
            </div>
            <div
              className="hero-float-item absolute top-[24%] right-[-25%] sm:right-[-23%] z-50"
              style={{ animationDelay: "1.8s", animationDuration: "6.5s", "--float-rotate": "7deg" } as React.CSSProperties}
            >
              <div className="hero-float-glass-frame">
                <Image src={teamBlock} alt="" className="w-[95px] sm:w-[228px] h-auto" />
              </div>
            </div>
            <div
              className="hero-float-item absolute top-[14%] -left-[6%] z-50"
              style={{ animationDelay: "0.9s", animationDuration: "5s", "--float-rotate": "7deg", "--float-rotate-y": "-9deg", "--float-rotate-x": "2deg" } as React.CSSProperties}
            >
              <div className="hero-float-glass-frame">
                <Image src={paymentsBlock} alt="" className="w-[95px] sm:w-[226px] h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
