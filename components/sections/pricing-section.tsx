import React from "react";
import { Check, CheckCircle2, Zap } from "lucide-react";
import { FloatingDotsCtaNextLink } from "@/components/ui/floating-dots-cta";

const plans = [
  {
    name: "Free",
    title: "Plano Free",
    price: "R$ 0",
    period: "/mês",
    description: "Para grupos pequenos testarem sem compromisso.",
    features: [
      "1 grupo cadastrado",
      "Até 15 jogadores",
      "Bot básico (confirmações)",
    ],
    cta: "Começar grátis",
    popular: false,
  },
  {
    name: "Pro",
    title: "Plano Pro",
    price: "R$ 29,90",
    period: "/mês",
    description: "Para o admin que quer automação completa.",
    features: [
      "Grupos, Jogadores & Partidas Ilimitadas",
      "Bot completo com Cobranças Automáticas",
      "Sorteio inteligente de times",
      "Tabelas de artilharia & Estatísticas",
      "Notificações push & Lembretes",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    popular: true,
  },
];

function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-sky-500/10 stroke-sky-400/30 mix-blend-overlay"
    >
      <defs>
        <pattern
          id="pricing-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 24V.5H24" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#pricing-grid)" />
    </svg>
  );
}

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 md:py-32 bg-white border-b border-sky-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center rounded-full bg-sky-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 border border-sky-200 shadow-xs">
            Escolha seu plano
          </span>
          <h2 className="font-lastik text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            Menos que o valor de um lanche por mês
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Comece grátis e evolua conforme seu grupo cresce. Sem contratos, cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group border-sky-200/80 border-dashed ${plan.popular ? "md:border-l" : "md:border-r"
                } border-b md:border-b-0`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 z-20 flex h-6 w-fit items-center rounded-full bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Recomendado
                </span>
              )}

              <div className="relative overflow-hidden p-8 md:p-10 h-full flex flex-col justify-between bg-sky-50/20 hover:bg-sky-50/70 transition-colors duration-300">
                {/* Background SVG Grid Overlay & Cyan Rays */}
                <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="from-sky-500/15 via-cyan-400/10 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
                    <GridPattern />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-100/90 text-sky-600 border border-sky-200/80 shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      {plan.popular ? (
                        <Zap className="size-6" strokeWidth={2} aria-hidden />
                      ) : (
                        <CheckCircle2 className="size-6" strokeWidth={2} aria-hidden />
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-lastik pt-2">
                      {plan.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-bold text-slate-900 font-lastik">
                      {plan.price}
                    </span>
                    <span className="text-sm font-normal text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((item, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base">
                        {plan.popular ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                        ) : (
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                        )}
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-8">
                  {plan.popular ? (
                    <FloatingDotsCtaNextLink
                      href="https://app.partidinha.com/"
                      className="inline-flex w-full items-center justify-center h-12 rounded-full bg-sky-600 text-white font-semibold text-sm shadow-sm hover:bg-sky-500 hover:shadow-md transition-all duration-200 active:scale-95"
                    >
                      {plan.cta}
                    </FloatingDotsCtaNextLink>
                  ) : (
                    <FloatingDotsCtaNextLink
                      href="https://app.partidinha.com/"
                      className="inline-flex w-full items-center justify-center h-12 rounded-full border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 active:scale-95"
                    >
                      {plan.cta}
                    </FloatingDotsCtaNextLink>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-400">
          Pagamento seguro via Stripe. 7 dias de garantia em todos os planos pagos.
        </p>
      </div>
    </section>
  );
};
