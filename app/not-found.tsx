import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo-icon.png";
import { Footer } from "@/components/layout/footer";
import { buttonVariants } from "@/components/ui/button";
import { BOT_START_PATH } from "@/lib/copy";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você procurou não existe ou mudou de lugar.",
  alternates: {
    canonical: null,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <main className="relative flex-1 flex flex-col bg-[#0B1926] bg-grid-pattern-dark overflow-hidden">
        <div className="hero-light-ray-navy" aria-hidden="true" />

        <header className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src={Logo} alt="Partidinha Logo" className="w-9 h-9" />
            <span
              className="font-bold text-lg text-white font-lastik"
              style={{ letterSpacing: "0.03em" }}
            >
              Partidinha
            </span>
          </Link>
        </header>

        <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <span className="billow-glass-pill-navy inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <span aria-hidden="true">⚽</span> Erro 404
          </span>

          <h1 className="mt-8 font-lastik text-4xl sm:text-6xl font-bold text-white">
            Bola fora!
          </h1>

          <p
            className="mt-4 font-lastik text-7xl sm:text-9xl font-bold text-gradient-cyan select-none"
            aria-hidden="true"
          >
            404
          </p>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Esse chute passou longe do gol: a página que você procurou não existe
            ou mudou de lugar. Volta pro campo e bora organizar a próxima pelada.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BOT_START_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:bg-transparent hover:brightness-110 text-white font-bold shadow-cta-glow hover:-translate-y-0.5",
              )}
            >
              Acessar o bot
            </a>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "billow-glass-pill-navy cta-secondary bg-transparent hover:bg-transparent text-sky-100 font-bold",
              )}
            >
              ← Voltar para o início
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
