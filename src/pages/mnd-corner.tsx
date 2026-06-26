"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicators from "@/components/ScrollIndicators";
import HeroSection from "@/components/sections/mnd-corner/HeroSection";
import BlogSection from "@/components/sections/mnd-corner/BlogSection";
import SuccessStorySection from "@/components/sections/mnd-corner/SuccessStorySection";
import CostCalculatorSection from "@/components/sections/mnd-corner/CostCalculatorSection";
import MndLearnSection from "@/components/sections/mnd-corner/MndLearnSection";
import FooterSection from "@/components/sections/FooterSection";

const TOTAL_SECTIONS = 6;

export default function MndCorner() {
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
    <div id="mnd-corner-container" ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="relative bg-mnd-beige">
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal={activeIndex !== 0} showBorder={activeIndex !== 0} />
        </div>
        <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} onScrollNext={() => scrollTo(1)} />
        <BlogSection ref={(el) => { sectionRefs.current[1] = el; }} />
        <SuccessStorySection ref={(el) => { sectionRefs.current[2] = el; }} />
        <CostCalculatorSection ref={(el) => { sectionRefs.current[3] = el; }} />
        <MndLearnSection ref={(el) => { sectionRefs.current[4] = el; }} />
      </div>

      <FooterSection containerId="mnd-corner-container" ref={(el) => { sectionRefs.current[5] = el; }} />

      <div className="hidden md:block">
        <ScrollIndicators
          total={TOTAL_SECTIONS}
          activeIndex={activeIndex}
          white={activeIndex === 0 || activeIndex === TOTAL_SECTIONS - 1}
          onScrollTo={scrollTo}
        />
      </div>
    </div>
  );
}
