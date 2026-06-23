import { forwardRef, useRef, useEffect, useState } from "react";

const ProblemStatementSection = forwardRef<HTMLElement>((_, ref) => {
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
      <p className={`font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.035em] text-mnd-charcoal w-full max-w-[650px] ${animate("[transition-delay:0ms]")}`}>
        <span>Building a great software development team is tough. </span>
        <span className="italic">Especially now.</span>
      </p>
      <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:500ms]")}`} />
      <p className="font-playfair text-[26px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[720px]">
        <span className={`block ${animate("[transition-delay:900ms]")}`}>We&apos;re engineers ourselves.</span>
        <span className={`block italic ${animate("[transition-delay:1300ms]")}`}>We get it.</span>
      </p>
    </section>
  );
});

ProblemStatementSection.displayName = "ProblemStatementSection";
export default ProblemStatementSection;
