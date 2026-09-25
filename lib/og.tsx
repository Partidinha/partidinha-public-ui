import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Shared renderer for the opengraph-image / twitter-image file conventions.
// Brand tokens mirror design/BRANDKIT.md and app/globals.css.
const NAVY = "#0B1926";
const OCEAN = "#1E4A6B";
const CYAN = "#38BDF8";
const ACCENT = "#0284C7";
const ICE = "#E0F2FE";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";
export const OG_HEADLINE = "Organize sua pelada sem sair do WhatsApp.";
export const OG_ALT = `${SITE_NAME}: ${OG_HEADLINE}`;

type RenderOptions = {
  /** Small label above the headline (e.g. a page title). */
  eyebrow?: string;
  /** Main text. Defaults to the site headline. */
  title?: string;
};

let logoCache: Promise<string> | undefined;

function loadLogo(): Promise<string> {
  // process.cwd() is the Next.js project directory at build time.
  logoCache ??= readFile(join(process.cwd(), "app/logo-icon.png")).then(
    (buf) => `data:image/png;base64,${buf.toString("base64")}`,
  );
  return logoCache;
}

export async function renderOgImage({
  eyebrow = "Bot no seu WhatsApp",
  title = OG_HEADLINE,
}: RenderOptions = {}) {
  const logo = await loadLogo();
  const host = new URL(SITE_URL).host;
  const titleSize = title.length > 34 ? 72 : 84;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: NAVY,
          backgroundImage: `radial-gradient(ellipse 900px 520px at 50% -10%, rgba(56, 189, 248, 0.38) 0%, rgba(2, 132, 199, 0.16) 45%, rgba(11, 25, 38, 0) 75%), linear-gradient(160deg, ${NAVY} 0%, #0E2436 60%, ${OCEAN} 140%)`,
          color: "#FFFFFF",
          padding: "72px 80px",
          overflow: "hidden",
        }}
      >
        {/* Technical grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(to right, rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Cyan glow behind the logo */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: 150,
            width: 520,
            height: 520,
            display: "flex",
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, rgba(2, 132, 199, 0.1) 45%, rgba(11, 25, 38, 0) 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            position: "relative",
          }}
        >
          {/* Brand row */}
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={logo} width={64} height={64} style={{ borderRadius: 16 }} />
            <div
              style={{
                display: "flex",
                fontSize: 40,
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              {SITE_NAME}
            </div>
          </div>

          {/* Headline block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 690,
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 12,
                padding: "10px 22px",
                borderRadius: 9999,
                border: "1.5px solid rgba(56, 189, 248, 0.45)",
                backgroundColor: "rgba(30, 74, 107, 0.45)",
                color: ICE,
                fontSize: 26,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: CYAN,
                  boxShadow: `0 0 12px ${CYAN}`,
                }}
              />
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 26,
              color: "rgba(224, 242, 254, 0.75)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 40,
                height: 4,
                borderRadius: 9999,
                backgroundImage: `linear-gradient(90deg, ${CYAN}, ${ACCENT})`,
              }}
            />
            {host}
          </div>
        </div>

        {/* Large logo on the right */}
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={logo}
          width={300}
          height={300}
          style={{
            position: "absolute",
            right: 90,
            top: 200,
            borderRadius: 64,
            boxShadow: "0 30px 80px rgba(2, 132, 199, 0.35)",
          }}
        />
      </div>
    ),
    { ...OG_SIZE },
  );
}
