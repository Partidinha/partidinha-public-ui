import React from "react";
import { HOW_IT_WORKS } from "@/lib/copy";
import { FeatureSteps, type Feature } from "@/components/ui/feature-section";
import { WhatsAppBotJoin } from "@/components/widgets/whatsapp-bot-join";

import CreateGroup from "@/app/create-group.webp";
import NewMatch from "@/app/new-match.webp";
import Match from "@/app/match.webp";

/** Visual de cada passo: screenshot do app ou mock renderizado (Passo 02). */
const STEP_VISUALS: Partial<Feature>[] = [
  { image: CreateGroup },
  { node: <WhatsAppBotJoin /> },
  { image: NewMatch },
  { image: Match },
];

const FEATURES: Feature[] = HOW_IT_WORKS.map((step, index) => ({
  ...step,
  ...STEP_VISUALS[index],
}));

function GridPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-sky-500/10 stroke-sky-400/30 mix-blend-overlay"
    >
      <defs>
        <pattern
          id="how-it-works-grid"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
          x="-12"
          y="4"
        >
          <path d="M.5 24V.5H24" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#how-it-works-grid)" />
    </svg>
  );
}

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="bg-slate-50 border-b border-slate-200/60 relative">
      {/* Background SVG Grid Overlay & Cyan Rays. Sibling of the sticky FeatureSteps
          panel (not an ancestor) so its own overflow-hidden can't break position: sticky. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(white,transparent)]">
        <div className="from-sky-500/15 via-cyan-400/10 to-transparent absolute -inset-x-20 inset-y-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
          <GridPattern />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-2 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Do grupo ao campo em 4 toques
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <FeatureSteps
          features={FEATURES}
          title="Mais fácil que cobrar pênalti sem goleiro"
        />
      </div>
    </section>
  );
};
