import { useRef, useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollIndicators from "@/components/ScrollIndicators";
import HeroSection from "@/components/sections/mnd-way/HeroSection";
import NoteSection from "@/components/sections/mnd-way/NoteSection";
import NoteSection2 from "@/components/sections/mnd-way/NoteSection2";
import NoteSection3 from "@/components/sections/mnd-way/NoteSection3";
import ValuesSection from "@/components/sections/mnd-way/ValuesSection";
import FooterSection from "@/components/sections/FooterSection";

const TOTAL_SECTIONS = 6;

export default function MndWay() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.location.hash === "#values") {
      const timer = setTimeout(() => scrollTo(4), 300);
      return () => clearTimeout(timer);
    }
  }, []);

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

  // Scroll container with snap sections
  return (
    <div id="mnd-way-container" ref={containerRef} className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="relative bg-mnd-beige">
        {/* Sticky Navbar */}
        <div className="sticky top-3 md:top-8 z-50 flex justify-center">
          <Navbar minimal={activeIndex !== 0} />
        </div>
        {/* Hero */}
        <HeroSection ref={(el) => { sectionRefs.current[0] = el; }} onScrollNext={() => scrollTo(1)} />
        {/* Founders notes */}
        <NoteSection ref={(el) => { sectionRefs.current[1] = el; }} onSkipToValues={() => scrollTo(4)} />
        <NoteSection2 ref={(el) => { sectionRefs.current[2] = el; }} onSkipToValues={() => scrollTo(4)} />
        <NoteSection3 ref={(el) => { sectionRefs.current[3] = el; }} onSkipToValues={() => scrollTo(4)} />
        {/* Values */}
        <ValuesSection ref={(el) => { sectionRefs.current[4] = el; }} />
      </div>

      {/* Footer */}
      <FooterSection containerId="mnd-way-container" ref={(el) => { sectionRefs.current[5] = el; }} />

      {/* Scroll Indicators */}
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
