import { forwardRef } from "react";

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <div className="flex items-center">
        <div>
          <div className="font-canela text-[42px] font-normal leading-[1.12] tracking-[-0.03em] text-mnd-charcoal w-[420px]">Basically - we’re just a bunch of friends who really understand how software development works, inside out.</div>
        </div>
        <p className="text-lg mt-4">Meet the people behind our success</p>
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
