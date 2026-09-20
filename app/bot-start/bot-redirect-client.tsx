"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import {
  extractTrackingParams,
  getWhatsAppRedirectUrl,
} from "@/lib/bot-redirect";

export function BotRedirectClient() {
  const searchParams = useSearchParams();
  const redirectedRef = useRef(false);

  useEffect(() => {
    if (redirectedRef.current) return;
    redirectedRef.current = true;

    const targetUrl = getWhatsAppRedirectUrl();
    const trackingParams = extractTrackingParams(searchParams);

    // Dispara o evento de rastreamento no PostHog com sendBeacon para garantir entrega antes do unload
    try {
      posthog.capture(
        "bot_redirect_started",
        {
          destination: "whatsapp",
          target_url: targetUrl,
          ...trackingParams,
        },
        {
          send_instantly: true,
          transport: "sendBeacon",
        }
      );
    } catch {
      // Ignora erro de analytics para nunca bloquear o usuário
    }

    // Redireciona imediatamente substituindo o histórico
    const timer = setTimeout(() => {
      window.location.replace(targetUrl);
    }, 50);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 bg-[#07131D] flex items-center justify-center select-none cursor-default"
    />
  );
}
