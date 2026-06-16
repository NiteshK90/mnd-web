import { forwardRef } from "react";

const Section4 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="font-canela text-[48px] text-mnd-charcoal">Section 4</h2>
    </section>
  );
});

Section4.displayName = "Section4";
export default Section4;
