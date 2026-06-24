"use client";

import { forwardRef } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

interface HeroSectionProps {
  onScrollNext?: () => void;
}

const OurPeopleHeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onScrollNext }, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start bg-[url('/our-people/hero.png')] bg-cover bg-center py-6 px-6 md:px-20 flex flex-col"
    >
      <div className="flex-1 flex items-center">
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
      </div>
    </section>
  );
});

OurPeopleHeroSection.displayName = "OurPeopleHeroSection";
export default OurPeopleHeroSection;
