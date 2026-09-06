import type { NextConfig } from "next";
import { withAeo } from "aeo.js/next";

const nextConfig: NextConfig = {
  turbopack: {},
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withAeo({
  ...(nextConfig as Record<string, unknown>),
  aeo: {
    title: "Partidinha: Bot no seu WhatsApp",
    description:
      "Organize sua pelada sem sair do WhatsApp. Confirmações automáticas, cobrança dos devedores do grupo, sorteio de times e estatísticas.",
    url: "https://partidinha.com",
    generators: {
      robotsTxt: true,
      llmsTxt: true,
      schema: true,
      sitemap: true,
      aiIndex: true,
    },
  },
});

