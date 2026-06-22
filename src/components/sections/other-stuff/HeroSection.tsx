"use client";

import { forwardRef, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import { QuoteCard } from "@/components/sections/mnd-way/QuoteCard";

interface HeroSectionProps {
  onScrollNext?: () => void;
}

const OtherStuffHeroSection = forwardRef<HTMLElement, HeroSectionProps>(({ onScrollNext }, ref) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[url('/other-stuff/hero.png')] bg-cover bg-center py-6 px-6 md:px-36 flex flex-col">
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="font-playfair text-[clamp(3rem,6.5vw,4.5rem)] font-semibold tracking-[0.1] w-full md:w-[500px] leading-[1.2] text-white">
            Always in service of your product.
          </div>
          <div className="mt-6 flex items-center gap-6">
            <button onClick={onScrollNext} className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full cursor-pointer">
              <div className="font-sans text-xs font-semibold">Scroll to support yours</div>
              <ArrowRight color="white" size={32} strokeWidth={1} />
            </button>
          </div>
        </div>

        <div className="hidden md:block relative w-full">
          <div
            className="absolute right-[260px] top-[20px] border border-white rounded-full p-0.5 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {!hovered && (
              <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-75" />
            )}
            <div className="border-2 border-white rounded-full p-1">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>

            {hovered && (
              <div className="absolute z-50 animate-fade-in-card -left-[100px] -top-[200px]">
                <QuoteCard
                  quote="Your product doesn't run on code alone."
                  body="We have a fix for every aspect that keeps your product moving."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

OtherStuffHeroSection.displayName = "OtherStuffHeroSection";
export default OtherStuffHeroSection;
