import React from "react";
import { ArrowLeft, Video, Phone, Smile, Paperclip, Mic } from "lucide-react";

/**
 * Tela estática de WhatsApp mostrando o bot entrando no grupo e se apresentando.
 * Preenche a moldura de celular do FeatureSteps (Passo 02).
 *
 * Todas as medidas usam `cqw` para acompanhar a largura da moldura, que muda
 * conforme o breakpoint/altura da viewport. A referência de desenho é a mesma
 * dos screenshots do app (380px de largura), então 1px = 100/380 = 0.263cqw.
 */
export const WhatsAppBotJoin: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#ECE5DD] font-sans select-none">
      {/* Barra de topo estilo WhatsApp */}
      <div className="bg-[#075E54] px-[2.1cqw] pt-[6.3cqw] pb-[2.1cqw] flex items-center gap-[1.6cqw] shrink-0">
        <ArrowLeft className="w-[3.7cqw] h-[3.7cqw] text-white/90 shrink-0" />
        <div className="w-[7.4cqw] h-[7.4cqw] rounded-full bg-white/15 flex items-center justify-center text-[3.7cqw] shrink-0">
          ⚽
        </div>
        <div className="leading-tight min-w-0 flex-1">
          <div className="text-white text-[2.9cqw] font-bold truncate">Pelada das Quintas FC</div>
          <div className="text-emerald-100/70 text-[2.4cqw] truncate">
            Renan, Pedrinho, Neco e mais 11
          </div>
        </div>
        <Video className="w-[3.4cqw] h-[3.4cqw] text-white/80 shrink-0" />
        <Phone className="w-[3.4cqw] h-[3.4cqw] text-white/80 shrink-0" />
      </div>

      {/* Área de conversa */}
      <div className="flex-1 flex flex-col justify-end overflow-hidden p-[2.6cqw] space-y-[1.6cqw]">
        <div className="text-center">
          <span className="bg-white/80 text-slate-500 text-[2.2cqw] font-semibold px-[2.1cqw] py-[0.5cqw] rounded-[1.6cqw] shadow-xs">
            HOJE
          </span>
        </div>

        <div className="text-center">
          <span className="bg-[#FFF3C4] text-slate-600 text-[2.2cqw] px-[2.1cqw] py-[0.5cqw] rounded-[1.6cqw] shadow-xs inline-block">
            Renan adicionou <strong>Bot do Partidinha</strong>
          </span>
        </div>

        {/* Apresentação do bot */}
        <div className="max-w-[92%]">
          <div className="bg-white rounded-[2.1cqw] rounded-tl-none px-[2.6cqw] py-[1.6cqw] shadow-xs space-y-[1.1cqw]">
            <div className="text-[2.6cqw] font-bold text-sky-600 leading-tight flex items-center gap-[1.1cqw]">
              🤖 Bot do Partidinha
              <span className="bg-emerald-100 text-emerald-700 text-[2cqw] px-[1.1cqw] py-[0.3cqw] rounded-[0.8cqw] font-mono uppercase">
                oficial
              </span>
            </div>
            <p className="text-[2.8cqw] text-slate-800 leading-snug">
              👋 Fala, craques! A partir de agora eu cuido das <strong>confirmações</strong>, do{" "}
              <strong>sorteio dos times</strong> e da <strong>cobrança do Pix</strong>.
            </p>
            <div className="bg-sky-50 border border-sky-200 rounded-[1.3cqw] px-[1.6cqw] py-[1.1cqw] text-[2.4cqw] font-mono text-slate-600 leading-relaxed">
              É só marcar o bot e digitar:
              <br />
              <span className="text-sky-600 font-bold">entrar</span> ·{" "}
              <span className="text-sky-600 font-bold">sair</span> ·{" "}
              <span className="text-sky-600 font-bold">apelido</span>
            </div>
            <div className="text-[2.1cqw] text-slate-400 text-right">19:02</div>
          </div>
        </div>

        {/* Confirmação de conexão */}
        <div className="max-w-[92%]">
          <div className="bg-white rounded-[2.1cqw] rounded-tl-none px-[2.6cqw] py-[1.6cqw] shadow-xs border-l-[1.1cqw] border-emerald-500">
            <p className="text-[2.8cqw] text-slate-800 leading-snug">
              ✅ Grupo conectado ao app do <strong>Renan</strong>. Pode criar a primeira partida!
            </p>
            <div className="text-[2.1cqw] text-slate-400 text-right mt-[0.5cqw]">19:02</div>
          </div>
        </div>

        {/* Reação da galera */}
        <div className="max-w-[88%]">
          <div className="bg-white rounded-[2.1cqw] rounded-tl-none px-[2.6cqw] py-[1.6cqw] shadow-xs">
            <div className="text-[2.6cqw] font-bold text-orange-500 leading-tight">Neco</div>
            <p className="text-[2.8cqw] text-slate-800 leading-snug">
              boaaa, chega de cobrança no pv 😂
            </p>
            <div className="text-[2.1cqw] text-slate-400 text-right mt-[0.5cqw]">19:04</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#DCF8C6] rounded-[2.1cqw] rounded-tr-none px-[2.6cqw] py-[1.6cqw] shadow-xs max-w-[88%]">
            <p className="text-[2.8cqw] text-slate-800 leading-snug">
              agora é só chegar e jogar 🔥
            </p>
            <div className="text-[2.1cqw] text-slate-500/80 text-right mt-[0.5cqw] flex items-center justify-end gap-[0.5cqw]">
              19:05
              <svg viewBox="0 0 16 11" className="w-[3.2cqw] h-[3.2cqw] fill-sky-500 inline-block">
                <path d="M11.071.653a.457.457 0 0 0-.304-.102.483.483 0 0 0-.371.166l-6.03 7.276-2.612-2.16a.483.483 0 0 0-.671.061l-.702.845a.463.463 0 0 0 .062.65l3.485 2.883c.183.15.44.13.6-.033l6.696-8.088a.457.457 0 0 0-.06-.65l-.093-.077zM15.05.653a.457.457 0 0 0-.304-.102.483.483 0 0 0-.371.166l-6.03 7.276-.694-.574a.234.234 0 0 0-.328.03l-.552.665a.226.226 0 0 0 .03.318l1.443 1.194c.183.15.44.13.6-.033l6.696-8.088a.457.457 0 0 0-.06-.65l-.093-.077z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de digitação */}
      <div className="shrink-0 px-[2.1cqw] pb-[2.6cqw] pt-[1.1cqw] flex items-center gap-[1.6cqw]">
        <div className="flex-1 bg-white rounded-full px-[2.6cqw] py-[1.6cqw] flex items-center gap-[1.6cqw] shadow-xs">
          <Smile className="w-[3.4cqw] h-[3.4cqw] text-slate-400 shrink-0" />
          <span className="text-[2.6cqw] text-slate-400 flex-1">Mensagem</span>
          <Paperclip className="w-[3.4cqw] h-[3.4cqw] text-slate-400 shrink-0" />
        </div>
        <div className="w-[7.4cqw] h-[7.4cqw] rounded-full bg-[#075E54] flex items-center justify-center shrink-0 shadow-xs">
          <Mic className="w-[3.7cqw] h-[3.7cqw] text-white" />
        </div>
      </div>
    </div>
  );
};
