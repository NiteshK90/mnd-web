"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicators from "@/components/ScrollIndicators";
import HeroSection from "@/components/sections/our-people/HeroSection";
import AudiencesSection from "@/components/sections/our-people/AudiencesSection";
import HiringSection from "@/components/sections/our-people/HiringSection";
import TeamSection from "@/components/sections/our-people/TeamSection";
import FooterSection from "@/components/sections/FooterSection";

const TOTAL_SECTIONS = 5;

export default function OurPeople() {
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
    <div id="our-people-container" ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="relative bg-mnd-beige">
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal={activeIndex !== 0} showBorder={activeIndex !== 0} />
        </div>
        <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} onScrollNext={() => scrollTo(1)} />
        <AudiencesSection ref={(el) => { sectionRefs.current[1] = el; }} />
        <HiringSection ref={(el) => { sectionRefs.current[2] = el; }} />
        <TeamSection ref={(el) => { sectionRefs.current[3] = el; }} />
      </div>

      <FooterSection containerId="our-people-container" ref={(el) => { sectionRefs.current[4] = el; }} />

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
