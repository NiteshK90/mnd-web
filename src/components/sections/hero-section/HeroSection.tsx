"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";
import { ProfileCard } from "./ProfileCard";

const dots = [
  { left: 90,  top: 80,  cardLeft: -110,  cardTop: -305 },
  { left: 230, top: 10,  cardLeft: -110,  cardTop: -305 },
  { left: 310, top: 90,  cardLeft: -110,  cardTop: -305 },
  { left: 440, top: 35,  cardLeft: -110,  cardTop: -305 },
];

const HeroSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[url('/landing/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-20 flex flex-col"
    >
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="font-canela text-[98px] font-semibold leading-[96px] tracking-[-2.5px] w-[600px] text-mnd-dark">
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
                  <ProfileCard />
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
