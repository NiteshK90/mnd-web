"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";

const dots = [
  { left: 90,  top: 80,  cardLeft: -60,  cardTop: -620 },
  { left: 230, top: 10,  cardLeft: -60,  cardTop: -620 },
  { left: 310, top: 90,  cardLeft: -100, cardTop: -620 },
  { left: 440, top: 35,  cardLeft: -200, cardTop: -620 },
];

function ProfileCard() {
  return (
    <div className="w-[410px] h-[600px] bg-white/90 backdrop-blur-[10px] rounded-[36px] p-12 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.08),0_2px_8px_rgba(0,0,0,.04)] flex flex-col gap-7">
      <h3 className="font-sans text-[24px] font-bold leading-[1.2] text-mnd-charcoal">
        Meet Shivam,
      </h3>

      <div className="flex items-center gap-4">
        <div className="w-[42px] h-[42px] flex items-center justify-center shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="9" width="24" height="17" rx="3" stroke="#231F20" strokeWidth="1.75" />
            <path d="M9 9V7a5 5 0 0 1 10 0v2" stroke="#231F20" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M2 16h24" stroke="#231F20" strokeWidth="1.75" />
          </svg>
        </div>
        <p className="font-sans text-[16px] font-medium text-mnd-charcoal">8 years of work ex iOS developer</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-[24px] font-bold text-mnd-charcoal">Most likely to:</p>
        <p className="font-sans text-[18px] font-medium leading-[1.35] text-mnd-charcoal">
          Fix your phone but forget his own charger!
        </p>
      </div>

      <div className="flex gap-3 items-start">
        <span className="font-sans text-[72px] font-extrabold text-mnd-charcoal leading-[0.8]">&ldquo;</span>
        <p className="font-sans text-[18px] font-medium leading-[1.35] text-mnd-charcoal mt-5">
          Give me five minutes I&apos;ll fix it!
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-[16px] font-medium text-mnd-charcoal">Previously at:</p>
        <p className="font-sans text-[16px] font-medium text-mnd-charcoal">Company Name</p>
      </div>
    </div>
  );
}

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
