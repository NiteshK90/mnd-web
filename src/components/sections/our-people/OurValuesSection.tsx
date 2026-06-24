"use client";

import { forwardRef, useRef, useEffect, useState } from "react";

const values = [
  { title: "Ownership", body: "We take full responsibility for what we build — from the first line of code to the final delivery." },
  { title: "Clarity", body: "We communicate with precision and honesty, keeping everyone aligned at every step." },
  { title: "Craft", body: "We care deeply about quality. Good enough is never the goal." },
  { title: "Growth", body: "We invest in each other's development, professionally and personally." },
];

const OurValuesSection = forwardRef<HTMLElement>((_, ref) => {
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
              Our Values
            </p>
            <p className={`font-playfair font-bold text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              What we stand<br />for every day.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[18px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            Principles that guide<br />how we work and<br />who we are.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className={`flex-1 flex items-center justify-center px-0 md:px-12 mt-10 md:mt-0`}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={i} className={`rounded-[20px] bg-[#FDF8F4] px-6 py-6 shadow-[0_4px_12px_rgba(0,0,0,0.06)] flex flex-col gap-3 ${animate(`[transition-delay:${i * 200}ms]`)}`}>
              <p className="font-playfair font-bold text-[18px] md:text-[22px] text-mnd-charcoal">{v.title}</p>
              <p className="font-inter font-normal text-[13px] leading-[1.6] text-mnd-charcoal">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

OurValuesSection.displayName = "OurValuesSection";
export default OurValuesSection;
