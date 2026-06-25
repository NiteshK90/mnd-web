"use client";

import { forwardRef } from "react";

const MndCornerSection3 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

MndCornerSection3.displayName = "MndCornerSection3";
export default MndCornerSection3;
