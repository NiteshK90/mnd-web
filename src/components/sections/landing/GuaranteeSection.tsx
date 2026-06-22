"use client";

import { useState, forwardRef, useRef, useEffect } from "react";
import SectionCard from "@/components/SectionCard";

const cards = [
  {
    id: 0,
    title: "No disappearing act",
    quote: "What happens after the placement is done?",
    body: "We don't vanish after placement. You're not left managing alone. We stay close, check in, and step in when needed so things keep moving smoothly.",
  },
  {
    id: 1,
    title: "No questions asked",
    quote: "What if we need some guidance or there's an issue with the talent?",
    body: "Bad fit engineer, drop in performance, or if something feels even slightly off. We're here for you - We step in immediately and make it right.",
  },
  {
    id: 2,
    title: "Always just one call away from the founders",
    quote: "Who do we reach out to when we're at a crossroads?",
    body: "You always have direct access to us. No layers, no delays. Brainstorm, unblock, or sense-check decisions. We're around when you need us.",
  },
];

const GuaranteeSection = forwardRef<HTMLElement>((_, ref) => {
  const [activeCard, setActiveCard] = useState(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
    <section ref={setRef} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-12 md:gap-24 pt-20 md:pt-24">
      <h2 className={`font-playfair text-[26px] md:text-[36px] font-bold leading-[1.333] text-mnd-charcoal text-center px-6 md:px-0 ${animate("[transition-delay:0ms]")}`}>
        All this, on our guarantee.
      </h2>

      <div className={`flex gap-3 md:gap-6 overflow-x-auto md:overflow-visible w-full md:w-auto px-6 md:px-0 pb-4 md:pb-0 ${animate("[transition-delay:500ms]")}`}>
        {cards.map((card) => {
          const isOpen = card.id === activeCard;
          return (
            <div
              key={card.id}
              className={`overflow-hidden rounded-[28px] transition-cards flex-shrink-0 w-[78vw] h-[320px] md:h-[400px] ${
                isOpen ? "md:w-[340px]" : "md:w-[90px]"
              }`}
            >
              {/* Mobile: horizontal scroll — always expanded, SectionCard owns the card styling */}
              <div className="md:hidden h-full">
                <SectionCard
                  title={card.title}
                  quote={card.quote}
                  body={card.body}
                  className="h-full px-4 py-5"
                />
              </div>

              {/* Desktop: open/collapse toggle */}
              <div className="hidden md:block h-full">
                {isOpen ? (
                  <SectionCard
                    title={card.title}
                    quote={card.quote}
                    body={card.body}
                    className="h-full w-[340px] px-8 py-8"
                  />
                ) : (
                  <div className="w-[90px] h-full bg-white rounded-[28px] shadow-card flex flex-col items-center justify-end gap-4 py-[44px]">
                    <div className="w-[30px] h-[2px] bg-mnd-stone" />
                    <button
                      onClick={() => setActiveCard(card.id)}
                      className="w-[31px] h-[31px] border-2 border-mnd-stone rounded-full bg-transparent flex items-center justify-center text-[17px] font-light text-mnd-stone cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

GuaranteeSection.displayName = "GuaranteeSection";
export default GuaranteeSection;
