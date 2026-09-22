"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Download,
  Maximize2,
  LogOut,
  ShieldAlert,
  ArrowLeft,
} from "lucide-react";

// SHA-256 hash correspondente à senha "part9010"
const TARGET_HASH = "30a6b3b763b6f213ba4dc2249798e4c7d801764de76c22e714762b01b61469cc";
const AUTH_STORAGE_KEY = "partidinha_pitch_fla_auth";

async function computeSha256(str: string): Promise<string> {
  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getStorageSnapshot(): boolean {
  try {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === TARGET_HASH;
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

export default function PitchFlaPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [localAuth, setLocalAuth] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isControlsVisible, setIsControlsVisible] = useState(true);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isStoredAuthed = useSyncExternalStore(
    subscribeToStorage,
    getStorageSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const isAuthenticated = isMounted && (isStoredAuthed || localAuth);

  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isMounted, isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.trim();

    if (!cleanPass) {
      setError("Por favor, digite a senha.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const hash = await computeSha256(cleanPass);
      if (hash === TARGET_HASH) {
        try {
          sessionStorage.setItem(AUTH_STORAGE_KEY, hash);
        } catch {
          // Ignora se cookies/storage estiver restrito
        }
        setLocalAuth(true);
      } else {
        setError("Senha incorreta. Tente novamente.");
      }
    } catch {
      setError("Ocorreu um erro ao validar a senha.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignora erro de sessionStorage
    }
    setLocalAuth(false);
    setPassword("");
    setError("");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Enquanto monta no cliente para sincronizar estado
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0B1926] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Tela de apresentação desbloqueada
  if (isAuthenticated) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden select-none">
        {/* Barra superior flutuante com controles */}
        <div
          className={`absolute top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
            isControlsVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0B1926]/90 backdrop-blur-md border border-white/15 rounded-full shadow-2xl text-xs text-white/80">
            <span className="font-semibold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Partidinha + Escola Flamengo
            </span>

            <div className="h-3.5 w-px bg-white/20" />

            <a
              href="/apresentacoes-data/pitch-fla/main.pdf"
              download="Partidinha-Pitch-Escola-Flamengo.pdf"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Baixar versão em PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>

            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Alternar tela cheia"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Tela cheia</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 hover:text-rose-100 transition-colors cursor-pointer"
              title="Bloquear apresentação"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Bloquear</span>
            </button>
          </div>
        </div>

        {/* Botão sutil para alternar visibilidade do menu */}
        <button
          onClick={() => setIsControlsVisible(!isControlsVisible)}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-black/80 text-white/50 hover:text-white backdrop-blur transition-all cursor-pointer"
          title={isControlsVisible ? "Ocultar menu" : "Exibir menu"}
        >
          <Lock className="w-3.5 h-3.5" />
        </button>

        {/* Iframe da apresentação Marp */}
        <iframe
          ref={iframeRef}
          src="/apresentacoes-data/pitch-fla/index.html"
          title="Apresentação Partidinha + Escola Flamengo Palmas"
          className="w-full h-full border-0"
          allow="fullscreen"
          onLoad={() => iframeRef.current?.focus()}
        />
      </div>
    );
  }

  // Tela de bloqueio por senha
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4 bg-[#0B1926] overflow-hidden">
      {/* Background Decorativo e Feixes de Luz */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-400/15 via-transparent to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Grid pattern sutil */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Card Central de Autenticação */}
      <div className="relative z-10 w-full max-w-md bg-[#0F1D2D]/90 border border-sky-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        {/* Header do Card */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600 p-[1px] shadow-lg shadow-sky-500/20 flex items-center justify-center">
              <div className="w-full h-full rounded-2xl bg-[#0B1926] flex items-center justify-center">
                <Lock className="w-6 h-6 text-sky-400" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-medium mb-3">
            <span>Acesso Restrito</span>
          </div>

          <h1 className="text-xl font-bold text-white tracking-tight">
            Partidinha + Escola Flamengo
          </h1>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Digite a senha de autorização para acessar a proposta comercial e os slides do pitch deck.
          </p>
        </div>

        {/* Formulário de Senha */}
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="pitch-password"
              className="block text-xs font-medium text-slate-300 mb-1.5"
            >
              Senha de acesso
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                id="pitch-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Digite a senha..."
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-[#0B1926]/80 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-300 text-xs animate-shake">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-sky-500 hover:bg-sky-400 active:bg-sky-600 disabled:opacity-50 text-white font-semibold text-sm rounded-xl shadow-lg shadow-sky-500/25 transition-all duration-200 cursor-pointer"
          >
            {isLoading ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Acessar Apresentação</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Link Voltar */}
        <div className="mt-6 pt-4 border-t border-slate-800 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para o site</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
