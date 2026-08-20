import React from "react";

export const CtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1926] text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-sky-500/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6 gsap-reveal">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-lastik tracking-tight text-white">
          Bora pro campo? ⚽
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-normal">
          Crie seu grupo grátis em menos de 2 minutos. Seu time vai agradecer e você vai voltar a jogar sem estresse.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#bot-simulator"
            className="w-full sm:w-auto bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 hover:opacity-95 text-slate-950 font-extrabold px-10 py-4 rounded-full text-base shadow-cta-glow transition hover:scale-105 active:scale-95"
          >
            Criar meu grupo grátis
          </a>
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
