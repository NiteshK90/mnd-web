"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicators from "@/components/ScrollIndicators";
import HeroSection from "@/components/sections/landing/hero-section/HeroSection";
import ProblemStatementSection from "@/components/sections/landing/ProblemStatementSection";
import StartupEnterprisesCardsSection from "@/components/sections/landing/StartupEnterprisesCardsSection";
import WorkSection from "@/components/sections/landing/WorkSection";
import CareerSection from "@/components/sections/landing/CareerSection";
import GuaranteeSection from "@/components/sections/landing/GuaranteeSection";
import TestimonialsSection from "@/components/sections/landing/TestimonialsSection";
import TeamSection from "@/components/sections/landing/TeamSection";
import FooterSection from "@/components/sections/FooterSection";

const TOTAL_SECTIONS = 9; // Hero, About, Services, Work, Process, Team, Testimonials, Contact, Footer

export default function Landing() {
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
    <div id="landing-container" ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="relative bg-mnd-beige">
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal={activeIndex !== 0} showBorder={activeIndex !== 0} />
        </div>
        <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} />

        <div className="py-6">
        <ProblemStatementSection       ref={(el) => { sectionRefs.current[1] = el; }} />
        <StartupEnterprisesCardsSection    ref={(el) => { sectionRefs.current[2] = el; }} />
        <WorkSection        ref={(el) => { sectionRefs.current[3] = el; }} />
        <CareerSection     ref={(el) => { sectionRefs.current[4] = el; }} />
        <GuaranteeSection        ref={(el) => { sectionRefs.current[5] = el; }} />
        <TestimonialsSection ref={(el) => { sectionRefs.current[6] = el; }} />
        <TeamSection     ref={(el) => { sectionRefs.current[7] = el; }} />
        </div>
      </div>

      <FooterSection ref={(el) => { sectionRefs.current[8] = el; }} />

      <div className="hidden md:block">
        <ScrollIndicators
          total={TOTAL_SECTIONS}
          activeIndex={activeIndex}
          white={activeIndex === 0 || activeIndex === 6 || activeIndex === TOTAL_SECTIONS - 1}
          onScrollTo={scrollTo}
        />
      </div>
    </div>
  );
}
