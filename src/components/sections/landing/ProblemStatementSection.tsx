import { forwardRef } from "react";

const ProblemStatementSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="h-screen w-full snap-start flex flex-col items-center justify-center gap-20 text-center"
    >
      <p className="font-canela text-[42px] font-medium leading-[1.15] tracking-[-0.035em] text-mnd-charcoal w-[650px]">
        <span>Building a great software development team is tough. </span>
        <span className="italic">Especially now.</span>
      </p>
      <div className="w-[62px] h-[5px] bg-mnd-charcoal" />
      <p className="font-canela text-[42px] font-semibold leading-[1.05] tracking-[-0.03em] text-mnd-charcoal w-[720px]">
        <span className="block">We&apos;re engineers ourselves.</span>
        <span className="block italic">We get it.</span>
      </p>
    </section>
  );
});

ProblemStatementSection.displayName = "ProblemStatementSection";
export default ProblemStatementSection;
