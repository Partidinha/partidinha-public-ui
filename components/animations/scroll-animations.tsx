"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimations: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Reveal with explicit clearProps for 100% opacity
    gsap.fromTo(
      ".gsap-hero-text",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform,opacity",
      }
    );

    // Hero Card Reveal with clearProps
    gsap.fromTo(
      ".gsap-hero-card",
      { scale: 0.92, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.15,
        ease: "back.out(1.3)",
        clearProps: "transform,opacity",
      }
    );

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
