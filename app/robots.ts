import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Crawlers de IA / answer engines listados explicitamente para deixar claro que são
// bem-vindos. Ficam no mesmo grupo do `*`, então herdam as mesmas regras de Disallow
// (um bot com grupo próprio ignoraria as regras do `*`).
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["*", ...AI_CRAWLERS],
        allow: "/",
        // /bot-start: redirect para o WhatsApp (noindex)
        // /apresentacoes/: pitch decks privados (noindex)
        // /ingest/: proxy do PostHog
        disallow: ["/bot-start", "/apresentacoes/", "/ingest/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
