import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

function RedGridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-red-500/10 stroke-red-400/30 mix-blend-overlay"
    >
      <defs>
        <pattern
          id="red-problem-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 24V.5H24" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#red-problem-grid)" />
    </svg>
  );
}

function BlueGridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-sky-500/10 stroke-sky-400/30 mix-blend-overlay"
    >
      <defs>
        <pattern
          id="blue-solution-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 24V.5H24" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#blue-solution-grid)" />
    </svg>
  );
}

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center rounded-full bg-red-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-red-700 border border-red-200 shadow-xs">
            Você conhece essa cena?
          </span>
          <h2 className="font-lastik text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            O grupo do Whats virou bagunça.<br />E você é o único que se estressa.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Todo sábado é a mesma novela. Você cria a partida e começa o caos de mensagens perdidas, furos de última hora e cobranças chatinhas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-dashed border-slate-300/80 rounded-3xl overflow-hidden shadow-xs bg-slate-50/10">
          {/* Card: Caos (Vermelho) */}
          <div className="relative group border-red-200/80 border-dashed md:border-r border-b md:border-b-0 gsap-reveal">
            <div className="relative overflow-hidden p-6 md:p-8 h-full flex flex-col justify-between bg-red-50/20 hover:bg-red-50/70 transition-colors duration-300">
              {/* Background SVG Grid Overlay & Red Rays */}
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-red-500/15 via-rose-400/10 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                  <RedGridPattern />
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pt-2">
                  <h3 className="font-lastik font-bold text-2xl text-red-600">
                    O grupo sem Partidinha
                  </h3>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    ❌ O Caos
                  </span>
                </div>

                <div className="bg-white/80 p-4 rounded-2xl border border-red-100 space-y-2.5 font-sans text-xs shadow-xs">
                  <div className="bg-white p-2.5 rounded-lg border border-red-100 shadow-xs text-slate-800">
                    <span className="font-bold text-red-500">Pedrinho:</span> "Vou mas só posso chegar 20h30"
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-red-100 shadow-xs text-slate-800">
                    <span className="font-bold text-red-500">Neco:</span> "Desculpa cara meu joelho fodeu não vou mais!"
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-red-100 shadow-xs text-slate-800">
                    <span className="font-bold text-red-500">Lucas:</span> "Galera quem pagou o Pix do quadra?? Ninguém mandou comprovante no pv"
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Mensagens perdidas no meio de memes e áudios longos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Você vira o "chato do privado" cobrando din-din de marmanjo</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Sorteio no papel no dia do jogo perdendo tempo de quadra</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-red-200/60 text-xs font-semibold text-red-600 italic">
                Resultado: Você passa a semana estressado e não aproveita o jogo.
              </div>
            </div>
          </div>

          {/* Card: Solução (Azul) */}
          <div className="relative group border-sky-200/80 border-dashed gsap-reveal">
            <div className="relative overflow-hidden p-6 md:p-8 h-full flex flex-col justify-between bg-sky-50/20 hover:bg-sky-50/70 transition-colors duration-300">
              {/* Background SVG Grid Overlay & Cyan Rays */}
              <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="from-sky-500/15 via-cyan-400/10 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                  <BlueGridPattern />
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between pt-2">
                  <h3 className="font-lastik font-bold text-2xl text-sky-600">
                    O admin do grupo que nunca esquece
                  </h3>
                  <span className="bg-sky-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    ✨ Com Partidinha
                  </span>
                </div>

                <div className="bg-white/90 p-4 rounded-2xl border border-sky-200 space-y-2 font-sans text-xs shadow-xs">
                  <div className="bg-sky-50 p-3 rounded-xl border border-sky-200 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">🤖</span>
                      <div>
                        <div className="font-bold text-sky-700">Bot do Partidinha</div>
                        <div className="text-[11px] text-slate-600">14/14 Confirmados • Lista Fechada</div>
                      </div>
                    </div>
                    <span className="bg-emerald-500 text-white px-2.5 py-0.5 rounded font-bold text-[10px] shadow-xs">
                      TUDO PRONTO
                    </span>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-sky-100 text-slate-800 flex items-center justify-between text-[11px]">
                    <span>💰 Cobrança Automática Pix</span>
                    <span className="text-emerald-600 font-bold">100% Pago</span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      Confirmação via comando simples (
                      <code className="bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded font-mono font-bold text-xs">
                        !confirmar
                      </code>
                      )
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Cobrança automática dos veacos do grupo sem constrangimento</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Sorteio equilibrado em 1 clique no app com stats históricas</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-sky-200/60 text-xs font-bold text-slate-900 flex items-center justify-between">
                <span>Sua pelada vira um campeonato profissional!</span>
                <span className="text-sky-600 font-extrabold flex items-center gap-1">
                  Bora pro campo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
