import { forwardRef } from "react";

const ProcessSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start flex items-center justify-center">
      <h2 className="text-4xl font-bold">Process</h2>
    </section>
  );
});

ProcessSection.displayName = "ProcessSection";
export default ProcessSection;
