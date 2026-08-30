import React from "react";
import { HOW_IT_WORKS } from "@/lib/copy";
import { FeatureSteps } from "@/components/ui/feature-section";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="bg-slate-50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-3xl mx-auto mb-2 space-y-3 gsap-reveal">
          <span className="bg-sky-100 text-sky-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-sky-200">
            Do grupo ao campo em 4 toques
          </span>
        </div>
      </div>

      <FeatureSteps
        features={HOW_IT_WORKS}
        title="Mais fácil que cobrar pênalti sem goleiro"
      />
    </section>
  );
};
