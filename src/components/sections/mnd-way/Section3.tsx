import { forwardRef } from "react";

const Section3 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="font-canela text-[48px] text-mnd-charcoal">Section 3</h2>
    </section>
  );
});

Section3.displayName = "Section3";
export default Section3;
