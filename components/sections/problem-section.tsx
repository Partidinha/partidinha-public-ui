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

                <div className="rounded-2xl border border-red-100 shadow-xs overflow-hidden font-sans">
                  {/* Barra de topo estilo WhatsApp */}
                  <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-sm shrink-0">
                      ⚽
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="text-white text-xs font-bold truncate">La Pelota FC</div>
                      <div className="text-emerald-100/70 text-[10px] truncate">Pedrinho, Neco, Lucas e mais 11</div>
                    </div>
                  </div>

                  {/* Área de conversa com fundo estilo WhatsApp */}
                  <div className="bg-[#ECE5DD] p-3 space-y-1.5">
                    <div className="max-w-[88%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-teal-600 leading-tight">Pedrinho</div>
                        <p className="text-xs text-slate-800 leading-snug">Vou mas só posso chegar 20h30</p>
                        <div className="text-[9px] text-slate-400 text-right mt-0.5">20:14</div>
                      </div>
                    </div>
                    <div className="max-w-[88%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-orange-500 leading-tight">Neco</div>
                        <p className="text-xs text-slate-800 leading-snug">Desculpa cara meu joelho fodeu não vou mais! 😭</p>
                        <div className="text-[9px] text-slate-400 text-right mt-0.5">20:17</div>
                      </div>
                    </div>
                    <div className="max-w-[88%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-violet-600 leading-tight">Lucas</div>
                        <p className="text-xs text-slate-800 leading-snug">Galera quem pagou o Pix da quadra?? Ninguém mandou comprovante no pv 😤</p>
                        <div className="text-[9px] text-slate-400 text-right mt-0.5">20:23</div>
                      </div>
                    </div>
                    <div className="flex justify-end max-w-[88%] ml-auto">
                      <div className="relative bg-[#DCF8C6] rounded-lg rounded-tr-none px-2.5 py-1.5 shadow-xs">
                        <p className="text-xs text-slate-800 leading-snug">Gente CONFIRMA logo pfvr 🙏</p>
                        <div className="text-[9px] text-slate-500/80 text-right mt-0.5 flex items-center justify-end gap-0.5">
                          20:31
                          <svg viewBox="0 0 16 11" className="w-3.5 h-3.5 fill-sky-500 inline-block">
                            <path d="M11.071.653a.457.457 0 0 0-.304-.102.483.483 0 0 0-.371.166l-6.03 7.276-2.612-2.16a.483.483 0 0 0-.671.061l-.702.845a.463.463 0 0 0 .062.65l3.485 2.883c.183.15.44.13.6-.033l6.696-8.088a.457.457 0 0 0-.06-.65l-.093-.077zM15.05.653a.457.457 0 0 0-.304-.102.483.483 0 0 0-.371.166l-6.03 7.276-.694-.574a.234.234 0 0 0-.328.03l-.552.665a.226.226 0 0 0 .03.318l1.443 1.194c.183.15.44.13.6-.033l6.696-8.088a.457.457 0 0 0-.06-.65l-.093-.077z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Mensagens perdidas no meio de memes e áudios longos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Você vira o &ldquo;chato do privado&rdquo; cobrando din-din de marmanjo</span>
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

                <div className="rounded-2xl border border-sky-100 shadow-xs overflow-hidden font-sans">
                  {/* Barra de topo estilo WhatsApp */}
                  <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-sm shrink-0">
                      ⚽
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="text-white text-xs font-bold truncate">La Pelota FC</div>
                      <div className="text-emerald-100/70 text-[10px] truncate">Bot do Partidinha está online</div>
                    </div>
                  </div>

                  {/* Área de conversa com fundo estilo WhatsApp */}
                  <div className="bg-[#ECE5DD] p-3 space-y-1.5">
                    <div className="max-w-[94%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-2 shadow-xs">
                        <div className="text-[11px] font-bold text-sky-600 leading-tight">
                          🤖 Bot do Partidinha
                        </div>
                        <div className="text-[11px] text-slate-800 leading-snug mt-1">
                          <p className="font-bold">⚽️ La Pelota FC (Ter, 01/09 20:00)</p>
                          <p className="text-slate-500">📍 Flamengo da 212 Sul</p>
                          <p className="font-bold text-slate-700 mt-1.5">📌 LISTA DO GRUPO</p>
                          <ol className="text-slate-700 mt-0.5">
                            <li>1. Alexandre</li>
                            <li>2. Rafael Amaral 🏆</li>
                            <li>3. Venâncio 🏆</li>
                          </ol>
                          <p className="text-slate-400 italic mt-0.5">+ 14 confirmados...</p>
                        </div>
                        <div className="text-[9px] text-slate-400 text-right mt-1">20:04</div>
                      </div>
                    </div>
                    <div className="max-w-[88%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-1.5 shadow-xs">
                        <div className="text-[11px] font-bold text-teal-600 leading-tight">Kennedy</div>
                        <p className="text-xs text-slate-800 leading-snug">@partidinha entrar</p>
                        <div className="text-[9px] text-slate-400 text-right mt-0.5">20:12</div>
                      </div>
                    </div>
                    <div className="max-w-[94%]">
                      <div className="relative bg-white rounded-lg rounded-tl-none px-2.5 py-2 shadow-xs">
                        <div className="text-[11px] font-bold text-sky-600 leading-tight">
                          🤖 Bot do Partidinha
                        </div>
                        <div className="text-[11px] text-slate-800 leading-snug mt-1">
                          <p>✅ Kennedy entrou na lista!</p>
                          <p className="font-bold text-slate-700 mt-1">
                            18. Kennedy{" "}
                            <span className="bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full align-middle">
                              NOVO
                            </span>
                          </p>
                          <p className="text-slate-500 mt-1">18/20 confirmados</p>
                        </div>
                        <div className="text-[9px] text-slate-400 text-right mt-1">20:12</div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      Confirmação via comando simples (
                      <code className="bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded font-mono font-bold text-xs">
                        @partidinha entrar
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
