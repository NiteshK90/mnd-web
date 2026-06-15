import { forwardRef } from "react";

const members = [
  { name: "PARTH SHAH", role: "Co-founder", designation: "Designation", experience: "Experience" },
  { name: "PARTH SHAH", role: "Co-founder", designation: "Designation", experience: "Experience" },
  { name: "PARTH SHAH", role: "Co-founder", designation: "Designation", experience: "Experience" },
  { name: "PARTH SHAH", role: "Co-founder", designation: "Designation", experience: "Experience" },
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

        <div className="grid grid-cols-2 gap-12">
          {members.map((member, i) => (
            <div key={i} className="bg-white rounded-[28px] py-6 px-4 shadow-card flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex gap-7 items-start">
                  <div className="w-[100px] h-[100px] rounded-full bg-[#E8E6E6] shrink-0" />
                  <div className="flex flex-col gap-3">
                    <p className="font-sans text-xs font-extrabold tracking-[0.12em] uppercase text-mnd-charcoal">{member.name}</p>
                    <p className="font-sans text-xs font-medium leading-[2] text-mnd-charcoal">
                      {member.role}<br />{member.designation}<br />{member.experience}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[52px] h-[4px] bg-mnd-charcoal" />
              <p className="font-sans text-xs font-medium leading-[1.35] text-mnd-charcoal w-[280px]">
                A sentence on Parth Shah and what he does, believes and how he works. What are his core expertises and why is he doing what he does.
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
