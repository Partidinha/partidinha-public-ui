import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Partidinha + Escola Flamengo Palmas";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({ eyebrow: "Apresentação", title: "Partidinha + Escola Flamengo Palmas" });
}
