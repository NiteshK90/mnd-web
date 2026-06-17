"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";
import { ProfileCard } from "./ProfileCard";

const dots = [
  { left: 235,  top: 80,  cardLeft: -110, cardTop: -305, name: "Shivam",  years: 8, role: "iOS Developer",    mostLikelyTo: "Fix your phone but forget his own charger!", quote: "Give me five minutes I'll fix it!" },
  { left: 365, top: 10,  cardLeft: -110, cardTop: -305, name: "Jenifer", years: 9, role: "Product Designer", mostLikelyTo: "Turn your UX into an award winning design",    quote: "Every pixel has a purpose" },
  { left: 450, top: 90,  cardLeft: -110, cardTop: -305, name: "Ryan",    years: 7, role: "React Engineer",   mostLikelyTo: "Refactor your entire codebase in a weekend!", quote: "Clean code or no code" },
  { left: 570, top: 35,  cardLeft: -110, cardTop: -305, name: "Maya",    years: 6, role: "AI Engineer",      mostLikelyTo: "Build the API before you finish explaining it", quote: "If it's slow, it's wrong" },
];

const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[url('/landing/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-36 flex flex-col"
    >
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="font-[Canela] text-6xl font-semibold tracking-[0.1] w-[400px] leading-[1.2] text-mnd-dark">
            Stellar engineers on bench for you.
          </div>
          <div className="mt-6 flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 px-8 py-2 bg-mnd-navy text-white rounded-full">
              <div>Ready when you are</div>
              <ArrowRight color="white" />
            </Link>
          </div>
        </div>

        <div className="relative">
          {dots.map((dot, i) => (
            <div
              key={i}
              className="absolute border border-white rounded-full p-0.5 cursor-pointer"
              style={{ left: dot.left, top: dot.top }}
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              <div className="border border-white rounded-full p-1.5">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {hoveredDot === i && (
                <div
                  className="absolute z-50"
                  style={{ left: dot.cardLeft, top: dot.cardTop }}
                >
                  <ProfileCard name={dot.name} years={dot.years} role={dot.role} mostLikelyTo={dot.mostLikelyTo} quote={dot.quote} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0">
        <ClientTicker />
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
export default HeroSection;
