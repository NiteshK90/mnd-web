"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { SkipToValuesButton } from "./SkipToValuesButton";

interface NoteSection2Props {
  onSkipToValues?: () => void;
}

const NoteSection2 = forwardRef<HTMLElement, NoteSection2Props>(({ onSkipToValues }, ref) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const setRef = (el: HTMLElement | null) => {
    sectionRef.current = el;
    if (typeof ref === "function") ref(el);
    else if (ref) (ref as { current: HTMLElement | null }).current = el;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-[1100ms] ease-out";
  const hidden = "opacity-0 translate-y-5";
  const visible = "opacity-100 translate-y-0";
  const animate = (delay: string) => `${base} ${inView ? visible : hidden} ${delay}`;

  return (
    <section ref={setRef} className="h-screen w-full snap-start bg-transparent overflow-y-auto flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-0 md:gap-x-[120px] max-w-[1400px] mx-auto px-6 md:px-20 pt-28 md:pt-32 items-end">

        {/* Left */}
        <div className="flex flex-col gap-4 md:gap-8 pb-8 md:pb-16">
          <span className={`font-playfair text-[48px] md:text-[160px] font-bold leading-1 text-mnd-dark ${animate("[transition-delay:0ms]")}`}>
            &ldquo;
          </span>

          <p className={`font-playfair text-[15px] md:text-[28px] font-semibold leading-[1.333] tracking-[-0.03em] text-mnd-dark ${animate("[transition-delay:200ms]")}`}>
            So, we built MND as a place where stellar engineers can find world-class opportunities...
          </p>

          <div className={animate("[transition-delay:400ms]")}>
            <SkipToValuesButton onClick={onSkipToValues} />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-0">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:100ms]")}`}>
              We have been lucky. We got opportunities &amp; exposure. We got to work with incredible people and learn from the best. And we know there are thousands of insanely talented engineers who simply have not had access to the same rooms, the same networks or the same chances.
            </p>
            <p className={`font-inter text-[16px] font-bold leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:300ms]")}`}>
              We wanted to change that.
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:500ms]")}`}>
              So we built MND as a place where stellar engineers can find world-class opportunities, international exposure, best-in-class training and people who push them to become ridiculously good at what they do.
            </p>
            <p className={`font-inter text-[16px] font-bold leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:700ms]")}`}>
              And as you know, it is not easy to get into MND&apos;s talent pool.
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:900ms]")}`}>
              We are picky. We are demanding. We care deeply about who gets in. But once you are in, you are family. <span className="font-bold">You are surrounded by people who care about quality, who want to grow, who love building things and who are not afraid of hard problems.</span>
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:1100ms]")}`}>
              And we don&apos;t manage a thousand engineers like some of our contemporaries. We know each and every one of our talent pool personally - &amp; so we are able to back them with our guarantee.
            </p>
          </div>

          <div className={`w-[72px] h-1.5 bg-mnd-dark ${animate("[transition-delay:1300ms]")}`} />

          <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark ${animate("[transition-delay:1500ms]")}`}>
            And the same is true for the clients we work with.
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection2.displayName = "NoteSection2";
export default NoteSection2;
