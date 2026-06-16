import { forwardRef } from "react";

const Section1 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="font-canela text-[48px] text-mnd-charcoal">Section 1</h2>
    </section>
  );
});

Section1.displayName = "Section1";
export default Section1;
