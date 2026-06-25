"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

const HiringSection = forwardRef<HTMLElement>((_, ref) => {
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
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-6 md:gap-10 text-center px-6 md:px-20"
    >
      <p className={`font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full max-w-[720px] ${animate("[transition-delay:0ms]")}`}>
        Great work starts with great people.<br />We&apos;re hiring a few. Find anything exciting?
      </p>
      <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:500ms]")}`} />

      {/* Job list */}
      <div className={`w-full max-w-[720px] flex flex-col border-t border-mnd-charcoal/20 ${animate("[transition-delay:700ms]")}`}>
        {[
          { title: "Placeholder job 1", subtext: "Remote | Location" },
          { title: "Placeholder job 2", subtext: "Remote | Location" },
          { title: "Placeholder job 3", subtext: "Remote | Location" },
          { title: "Placeholder job 4", subtext: "Remote | Location" },
          { title: "Placeholder job 5", subtext: "Remote | Location" },
        ].map((job, i) => (
          <div key={i} className={`group flex items-center justify-between gap-4 border-b border-mnd-charcoal/20 py-5 px-2 cursor-pointer ${animate(`[transition-delay:${800 + i * 100}ms]`)}`}>
            <div className="flex flex-1 items-center justify-between">
              <span className="font-playfair text-[16px] md:text-[22px] font-semibold text-mnd-charcoal">{job.title}</span>
              <span className="font-inter text-[10px] md:text-[12px] font-medium text-mnd-charcoal/60 hidden sm:block">{job.subtext}</span>
            </div>
            <div className="transition-transform duration-[250ms] ease-in-out group-hover:translate-x-2">
              <ArrowRight size={24} weight="bold" className="text-mnd-charcoal" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

HiringSection.displayName = "HiringSection";
export default HiringSection;
