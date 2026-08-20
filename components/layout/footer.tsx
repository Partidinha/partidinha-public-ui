import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold text-white font-lastik text-sm">
          <span>⚽ Partidinha</span>
          <span className="text-slate-500 font-normal font-sans text-xs">
            © 2026. Feito pra quem joga de verdade.
          </span>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <a href="#" className="hover:text-white transition">
            Privacidade
          </a>
          <a href="#" className="hover:text-white transition">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-white transition">
            Suporte
          </a>
        </div>
      </div>
    </footer>
  );
};
