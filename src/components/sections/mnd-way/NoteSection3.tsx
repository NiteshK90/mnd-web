import { forwardRef } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const NoteSection3 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[#2EA3C3] overflow-y-auto">
      <div className="grid grid-cols-[460px_1fr] items-center gap-x-[120px] max-w-[1400px] mx-auto pt-[180px] px-[120px] pb-[120px]">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <span className="font-canela text-[120px] font-semibold leading-none text-white">
            &ldquo;
          </span>

          <p className="font-canela text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-white w-[430px]">
            We have been fortunate to have worked with some exceptional people who love good product
          </p>

          <button className="mt-10 w-fit h-16 px-7 rounded-full bg-[#063A5A] text-white font-sans text-lg font-semibold inline-flex items-center gap-4 cursor-pointer border-0">
            Skip to Our Values
            <ArrowRight color="white" />
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
            And yet - <span className="font-bold">MND was never only about code.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection3.displayName = "NoteSection3";
export default NoteSection3;
