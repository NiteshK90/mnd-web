import { forwardRef } from "react";

const members = [
  {
    name: "JIGAR MEHTA",
    role: "Co-founder",
    experience: ["12+ years of Experience", "Previously Book My Show", "B.E. (Computers)"],
    body: "Jigar - As a core engineer at BookMyShow, Jigar scaled systems to 100k+ requests per minute and delivered a PWA featured at Google Dev Fest that drove 80% conversion growth within months of launch. He founded MyNextDeveloper to bring that same standard to AI-native products, and has since co-founded Tabb and Transcrisp — proving he can go from idea to product.",
  },
  {
    name: "PALOMI JAIN",
    role: "Co-founder",
    experience: ["Business Management", "& Entrepreneurship", "7+ years of Experience", "Previously Studysid"],
    body: "Palomi has spent her career at the sharp end of building startups — driving a 3x increase in student enrolments for an edtech platform, then co-founding a Seed-backed global developer marketplace. She owns growth, operations and client experience end to end, and she knows how to make early-stage businesses scale.",
  },
  {
    name: "PARTH SHAH",
    role: "Co-founder",
    experience: ["B.E. (Computers)", "12+ years of Experience", "Previously Housing, Mindtickle"],
    body: "Parth - As CTO and co-founder of Studysid, Parth raised $500K and took a consumer product from idea to launch - then went on to found MyNextDeveloper, bringing the same execution to AI-native products. His engineering foundation was built at Mindtickle, a VC-backed enterprise platform trusted by global sales teams and Housing.com. He's a repeat founder who knows how to build, raise, and ship.",
  },
  {
    name: "PURAB SHAH",
    role: "Co-founder",
    experience: ["PGD in ML & AI & B.E. (IT)", "12+ years of Experience", "Previously Media.Net"],
    body: "Purab has already done what most technical founders only claim — built a product, taken it to market, and acquired paying customers with InvoiceStream, his AI invoicing and cash flow platform. He earned that right through a decade of high-stakes product work, including leading Forbes' web platform at 1 million+ users and designing Airpay's payment experience from scratch with a 50% load-time gain. He is the kind of builder who turns ambition into something investors can point to.",
  },
];

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <div className="flex items-end gap-24">
        <div className="flex flex-col items-start gap-16">
          <div className="font-canela text-[42px] font-normal leading-[1.12] tracking-[-0.03em] text-mnd-charcoal w-[420px]">Basically - we&apos;re just a bunch of friends who really understand how software development works, inside out.</div>
          <div className="w-[72px] h-[6px] bg-mnd-charcoal" />
          <div className="font-canela text-[36px] font-bold leading-[1.05] tracking-[-0.03em] text-mnd-charcoal">& we love what we do.</div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {members.map((member, i) => (
            <div key={i} className="bg-white rounded-[28px] py-6 px-4 shadow-card flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-7 items-start">
                  <div className="w-[100px] h-[100px] rounded-full bg-[#E8E6E6] shrink-0" />
                  <div className="flex flex-col gap-2">
                    <p className="font-sans text-xs font-extrabold tracking-[0.12em] uppercase text-mnd-charcoal">{member.name}</p>
                    <p className="font-sans text-xs font-medium leading-[1.5] text-mnd-charcoal">
                      <div>{member.role}</div>
                      {member.experience.map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[52px] h-[4px] bg-mnd-charcoal" />
              <p className="font-sans text-[10px] font-medium leading-widest text-mnd-charcoal max-w-[280px]">
                {member.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
