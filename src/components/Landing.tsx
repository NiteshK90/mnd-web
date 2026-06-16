"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemStatementSection from "@/components/sections/ProblemStatementSection";
import StartupEnterprisesCardsSection from "@/components/sections/StartupEnterprisesCardsSection";
import WorkSection from "@/components/sections/WorkSection";
import CareerSection from "@/components/sections/CareerSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
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
      <div className="fixed top-6 left-0 right-0 flex justify-center z-50">
        <Navbar />
      </div>
      <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} />

      <div className="relative py-6 bg-mnd-linen">
        <ProblemStatementSection       ref={(el) => { sectionRefs.current[1] = el; }} />
        <StartupEnterprisesCardsSection    ref={(el) => { sectionRefs.current[2] = el; }} />
        <WorkSection        ref={(el) => { sectionRefs.current[3] = el; }} />
        <CareerSection     ref={(el) => { sectionRefs.current[4] = el; }} />
        <GuaranteeSection        ref={(el) => { sectionRefs.current[5] = el; }} />
        <TestimonialsSection ref={(el) => { sectionRefs.current[6] = el; }} />
        <TeamSection     ref={(el) => { sectionRefs.current[7] = el; }} />
      </div>

      <FooterSection ref={(el) => { sectionRefs.current[8] = el; }} />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => {
          const isWhiteSection = activeIndex === 0 || activeIndex === 6 || activeIndex === TOTAL_SECTIONS - 1;
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-4 w-4 rounded-full transition-all duration-300 cursor-pointer border ${
                isWhiteSection
                  ? `border-white ${isActive ? "bg-white" : "bg-transparent"}`
                  : `border-black ${isActive ? "bg-black" : "bg-transparent"}`
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
