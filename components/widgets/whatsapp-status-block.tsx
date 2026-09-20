import React from "react";

/**
 * Floating hero card styled like a real WhatsApp group chat (same visual language as
 * conteudo/carrosseis/proposta-partidinha/instagram/slide-05.html): WhatsApp glyph +
 * group header, then a player calling the bot and the bot replying in the group.
 */
export const WhatsAppStatusBlock: React.FC = () => {
  return (
    <div className="rounded-[14px] bg-[#0B141A] px-2 py-2 sm:px-3 sm:py-2.5 w-full space-y-1.5 sm:space-y-2">
      <div className="flex items-center gap-1.5 sm:gap-2 pb-1.5 sm:pb-2 border-b border-white/[0.08]">
        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-md sm:rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-emerald-400">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.09-1.11l-.29-.17-3.04.8 1.1-2.97-.19-.3A8.2 8.2 0 0 1 3.7 11.9c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.99.69.45-.05 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.3" />
          </svg>
        </div>
        <div className="leading-tight min-w-0">
          <p className="text-[7px] sm:text-[10px] font-bold text-white truncate">
            Pelada das Quintas FC ⚽
          </p>
          <p className="text-[6px] sm:text-[8px] text-slate-400 truncate">
            Grupo • 24 participantes
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="max-w-[85%] bg-[#0F4A38] border border-emerald-500/25 rounded-lg rounded-tr-sm px-1.5 py-1 sm:px-2 sm:py-1.5">
          <p className="text-[6px] sm:text-[9px] font-bold text-emerald-400 leading-none mb-0.5">
            Gabriel
          </p>
          <p className="text-[6.5px] sm:text-[9.5px] leading-snug text-white font-medium whitespace-nowrap">
            <span className="text-sky-300 font-bold">@Partidinha Bot</span> entrar
          </p>
          <p className="text-[5px] sm:text-[7px] text-emerald-200/60 text-right mt-0.5">
            18:31 <span className="text-sky-300">✓</span>
          </p>
        </div>
      </div>

      <div className="bg-[#182736] border border-sky-400/20 rounded-lg rounded-tl-sm px-1.5 py-1 sm:px-2 sm:py-1.5">
        <div className="flex items-center gap-1 mb-0.5">
          <span className="text-[6px] sm:text-[9px] font-bold text-sky-400 truncate">
            Partidinha Bot
          </span>
          <span className="text-[4.5px] sm:text-[6.5px] font-extrabold uppercase tracking-wide px-1 py-[1px] rounded bg-sky-400/20 text-sky-300 flex-shrink-0">
            Bot
          </span>
        </div>
        <div className="text-[6.5px] sm:text-[9.5px] text-slate-100 leading-snug font-medium whitespace-nowrap">
          <div className="game-header">
            ⚽ Pelada das Quintas FC (Sáb, 18:00) <br />
            📍 Campo do Bairro Novo
          </div>
          <br />
          ✅ Gabriel entrou! <span className="opacity-70">(14/14)</span>
        </div>
      </div>
    </div>
  );
};
