import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

const title = "Partidinha + Escola Flamengo Palmas | Apresentação";
const description =
  "Apresentação e proposta comercial exclusiva do Partidinha para a Escola Flamengo Palmas: organização de jogos, confirmações e pagamentos direto no WhatsApp.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/apresentacoes/pitch-fla",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: "/apresentacoes/pitch-fla",
    title,
    description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PitchFlaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0B1926] text-white antialiased">
      {children}
    </div>
  );
}
