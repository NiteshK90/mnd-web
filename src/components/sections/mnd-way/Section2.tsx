import { forwardRef } from "react";

const Section2 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="font-canela text-[48px] text-mnd-charcoal">Section 2</h2>
    </section>
  );
});

Section2.displayName = "Section2";
export default Section2;
