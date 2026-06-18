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

// Front card at bottom, back cards peek upward.
// Container = 340px: left edge at 0, right edge at 40+300=340.
const slotStyles = [
  { left: 20, top: 12, rotate: 0,  zIndex: 3 },
  { left: 0,  top: 6,  rotate: -3, zIndex: 2 },
  { left: 40, top: 0,  rotate: 3,  zIndex: 1 },
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

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    setDragX(e.touches[0].clientX - startX.current);
  };

  return (
    <div className="relative flex-shrink-0 w-[280px] md:w-[340px] h-[350px] md:h-[430px]">
      {cards.map((card, i) => {
        const slot = (i - topIndex + n) % n;
        const pos = slotStyles[slot];
        const isFront = slot === 0;

        return (
          <div
            key={i}
            className={`absolute w-[240px] md:w-[300px] h-[300px] md:h-[380px] rounded-[28px] bg-white shadow-card ${isFront ? "cursor-grab active:cursor-grabbing" : ""}`}
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
            onTouchStart={isFront ? onTouchStart : undefined}
            onTouchMove={isFront ? onTouchMove : undefined}
            onTouchEnd={isFront ? onRelease : undefined}
          >
            <div className="p-5 md:p-9 flex flex-col h-full">
              <p className="font-sans text-[14px] font-semibold text-mnd-charcoal">● {category}</p>
              <div className="mt-4 md:mt-8 flex flex-col gap-4 md:gap-6">
                <div className="flex items-start gap-2">
                  <span className="font-sans text-[36px] md:text-[46px] font-bold text-mnd-charcoal leading-none">&ldquo;</span>
                  <p className="font-sans text-[13px] md:text-[16px] italic font-medium leading-[1.25] text-mnd-charcoal w-[150px] md:w-[190px] mt-2">
                    {card.quote}
                  </p>
                </div>
                <div className="w-[42px] h-[5px] bg-mnd-charcoal" />
              </div>
              <p className="mt-5 md:mt-9 font-sans text-[18px] md:text-[24px] font-bold leading-[1.2] text-mnd-charcoal w-[170px] md:w-[210px]">
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
    <section ref={ref} className="h-screen w-full snap-start flex flex-col items-center justify-center gap-12 md:gap-16">
      <h2 className="w-full max-w-[720px] font-canela text-[26px] md:text-[42px] font-normal leading-[1.1] tracking-[-0.03em] text-mnd-charcoal text-center px-6 md:px-0">
        So, we built MND to plug into how you <span className="font-semibold italic">actually</span> work.
      </h2>

      <div className="flex flex-row items-center justify-start md:justify-center gap-10 md:gap-[180px] overflow-x-auto md:overflow-visible w-full md:w-auto px-6 md:px-0 pb-4 md:pb-0">
        <CardDeck cards={startupCards} category="For Startups" />
        <CardDeck cards={enterpriseCards} category="For Enterprises" />
      </div>
    </section>
  );
});

StartupEnterprisesCardsSection.displayName = "StartupEnterprisesCardsSection";
export default StartupEnterprisesCardsSection;
