"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ShowcaseSection } from "@/components/sections/showcase-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/layout/footer";
import { TeamRaffleModal } from "@/components/widgets/team-raffle-modal";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import { ScrollDepthTracker } from "@/components/analytics/scroll-depth-tracker";

export default function Home() {
  const [selectedHeadlineKey, setSelectedHeadlineKey] = useState("A");
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  const [isRaffleModalOpen, setIsRaffleModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      {/* GSAP Scroll Animations Initializer */}
      <ScrollAnimations />
      {/* PostHog Scroll Depth Tracker (50%, 75%, 100%) */}
      <ScrollDepthTracker />

      {/* Main Container Wrapper */}
      <div
        id="lp-container"
        className={`transition-all duration-300 min-h-screen relative overflow-x-clip ${viewportMode === "mobile" ? "view-mobile-frame my-6" : ""
          }`}
      >
        <HeroSection selectedHeadlineKey={selectedHeadlineKey} />
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        {/* <ShowcaseSection /> */}
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>

      {/* Interactive Modal */}
      <TeamRaffleModal
        isOpen={isRaffleModalOpen}
        onClose={() => setIsRaffleModalOpen(false)}
      />
    </main>
  );
}
