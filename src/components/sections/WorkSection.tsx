import { forwardRef } from "react";

const WorkSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Work</h2>
    </section>
  );
});

WorkSection.displayName = "WorkSection";
export default WorkSection;
