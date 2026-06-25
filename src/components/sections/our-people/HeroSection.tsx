"use client";

import { forwardRef, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import { QuoteCard } from "@/components/sections/mnd-way/QuoteCard";

interface HeroSectionProps {
  onScrollNext?: () => void;
}

const dot = {
  right: 225,
  top: 40,
  cardLeft: -100,
  cardTop: -150,
  quote: "Hey guess what?",
  body: "This could be you!",
};

const OurPeopleHeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onScrollNext }, ref) => {
  const [hoveredDot, setHoveredDot] = useState<boolean | null>(null);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full snap-start bg-[url('/our-people/hero.png')] bg-cover bg-center py-6 px-6 md:px-20 flex flex-col"
    >
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div
            className="animate-hero-fly-in font-playfair text-[clamp(3rem,6.5vw,4.5rem)] font-semibold tracking-[0.1] w-full md:w-[600px] leading-[1.2] text-mnd-charcoal"
            style={{ animationDelay: "500ms" }}
          >
            There's a
            <br />place for
            <br />everyone at
            <br />MND.
          </div>
          <div className="mt-6 flex items-center gap-6 animate-slide-up" style={{ animationDelay: "900ms" }}>
            <button
              onClick={onScrollNext}
              className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none"
            >
              <div className="font-inter text-xs font-semibold">Scroll to find yours</div>
              <ArrowRight color="white" size={32} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="hidden md:block relative w-full">
          <div
            className="absolute border border-white rounded-full p-0.5 cursor-pointer"
            style={{ right: dot.right, top: dot.top }}
            onMouseEnter={() => setHoveredDot(true)}
            onMouseLeave={() => setHoveredDot(null)}
          >
            {hoveredDot !== true && (
              <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-75" />
            )}
            <div className="border-2 border-white rounded-full p-1">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>

            {hoveredDot === true && (
              <div
                className="absolute z-50 animate-fade-in-card"
                style={{ left: dot.cardLeft, top: dot.cardTop }}
              >
                <QuoteCard quote={dot.quote} body={dot.body} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

OurPeopleHeroSection.displayName = "OurPeopleHeroSection";
export default OurPeopleHeroSection;
