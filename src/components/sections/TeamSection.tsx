import { forwardRef } from "react";

const TeamSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Contact</h2>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
