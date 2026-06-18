import { forwardRef } from "react";

const WorkSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-10 md:gap-20 text-center px-6 md:px-0"
    >
      <p className="font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[650px]">
        Imagine, the best engineering talent <span className="italic">(yes, real people!)</span> - waiting to work with you.
      </p>
      <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
      <p className="font-playfair text-[26px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[720px] italic">
        On your terms.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-12 pt-4 md:pt-10">
        {["BY THE HOUR", "QUICK PLACEMENT & REPLACEMENT", "NO QUESTIONS ASKED"].map((text) => (
          <span
            key={text}
            className="py-3 px-6 md:px-8 border-1 border-mnd-stone rounded-full bg-transparent font-sans text-xs font-semibold text-mnd-charcoal flex items-center justify-center"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
});

WorkSection.displayName = "WorkSection";
export default WorkSection;
