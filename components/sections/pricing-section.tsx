import React from "react";
import { Check, CheckCircle2 } from "lucide-react";

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Escolha seu plano
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight">
            Menos que o valor de um lanche por mês
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Free Plan */}
          <div className="billow-glass-card-light p-9 flex flex-col justify-between bg-white gsap-reveal">
            <div>
              <h3 className="font-lastik font-bold text-2xl text-slate-900 mb-1">
                Plano Free
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Para grupos pequenos testarem sem compromisso.
              </p>

              <div className="text-4xl font-extrabold text-slate-900 mb-6 font-mono">
                R$ 0 <span className="text-sm font-normal text-slate-500 font-sans">/mês</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>1 grupo cadastrado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Até 15 jogadores</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Bot básico (confirmações)</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-3.5 px-6 rounded-full border border-slate-300 font-bold text-sm text-slate-800 hover:bg-slate-100 transition cursor-pointer">
              Começar grátis
            </button>
          </div>

          {/* Pro Plan */}
          <div className="focused-grid-card-light p-9 border-2 border-sky-500 shadow-lg relative flex flex-col justify-between bg-white gsap-reveal">
            <div className="absolute -top-3.5 right-6 bg-sky-600 text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-full tracking-wider shadow-sm z-10">
              RECOMENDADO
            </div>

            <div className="relative z-10">
              <h3 className="font-lastik font-bold text-2xl text-slate-900 mb-1">
                Plano Pro
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Para o capitão que quer automação completa.
              </p>

              <div className="text-4xl font-extrabold text-slate-900 mb-6 font-mono">
                R$ 19,90 <span className="text-sm font-normal text-slate-500 font-sans">/mês</span>
              </div>

              <ul className="space-y-3 text-xs text-slate-700 mb-8">
                <li className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Grupos & Jogadores Ilimitados</span>
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Bot completo com Cobranças Automáticas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Sorteio inteligente de times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Tabelas de artilharia & Estatísticas</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-4 px-6 rounded-full bg-sky-600 hover:bg-sky-500 font-bold text-sm text-white shadow-cta-glow transition active:scale-95 relative z-10 cursor-pointer">
              Assinar Pro (7 dias grátis)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
