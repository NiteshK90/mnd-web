import { forwardRef } from "react";

const WorkSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-20 text-center"
    >
      <p className="font-canela text-[42px] font-normal leading-[1.15] tracking-[-0.03em] text-mnd-charcoal w-[650px]">
        Imagine, the best engineering talent (yes, real people!) - waiting to work with you.
      </p>
      <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
      <p className="font-canela text-[42px] font-semibold leading-[1.05] tracking-[-0.03em] text-mnd-charcoal w-[720px]">
        On your terms.
      </p>
      <div className="flex items-center gap-12 pt-10">
        {["BY THE HOUR", "QUICK PLACEMENT & REPLACEMENT", "NO QUESTIONS ASKED"].map((text) => (
          <span
            key={text}
            className="h-[52px] px-9 border-[1.5px] border-mnd-stone rounded-full bg-transparent font-sans text-sm font-semibold text-mnd-charcoal flex items-center justify-center"
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
