import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AeoWidgetLoader } from "@/components/widgets/aeo-widget-loader";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    // title/description/images are auto-filled from openGraph per route.
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLM Summary" },
        { url: "/llms-full.txt", title: "Full Content for LLMs" },
      ],
      "application/json": [
        { url: "/docs.json", title: "Documentation Manifest" },
        { url: "/ai-index.json", title: "AI-Optimized Index" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-sky-100 selection:text-sky-800">
        {children}
        <AeoWidgetLoader />
      </body>
    </html>
  );
}
