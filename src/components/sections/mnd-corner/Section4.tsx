"use client";

import { forwardRef } from "react";

const MndCornerSection4 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

MndCornerSection4.displayName = "MndCornerSection4";
export default MndCornerSection4;
