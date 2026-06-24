"use client";

import { forwardRef, useRef, useEffect, useState } from "react";

const WhoWeAreSection = forwardRef<HTMLElement>((_, ref) => {
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
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row px-6 md:px-20 pt-20 md:pt-24 pb-12">
      {/* Left */}
      <div className="flex items-start md:items-center justify-start w-full md:w-auto">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className={`font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
              Who We Are
            </p>
            <p className={`font-playfair font-bold text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              Builders, thinkers,<br />and problem solvers.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[18px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            A team that cares<br />about craft as much<br />as outcome.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className={`flex-1 flex items-center justify-center px-0 md:px-12 mt-10 md:mt-0 ${animate("[transition-delay:400ms]")}`}>
        <p className="font-inter font-normal text-[15px] md:text-[18px] leading-[1.8] text-mnd-charcoal max-w-lg">
          We are a collective of developers, designers, and strategists who believe that great software is built by great people. Every person on this team brings curiosity, ownership, and a genuine commitment to the work we do together.
        </p>
      </div>
    </section>
  );
});

WhoWeAreSection.displayName = "WhoWeAreSection";
export default WhoWeAreSection;
