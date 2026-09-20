"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Content is visible by default; motion is an enhancement. Users who ask for
    // reduced motion keep the plain visible page.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    // The hero entrance lives in CSS (.hero-reveal-text / .hero-reveal-card in
    // globals.css). Tweening it here made it play twice: the markup painted
    // visible, then this effect ran after hydration and reset it to opacity 0.

    // Reveal elements on scroll. `immediateRender: false` keeps each block
    // visible until its trigger fires, so a trigger that never runs leaves the
    // content on screen instead of stuck at opacity 0.
    const revealElements = gsap.utils.toArray<HTMLElement>(".gsap-reveal");
    revealElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          immediateRender: false,
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger feature cards on scroll
    gsap.fromTo(
      ".gsap-stagger-card",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        immediateRender: false,
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: "#features",
          start: "top 80%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
};
