import { forwardRef } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const NoteSection3 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[#2EA3C3] overflow-y-auto">
      <div className="grid grid-cols-[400px_1fr] gap-x-[120px] max-w-[1400px] mx-auto pt-[280px] px-[120px] pb-[120px] items-center">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <span className="font-canela text-[160px] font-bold leading-1 text-white">
            &ldquo;
          </span>

          <p className="font-canela text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-white w-[430px]]">
            We have been fortunate to have worked with some exceptional people who love good product
          </p>

          <button className="w-fit py-2 px-6 rounded-full bg-mnd-button text-white inline-flex items-center gap-4 cursor-pointer border-0">
            <div className="text-sm font-semibold">Skip to Our Values</div>
            <ArrowRight color="white" size={24} />
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-white max-w-[900px]">
              We have been fortunate to have worked with some exceptional people who love good product. People who love building meaningful businesses. People who value trust, honesty and well, humans. People who care about doing things properly. People who enjoy the process, not just the outcome.
            </p>
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-white max-w-[900px]">
              We’d like to continue down the same path.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-white" />

          <p className="font-sans text-[16px] font-medium leading-[1.3] text-white">
            These are the values we hold high at MND. <span className="font-bold">And these are the things we refuse to compromise on.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection3.displayName = "NoteSection3";
export default NoteSection3;
