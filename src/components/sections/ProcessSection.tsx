import { forwardRef } from "react";

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
        <div className="flex items-center gap-6 mt-12">
          {/* Block 1 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].label}
            </span>
            <span className="font-canela text-[64px] font-bold leading-none text-mnd-charcoal">
              {blocks[0].number}
            </span>
            <span className="w-[150px] text-center font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[0].description}
            </span>
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-[68px] bg-white rounded-full shadow-progress flex items-center px-8 gap-0">
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-black shrink-0" />
            <div className="flex-1 h-1 bg-black" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
            <div className="flex-1 h-0.5 bg-mnd-silver" />
            <div className="w-4 h-4 rounded-full border-1 border-mnd-charcoal bg-white shrink-0" />
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center gap-2 justify-center shrink-0">
            <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].label}
            </span>
            <span className="font-canela text-[64px] font-bold leading-none text-mnd-charcoal">
              {blocks[1].number}
            </span>
            <span className="w-[150px] text-center font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-mnd-charcoal">
              {blocks[1].description}
            </span>
          </div>
        </div>

        <div className="mt-8 flex px-12">
          <div className="bg-white rounded-[28px] shadow-card py-12 px-6 flex flex-col gap-6">
            <h3 className="font-canela text-[24px] font-semibold leading-[1.1] text-mnd-charcoal">
              Sourcing
            </h3>
            <div className="w-16 h-[3px] bg-mnd-charcoal" />
            <div className="flex items-center gap-4 justify-end">
              <div className="text-[58px] italic">"</div>
              <p className="font-sans text-xs italic font-medium leading-[1.3]">
                We find them. They don&apos;t find us.<br />
                Engineers apply on invitation.
              </p>
            </div>
            <p className="font-sans w-[250px] text-sm font-bold leading-[1.35] text-mnd-charcoal">
              Hand-picked and filtered, we actually chat with each engineer before they begin the process with MND.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";
export default ProcessSection;
