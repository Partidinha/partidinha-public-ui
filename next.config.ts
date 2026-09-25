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
    // robots.txt e sitemap.xml vêm de app/robots.ts e app/sitemap.ts; llms.txt e
    // llms-full.txt são curados à mão em public/. Não deixe o aeo.js sobrescrever.
    // ATENÇÃO: o `postbuild` (package.json) chama postBuild() com config própria;
    // mantenha os mesmos generators lá.
    generators: {
      robotsTxt: false,
      sitemap: false,
      llmsTxt: false,
      llmsFullTxt: false,
      schema: true,
      aiIndex: true,
    },
  },
});

