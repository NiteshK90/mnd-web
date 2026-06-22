import { forwardRef, useState, useRef, useEffect } from "react";

const members = [
  {
    name: "JIGAR MEHTA",
    role: "Co-founder",
    image: "/founders/jigar.png",
    experience: ["12+ years of Experience", "Previously Book My Show", "B.E. (Computers)"],
    body: "Jigar - As a core engineer at BookMyShow, Jigar scaled systems to 100k+ requests per minute and delivered a PWA featured at Google Dev Fest that drove 80% conversion growth within months of launch. He founded MyNextDeveloper to bring that same standard to AI-native products, and has since co-founded Tabb and Transcrisp — proving he can go from idea to product.",
  },
  {
    name: "PALOMI JAIN",
    role: "Co-founder",
    image: "/founders/palomi.png",
    experience: ["Business Management", "& Entrepreneurship", "7+ years of Experience", "Previously Studysid"],
    body: "Palomi has spent her career at the sharp end of building startups — driving a 3x increase in student enrolments for an edtech platform, then co-founding a Seed-backed global developer marketplace. She owns growth, operations and client experience end to end, and she knows how to make early-stage businesses scale.",
  },
  {
    name: "PARTH SHAH",
    role: "Co-founder",
    image: "/founders/parth.png",
    experience: ["B.E. (Computers)", "12+ years of Experience", "Previously Housing, Mindtickle"],
    body: "Parth - As CTO and co-founder of Studysid, Parth raised $500K and took a consumer product from idea to launch - then went on to found MyNextDeveloper, bringing the same execution to AI-native products. His engineering foundation was built at Mindtickle, a VC-backed enterprise platform trusted by global sales teams and Housing.com. He's a repeat founder who knows how to build, raise, and ship.",
  },
  {
    name: "PURAB SHAH",
    role: "Co-founder",
    image: "/founders/purab.png",
    experience: ["PGD in ML & AI & B.E. (IT)", "12+ years of Experience", "Previously Media.Net"],
    body: "Purab has already done what most technical founders only claim — built a product, taken it to market, and acquired paying customers with InvoiceStream, his AI invoicing and cash flow platform. He earned that right through a decade of high-stakes product work, including leading Forbes' web platform at 1 million+ users and designing Airpay's payment experience from scratch with a 50% load-time gain. He is the kind of builder who turns ambition into something investors can point to.",
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
  const fromLeft = `${base} ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`;
  const fromRight = `${base} ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`;

  return (
    <section ref={setRef} className="min-h-screen md:h-screen w-full snap-start flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-0">
      <div className="flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-28 px-4 md:px-8 w-full md:w-auto">

        {/* Left text block */}
        <div className={`flex flex-col items-start gap-4 md:gap-16 ${fromLeft}`}>
          <div className="font-playfair text-[20px] md:text-[36px] font-medium leading-[1.333] tracking-[-0.03em] text-mnd-charcoal w-full md:w-[420px]">
            Basically - we&apos;re just a bunch of friends who really understand how software development works, inside out.
          </div>
          <div className="w-[48px] md:w-[72px] h-[4px] md:h-[6px] bg-mnd-charcoal" />
          <div className="font-playfair text-[18px] md:text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-mnd-charcoal">
            & we love what we do.
          </div>
        </div>

        {/* Member cards grid */}
        <div className="flex flex-row md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible w-full md:w-auto pb-3 md:pb-0">
          {members.map((member, i) => {
            const cardDelays = ["[transition-delay:300ms]", "[transition-delay:550ms]", "[transition-delay:800ms]", "[transition-delay:1050ms]"];
            return (
            <div key={i} className={`bg-white rounded-[20px] md:rounded-[24px] py-4 md:py-4 px-3 md:px-4 shadow-card flex flex-col justify-between gap-1 md:gap-2 flex-shrink-0 w-[72vw] md:w-auto ${fromRight} ${cardDelays[i]}`}>
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex gap-3 md:gap-5 items-start">
                  <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full overflow-hidden shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <p className="font-sans text-[10px] font-normal tracking-[0.12em] uppercase text-mnd-charcoal">{member.name}</p>
                    <div className="font-sans text-[10px] font-normal leading-[1.5] text-mnd-charcoal">
                      <div>{member.role}</div>
                      {member.experience.map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[36px] md:w-[40px] h-[3px] bg-mnd-charcoal my-1 md:my-1" />
              <p className="font-sans text-[10px] font-normal leading-widest text-mnd-charcoal max-w-full md:max-w-[280px]">
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
