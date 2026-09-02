"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

export interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  imageHeight = "h-[400px]",
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

            <div
              className={cn(
                "order-1 md:order-2 relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] overflow-hidden rounded-2xl border border-slate-200/80 shadow-2xl shadow-slate-200/60 bg-slate-950",
                imageHeight
              )}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                  initial={false}
                  animate={{
                    opacity: index === currentFeature ? 1 : 0,
                    scale: index === currentFeature ? 1 : 1.04,
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title || feature.step}
                    className="w-full h-full object-cover"
                    width={1000}
                    height={500}
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs uppercase font-bold tracking-widest text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-500/30 inline-block">
                      {feature.step}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold font-lastik">
                      {feature.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
