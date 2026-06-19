import { forwardRef } from "react";
import { SkipToValuesButton } from "./SkipToValuesButton";

interface NoteSection2Props {
  onSkipToValues?: () => void;
}

const NoteSection2 = forwardRef<HTMLElement, NoteSection2Props>(({ onSkipToValues }, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start bg-transparent overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-0 md:gap-x-[120px] max-w-[1400px] mx-auto pt-16 px-4 pb-10 md:pt-[180px] md:px-[80px] md:pb-[120px] items-end">

        {/* Left */}
        <div className="flex flex-col gap-4 md:gap-8">
          <span className="font-playfair text-[48px] md:text-[160px] font-bold leading-1 text-mnd-dark">
            &ldquo;
          </span>

          <p className="font-playfair text-[15px] md:text-[28px] font-semibold leading-[1.18] text-mnd-dark">
            So, we built MND as a place where stellar engineers can find world-class opportunities...
          </p>

          <SkipToValuesButton onClick={onSkipToValues} />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-0">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-mnd-dark max-w-[900px]">
              We have been lucky. We got opportunities & exposure. We got to work with incredible people and learn from the best. And we know there are thousands of insanely talented engineers who simply have not had access to the same rooms, the same networks or the same chances.
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-bold leading-[1.2] text-mnd-dark max-w-[900px]">
              We wanted to change that.
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-mnd-dark max-w-[900px]">
              So we built MND as a place where stellar engineers can find world-class opportunities, international exposure, best-in-class training and people who push them to become ridiculously good at what they do.
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-bold leading-[1.2] text-mnd-dark max-w-[900px]">
              And as you know, it is not easy to get into MND’s talent pool.
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-mnd-dark max-w-[900px]">
              We are picky. We are demanding. We care deeply about who gets in. But once you are in, you are family. <span className="font-bold">You are surrounded by people who care about quality, who want to grow, who love building things and who are not afraid of hard problems.</span>
            </p>
            <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-mnd-dark max-w-[900px]">
              And we don’t manage a thousand engineers like some of our contemporaries. We know each and every one of our talent pool personally - & so we are able to back them with our guarantee.
            </p>
          </div>

          <div className="w-[72px] h-1.5 bg-mnd-dark" />

          <p className="font-sans text-[12px] md:text-[18px] font-normal leading-[1.2] text-mnd-dark">
            And the same is true for the clients we work with.
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection2.displayName = "NoteSection2";
export default NoteSection2;
