"use client";

import React from "react";
import posthog from "posthog-js";
import { FloatingDotsCtaLink } from "@/components/ui/floating-dots-cta";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1926] text-white relative overflow-hidden">
      {/* STATIC GRID (same pattern as hero, no animation) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at 50% 50%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, black, transparent 75%)",
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-500/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6 gsap-reveal">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-lastik tracking-tight text-white">
          Bora pro campo? ⚽
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-normal">
          Crie seu grupo grátis em menos de 2 minutos. Seu time vai agradecer e você vai voltar a jogar sem estresse.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <FloatingDotsCtaLink
            href="https://app.partidinha.com/"
            className="w-full sm:w-auto bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:brightness-110 text-white font-extrabold px-10 py-4 rounded-full text-base shadow-cta-glow transition hover:scale-105 active:scale-95"
            onClick={() =>
              posthog.capture("cta_section_cta_clicked", {
                cta_label: "Criar meu grupo grátis",
                cta_location: "bottom_cta_section",
              })
            }
          >
            Criar meu grupo grátis
          </FloatingDotsCtaLink>
          <a
            href="#planos"
            className="text-sm font-semibold text-slate-300 hover:text-white transition"
          >
            Ver planos e preços →
          </a>
        </div>

        <p className="text-xs text-slate-400 pt-2 font-mono">
          Sem necessidade de cartão de crédito. Teste 100% grátis.
        </p>
      </div>
    </section>
  );
};
