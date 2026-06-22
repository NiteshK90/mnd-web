"use client";

import { useState, forwardRef } from "react";
import SectionCard from "@/components/SectionCard";

const cards = [
  {
    id: 0,
    title: "NO QUESTIONS ASKED",
    quote: "What if we need some guidance or there's an issue with the talent?",
    body: "Bad fit engineer, drop in performance, or if something feels even slightly off. We're here for you - We step in immediately and make it right.",
  },
  {
    id: 1,
    title: "ALWAYS JUST ONE CALL AWAY FROM THE FOUNDERS",
    quote: "Who do we reach out to when we're at a crossroads?",
    body: "You always have direct access to us. No layers, no delays. Brainstorm, unblock, or sense-check decisions. We're around when you need us.",
  },
  {
    id: 2,
    title: "NO DISAPPEARING ACT",
    quote: "What happens after the placement is done?",
    body: "We don't vanish after placement. You're not left managing alone. We stay close, check in, and step in when needed so things keep moving smoothly.",
  },
];

const GuaranteeSection = forwardRef<HTMLElement>((_, ref) => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section ref={ref} className="min-h-screen md:h-screen w-full snap-start flex flex-col items-center justify-center gap-16">
      <h2 className="font-canela text-[26px] md:text-[42px] font-normal leading-[1.1] text-mnd-charcoal text-center px-6 md:px-0">
        All this, on our guarantee.
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-20 px-6 md:px-0">
        {cards.map((card) => {
          const isOpen = card.id === activeCard;
          return (
            <div
              key={card.id}
              className={`bg-white rounded-[28px] shadow-card overflow-hidden transition-cards ${
                isOpen ? "w-full md:w-[420px]" : "w-full md:w-[150px]"
              }`}
            >
              {isOpen ? (
                <SectionCard
                  title={card.title}
                  quote={card.quote}
                  body={card.body}
                  className="w-full md:w-[420px] px-10 py-8"
                />
              ) : (
                <div className="w-full md:w-[150px] h-full flex flex-col items-center justify-end gap-4 py-[44px]">
                  <div className="w-[50px] h-[2px] bg-mnd-stone" />
                  <button
                    onClick={() => setActiveCard(card.id)}
                    className="w-[52px] h-[52px] border-2 border-mnd-stone rounded-full bg-transparent flex items-center justify-center text-[30px] font-light text-mnd-stone cursor-pointer"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
});

GuaranteeSection.displayName = "GuaranteeSection";
export default GuaranteeSection;
