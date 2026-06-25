"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { ArrowRightIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const members = [
  { name: "Jigar Mehta", role: "Co-founder", image: "/founders/jigar.png", linkedin: "#" },
  { name: "Palomi Jain", role: "Co-founder", image: "/founders/palomi.png", linkedin: "#" },
  { name: "Parth Shah", role: "Co-founder", image: "/founders/parth.png", linkedin: "#" },
  { name: "Purab Shah", role: "Co-founder", image: "/founders/purab.png", linkedin: "#" },
];

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  // Outer wrapper: handles translateX slide + opacity
  const outerRefs = useRef<Map<number, HTMLDivElement>>(new Map());

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

  const advance = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const firstKey = order[0];
    const newActiveKey = order[1];
    const firstOuter = outerRefs.current.get(firstKey);
    const secondOuter = outerRefs.current.get(newActiveKey);
    if (!firstOuter || !secondOuter) { setIsAnimating(false); return; }

    const cardWidth = firstOuter.offsetWidth;
    const gap = secondOuter.offsetLeft - firstOuter.offsetLeft - cardWidth;
    const step = cardWidth + gap;

    // Phase 1: slide all outer wrappers left, fade out the active one
    order.forEach((key, i) => {
      const outer = outerRefs.current.get(key);
      if (!outer) return;
      outer.style.transition = "transform 380ms cubic-bezier(0.4,0,0.2,1), opacity 240ms ease";
      outer.style.transform = `translateX(-${step}px)`;
      if (i === 0) outer.style.opacity = "0";
    });

    setTimeout(() => {
      // Reset outer wrappers instantly (no transition) before React reorders
      order.forEach((key, i) => {
        const outer = outerRefs.current.get(key);
        if (!outer) return;
        outer.style.transition = "none";
        outer.style.transform = "";
        outer.style.opacity = i === 0 ? "0" : "";
      });

      // Rotate order: first goes to last
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setIsAnimating(false);

      // Phase 2: after React repositions elements, fade in the wrapped card
      // and let React's scale transition animate the new active card
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Fade in prev-active card now at last position
          const prevOuter = outerRefs.current.get(firstKey);
          if (prevOuter) {
            prevOuter.style.transition = "opacity 180ms ease";
            prevOuter.style.opacity = "1";
            setTimeout(() => {
              if (outerRefs.current.get(firstKey) === prevOuter) {
                prevOuter.style.transition = "";
                prevOuter.style.opacity = "";
              }
            }, 200);
          }
        });
      });
    }, 380);
  };

  return (
    <section
      ref={setRef}
      className="min-h-screen w-full snap-start flex flex-col justify-center gap-10 px-6 md:px-20 pt-20 md:pt-24 pb-12"
    >
      <p className={`font-playfair text-[26px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal max-w-[600px] ${animate("[transition-delay:0ms]")}`}>
        And finally, this is us.<br />
        Can&apos;t wait to meet you.
      </p>

      <div className={`flex items-center gap-6 pt-[225px] pl-[225px] ${animate("[transition-delay:200ms]")}`}>
        {order.map((key, i) => {
          const isActive = i === 0;
          return (
            <div
              key={key}
              ref={(el) => { if (el) outerRefs.current.set(key, el); }}
              className="shrink-0 relative"
            >
              <div
                style={{
                  transform: isActive ? "scale(2)" : "scale(1)",
                  transformOrigin: "bottom right",
                  transition: "transform 380ms cubic-bezier(0.4,0,0.2,1)",
                }}
                className="w-[225px] h-[225px] rounded-[16px] overflow-hidden bg-white border border-black/[0.04] shadow-[0_2px_4px_rgba(0,0,0,.04),0_8px_24px_rgba(0,0,0,.06)]"
              >
                <img src={members[key].image} alt={members[key].name} className="w-full h-full object-cover" />
              </div>

              {isActive && (
                <div className="absolute top-[-195px] left-[calc(100%+24px)] w-[200px] flex flex-col gap-3 z-10">
                  <p className="font-playfair text-[22px] font-semibold text-mnd-charcoal leading-tight">{members[key].name}</p>
                  <p className="font-inter text-[11px] tracking-[0.15em] uppercase text-mnd-charcoal">{members[key].role}</p>
                  <a href={members[key].linkedin} className="hover:opacity-60 transition-opacity w-fit">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                      <LinkedinLogoIcon size={128} weight="fill" color="black" />
                    </div>
                  </a>
                  <p className="font-inter text-[11px] leading-relaxed text-mnd-charcoal">
                    Short description about this person and what they bring to the team.
                  </p>
                </div>
              )}
            </div>
          );
        })}

        <button onClick={advance} className="shrink-0 cursor-pointer ml-6">
          <ArrowRightIcon size={36} weight="regular" className="text-mnd-charcoal" />
        </button>
      </div>

      <div className={`flex gap-3 justify-center ${animate("[transition-delay:400ms]")}`}>
        {[0, 1, 2, 3].map((key) => (
          <div
            key={key}
            className={`w-2.5 h-2.5 rounded-full border border-mnd-charcoal transition-all duration-300 ${order[0] === key ? "bg-mnd-charcoal" : "bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
