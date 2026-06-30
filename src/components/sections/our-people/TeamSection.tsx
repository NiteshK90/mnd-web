"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { ArrowRightIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

const members = [
  { name: "Jigar Mehta", role: "Co-founder", image: "/founders/jigar.png", linkedin: "https://www.linkedin.com/in/jigar1101/", bio: "He founded MyNextDeveloper to bring great standard to AI-native products, and has since co-founded Tabb and Transcrisp — proving he can go from idea to product." },
  { name: "Palomi Jain", role: "Co-founder", image: "/founders/palomi.png", linkedin: "https://www.linkedin.com/in/palomi-jain/", bio: "She owns growth, operations and client experience end to end, and she knows how to make early-stage businesses scale." },
  { name: "Parth Shah", role: "Co-founder", image: "/founders/parth.png", linkedin: "https://www.linkedin.com/in/parthshah9/", bio: "He's a repeat founder who knows how to build, raise, and ship." },
  { name: "Purab Shah", role: "Co-founder", image: "/founders/purab.png", linkedin: "https://www.linkedin.com/in/purab93/", bio: "He is the kind of builder who turns ambition into something investors can point to." },
];

const DESKTOP_SCALE = 2;
const DESKTOP_CARD = 225;

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  const [inView, setInView] = useState(false);

  // Desktop carousel state
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const infoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const outerRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Mobile scroll state
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  // Mobile scroll tracking
  useEffect(() => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const onScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;
      mobileCardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setMobileActiveIndex(closest);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const base = "transition-all duration-[1100ms] ease-out";
  const hidden = "opacity-0 translate-y-5";
  const visible = "opacity-100 translate-y-0";
  const animate = (delay: string) => `${base} ${inView ? visible : hidden} ${delay}`;

  // Desktop carousel advance
  const advance = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowInfo(false);
    if (infoTimerRef.current) clearTimeout(infoTimerRef.current);
    const firstKey = order[0];
    const firstOuter = outerRefs.current.get(firstKey);
    const secondOuter = outerRefs.current.get(order[1]);
    if (!firstOuter || !secondOuter) { setIsAnimating(false); return; }
    const cardWidth = firstOuter.offsetWidth;
    const gap = secondOuter.offsetLeft - firstOuter.offsetLeft - cardWidth;
    const step = cardWidth + gap;
    order.forEach((key, i) => {
      const outer = outerRefs.current.get(key);
      if (!outer) return;
      outer.style.transition = "transform 380ms cubic-bezier(0.4,0,0.2,1), opacity 240ms ease";
      outer.style.transform = `translateX(-${step}px)`;
      if (i === 0) outer.style.opacity = "0";
    });
    setTimeout(() => {
      order.forEach((key, i) => {
        const outer = outerRefs.current.get(key);
        if (!outer) return;
        outer.style.transition = "none";
        outer.style.transform = "";
        outer.style.opacity = i === 0 ? "0" : "";
      });
      setOrder((prev) => [...prev.slice(1), prev[0]]);
      setIsAnimating(false);
      // Show info after scale animation completes (380ms after slide ends)
      infoTimerRef.current = setTimeout(() => setShowInfo(true), 400);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
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

  const desktopActiveMember = members[order[0]];
  const mobileActiveMember = members[mobileActiveIndex];
  const padding = `${(DESKTOP_SCALE - 1) * DESKTOP_CARD}px`;

  const InfoBlock = ({ member }: { member: typeof members[0] }) => (
    <>
      <p className="font-playfair text-[18px] md:text-[22px] font-semibold text-mnd-charcoal leading-tight">{member.name}</p>
      <p className="font-inter text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-mnd-charcoal">{member.role}</p>
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity w-fit">
        <LinkedinLogoIcon size={28} weight="fill" color="black" className="rounded-full block" />
      </a>
      <p className="font-inter text-[11px] leading-relaxed text-mnd-charcoal">
        {member.bio}
      </p>
    </>
  );

  return (
    <section
      ref={setRef}
      className="min-h-screen w-full snap-start flex flex-col justify-center gap-8 px-6 md:px-20 pt-20 md:pt-24 pb-12 overflow-hidden"
    >
      {/* Section headline */}
      <p className={`font-playfair text-[22px] md:text-[36px] font-normal leading-[1.333] tracking-[-0.03em] text-mnd-charcoal max-w-[600px] ${animate("[transition-delay:0ms]")}`}>
        And finally, this is us.<br />
        Can&apos;t wait to meet you.
      </p>

      {/* Mobile scroll carousel */}
      <div className={`md:hidden -mx-6 ${animate("[transition-delay:200ms]")}`}>
        <div
          ref={mobileScrollRef}
          className="overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden touch-pan-x overscroll-x-contain scroll-px-[20vw]"
        >
          <div className="flex gap-4 pl-[20vw]">
            {members.map((member, i) => (
              <div
                key={i}
                ref={(el) => { mobileCardRefs.current[i] = el; }}
                className="snap-center flex-shrink-0 w-[60vw] h-[60vw] rounded-[16px] overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="flex-shrink-0 w-[20vw]" />
          </div>
        </div>
      </div>

      {/* Mobile member info */}
      <div className={`md:hidden flex flex-col gap-3 ${animate("[transition-delay:250ms]")}`}>
        <InfoBlock member={mobileActiveMember} />
      </div>

      {/* Desktop click carousel */}
      <div
        className={`hidden md:flex items-center gap-6 ${animate("[transition-delay:200ms]")}`}
        style={{ paddingTop: padding, paddingLeft: padding }}
      >
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
                  transform: isActive ? `scale(${DESKTOP_SCALE})` : "scale(1)",
                  transformOrigin: "bottom right",
                  transition: "transform 380ms cubic-bezier(0.4,0,0.2,1)",
                }}
                className="w-[225px] h-[225px] rounded-[16px] overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              >
                <img src={members[key].image} alt={members[key].name} className="w-full h-full object-cover" />
              </div>

              {isActive && (
                <div className="absolute top-[-195px] left-[calc(100%+24px)] w-[200px] flex flex-col gap-3 z-10">
                  {[
                    <p key="name" className="font-playfair text-[22px] font-semibold text-mnd-charcoal leading-tight">{desktopActiveMember.name}</p>,
                    <p key="role" className="font-inter text-[11px] tracking-[0.15em] uppercase text-mnd-charcoal">{desktopActiveMember.role}</p>,
                    <a key="linkedin" href={desktopActiveMember.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity w-fit">
                      <LinkedinLogoIcon size={32} weight="fill" color="black" className="rounded-full block" />
                    </a>,
                    <p key="desc" className="font-inter text-[11px] leading-relaxed text-mnd-charcoal">{desktopActiveMember.bio}</p>,
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-300 ${showInfo ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                      style={{ transitionDelay: showInfo ? `${i * 80}ms` : "0ms" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <button onClick={advance} className="shrink-0 cursor-pointer ml-6">
          <ArrowRightIcon size={36} weight="regular" className="text-mnd-charcoal" />
        </button>
      </div>

      {/* Carousel pagination */}
      <div className={`md:hidden flex gap-3 justify-center ${animate("[transition-delay:400ms]")}`}>
        {[0, 1, 2, 3].map((key) => (
          <div key={key} className={`w-2.5 h-2.5 rounded-full border border-mnd-charcoal transition-all duration-300 ${mobileActiveIndex === key ? "bg-mnd-charcoal" : "bg-transparent"}`} />
        ))}
      </div>
      <div className={`hidden md:flex gap-3 justify-center ${animate("[transition-delay:400ms]")}`}>
        {[0, 1, 2, 3].map((key) => (
          <div key={key} className={`w-2.5 h-2.5 rounded-full border border-mnd-charcoal transition-all duration-300 ${order[0] === key ? "bg-mnd-charcoal" : "bg-transparent"}`} />
        ))}
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
