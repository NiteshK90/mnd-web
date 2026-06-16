import { forwardRef } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const NoteSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-[#F9BC10] overflow-y-auto">
      <div className="grid grid-cols-[460px_1fr] gap-x-[120px] max-w-[1400px] mx-auto pt-[180px] px-[120px] pb-[120px]">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <span className="font-canela text-[120px] font-semibold leading-none text-mnd-dark">
            &ldquo;
          </span>

          <p className="font-canela text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-mnd-dark w-[430px]">
            Over the past 6 years, we have built MND with the belief that software should be built properly.
          </p>

          <p className="font-canela text-[38px] font-bold leading-[1.1] text-mnd-dark">
            Thoughtfully. Cleanly.
          </p>

          <button className="mt-10 w-fit h-16 px-7 rounded-full bg-[#063A5A] text-white font-sans text-lg font-semibold inline-flex items-center gap-4 cursor-pointer border-0">
            Skip to Our Values
            <ArrowRight color="white" />
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <h2 className="font-canela text-[48px] font-bold leading-[1.1] text-mnd-dark">
            A note from the founders ~
          </h2>

          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              We, the four founders at MND, are a bunch of great friends who happened to become very, very good at software development. <span className="font-bold">We love taking something complex and making it feel simple.</span>
            </p>
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              And to be <span className="font-bold">completely</span> honest, we know we are great at it. We know what happens when companies cut corners, hire the wrong people who might build their product with little or no <span className="font-bold">real</span> ownership.
            </p>
            <p className="font-sans text-[16px] font-bold leading-[1.3] text-mnd-dark max-w-[900px]">
              We never wanted to be that kind of company.
            </p>
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              Over the past 6 years, we have built MND with the belief that software should be built properly. Every line of code that comes out of MND should feel we give a damn. Because it is not just about functionality. It is about elegance. It is about clarity. It is about the craft.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-mnd-dark" />

          <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark">
            And yet - <span className="font-bold">MND was never only about code.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection.displayName = "NoteSection";
export default NoteSection;
