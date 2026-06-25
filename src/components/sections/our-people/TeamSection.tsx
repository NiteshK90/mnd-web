"use client";

import { forwardRef } from "react";

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="min-h-screen w-full snap-start" />
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
