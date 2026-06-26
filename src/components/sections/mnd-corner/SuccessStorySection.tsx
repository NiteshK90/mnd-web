"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";

const cases = [
  {
    tag: "Secret Compass",
    title: "Built an AI SaaS product for TV & Film Risk Management",
    body: "Can an idea become a scalable AI product without building an in-house tech team?",
    href: "#",
  },
  {
    tag: "Scrybe Streaming",
    title: "Improved product performance with faster, cleaner engineering",
    body: "Can the right engineers make your product faster, smoother, and easier to scale?",
    href: "https://mynextdeveloper.com/blogs/case/scrybe-streaming/",
  },
  {
    tag: "IOTIS",
    title: "Found the right mobile engineers to build IoT solutions for sports technology",
    body: "Can remote developers feel like they were always part of your team?",
    href: "https://mynextdeveloper.com/blogs/case/iotis-internet-of-things-in-sport/",
  },
  {
    tag: "Silicon Society",
    title: "Built a reliable long-term remote engineering partnership",
    body: "How do you find a developer who understands your product as deeply as you do?",
    href: "https://mynextdeveloper.com/blogs/case/silicon-society/",
  },
];

const SuccessStorySection = forwardRef<HTMLElement>((_, ref) => {
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
    <section ref={setRef} className="min-h-screen w-full snap-start flex flex-col md:flex-row gap-6 md:gap-16 px-6 md:px-20 pt-16 md:pt-24 pb-10 md:pb-12">
      {/* Left */}
      <div className="flex items-start md:items-center justify-start w-full md:w-auto">
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex flex-col gap-2 md:gap-4">
            <p className={`font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
              Success Stories
            </p>
            <p className={`font-playfair font-bold text-[22px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              Real world<br />problems, solved.
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[15px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            Explore how we help<br />businesses overcome<br />critical challenges.
          </p>
          <a href="https://mynextdeveloper.com/blogs/case/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:800ms]")}`}>
            <span className="font-inter text-xs font-semibold">View all cases</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </a>
        </div>
      </div>

      {/* Right — 2×2 card grid */}
      <div className={`flex-1 flex items-center justify-center px-0 md:px-8 mt-2 md:mt-0 ${animate("[transition-delay:400ms]")}`}>
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 md:gap-y-6 md:gap-x-8 w-full max-w-[620px]">
          {cases.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href === "#" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`rounded-[16px] md:rounded-[28px] px-6 py-7 md:px-10 md:py-10 border border-mnd-charcoal flex flex-col gap-2 md:gap-4 ${animate(`[transition-delay:${400 + i * 200}ms]`)}`}
            >
              <p className="font-inter font-semibold text-[9px] md:text-[10px] tracking-[1.5px] uppercase text-mnd-charcoal">
                {c.tag}
              </p>
              <p className="font-playfair font-bold text-[12px] md:text-[20px] leading-[1.2] text-mnd-charcoal whitespace-pre-line">
                {c.title}
              </p>
              <div className="w-[28px] md:w-[36px] h-[2px] bg-mnd-charcoal" />
              <p className="font-inter font-normal text-[9px] md:text-[12px] leading-[1.5] text-mnd-charcoal">
                {c.body}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

SuccessStorySection.displayName = "SuccessStorySection";
export default SuccessStorySection;
