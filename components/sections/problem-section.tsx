import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-100 border-b border-slate-200/60 relative bg-grid-pattern-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Você conhece essa cena?
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight">
            O grupo do Whats virou bagunça.<br />E você é o único que se estressa.
          </h2>
          <p className="text-slate-600 text-base">
            Todo sábado é a mesma novela. Você cria a partida e começa o caos de mensagens perdidas, furos de última hora e cobranças chatinhas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card: Caos */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-red-200 shadow-sm relative overflow-hidden flex flex-col justify-between gsap-reveal">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-[11px] font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider shadow-xs">
              ❌ Como é hoje (O Caos)
            </div>

            <div className="space-y-4">
              <h3 className="font-lastik font-bold text-2xl text-red-600 pt-2">
                O grupo sem Partidinha
              </h3>

              <div className="bg-red-50/70 p-4 rounded-2xl border border-red-100 space-y-2.5 font-sans text-xs">
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

            <div className="mt-6 pt-4 border-t border-red-100 text-xs font-semibold text-red-600 italic">
              Resultado: Você passa a semana estressado e não aproveita o jogo.
            </div>
          </div>

          {/* Card: Solução */}
          <div className="focused-grid-card-light p-7 sm:p-9 border-2 border-sky-400/60 shadow-md relative overflow-hidden flex flex-col justify-between gsap-reveal">
            <div className="absolute top-0 right-0 bg-sky-600 text-white text-[11px] font-bold px-4 py-1 rounded-bl-2xl uppercase tracking-wider shadow-xs z-10">
              ✨ Com Partidinha (Vestiário Digital)
            </div>

            <div className="space-y-4 relative z-10">
              <h3 className="font-lastik font-bold text-2xl text-sky-600 pt-2">
                O admin do grupo que nunca esquece
              </h3>

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

            <div className="mt-6 pt-4 border-t border-sky-200 text-xs font-bold text-slate-900 flex items-center justify-between relative z-10">
              <span>Sua pelada vira um campeonato profissional!</span>
              <span className="text-sky-600 font-extrabold flex items-center gap-1">
                Bora pro campo <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
