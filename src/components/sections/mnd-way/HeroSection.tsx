"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";
import { QuoteCard } from "./QuoteCard";

const dots = [
  {
    left: -105,
    top: 120,
    cardLeft: -110,
    cardTop: -180,
    quote: "Oh, how did you do that? Wait, share your screen for a second?",
    body: "Usually followed by 3 new ideas and quietly learning something useful.",
  },
  {
    left: 30,
    top: -40,
    cardLeft: -110,
    cardTop: -180,
    quote: "Don't worry. We're already on it.",
    body: "Sometimes the most valuable thing you can give a client is the feeling that someone reliable showed up.",
  },
  {
    left: 260,
    top: -20,
    cardLeft: -120,
    cardTop: -180,
    quote: "Need exactly 1 hour of uninterrupted deep work and its done",
    body: "We care more about depth and ownership than looking busy all day.",
  },
];

const MndWayHeroSection = forwardRef<HTMLElement>((_, ref) => {
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="relative bg-[url('/mnd-way/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-20 flex flex-col"
    >
      <div className="flex-1 flex items-center gap-6 relative">
        <div className="flex flex-col justify-center">
          <div className="font-canela text-[72px] font-semibold leading-[96px] tracking-[-2.5px] text-mnd-dark w-[400px]">
            The grass is greener at
            <div>MND.</div>
            <div className="italic">Seriously.</div>
          </div>
          <div className="mt-6 flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 px-8 py-2 bg-mnd-navy text-white rounded-full">
              <div>Scroll to fall in love</div>
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
