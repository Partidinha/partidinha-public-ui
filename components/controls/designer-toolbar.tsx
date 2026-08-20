"use client";

import React from "react";
import { Monitor, Smartphone } from "lucide-react";
import { HEADLINES } from "@/lib/copy";

export interface DesignerToolbarProps {
  selectedHeadlineKey: string;
  onSelectHeadline: (key: string) => void;
  viewportMode: "desktop" | "mobile";
  onToggleViewport: (mode: "desktop" | "mobile") => void;
}

export const DesignerToolbar: React.FC<DesignerToolbarProps> = ({
  selectedHeadlineKey,
  onSelectHeadline,
  viewportMode,
  onToggleViewport,
}) => {
  return (
    <div
      id="designer-toolbar"
      className="bg-slate-900 text-white text-xs py-2.5 px-4 sticky top-0 z-50 shadow-md border-b border-slate-800 flex flex-wrap items-center justify-between gap-3"
    >
      <div className="flex items-center gap-3">
        <span className="bg-sky-500 text-white px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider shadow-xs flex items-center gap-1">
          <span>⚽ Deep Navy Hero + Clean Light Sections</span>
        </span>
        <span className="text-slate-300 font-medium hidden sm:inline">
          Hero Azul Marinho Oficial + Feixe Ciano
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Headline Copy Tester */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-mono text-[11px]">Headline:</span>
          <select
            value={selectedHeadlineKey}
            onChange={(e) => onSelectHeadline(e.target.value)}
            className="bg-slate-800 text-white text-xs border border-slate-700 rounded-md px-2 py-1 focus:outline-none focus:border-sky-400 cursor-pointer"
          >
            {HEADLINES.map((h) => (
              <option key={h.key} value={h.key}>
                {h.label}
              </option>
            ))}
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-slate-800 p-0.5 rounded-md border border-slate-700">
          <button
            onClick={() => onToggleViewport("desktop")}
            className={`px-2.5 py-1 rounded font-medium transition flex items-center gap-1 cursor-pointer ${
              viewportMode === "desktop"
                ? "bg-slate-700 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> Desktop
          </button>
          <button
            onClick={() => onToggleViewport("mobile")}
            className={`px-2.5 py-1 rounded font-medium transition flex items-center gap-1 cursor-pointer ${
              viewportMode === "mobile"
                ? "bg-slate-700 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Mobile
          </button>
        </div>
      </div>
    </div>
  );
};
