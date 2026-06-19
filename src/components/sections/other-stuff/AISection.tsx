import { forwardRef } from "react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const AISection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex">
      <div className="flex-1 flex items-center justify-start px-16">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal">
              AI Services &amp; Integration
            </p>
            <p className="font-playfair font-bold text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
              AI is here to stay
            </p>
          </div>
          <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
          <p className="font-playfair font-normal text-[40px] leading-[1.33] tracking-normal text-mnd-charcoal">
            The best-in-class AI<br />
            engineers on bench for<br />
            you.
          </p>
          <Link href="mailto:hello@mynextdeveloper.com?subject=Schedule a Call" className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit">
            <span className="font-sans text-xs font-semibold">Schedule a Call</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <div className="flex-1" />
    </section>
  );
});

AISection.displayName = "AISection";
export default AISection;
