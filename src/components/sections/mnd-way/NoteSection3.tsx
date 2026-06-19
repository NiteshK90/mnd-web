import { forwardRef } from "react";
import { SkipToValuesButton } from "./SkipToValuesButton";

interface NoteSection3Props {
  onSkipToValues?: () => void;
}

const NoteSection3 = forwardRef<HTMLElement, NoteSection3Props>(({ onSkipToValues }, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[#2EA3C3] overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-0 md:gap-x-[120px] max-w-[1400px] mx-auto pt-16 px-4 pb-10 md:pt-[280px] md:px-[120px] md:pb-[120px] items-center">

        {/* Left */}
        <div className="flex flex-col gap-4 md:gap-8">
          <span className="font-playfair text-[48px] md:text-[200px] font-normal leading-1 text-white">
            &ldquo;
          </span>

          <p className="font-playfair text-[15px] md:text-[30px] font-semibold leading-[1.2] text-white">
            We have been fortunate to have worked with some exceptional people who love good product
          </p>

          <SkipToValuesButton onClick={onSkipToValues} />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-0">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-white max-w-[900px]">
              We have been fortunate to have worked with some exceptional people who love good product. People who love building meaningful businesses. <span className="font-bold">People who value trust, honesty and well, <span className="italic">humans</span>.</span> People who care about doing things properly. People who enjoy the process, not just the outcome.
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-white max-w-[900px]">
              We’d like to continue down the same path.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-white" />

          <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-white">
            These are the values we hold high at MND. <span className="font-bold">And these are the things we refuse to compromise on.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection3.displayName = "NoteSection3";
export default NoteSection3;
