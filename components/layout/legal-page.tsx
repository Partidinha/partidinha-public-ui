import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../app/logo-icon.png";
import { Footer } from "@/components/layout/footer";

interface LegalPageProps {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title, updatedAt, children }) => {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <header className="relative bg-[#0B1926] bg-grid-pattern-dark overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <Link href="/" className="inline-flex items-center gap-3 group mb-10">
            <Image src={Logo} alt="Partidinha Logo" className="w-9 h-9" />
            <span
              className="font-bold text-lg text-white font-lastik"
              style={{ letterSpacing: "0.03em" }}
            >
              Partidinha
            </span>
          </Link>
          <h1 className="font-lastik text-3xl sm:text-4xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-3 text-sm text-slate-400">Última atualização: {updatedAt}</p>
        </div>
      </header>

      <div className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article
          className="
            text-slate-700 leading-relaxed space-y-6
            [&_h2]:font-lastik [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:pt-6
            [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:pt-2
            [&_p]:text-sm [&_p]:sm:text-base
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-sm [&_ul]:sm:text-base
            [&_a]:text-sky-600 [&_a]:font-semibold [&_a]:hover:underline
            [&_strong]:text-slate-900
          "
        >
          {children}
        </article>

        <div className="mt-14 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 transition"
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
};
