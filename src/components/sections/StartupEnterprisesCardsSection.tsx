import { forwardRef } from "react";

const StartupEnterprisesCardsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-16">
      <h2 className="max-w-[720px] font-canela text-[48px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal text-center">
        So, we built MND to plug into how you <span className="font-semibold italic">actually</span> work.
      </h2>

      <div className="flex justify-center gap-[180px]">
        {/* For Startups */}
        <div className="relative w-[340px] h-[430px]">
          <div className="absolute w-[300px] h-[380px] rounded-[28px] bg-white shadow-card left-[-24px] top-3 -rotate-[4deg]" />
          <div className="absolute w-[300px] h-[380px] rounded-[28px] bg-white shadow-card left-[-8px] top-1.5 -rotate-[2deg]" />
          <div className="relative w-[300px] h-[380px] bg-white rounded-[28px] p-9 shadow-card flex flex-col">
            <p className="font-sans text-[14px] font-semibold text-mnd-charcoal">● For Startups</p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-2">
                <span className="font-sans text-[46px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
                <p className="font-sans text-[16px] italic font-medium leading-[1.25] text-mnd-charcoal w-[190px] mt-2">
                  Need specialised skills without burning runway on permanent hires?
                </p>
              </div>
              <div className="w-[42px] h-[5px] bg-mnd-charcoal" />
            </div>
            <p className="mt-9 font-sans text-[24px] font-bold leading-[1.2] text-mnd-charcoal w-[210px]">
              Why put short term hires on a long term payroll?
            </p>
          </div>
        </div>

        {/* For Enterprises */}
        <div className="relative w-[340px] h-[430px]">
          <div className="absolute w-[300px] h-[380px] rounded-[28px] bg-white shadow-card left-[-24px] top-3 -rotate-[4deg]" />
          <div className="absolute w-[300px] h-[380px] rounded-[28px] bg-white shadow-card left-[-8px] top-1.5 -rotate-[2deg]" />
          <div className="relative w-[300px] h-[380px] bg-white rounded-[28px] p-9 shadow-card flex flex-col">
            <p className="font-sans text-[14px] font-semibold text-mnd-charcoal">● For Enterprises</p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-2">
                <span className="font-sans text-[46px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
                <p className="font-sans text-[16px] italic font-medium leading-[1.25] text-mnd-charcoal w-[190px] mt-2">
                  Need specialised skills without burning runway on permanent hires?
                </p>
              </div>
              <div className="w-[42px] h-[5px] bg-mnd-charcoal" />
            </div>
            <p className="mt-9 font-sans text-[24px] font-bold leading-[1.2] text-mnd-charcoal w-[210px]">
              Why put short term hires on a long term payroll?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

StartupEnterprisesCardsSection.displayName = "StartupEnterprisesCardsSection";
export default StartupEnterprisesCardsSection;
