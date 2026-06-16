import { forwardRef } from "react";

const NoteSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center" style={{ background: "#F9BC10" }}>
      <h2 className="font-canela text-[48px] text-mnd-charcoal">Section 1</h2>
    </section>
  );
});

NoteSection.displayName = "NoteSection";
export default NoteSection;
