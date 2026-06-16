import { forwardRef } from "react";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="max-w-[720px] font-canela text-[48px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal text-center">
        So, we built MND to plug into how you <span className="font-semibold italic">actually</span> work.
      </h2>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
