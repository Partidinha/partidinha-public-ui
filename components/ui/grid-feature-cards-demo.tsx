"use client";

import React from "react";
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FeatureCard } from "@/components/ui/grid-feature-cards";

const features = [
  {
    title: "Faaast",
    icon: Zap,
    description: "It supports an entire helping developers and innovate.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Powerful",
    icon: Cpu,
    description: "It supports an entire helping developers and businesses.",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Security",
    icon: Fingerprint,
    description: "It supports an helping developers businesses.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Customization",
    icon: Pencil,
    description: "It supports helping developers and businesses innovate.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Control",
    icon: Settings2,
    description: "It supports helping developers and businesses innovate.",
  },
  {
    title: "Built for AI",
    icon: Sparkles,
    description: "It supports helping developers and businesses innovate.",
  },
];

export default function DemoOne() {
  return (
    <section className="py-16 md:py-32 bg-white">
      <div className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold text-slate-900 font-lastik">
            Power. Speed. Control.
          </h2>
          <p className="text-slate-600 mt-4 text-sm tracking-wide text-balance md:text-base">
            Everything you need to build fast, secure, scalable apps.
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-sky-200 border border-dashed border-sky-300 rounded-3xl overflow-hidden bg-sky-50/10"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
