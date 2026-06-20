"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicators from "@/components/ScrollIndicators";
import HeroSection from "@/components/sections/other-stuff/HeroSection";
import ProductSection from "@/components/sections/other-stuff/ProductSection";
import AISection from "@/components/sections/other-stuff/AISection";
import MvpSection from "@/components/sections/other-stuff/MvpSection";
import ServicesSection from "@/components/sections/other-stuff/ServicesSection";
import FooterSection from "@/components/sections/FooterSection";

const TOTAL_SECTIONS = 6;

export default function OtherStuff() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="other-stuff-container" ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      {activeIndex !== TOTAL_SECTIONS - 1 && (
        <div className="fixed top-3 md:top-8 left-0 right-0 flex justify-center z-50">
          <Navbar minimal={activeIndex !== 0} showBorder={activeIndex !== 0} />
        </div>
      )}

      <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} onScrollNext={() => scrollTo(1)} />

      <div className="relative bg-mnd-linen">
        <ProductSection ref={(el) => { sectionRefs.current[1] = el; }} />
        <AISection ref={(el) => { sectionRefs.current[2] = el; }} />
        <MvpSection ref={(el) => { sectionRefs.current[3] = el; }} />
        <ServicesSection ref={(el) => { sectionRefs.current[4] = el; }} />
      </div>

      <FooterSection containerId="other-stuff-container" ref={(el) => { sectionRefs.current[5] = el; }} />

      <div className="hidden md:block">
        <ScrollIndicators
          total={TOTAL_SECTIONS}
          activeIndex={activeIndex}
          white={activeIndex === 0 || activeIndex === 3 || activeIndex === TOTAL_SECTIONS - 1}
          onScrollTo={scrollTo}
        />
      </div>
    </div>
  );
}
