"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const JoinUsSection = forwardRef<HTMLElement>((_, ref) => {
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
              Join Us
            </p>
            <p className={`font-playfair font-bold text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              Be part of<br />something real.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[18px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            We are always looking<br />for the right people,<br />not just the next hire.
          </p>
          <button className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:800ms]")}`}>
            <span className="font-inter text-xs font-semibold">Get in touch</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Right */}
      <div className={`flex-1 flex items-center justify-center px-0 md:px-12 mt-10 md:mt-0 ${animate("[transition-delay:400ms]")}`}>
        <div className="w-full max-w-lg px-6 py-10 md:px-12 md:py-14 border border-mnd-charcoal rounded-[32px] md:rounded-[48px] flex flex-col gap-6">
          <p className="font-inter font-semibold text-[10px] tracking-[1.5px] uppercase text-mnd-charcoal">
            Open Roles
          </p>
          <p className="font-playfair font-bold text-[22px] md:text-[28px] leading-[1.2] text-mnd-charcoal">
            No open roles right now
          </p>
          <div className="w-[48px] h-[2px] bg-mnd-charcoal" />
          <p className="font-inter font-normal text-[13px] leading-[1.6] text-mnd-charcoal">
            We don't always have a formal opening, but we are always open to meeting great people. Send us a message and let's start a conversation.
          </p>
          <button className="flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none">
            <span className="font-inter text-xs font-semibold">Say hello</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
});

JoinUsSection.displayName = "JoinUsSection";
export default JoinUsSection;
