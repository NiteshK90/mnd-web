"use client";

import { forwardRef } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";
import ClientTicker from "@/components/ClientTicker";

const MndWayHeroSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative bg-[url('/mnd-way/hero.png')] bg-cover bg-center h-screen w-full snap-start py-6 px-20 flex flex-col"
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="font-canela text-[98px] font-semibold leading-[96px] tracking-[-2.5px] w-[600px] text-mnd-dark">
          The grass is greener at MND. Seriously.
        </div>
        <div className="mt-6 flex items-center gap-6">
          <Link href="#" className="flex items-center gap-2 px-8 py-2 bg-mnd-navy text-white rounded-full">
            <div>Scroll to fall in love</div>
            <ArrowRight color="white" />
          </Link>
        </div>
      </div>
    </section>
  );
});

MndWayHeroSection.displayName = "MndWayHeroSection";
export default MndWayHeroSection;
