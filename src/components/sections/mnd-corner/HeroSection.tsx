"use client";

import { forwardRef } from "react";

const MndCornerHeroSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start bg-[url('/mnd-corner/hero.png')] bg-cover bg-center flex flex-col"
    >
      <div className="flex-1" />
    </section>
  );
});

MndCornerHeroSection.displayName = "MndCornerHeroSection";
export default MndCornerHeroSection;
