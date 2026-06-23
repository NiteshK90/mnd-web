"use client";

import { forwardRef } from "react";

const MndCornerSection2 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

MndCornerSection2.displayName = "MndCornerSection2";
export default MndCornerSection2;
