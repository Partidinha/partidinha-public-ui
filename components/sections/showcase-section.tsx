"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ShowcaseTab = "dashboard" | "partida" | "sorteio" | "tabela";

export const ShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("dashboard");

  return (
    <section className="py-16 sm:py-24 bg-[#0B1926] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3 gsap-reveal">
          <span className="bg-sky-500/20 text-sky-300 border border-sky-400/30 px-4 py-1 text-xs font-bold uppercase tracking-wider inline-block rounded-full">
            Veja por dentro
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik tracking-tight text-white">
            O aplicativo que todo admin de grupo sempre quis
          </h2>
        </div>

        {/* Tabs switcher */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 gsap-reveal">
          <div className="bg-slate-900/80 p-1.5 rounded-full inline-flex gap-2 border border-sky-400/20">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer",
                activeTab === "dashboard"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              📊 Dashboard do Admin
            </button>
            <button
              onClick={() => setActiveTab("partida")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer",
                activeTab === "partida"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              📅 Criar Partida
            </button>
            <button
              onClick={() => setActiveTab("sorteio")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer",
                activeTab === "sorteio"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              🔀 Sorteio de Times
            </button>
            <button
              onClick={() => setActiveTab("tabela")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer",
                activeTab === "tabela"
                  ? "bg-sky-600 text-white shadow-xs"
                  : "text-slate-300 hover:text-white"
              )}
            >
              🏆 Artilharia & Stats
            </button>
          </div>
        </div>

        {/* Tab content frame */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#1E4A6B]/40 to-[#0B1926]/90 p-6 sm:p-9 text-white shadow-2xl relative rounded-[28px] border border-sky-400/30 backdrop-blur-2xl gsap-reveal">
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-sky-900/40 pb-4">
                <div>
                  <h4 className="font-lastik font-bold text-xl text-white">
                    Próxima Pelada #42
                  </h4>
                  <p className="text-xs text-slate-300">
                    Quinta-feira, 20h • Arena Soccer Club
                  </p>
                </div>
                <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold border border-emerald-500/30">
                  14/14 CONFIRMADOS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-400/20">
                  <span className="text-slate-300 text-xs">Arrecadação Pix</span>
                  <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                    R$ 350,00
                  </div>
                  <span className="text-[10px] text-emerald-400/80">
                    14 de 14 pagaram
                  </span>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-400/20">
                  <span className="text-slate-300 text-xs">Lista de Espera</span>
                  <div className="text-xl font-bold text-amber-400 font-mono mt-1">
                    3 Jogadores
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Prontos se alguém furar
                  </span>
                </div>
                <div className="bg-slate-900/80 p-4 rounded-xl border border-sky-400/20">
                  <span className="text-slate-300 text-xs">Status do Bot</span>
                  <div className="text-xl font-bold text-sky-400 mt-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ativo no Whats
                  </div>
                  <span className="text-[10px] text-slate-400">
                    Sincronização 100%
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "partida" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h4 className="font-lastik font-bold text-xl text-white mb-2">
                Agendar Nova Partida
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-sky-400/20">
                  <span className="text-slate-400 block mb-1">Local</span>
                  <span className="font-bold text-white">Arena Society Central</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-sky-400/20">
                  <span className="text-slate-400 block mb-1">Data & Horário</span>
                  <span className="font-bold text-white">Próxima Terça • 21:00</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sorteio" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h4 className="font-lastik font-bold text-xl text-white">
                Times Sorteados (Equilíbrio 5.0)
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-sky-500/30">
                  <div className="font-bold text-sky-400 mb-2">
                    🔵 TIME AZUL (Média 8.4)
                  </div>
                  <ul className="space-y-1 text-slate-200">
                    <li>• Carlos (Goleiro)</li>
                    <li>• Renan (Zagueiro)</li>
                    <li>• Lucas (Meia)</li>
                    <li>• Matheus (Atacante)</li>
                  </ul>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-cyan-500/30">
                  <div className="font-bold text-cyan-400 mb-2">
                    🌐 TIME CIANO (Média 8.3)
                  </div>
                  <ul className="space-y-1 text-slate-200">
                    <li>• André (Goleiro)</li>
                    <li>• Rafael (Zagueiro)</li>
                    <li>• Felipe (Meia)</li>
                    <li>• Gabriel (Atacante)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tabela" && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <h4 className="font-lastik font-bold text-xl text-white">
                🏆 Artilharia da Temporada 2026
              </h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="bg-slate-900/80 p-2.5 rounded-lg flex items-center justify-between border border-sky-400/20">
                  <span className="font-bold text-amber-400">
                    1º Matheus (Pelada das Quintas)
                  </span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-bold">
                    34 Gols
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
