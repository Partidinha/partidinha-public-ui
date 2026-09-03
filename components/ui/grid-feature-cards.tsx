import { cn } from "@/lib/utils";
import React from "react";
import Image, { type ImageProps } from "next/image";

export type FeatureType = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  image?: ImageProps["src"];
};

export type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
  const patternSeed = React.useId();
  const p = genPattern(patternSeed);

  return (
    <div
      className={cn(
        "relative overflow-hidden p-8 md:p-10 min-h-[460px] sm:min-h-[520px] flex flex-col justify-between group transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Background SVG Grid Overlay & Cyan Rays */}
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-sky-500/15 via-cyan-400/10 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern
            width={24}
            height={24}
            x="-12"
            y="4"
            squares={p}
            className="fill-sky-500/10 stroke-sky-400/30 absolute inset-0 h-full w-full mix-blend-overlay"
          />
        </div>
      </div>

      {/* Header Info */}
      <div className="relative z-20 space-y-3">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-100/90 text-sky-600 border border-sky-200/80 shadow-xs group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
          <feature.icon className="size-6" strokeWidth={2} aria-hidden />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-lastik pt-2">
          {feature.title}
        </h3>
        <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* iPhone Mockup Container */}
      <div className="relative z-10 mt-8 w-full max-w-[180px] sm:max-w-[260px] mx-auto transition-transform duration-500 group-hover:-translate-y-2">
        <div className="relative rounded-[2.5rem] border-[6px] border-slate-900 bg-slate-950  overflow-hidden ring-1 ring-slate-900/10 h-[500px] ">
          {/* Dynamic Island / iPhone Notch */}
          {/* <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-slate-950" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
          </div> */}

          {/* iPhone Screen Content Slot */}
          <div className="relative w-full h-[500px] sm:h-[500px] bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
            <Image
              src={feature.image!}
              alt={feature.title}
              className={`
                  w-full object-cover
                  ${["Controle de Pagamentos", "Estatísticas em Tempo Real", "Sorteio de Times", "Confirmações Automáticas"].includes(feature.title) ? "mt-[40px]" : "mt-[10px]"} 
                `}
              width={260}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Deterministic so server and client render the same squares (no hydration mismatch).
function genPattern(seed: string, length?: number): number[][] {
  length = length ?? 5;

  let state = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    state ^= seed.charCodeAt(i);
    state = Math.imul(state, 16777619);
  }

  const next = () => {
    state = Math.imul(state ^ (state >>> 15), 2246822507);
    state = Math.imul(state ^ (state >>> 13), 3266489909);
    return ((state ^= state >>> 16) >>> 0) / 4294967296;
  };

  return Array.from({ length }, () => [
    Math.floor(next() * 4) + 7, // x between 7 and 10
    Math.floor(next() * 6) + 1, // y between 1 and 6
  ]);
}
