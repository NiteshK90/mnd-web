import { forwardRef, useRef, useEffect, useState } from "react";

const WorkSection = forwardRef<HTMLElement>((_, ref) => {
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
    <section
      ref={setRef}
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-10 md:gap-20 text-center px-6 md:px-20 pt-20 md:pt-24"
    >
      {/* Headline copy */}
      <p className={`font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[650px] ${animate("[transition-delay:0ms]")}`}>
        Imagine, the best engineering talent <span className="italic">(yes, real people!)</span> - waiting to work with you.
      </p>
      <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:500ms]")}`} />
      <p className={`font-playfair text-[26px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[720px] italic ${animate("[transition-delay:900ms]")}`}>
        On your terms.
      </p>
      {/* Engagement model pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-12 pt-4 md:pt-10">
        {(["BY THE HOUR", "QUICK PLACEMENT & REPLACEMENT", "NO QUESTIONS ASKED"] as const).map((text, i) => {
          const delays = ["[transition-delay:1300ms]", "[transition-delay:1600ms]", "[transition-delay:1900ms]"];
          return (
            <div key={text} className={`[perspective:600px] cursor-pointer ${animate(delays[i])}`}>
              <div className="relative [transform-style:preserve-3d] transition-transform duration-500 hover:[transform:rotateX(180deg)]">
                {/* Pill front */}
                <span className="block py-3 px-6 md:px-8 border border-mnd-stone rounded-full font-inter text-xs font-semibold text-mnd-charcoal [backface-visibility:hidden]">
                  {text}
                </span>
                {/* Pill back */}
                <span className="absolute inset-0 flex items-center justify-center py-3 px-6 md:px-8 rounded-full bg-mnd-charcoal font-inter text-xs font-semibold text-white [backface-visibility:hidden] [transform:rotateX(180deg)]">
                  {text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

WorkSection.displayName = "WorkSection";
export default WorkSection;
