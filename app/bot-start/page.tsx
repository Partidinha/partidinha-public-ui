import type { Metadata } from "next";
import { Suspense } from "react";
import { BotRedirectClient } from "./bot-redirect-client";
import { WHATSAPP_BOT_URL } from "@/lib/bot-redirect";

export const metadata: Metadata = {
  title: "Partidinha: Bot no seu WhatsApp",
  description: "Redirecionando para o WhatsApp do Partidinha...",
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
