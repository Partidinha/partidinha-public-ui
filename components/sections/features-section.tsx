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
    <section id="features" className="py-16 sm:py-24 bg-white border-b border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200 shadow-xs">
            {FEATURES_HEADER.subtitle}
          </span>
          <h2
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
            };

            return (
              <div key={index} className="relative group border-sky-200/80 border-dashed lg:odd:border-r border-b">
                <FeatureCard
                  feature={feature}
                  className="h-full bg-sky-50/20 hover:bg-sky-50/70 transition-colors duration-300"
                />
              </div>
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
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10">
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-2 border border-dashed border-sky-300/80 rounded-3xl overflow-hidden shadow-xs bg-sky-50/10"
    >
      {children}
    </motion.div>
  );
}
