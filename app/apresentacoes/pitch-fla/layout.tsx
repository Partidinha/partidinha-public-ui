import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partidinha + Escola Flamengo Palmas | Apresentação",
  description: "Apresentação e proposta comercial exclusiva para a Escola Flamengo Palmas.",
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
