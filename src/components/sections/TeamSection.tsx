"use client";

import { useState, forwardRef } from "react";
import SectionCard from "@/components/SectionCard";

const cards = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
];

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section ref={ref} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-16">
      <h2 className="font-canela text-[52px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal text-center">
        All this, on our guarantee.
      </h2>

      <div className="flex gap-20">
        {cards.map((card) => {
          const isOpen = card.id === activeCard;
          return (
            <div
              key={card.id}
              className={`bg-white rounded-[28px] shadow-card overflow-hidden transition-cards ${
                isOpen ? "w-[420px]" : "w-[150px]"
              }`}
            >
              {isOpen ? (
                <SectionCard
                  title={<>Always a call away<br />from the founders.</>}
                  quote="Who do we reach out to when we're at a crossroads?"
                  body="You always have direct access to us. No layers, no delays. Brainstorm, unblock, or sense-check decisions. We're around when you need us."
                  className="w-[420px] px-12 py-12"
                />
              ) : (
                <div className="w-[150px] h-full flex flex-col items-center justify-end gap-4 py-[44px]">
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

TeamSection.displayName = "TeamSection";
export default TeamSection;
