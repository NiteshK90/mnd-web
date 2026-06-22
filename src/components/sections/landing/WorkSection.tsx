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
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-10 md:gap-20 text-center px-6 md:px-0 pt-20 md:pt-24"
    >
      <p className={`font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[650px] ${animate("[transition-delay:0ms]")}`}>
        Imagine, the best engineering talent <span className="italic">(yes, real people!)</span> - waiting to work with you.
      </p>
      <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:500ms]")}`} />
      <p className={`font-playfair text-[26px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[720px] italic ${animate("[transition-delay:900ms]")}`}>
        On your terms.
      </p>
      <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-12 pt-4 md:pt-10 ${animate("[transition-delay:1300ms]")}`}>
        {["BY THE HOUR", "QUICK PLACEMENT & REPLACEMENT", "NO QUESTIONS ASKED"].map((text) => (
          <span
            key={text}
            className="py-3 px-6 md:px-8 border-1 border-mnd-stone rounded-full bg-transparent font-sans text-xs font-semibold text-mnd-charcoal flex items-center justify-center"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
});

WorkSection.displayName = "WorkSection";
export default WorkSection;
