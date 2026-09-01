import React from "react";
import { TESTIMONIALS } from "@/lib/copy";
import { Quote } from "lucide-react";

function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-sky-500/10 stroke-sky-400/30 mix-blend-overlay"
    >
      <defs>
        <pattern
          id="testimonials-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 24V.5H24" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#testimonials-grid)" />
    </svg>
  );
}

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 border border-sky-200 shadow-xs">
            Times que pararam de sofrer
          </span>
          <h2 className="font-lastik text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            De bagunça para organização. Em uma semana.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`relative group border-sky-200/80 border-dashed ${
                i === 0 ? "md:border-r" : i === 1 ? "md:border-r" : ""
              } border-b md:border-b-0`}
            >
              <div className="relative overflow-hidden p-8 md:p-10 h-full flex flex-col justify-between bg-sky-50/20 hover:bg-sky-50/70 transition-colors duration-300">
                {/* Background SVG Grid Overlay & Cyan Rays */}
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="from-sky-500/15 via-cyan-400/10 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                    <GridPattern />
                  </div>
                </div>

                {/* Blue blur glow — bottom right corner */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-sky-400/25 blur-[48px]" />
                <div className="pointer-events-none absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cyan-300/20 blur-[32px]" />

                {/* Quote icon */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-100/90 text-sky-600 border border-sky-200/80 shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                    <Quote className="size-5" strokeWidth={2} aria-hidden />
                  </div>
                </div>

                {/* Quote text */}
                <p className="relative z-10 text-sm sm:text-base text-slate-700 leading-relaxed italic flex-1">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="relative z-10 flex items-center gap-3 pt-6 mt-6 border-t border-sky-200/60">
                  <div
                    className={`w-10 h-10 rounded-full ${t.gradient} text-white font-bold flex items-center justify-center text-sm shadow-xs shrink-0`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
