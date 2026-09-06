"use client";

import { useEffect, useRef } from "react";
import posthog from "posthog-js";
import {
  calculateScrollPercentage,
  getNewScrollMilestones,
} from "@/lib/scroll-depth";

export const ScrollDepthTracker: React.FC = () => {
  const triggeredRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const percentage = calculateScrollPercentage(
        scrollY,
        scrollHeight,
        innerHeight
      );

      const milestonesToTrigger = getNewScrollMilestones(
        percentage,
        triggeredRef.current
      );

      for (const milestone of milestonesToTrigger) {
        triggeredRef.current.add(milestone);
        posthog.capture("scroll_depth_reached", {
          depth_percentage: milestone,
        });
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    // Check initial position on mount (e.g. if page loads scrolled)
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return null;
};
