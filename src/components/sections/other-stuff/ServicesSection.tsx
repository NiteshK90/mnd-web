"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { RepeatIcon } from "@phosphor-icons/react";
import Link from "next/link";
import ArrowRight from "@/components/icons/ArrowRight";

const ServicesSection = forwardRef<HTMLElement>((_, ref) => {
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
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row px-6 md:px-20 pt-20 md:pt-24 pb-12 md:pb-0">
      <div className="flex items-center justify-start">
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="flex flex-col gap-4">
            <p className={`font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
              Other Services
            </p>
            <p className={`font-playfair font-bold text-[26px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              The right people for<br />everything to keep<br />your product<br />moving.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[26px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            From operations to<br />compliance, scale with<br />ease.
          </p>
          <Link href="mailto:hello@mynextdeveloper.com?subject=Schedule a Call" className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:800ms]")}`}>
            <span className="font-inter text-xs font-semibold">Schedule a Call</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <div className="grid grid-cols-2 gap-4 md:gap-10">
          {[
            {
              title: "Business Process Outsourcing",
              body: "People that keep your business moving.",
            },
            {
              title: "Digital Marketing",
              body: "Creative strategies that get you seen and chosen.",
            },
            {
              title: "Employee on Record",
              body: "The people you need wherever you need them.",
            },
            {
              title: "Offshore Accounting",
              body: "Keeping the numbers clean, compliant and affordable.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className={`rounded-[20px] md:rounded-[28px] py-8 px-6 md:py-14 md:px-16 border border-mnd-charcoal flex flex-col gap-4 md:gap-6 w-[150px] md:w-[300px] ${base} ${inView ? visible : hidden}`}
              style={{ transitionDelay: inView ? `${600 + i * 500}ms` : "0ms" }}
            >
              <p className="font-playfair font-bold text-[14px] md:text-[20px] leading-[1.2] text-mnd-charcoal">
                {service.title}
              </p>
              <p className="font-inter font-normal text-[10px] md:text-[12px] leading-[1.5] text-mnd-charcoal">
                {service.body}
              </p>
              <div className="w-[36px] h-[3px] bg-mnd-charcoal" />
              <div className="flex items-center gap-1 md:gap-2">
                <RepeatIcon size={12} weight="bold" className="md:hidden" />
                <RepeatIcon size={16} weight="bold" className="hidden md:block" />
                <p className="font-inter font-semibold text-[7px] md:text-[8px] tracking-[1.5px] uppercase text-mnd-charcoal">
                  Flip for Case Study
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
export default ServicesSection;
