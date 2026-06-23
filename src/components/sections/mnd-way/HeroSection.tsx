"use client";

import { forwardRef, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";
import { QuoteCard } from "./QuoteCard";

const dots = [
  {
    left: -25,
    top: 145,
    cardLeft: -100,
    cardTop: -200,
    quote: "Oh, how did you do that? Wait, share your screen for a second?",
    body: "Usually followed by 3 new ideas and quietly learning something useful.",
  },
  {
    left: 150,
    top: -50,
    cardLeft: -100,
    cardTop: -200,
    quote: "Don't worry. We're already on it.",
    body: "Sometimes the most valuable thing you can give a client is the feeling that someone reliable showed up.",
  },
  {
    left: 410,
    top: -5,
    cardLeft: -100,
    cardTop: -200,
    quote: "Need exactly 1 hour of uninterrupted deep work and its done",
    body: "We care more about depth and ownership than looking busy all day.",
  },
];

interface HeroSectionProps {
  onScrollNext?: () => void;
}

const MndWayHeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onScrollNext }, ref) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[url('/mnd-way/hero.png')] bg-cover bg-center min-h-screen w-full snap-start py-6 px-6 md:px-20 flex flex-col"
    >
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="animate-hero-fly-in font-playfair text-[40px] md:text-[60px] font-semibold leading-[1.15] text-mnd-dark md:w-[400px]" style={{ animationDelay: "500ms" }}>
            The grass is greener at
            <div>MND.</div>
            <div className="italic">Seriously.</div>
          </div>
          <div className="mt-6 flex items-center gap-8 animate-slide-up" style={{ animationDelay: "900ms" }}>
            <button onClick={onScrollNext} className="flex items-center gap-2 px-4 py-2 bg-mnd-navy text-white rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">
              <div>Scroll to fall in love</div>
              <ArrowRight color="white" size={24} />
            </button>
          </div>
        </div>

        <div className="hidden md:block relative w-full">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full p-0.5 cursor-pointer"
              style={{ left: dot.left, top: dot.top }}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              {hoveredDot !== i && (
                <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-75" />
              )}
              <div className="border-2 border-white rounded-full p-1">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {hoveredDot === i && (
                <div
                  className="absolute z-50 animate-fade-in-card"
                  style={{ left: dot.cardLeft, top: dot.cardTop }}
                >
                  <QuoteCard quote={dot.quote} body={dot.body} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

MndWayHeroSection.displayName = "MndWayHeroSection";
export default MndWayHeroSection;
