"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import ArrowRight from "@/components/icons/ArrowRight";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

const faqs = [
  {
    q: "What information do I need to get an estimate?",
    a: "You'll be guided through the basics like project/service type, size/quantity, timeline, and any key features. If you have additional specifics, you can include them in the questionnaire.",
  },
  {
    q: "Do I need to sign up?",
    a: "No sign up is required. You can complete the questionnaire and view your estimates directly.",
  },
  {
    q: "How accurate are the estimates?",
    a: "The estimates are generated from the details you provide. For best results, fill in anything you know (even approximate values) and use the breakdown to review assumptions.",
  },
  {
    q: "Can I talk to an expert?",
    a: "Yes. You can schedule a call during the questionnaire whenever it makes sense for you.",
  },
  {
    q: "When will I get results?",
    a: "Results are generated instantly after you complete the questionnaire.",
  },
  {
    q: "How is my information used?",
    a: "Your inputs are used to generate your estimate as you complete the questionnaire. If you have concerns about privacy, please review your organization's data handling policies.",
  },
];

const BudgetPlanSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="flex flex-col gap-4">
            <p className={`font-inter font-semibold text-[11px] tracking-[1.7px] uppercase text-mnd-charcoal ${animate("[transition-delay:0ms]")}`}>
              Cost Calculator
            </p>
            <p className={`font-playfair font-bold text-[26px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:200ms]")}`}>
              A smarter way to<br />plan your budget
            </p>
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:400ms]")}`} />
          <p className={`font-playfair font-normal text-[26px] md:text-[36px] leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:600ms]")}`}>
            Use our cost calculator tool<br />
            to get tailored estimate<br />
            based on your needs
          </p>
          <div className={`flex ${animate("[transition-delay:800ms]")}`}>
            {[
              { header: ">3", sub: "Minutes" },
              { header: "100%", sub: "Confidential" },
              { header: "Tailored", sub: "to you" },
            ].map((stat, i) => (
              <div key={i} className="pr-8 mr-8 border-r border-mnd-charcoal last:border-r-0 last:mr-0 last:pr-0 text-center">
                <p className="font-playfair font-bold text-[26px] leading-tight text-mnd-charcoal">{stat.header}</p>
                <p className="font-inter font-medium text-[16px] text-mnd-charcoal">{stat.sub}</p>
              </div>
            ))}
          </div>
          <button className={`flex items-center gap-2 px-4 h-10 bg-mnd-navy text-white rounded-full w-fit cursor-pointer transition-all duration-200 hover:scale-[1.05] hover:shadow-[0_6px_20px_rgba(2,48,71,0.4)] active:scale-[0.96] active:shadow-none ${animate("[transition-delay:1000ms]")}`}>
            <span className="font-inter text-xs font-semibold">Start the Questionnaire</span>
            <ArrowRight color="white" size={32} strokeWidth={1} />
          </button>
        </div>
      </div>

      <div className={`flex-1 flex items-center justify-center px-4 md:px-12 mt-10 md:mt-0 ${animate("[transition-delay:400ms]")}`}>
        <div className="w-full flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="w-full rounded-[20px] bg-[#FDF8F4] px-6 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
              <button
                className="w-full flex justify-between items-center gap-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-playfair font-medium text-[16px] leading-[1.2] text-mnd-charcoal text-left">
                  {faq.q}
                </span>
                <span className="shrink-0">
                  {openIndex === i
                    ? <MinusIcon size={32} weight="thin" className="text-mnd-charcoal" />
                    : <PlusIcon size={32} weight="thin" className="text-mnd-charcoal" />
                  }
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
                <p className="font-inter font-normal text-[12px] leading-[1.6] text-mnd-charcoal">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

BudgetPlanSection.displayName = "BudgetPlanSection";
export default BudgetPlanSection;
