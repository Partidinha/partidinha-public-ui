"use client";

import React from "react";
import { FEATURES } from "@/lib/copy";

export interface FeaturesSectionProps {
  onOpenRaffleModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  onOpenRaffleModal,
}) => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Tudo que seu time precisa
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight">
            No vestiário digital, <span className="text-gradient-light">nada fica pra trás</span>
          </h2>
          <p className="text-slate-600 text-base">
            Cada recurso foi pensado para tirar o estresse das costas do admin do grupo e devolver o prazer do futebol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {FEATURES.map((item, index) => {
            if (item.isFocused) {
              return (
                <div
                  key={index}
                  className="focused-grid-card-light p-8 relative group border-2 border-sky-400/50 gsap-stagger-card"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.iconBg} text-white flex items-center justify-center text-2xl mb-5 shadow-xs group-hover:scale-110 transition duration-300 relative z-10`}
                  >
                    {item.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2 relative z-10">
                    <h3 className="font-lastik text-2xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <button
                      onClick={onOpenRaffleModal}
                      className="text-xs bg-sky-600 hover:bg-sky-500 text-white font-bold px-3 py-1 rounded-full transition shadow-xs cursor-pointer"
                    >
                      Testar Sorteio
                    </button>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="billow-glass-card-light p-8 relative group gsap-stagger-card"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.iconBg} text-white flex items-center justify-center text-2xl mb-5 shadow-xs group-hover:scale-110 transition duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="font-lastik text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
