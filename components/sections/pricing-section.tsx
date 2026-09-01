import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CheckCircle2 } from "lucide-react";

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
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    title: "Plano Pro",
    price: "R$ 19,90",
    period: "/mês",
    description: "Para o admin que quer automação completa.",
    features: [
      "Grupos & Jogadores Ilimitados",
      "Bot completo com Cobranças Automáticas",
      "Sorteio inteligente de times",
      "Tabelas de artilharia & Estatísticas",
      "Notificações push & Lembretes",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro (7 dias grátis)",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Anual",
    title: "Plano Anual",
    price: "R$ 14,90",
    period: "/mês",
    description: "Economize 25% com o pagamento anual.",
    features: [
      "Tudo do Plano Pro",
      "2 meses grátis no ano",
      "Relatórios avançados em Excel/PDF",
      "Personalização do bot com nome do grupo",
      "Acesso antecipado a novas features",
    ],
    cta: "Assinar Anual",
    variant: "outline" as const,
    popular: false,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-700 ring-1 ring-inset ring-sky-600/20">
            Escolha seu plano
          </span>
          <h2 className="font-lastik text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
            Menos que o valor de um lanche por mês
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            Comece grátis e evolua conforme seu grupo cresce. Sem contratos, cancele quando quiser.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col relative ${
                plan.popular
                  ? "border-sky-500 ring-1 ring-sky-500/20 shadow-lg shadow-sky-500/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 inset-x-0 mx-auto flex h-6 w-fit items-center rounded-full bg-sky-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Recomendado
                </span>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="font-lastik text-xl font-semibold text-slate-900">
                  {plan.title}
                </CardTitle>
                <span className="my-3 block text-3xl sm:text-4xl font-bold text-slate-900">
                  {plan.price}{" "}
                  <span className="text-sm font-normal text-slate-500">
                    {plan.period}
                  </span>
                </span>
                <CardDescription className="text-sm leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex-1">
                <hr className="border-dashed border-slate-200" />

                <ul className="space-y-3 text-sm">
                  {plan.features.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      {plan.popular ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                      ) : (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      )}
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto pt-2">
                <Button
                  asChild
                  variant={plan.variant}
                  className={`w-full h-11 text-sm font-semibold ${
                    plan.popular
                      ? "bg-sky-600 hover:bg-sky-500 text-white shadow-sm hover:shadow-md"
                      : ""
                  }`}
                >
                  <Link href="">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-slate-400">
          Pagamento seguro via Stripe. 7 dias de garantia em todos os planos pagos.
        </p>
      </div>
    </section>
  );
};
