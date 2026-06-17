"use client";

import { forwardRef, useState, useRef } from "react";

const startupCards = [
  {
    quote: "Need specialised expensive skills without burning runway on permanent hires?",
    mainText: "Why put short term hires on long term payrolls?",
  },
  {
    quote: "Never meeting deadlines, the team's always exhausted?",
    mainText: "Quickly get hands on deck when your team feels too overwhelmed!",
  },
  {
    quote: "Non-tech founder confused about how to go about the tech?",
    mainText: "Think of us as your technology partner!",
  },
];

const enterpriseCards = [
  {
    quote: "Need extra support for seasonal spikes and sudden launches?",
    mainText: "Scale your team in days, not months.",
  },
  {
    quote: "Need specialised expensive skills to build a few moving parts?",
    mainText: "Stop creating new permanent rigid roles for each new build.",
  },
  {
    quote: "Need to compensate for absentees or long leaves?",
    mainText: "Fill those critical gaps in delivery quickly and temporarily.",
  },
];

const slotStyles = [
  { left: 0,   top: 0,  rotate: 0,  zIndex: 3 },
  { left: -8,  top: 6,  rotate: -2, zIndex: 2 },
  { left: -24, top: 12, rotate: -4, zIndex: 1 },
];

function CardDeck({ cards, category }: { cards: typeof startupCards; category: string }) {
  const [topIndex, setTopIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const n = cards.length;

  const cycle = () => {
    setTopIndex((p) => (p + 1) % n);
    setDragX(0);
    setDragging(false);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setDragging(true);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const onRelease = () => {
    if (Math.abs(dragX) > 80) cycle();
    else { setDragX(0); setDragging(false); }
  };

  return (
    <div className="relative w-[340px] h-[430px]">
      {cards.map((card, i) => {
        const slot = (i - topIndex + n) % n;
        const pos = slotStyles[slot];
        const isFront = slot === 0;

        return (
          <div
            key={i}
            className={`absolute w-[300px] h-[380px] rounded-[28px] bg-white shadow-card ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
            style={{
              left: pos.left,
              top: pos.top,
              zIndex: pos.zIndex,
              transform: isFront && dragging
                ? `translateX(${dragX}px) rotate(${dragX * 0.03}deg)`
                : `rotate(${pos.rotate}deg)`,
              transition: dragging && isFront ? "none" : "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              userSelect: "none",
            }}
            onMouseDown={isFront ? onMouseDown : undefined}
            onMouseMove={isFront ? onMouseMove : undefined}
            onMouseUp={isFront ? onRelease : undefined}
            onMouseLeave={isFront && dragging ? onRelease : undefined}
          >
            <div className="p-9 flex flex-col h-full">
              <p className="font-sans text-[14px] font-semibold text-mnd-charcoal">● {category}</p>
              <div className="mt-8 flex flex-col gap-6">
                <div className="flex items-start gap-2">
                  <span className="font-sans text-[46px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
                  <p className="font-sans text-[16px] italic font-medium leading-[1.25] text-mnd-charcoal w-[190px] mt-2">
                    {card.quote}
                  </p>
                </div>
                <div className="w-[42px] h-[5px] bg-mnd-charcoal" />
              </div>
              <p className="mt-9 font-sans text-[24px] font-bold leading-[1.2] text-mnd-charcoal w-[210px]">
                {card.mainText}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const StartupEnterprisesCardsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-16">
      <h2 className="max-w-[720px] font-canela text-[42px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal text-center mt-16">
        So, we built MND to plug into how you <span className="font-semibold italic">actually</span> work.
      </h2>

      <div className="flex justify-center gap-[180px]">
        <CardDeck cards={startupCards} category="For Startups" />
        <CardDeck cards={enterpriseCards} category="For Enterprises" />
      </div>
    </section>
  );
});

StartupEnterprisesCardsSection.displayName = "StartupEnterprisesCardsSection";
export default StartupEnterprisesCardsSection;
