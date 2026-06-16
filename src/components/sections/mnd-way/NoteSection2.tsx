import { forwardRef } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const NoteSection2 = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-transparent overflow-y-auto">
      <div className="grid grid-cols-[460px_1fr] items-end gap-x-[120px] max-w-[1400px] mx-auto pt-[180px] px-[120px] pb-[120px]">

        {/* Left */}
        <div className="flex flex-col gap-8">
          <span className="font-canela text-[120px] font-semibold leading-none text-mnd-dark">
            &ldquo;
          </span>

          <p className="font-canela text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-mnd-dark w-[430px]">
            So, we built MND as a place where stellar engineers can find world-class opportunities...
          </p>

          <button className="mt-10 w-fit h-16 px-7 rounded-full bg-[#063A5A] text-mnd-dark font-sans text-lg font-semibold inline-flex items-center gap-4 cursor-pointer border-0">
            Skip to Our Values
            <ArrowRight color="white" />
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              We have been lucky. We got opportunities & exposure. We got to work with incredible people and learn from the best. And we know there are thousands of insanely talented engineers who simply have not had access to the same rooms, the same networks or the same chances.
            </p>
            <p className="font-sans text-[16px] font-bold leading-[1.3] text-mnd-dark max-w-[900px] font-bold">
              We wanted to change that.
            </p>
            <p className="font-sans text-[16px] leading-[1.3] text-mnd-dark max-w-[900px]">
              So we built MND as a place where stellar engineers can find world-class opportunities, international exposure, best-in-class training and people who push them to become ridiculously good at what they do.
            </p>
            <p className="font-sans text-[16px] font-bold leading-[1.3] text-mnd-dark max-w-[900px]">
              And as you know, it is not easy to get into MND’s talent pool.
            </p>
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              We are picky. We are demanding. We care deeply about who gets in. But once you are in, you are family. <span className="font-bold">You are surrounded by people who care about quality, who want to grow, who love building things and who are not afraid of hard problems.</span>
            </p>
            <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark max-w-[900px]">
              And we don’t manage a thousand engineers like some of our contemporaries. We know each and every one of our talent pool personally - & so we are able to back them with our guarantee.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-mnd-dark" />

          <p className="font-sans text-[16px] font-medium leading-[1.3] text-mnd-dark">
            And the same is true for the clients we work with.
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection2.displayName = "NoteSection2";
export default NoteSection2;
