"use client";

import React, { useEffect, useState } from "react";

export const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsFinished(true), 300);
          return 100;
        }
        return prev + 20;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (isFinished) return null;

  return (
    <div className="fixed inset-0 bg-[#0B1926] z-[100] flex flex-col items-center justify-center space-y-4 transition-opacity duration-500">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1E4A6B] via-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center text-3xl shadow-xl animate-bounce border border-sky-300/40">
        ⚽
      </div>
      <div className="flex items-center gap-2 text-white font-lastik text-xl tracking-tight">
        <span>Partidinha</span>
        <span className="text-xs bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2 py-0.5 rounded font-mono">
          Vestiário Digital
        </span>
      </div>
      {/* Progress bar */}
      <div className="w-48 h-1.5 bg-sky-950 rounded-full overflow-hidden border border-sky-800/40">
        <div
          className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[11px] font-mono text-sky-300/70">
        Carregando vestiário... {progress}%
      </span>
    </div>
  );
};
