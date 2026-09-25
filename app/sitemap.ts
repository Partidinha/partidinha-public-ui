import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Apenas rotas indexáveis. /bot-start e /apresentacoes/* são noindex e ficam de fora.
// Datas fixas (em vez de new Date()) para o lastmod refletir mudanças reais de conteúdo.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/termos-de-uso`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: new Date("2026-09-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
