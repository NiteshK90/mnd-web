import { forwardRef } from "react";

const AISection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

AISection.displayName = "AISection";
export default AISection;
