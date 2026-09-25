"use client";

import React from "react";
import type { ImageProps } from "next/image";
import { Bot, CheckCircle2, Banknote, Shuffle, BarChart3, Clock } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FEATURES, FEATURES_HEADER } from "@/lib/copy";
import { FeatureCard, FeatureType } from "@/components/ui/grid-feature-cards";

import Times from "../../app/times.webp";
import Stats from "../../app/match.webp";
import Ranking from "../../app/ranking.webp";
import BotWhatsapp from "../../app/bot-1.webp";
import CheckIn from "../../app/checkin.webp";
import Charges from "../../app/cobranca-2.webp";
import Payments from "../../app/pagamentos.jpeg";


const FEATURE_ICONS: Record<number, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  0: Bot,
  1: CheckCircle2,
  2: Banknote,
  3: Shuffle,
  4: BarChart3,
  5: Clock,
};


/** Texto alternativo (pt-BR) de cada screenshot, na mesma ordem de FEATURES. */
const FEATURE_IMAGE_ALTS: Record<number, string> = {
  0: "Conversa no WhatsApp em que o bot do Partidinha anuncia a partida e explica os comandos para confirmar presença",
  1: "Tela de check-in do app Partidinha com a lista de jogadores confirmados e não confirmados",
  2: "Mensagem do bot do Partidinha no grupo do WhatsApp listando os devedores e a chave Pix para pagamento",
  3: "Tela de sorteio do app Partidinha com os jogadores divididos em Time A, Time B e Time C",
  4: "Tela da partida no app Partidinha com placar, cronômetro e eventos de gols e assistências",
  5: "Tela de pagamentos do grupo no app Partidinha com resumo do mês, mensalistas pagos e em atraso",
};

const FEATURE_IMAGES: Record<number, ImageProps["src"]> = {
  0: BotWhatsapp,
  1: CheckIn,
  2: Charges,
  3: Times,
  4: Stats,
  5: Payments,
};

export const FeaturesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="features" aria-labelledby="features-title" className="py-16 sm:py-24 bg-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200 shadow-xs">
            {FEATURES_HEADER.subtitle}
          </span>
          <h2
            id="features-title"
            className="headline-title text-3xl sm:text-5xl font-lastik text-slate-900 tracking-tight"
            dangerouslySetInnerHTML={{ __html: FEATURES_HEADER.titleHtml }}
          />
          <p className="text-slate-600 text-base">
            {FEATURES_HEADER.description}
          </p>
        </div>

        <AnimatedGrid shouldReduceMotion={shouldReduceMotion}>
          {FEATURES.map((item, index) => {
            const feature: FeatureType = {
              title: item.title,
              icon: FEATURE_ICONS[index] || Bot,
              description: item.description,
              image: FEATURE_IMAGES[index],
              imageAlt: FEATURE_IMAGE_ALTS[index],
            };

            return (
              <li key={index} className="relative group border-sky-200/80 border-dashed lg:odd:border-r border-b">
                <FeatureCard
                  feature={feature}
                  className="h-full bg-sky-50/20 hover:bg-sky-50/70 transition-colors duration-300"
                />
              </li>
            );
          })}
        </AnimatedGrid>
      </div>
    </section>
  );
};

function AnimatedGrid({
  children,
  shouldReduceMotion,
}: {
  children: React.ReactNode;
  shouldReduceMotion: boolean | null;
}) {
  if (shouldReduceMotion) {
    return (
      <ul className="grid grid-cols-1 lg:grid-cols-2 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10">
        {children}
      </ul>
    );
  }

  return (
    <motion.ul
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10"
    >
      {children}
    </motion.ul>
  );
}
