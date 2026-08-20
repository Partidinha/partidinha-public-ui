"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, MoreVertical, Sparkles } from "lucide-react";

interface Message {
  id: string;
  type: "received" | "sent" | "system";
  sender?: string;
  time?: string;
  textHtml: string;
  borderLeft?: string;
}

export const WhatsAppSimulator: React.FC = () => {
  const [confirmedCount, setConfirmedCount] = useState(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-system",
      type: "system",
      textHtml:
        '<span class="bg-white/80 text-slate-600 text-[10px] px-2.5 py-0.5 rounded-md font-mono shadow-xs">HOJE - PARTIDA #42</span>',
    },
    {
      id: "initial-bot",
      type: "received",
      sender: "🤖 Bot Partidinha",
      time: "18:30",
      textHtml: `🚨 <strong>CONVOCAÇÃO OFICIAL!</strong><br>🗓️ Quinta-feira, 20:00h<br>📍 Arena Soccer Club - Campo 2<br>💰 R$ 25,00 por jogador
      <div class="bg-sky-50 p-1.5 rounded text-[10.5px] text-slate-700 font-mono border border-sky-200 mt-1">
        Comandos rápidos:<br>
        <span class="text-sky-600 font-bold">!confirmar</span> | <span class="text-sky-600 font-bold">!lista</span> | <span class="text-sky-600 font-bold">!sortear</span>
      </div>`,
    },
    {
      id: "initial-sent",
      type: "sent",
      sender: "Renan (Admin)",
      time: "18:31",
      textHtml: "!confirmar",
    },
    {
      id: "initial-confirm",
      type: "received",
      borderLeft: "border-emerald-500",
      textHtml:
        "✅ <strong>Renan</strong> confirmado! (Vaga #1 de 14). Falta pagar R$ 25 via Pix.",
    },
  ]);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCommand = (cmd: string) => {
    const timeStr = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (cmd === "limpar") {
      setConfirmedCount(1);
      setMessages([
        {
          id: Date.now() + "-sys",
          type: "system",
          textHtml:
            '<span class="bg-white/80 text-slate-600 text-[10px] px-2.5 py-0.5 rounded-md font-mono shadow-xs">CHAT REINICIADO</span>',
        },
        {
          id: Date.now() + "-bot",
          type: "received",
          sender: "🤖 Bot Partidinha",
          textHtml:
            "🚨 <strong>CONVOCAÇÃO OFICIAL!</strong> Quinta, 20h. Digite <strong>!confirmar</strong>",
        },
      ]);
      return;
    }

    const names = [
      "Pedrinho",
      "Lucas",
      "Neco",
      "Matheus",
      "Gabriel",
      "Felipe",
      "Thiago",
      "Bruno",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];

    if (cmd === "confirmar") {
      const nextCount = confirmedCount + 1;
      setConfirmedCount(nextCount);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + "-sent",
          type: "sent",
          sender: randomName,
          time: timeStr,
          textHtml: "!confirmar",
        },
        {
          id: Date.now() + "-res",
          type: "received",
          borderLeft: "border-emerald-500",
          textHtml: `✅ <strong>${randomName}</strong> confirmado! (Vaga #${nextCount} de 14).`,
        },
      ]);
    } else if (cmd === "lista") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + "-sent",
          type: "sent",
          textHtml: "!lista",
        },
        {
          id: Date.now() + "-res",
          type: "received",
          textHtml: `📋 <strong>LISTA DE PRESENÇA (${confirmedCount}/14):</strong><br>
          1. Renan (Pago)<br>
          2. ${randomName} (Pendente)<br>
          3. Lucas (Pago)<br>
          ⏳ Restam ${Math.max(0, 14 - confirmedCount)} vagas!`,
        },
      ]);
    } else if (cmd === "sortear") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + "-sent",
          type: "sent",
          textHtml: "!sortear",
        },
        {
          id: Date.now() + "-res",
          type: "received",
          borderLeft: "border-sky-500",
          textHtml: `⚽ <strong>TIMES SORTEADOS!</strong><br>
          🔵 <strong>AZUL:</strong> Renan, Pedrinho, Lucas<br>
          🌐 <strong>CIANO:</strong> ${randomName}, Gabriel, Felipe`,
        },
      ]);
    } else if (cmd === "cobrar") {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + "-res",
          type: "received",
          borderLeft: "border-amber-500",
          textHtml: `📢 <strong>LEMBRETE DE PIX!</strong><br>
          Fala @${randomName}, o Pix da quadra está pendente (R$ 25,00). Chave: <code>pix@partidinha.com</code>`,
        },
      ]);
    }
  };

  return (
    <div
      id="bot-simulator"
      className="w-full max-w-sm bg-[#050A0F]/90 p-3.5 rounded-[36px] shadow-2xl border-2 border-sky-400/60 relative"
    >
      {/* Header */}
      <div className="bg-[#075E54] text-white p-3.5 rounded-t-[24px] flex items-center justify-between shadow-sm relative z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1E4A6B] to-[#38BDF8] text-white flex items-center justify-center font-bold text-sm shadow">
              🤖
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54] absolute bottom-0 right-0" />
          </div>
          <div>
            <div className="font-bold text-xs flex items-center gap-1">
              Bot do Partidinha{" "}
              <span className="bg-emerald-500/30 text-emerald-200 text-[9px] px-1.5 py-0.2 rounded font-mono">
                OFICIAL
              </span>
            </div>
            <div className="text-[10px] text-emerald-100/80 font-mono">
              Pelada das Quintas FC
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/80">
          <Phone className="w-4 h-4" />
          <MoreVertical className="w-4 h-4" />
        </div>
      </div>

      {/* Messages Window */}
      <div
        ref={chatRef}
        className="bg-[#E5DDD5] h-[340px] overflow-y-auto p-3 custom-scrollbar space-y-3 text-xs text-slate-900 relative z-10"
      >
        {messages.map((m) => {
          if (m.type === "system") {
            return (
              <div key={m.id} className="text-center my-1">
                <span dangerouslySetInnerHTML={{ __html: m.textHtml }} />
              </div>
            );
          }
          if (m.type === "sent") {
            return (
              <div
                key={m.id}
                className="chat-bubble-sent p-2.5 rounded-lg max-w-[80%] ml-auto shadow-xs"
              >
                {m.sender && (
                  <div className="font-semibold text-emerald-800 text-[10px]">
                    {m.sender}
                  </div>
                )}
                <p
                  className="text-[11.5px] font-mono text-emerald-950 font-bold"
                  dangerouslySetInnerHTML={{ __html: m.textHtml }}
                />
                {m.time && (
                  <span className="text-[8.5px] text-emerald-700 text-right block mt-0.5">
                    {m.time} ✓✓
                  </span>
                )}
              </div>
            );
          }
          return (
            <div
              key={m.id}
              className={`chat-bubble-received p-2.5 rounded-lg max-w-[88%] shadow-xs space-y-1 ${m.borderLeft ? `border-l-4 ${m.borderLeft}` : ""
                }`}
            >
              {m.sender && (
                <div className="font-bold text-sky-600 text-[11px] flex items-center justify-between">
                  <span>{m.sender}</span>
                  {m.time && (
                    <span className="text-[9px] text-slate-400 font-normal">
                      {m.time}
                    </span>
                  )}
                </div>
              )}
              <p
                className="text-[11.5px] leading-snug"
                dangerouslySetInnerHTML={{ __html: m.textHtml }}
              />
            </div>
          );
        })}
      </div>

      {/* Action Bar */}
      <div className="bg-[#050A0F] p-2.5 rounded-b-[24px] border-t border-sky-900/40 relative z-10">
        <div className="text-[10px] text-sky-300 font-mono mb-1.5 text-center flex items-center justify-center gap-1">
          <Sparkles className="w-3 h-3 text-sky-400" />
          <span>Simular comandos no Bot:</span>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <button
            onClick={() => handleCommand("confirmar")}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-1.5 px-2 rounded-lg text-[10.5px] transition active:scale-95 shadow-xs cursor-pointer"
          >
            !confirmar
          </button>
          <button
            onClick={() => handleCommand("lista")}
            className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-1.5 px-2 rounded-lg text-[10.5px] transition active:scale-95 shadow-xs cursor-pointer"
          >
            !lista
          </button>
          <button
            onClick={() => handleCommand("sortear")}
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-1.5 px-2 rounded-lg text-[10.5px] transition active:scale-95 shadow-xs cursor-pointer"
          >
            !sortear
          </button>
        </div>

        <div className="grid grid-cols-2 gap-1.5 mt-1.5">
          <button
            onClick={() => handleCommand("cobrar")}
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-1.5 px-1.5 rounded-lg text-[10px] transition text-center cursor-pointer"
          >
            📢 !cobrar_pix
          </button>
          <button
            onClick={() => handleCommand("limpar")}
            className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-1.5 px-1.5 rounded-lg text-[10px] transition text-center border border-slate-700 cursor-pointer"
          >
            🔄 Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};
