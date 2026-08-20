import React from "react";
import { TESTIMONIALS } from "@/lib/copy";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Times que pararam de sofrer
          </span>
          <h2 className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight">
            De bagunça para organização. Em uma semana.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="billow-glass-card-light p-8 space-y-4 flex flex-col justify-between gsap-reveal"
            >
              <p className="text-sm text-slate-700 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div
                  className={`w-10 h-10 rounded-full ${t.gradient} text-white font-bold flex items-center justify-center text-sm shadow-xs`}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm font-lastik">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
