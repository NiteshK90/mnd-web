import { forwardRef } from "react";
import SectionCard from "@/components/SectionCard";

const blocks = [
  { label: "FOR EVERY", number: "10", description: "Engineers Invited To Apply" },
  { label: "ONLY", number: "3", description: "MAKE IT TO THE TALENT POOL" },
];

const ProcessSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <div className="w-[1050px]">
        <p className="font-canela text-[42px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal">
          Oh, & we&apos;re very picky about our talent pool –
        </p>
        <div className="flex items-center gap-8 mt-12">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-4 justify-center shrink-0">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].label}
            </span>
            <span className="font-canela text-[88px] font-medium leading-none text-mnd-charcoal">
              {blocks[0].number}
            </span>
            <span className="w-[150px] text-center font-sans text-xs font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].description}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-[74px] bg-white rounded-full shadow-progress flex items-center px-8 gap-0">
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-black shrink-0" />
            <div className="flex-1 h-1 bg-black" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-4 justify-center shrink-0">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].label}
            </span>
            <span className="font-canela text-[88px] font-medium leading-none text-mnd-charcoal">
              {blocks[1].number}
            </span>
            <span className="w-[150px] text-center font-sans text-xs font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].description}
            </span>
          </div>
        </div>

        <div className="mt-10 flex px-12">
          <SectionCard
            title="Sourcing"
            quote="We find them. They don't find us. Engineers apply on invitation."
            body="Hand-picked and filtered, we actually chat with each engineer before they begin the process with MND."
            className="w-[420px] h-[470px] px-12 py-12"
          />
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";
export default ProcessSection;
