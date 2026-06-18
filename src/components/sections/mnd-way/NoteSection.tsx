import { forwardRef } from "react";
import { SkipToValuesButton } from "./SkipToValuesButton";

interface NoteSectionProps {
  onSkipToValues?: () => void;
}

const NoteSection = forwardRef<HTMLElement, NoteSectionProps>(({ onSkipToValues }, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[#F9BC10] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-0 md:gap-x-[120px] max-w-[1400px] mx-auto pt-16 px-4 pb-10 md:pt-[180px] md:px-[80px] md:pb-[120px] items-end">

        {/* Left */}
        <div className="flex flex-col gap-4 md:gap-8">
          <span className="font-canela text-[60px] md:text-[160px] font-bold leading-1 text-mnd-dark">
            &ldquo;
          </span>

          <p className="font-canela text-[18px] md:text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-mnd-dark">
            Over the past 6 years, we have built MND with the belief that software should be built properly.
          </p>

          <p className="font-canela text-[16px] md:text-[34px] font-bold leading-[1.1] text-mnd-dark">
            Thoughtfully. Cleanly.
          </p>

          <SkipToValuesButton onClick={onSkipToValues} />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-12 mt-8 md:mt-0">
          <h2 className="font-canela text-[20px] md:text-[42px] font-bold text-mnd-dark">
            A note from the founders ~
          </h2>

          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-sans text-[13px] md:text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              We, the four founders at MND, are a bunch of great friends who happened to become very, very good at software development. <span className="font-bold">We love taking something complex and making it feel simple.</span>
            </p>
            <p className="font-sans text-[13px] md:text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              And to be <span className="font-bold">completely</span> honest, we know we are great at it. We know what happens when companies cut corners, hire the wrong people who might build their product with little or no <span className="font-bold">real</span> ownership.
            </p>
            <p className="font-sans text-[13px] md:text-[16px] font-bold leading-[1.3] text-mnd-dark max-w-[900px]">
              We never wanted to be that kind of company.
            </p>
            <p className="font-sans text-[13px] md:text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              Over the past 6 years, we have built MND with the belief that software should be built properly. Every line of code that comes out of MND should feel we give a damn. Because it is not just about functionality. It is about elegance. It is about clarity. It is about the craft.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-mnd-dark" />

          <p className="font-sans text-[13px] md:text-[16px] font-medium leading-[1.3] text-mnd-dark">
            And yet - <span className="font-bold">MND was never only about code.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection.displayName = "NoteSection";
export default NoteSection;
