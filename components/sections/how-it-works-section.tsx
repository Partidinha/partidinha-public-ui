import React from "react";
import { HOW_IT_WORKS } from "@/lib/copy";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Do grupo ao campo em 4 toques
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight">
            Mais fácil que cobrar pênalti sem goleiro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={index}
              className="billow-glass-card-light p-7 relative bg-white gsap-reveal"
            >
              <div className="text-4xl font-extrabold text-sky-600/30 font-mono mb-3">
                {item.step}
              </div>
              <h4 className="font-lastik font-bold text-slate-900 text-xl mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
