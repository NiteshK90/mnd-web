import { forwardRef, useState, useRef, useEffect } from "react";

const members = [
  {
    name: "JIGAR MEHTA",
    role: "Co-founder",
    image: "/founders/jigar.png",
    experience: ["B.E. (Computers)", "12+ years of Exp.", "Prev. Book My Show"],
    body: "Jigar has built products that don't break under pressure, from scaling BookMyShow systems to 100k+ requests/min to founding ventures of his own. He knows great engineering starts with great engineers.",
  },
  {
    name: "PALOMI JAIN",
    role: "Co-founder",
    image: "/founders/palomi.png",
    experience: ["Business Mgt", "7+ years of Exp.", "Prev. Studysid"],
    body: "Palomi turns early ideas into thriving businesses. From scaling an edtech platform to co-founding a global developer marketplace, she knows what ambitious teams really need to succeed.",
  },
  {
    name: "PARTH SHAH",
    role: "Co-founder",
    image: "/founders/parth.png",
    experience: ["B.E. (Computers)", "12+ years of Exp.", "Prev. Mindtickle"],
    body: "For fifteen years, Parth has turned ideas into products, products into companies, and companies into lessons. A repeat founder and engineer, he brings the rare mix of technical depth and founder instinct to MND.",
  },
  {
    name: "PURAB SHAH",
    role: "Co-founder",
    image: "/founders/purab.png",
    experience: ["PGD in ML & AI", "12+ years of Exp.", "Prev. Media.Net"],
    body: "Purab knows the difference between a product that works and a product that wins. With a decade of building at scale, he brings thoughtful engineering and product craft to MND.",
  },
];

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
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
    <section ref={setRef} className="min-h-screen md:h-screen w-full snap-start flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-0">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-28 px-6 md:px-20 w-full md:w-auto">

        {/* Left intro text */}
        <div className="flex flex-col items-start gap-4 md:gap-16">
          <div className={`font-playfair text-[20px] md:text-[36px] font-medium leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full md:w-[420px] ${animate("[transition-delay:0ms]")}`}>
            Basically - we&apos;re just a bunch of friends who really understand how software development works, inside out.
          </div>
          <div className={`w-[62px] h-[5px] bg-mnd-charcoal ${animate("[transition-delay:200ms]")}`} />
          <div className={`font-playfair text-[18px] md:text-[36px] font-bold leading-[1.333] tracking-[-0.03em] text-mnd-charcoal ${animate("[transition-delay:400ms]")}`}>
            & we love what we do.
          </div>
        </div>

        {/* Member card grid */}
        <div className="flex flex-row md:grid md:grid-cols-2 gap-8 md:gap-12 overflow-x-auto md:overflow-visible w-full md:w-auto pb-3 md:pb-0">
          {members.map((member, i) => {
            return (
            <div key={i} className={`bg-white rounded-[20px] md:rounded-[24px] py-4 md:py-6 px-5 md:px-7 shadow-card flex flex-col gap-3 md:gap-4 flex-shrink-0 w-[78vw] md:w-auto md:max-w-[300px] ${base} ${inView ? visible : hidden}`} style={{ transitionDelay: inView ? `${200 + i * 200}ms` : "0ms" }}>
              <div className="flex flex-col gap-2 md:gap-3">
                {/* Avatar + name/role */}
                <div className="flex gap-4 md:gap-5 items-center">
                  <div className="w-[76px] h-[76px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <p className="font-inter text-[12px] font-bold leading-[1.4] tracking-[0.08em] uppercase text-mnd-charcoal">{member.name}</p>
                    <div className="flex flex-col gap-1 md:gap-2 font-inter text-[10px] font-normal leading-[1.5] tracking-[0] text-mnd-charcoal">
                      <div>{member.role}</div>
                      {member.experience.map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[36px] md:w-[40px] h-[3px] bg-mnd-charcoal my-1 md:my-1" />
              {/* Member bio */}
              <p className="font-inter text-[10px] font-normal leading-widest text-mnd-charcoal">
                {member.body}
              </p>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
