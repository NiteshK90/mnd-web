"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";
import { ProfileCard } from "./ProfileCard";

const dots = [
  { left: 200,  top: 80,  cardLeft: -110, cardTop: -320, name: "Shivam",  years: 8, role: "iOS Developer",    mostLikelyTo: "Fix your phone but forget his own charger!", quote: "Give me five minutes I'll fix it!",          previousLogos: ["apple"] },
  { left: 330, top: 10,  cardLeft: -110, cardTop: -320, name: "Jenifer", years: 9, role: "Product Designer", mostLikelyTo: "Turn your UX into an award winning design",    quote: "Every pixel has a purpose",                previousLogos: ["microsoft"] },
  { left: 410, top: 90,  cardLeft: -110, cardTop: -320, name: "Ryan",    years: 7, role: "React Engineer",   mostLikelyTo: "Refactor your entire codebase in a weekend!", quote: "Clean code or no code",                    previousLogos: ["microsoft"] },
  { left: 535, top: 35,  cardLeft: -110, cardTop: -320, name: "Maya",    years: 6, role: "AI Engineer",      mostLikelyTo: "Build the API before you finish explaining it", quote: "If it's slow, it's wrong",               previousLogos: ["apple"] },
];

const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[url('/landing/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-6 md:px-20 flex flex-col"
    >
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="animate-hero-fly-in font-playfair text-[clamp(3rem,6.5vw,4.5rem)] font-semibold tracking-[0.1] w-full md:w-[500px] leading-[1.2] text-mnd-dark">
            Stellar engineers on bench for you.
          </div>
          <div className="mt-6 flex items-center gap-6">
            <Link href="mailto:hello@mynextdeveloper.com" className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">
              <div className="font-inter text-xs font-semibold">Ready when you are</div>
              <ArrowRight color="white" size={32} strokeWidth={1} />
            </Link>
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
                  <ProfileCard name={dot.name} years={dot.years} role={dot.role} mostLikelyTo={dot.mostLikelyTo} quote={dot.quote} previousLogos={dot.previousLogos} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ClientTicker />
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
