"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { SkipToValuesButton } from "./SkipToValuesButton";

interface NoteSectionProps {
  onSkipToValues?: () => void;
}

const NoteSection = forwardRef<HTMLElement, NoteSectionProps>(({ onSkipToValues }, ref) => {
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
    <section ref={setRef} className="h-screen w-full snap-start bg-[#F9BC10] overflow-y-auto flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-x-0 md:gap-x-[120px] max-w-[1400px] mx-auto px-6 md:px-20 pt-28 md:pt-32 items-center">

        {/* Left */}
        <div className="flex flex-col gap-4 md:gap-8 pb-8 md:pb-16">
          <span className={`font-playfair text-[60px] md:text-[200px] font-normal leading-1 text-mnd-dark ${animate("[transition-delay:0ms]")}`}>
            &ldquo;
          </span>

          <p className={`font-playfair text-[18px] md:text-[28px] font-semibold leading-[1.333] tracking-[-0.03em] text-mnd-dark ${animate("[transition-delay:200ms]")}`}>
            Over the past 6 years, we have built MND with the belief that software should be built <span className="italic">properly</span>.
          </p>

          <p className={`font-playfair text-[16px] md:text-[28px] font-semibold leading-[1.333] tracking-[-0.03em] text-mnd-dark ${animate("[transition-delay:400ms]")}`}>
            Thoughtfully. Cleanly.
          </p>

          <div className={animate("[transition-delay:600ms]")}>
            <SkipToValuesButton onClick={onSkipToValues} />
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-12 mt-8 md:mt-0">
          <h2 className={`font-playfair text-[20px] md:text-[28px] font-semibold leading-[1.333] tracking-[-0.03em] text-mnd-dark ${animate("[transition-delay:100ms]")}`}>
            A note from the founders ~
          </h2>

          <div className="flex flex-col gap-4 md:gap-6">
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:300ms]")}`}>
              We, the four founders at MND, are a bunch of great friends who happened to become very, very good at software development. <span className="font-bold">We love taking something complex and making it feel simple.</span>
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:500ms]")}`}>
              And to be <span className="italic font-bold">completely</span> honest, we know we are great at it. We know what happens when companies cut corners, hire the wrong people who might build their product with little or no <span className="italic font-bold">real</span> ownership.
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:700ms]")}`}>
              <span className="font-bold">We never wanted to be that kind of company.</span>
            </p>
            <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark max-w-[900px] ${animate("[transition-delay:900ms]")}`}>
              Over the past 6 years, we have built MND with the belief that software should be built properly. Every line of code that comes out of MND should feel <span className="font-bold">we give a damn.</span> Because it is not just about functionality. It is about elegance. It is about clarity. <span className="font-bold">It is about the craft.</span>
            </p>
          </div>

          <div className={`w-[72px] h-1.5 bg-mnd-dark ${animate("[transition-delay:1100ms]")}`} />

          <p className={`font-inter text-[16px] font-normal leading-[1.6] text-mnd-dark ${animate("[transition-delay:1300ms]")}`}>
            And yet - <span className="font-bold">MND was never only about code.</span>
          </p>
        </div>

      </div>
    </section>
  );
});

NoteSection.displayName = "NoteSection";
export default NoteSection;
