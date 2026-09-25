"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import posthog from "posthog-js";
import Logo from "../../app/logo-icon.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 font-bold text-white font-lastik text-sm text-center sm:text-left">
          <Link href="/" aria-label="Partidinha, página inicial" className="flex items-center gap-3 group">
            <Image src={Logo} alt="" className="w-10 h-10" />
            <span
              className="font-bold text-xl text-white font-lastik"
              style={{ letterSpacing: "0.03em" }}
            >
              Partidinha
            </span>
          </Link>
          <small className="text-slate-500 font-normal font-sans text-xs">
            © 2026. Feito pra quem joga de verdade. Todos os direitos reservados
          </small>
        </div>
        <nav aria-label="Links do rodapé">
          <ul className="flex items-center gap-6 text-slate-400">
            <li>
              <Link
                href="/politica-de-privacidade"
                className="hover:text-white transition"
                onClick={() => posthog.capture("footer_link_clicked", { link_label: "Privacidade", link_href: "/politica-de-privacidade" })}
              >
                Privacidade
              </Link>
            </li>
            <li>
              <Link
                href="/termos-de-uso"
                className="hover:text-white transition"
                onClick={() => posthog.capture("footer_link_clicked", { link_label: "Termos de Uso", link_href: "/termos-de-uso" })}
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition"
                onClick={() => posthog.capture("footer_link_clicked", { link_label: "Suporte", link_href: "#" })}
              >
                Suporte
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
