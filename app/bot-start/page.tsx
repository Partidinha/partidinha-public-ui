import type { Metadata } from "next";
import { SITE_TITLE } from "@/lib/site";
import { Suspense } from "react";
import { BotRedirectClient } from "./bot-redirect-client";
import { WHATSAPP_BOT_URL } from "@/lib/bot-redirect";

export const metadata: Metadata = {
  // Keeps the full brand title (no template suffix) for link previews.
  title: { absolute: SITE_TITLE },
  description:
    "Abrindo a conversa com o bot do Partidinha no WhatsApp. Adicione o bot ao grupo da sua pelada e automatize confirmações, cobranças e sorteio de times.",
  alternates: {
    canonical: "/bot-start",
  },
  // openGraph intentionally inherited from the root layout so shared
  // /bot-start links preview like the home page.
  robots: {
    index: false,
    follow: false,
  },
};

export default function BotStartPage() {
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${WHATSAPP_BOT_URL}`} />
      </noscript>
      <Suspense
        fallback={
          <div
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-[#07131D]"
          />
        }
      >
        <BotRedirectClient />
      </Suspense>
    </>
  );
}
