"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // The hero entrance lives in CSS (.hero-reveal-text / .hero-reveal-card in
    // globals.css). Tweening it here made it play twice: the markup painted
    // visible, then this effect ran after hydration and reset it to opacity 0.

    // Reveal elements on scroll
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
