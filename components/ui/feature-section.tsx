"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface Feature {
  step: string;
  title?: string;
  content: string;
  /** Screenshot do app exibido dentro da moldura de celular. */
  image?: ImageProps["src"];
  /** Alternativa ao screenshot: um mock renderizado (ex.: tela do WhatsApp). */
  node?: React.ReactNode;
}

export interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const stepCount = features.length;
    const newIndex = Math.min(
      Math.floor(latest * stepCount),
      stepCount - 1
    );
    if (newIndex !== currentFeature && newIndex >= 0) {
      setCurrentFeature(newIndex);
    }
  });

  const handleStepClick = (index: number) => {
    setCurrentFeature(index);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const stepScrollPos = containerTop + (containerHeight / features.length) * index;
      window.scrollTo({
        top: stepScrollPos,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={containerRef} className={cn("relative h-[150vh] w-full", className)}>
      <div className="sticky top-20 min-h-[75vh] flex flex-col justify-center p-4 md:p-8">
        <div className="max-w-7xl mx-auto w-full">
          {title && (
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center font-lastik text-slate-900 tracking-tight">
              {title}
            </h2>
          )}

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-5 md:gap-7 cursor-pointer group"
                  onClick={() => handleStepClick(index)}
                  initial={false}
                  animate={{ opacity: index === currentFeature ? 1 : 0.35 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className={cn(
                      "w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center border-2 shrink-0 transition-all duration-200 mt-1",
                      index === currentFeature
                        ? "bg-sky-600 border-sky-600 text-white scale-110 shadow-lg shadow-sky-500/25"
                        : "bg-slate-100 border-slate-300 text-slate-500 group-hover:border-slate-400",
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-base md:text-lg font-bold">✓</span>
                    ) : (
                      <span className="text-base md:text-lg font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 font-lastik tracking-tight mb-1">
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="order-1 md:order-2 relative flex items-center justify-center">
              {/* Brilho de fundo atrás do celular */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-sky-400/20 blur-3xl" />
              </div>

              {/* Moldura de celular — altura acompanha a viewport para caber na área sticky */}
              <div className="relative z-10">
                <div className="relative h-[280px] sm:h-[340px] md:h-[min(52vh,460px)] lg:h-[min(56vh,520px)] aspect-380/826 @container rounded-[2.25rem] border-[6px] border-slate-900 bg-slate-950 overflow-hidden shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden pointer-events-none"
                      initial={false}
                      animate={{
                        opacity: index === currentFeature ? 1 : 0,
                        scale: index === currentFeature ? 1 : 1.04,
                      }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      {feature.node ? (
                        feature.node
                      ) : feature.image ? (
                        <Image
                          src={feature.image}
                          alt={feature.title || feature.step}
                          className="w-full h-full object-cover object-top"
                          width={380}
                          height={826}
                          priority={index === 0}
                        />
                      ) : null}
                    </motion.div>
                  ))}
                </div>

                {/* Etiqueta do passo atual */}
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-20">
                  <span className="bg-sky-600 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-sky-500/40 shadow-lg shadow-sky-500/25 whitespace-nowrap">
                    {features[currentFeature]?.step}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
