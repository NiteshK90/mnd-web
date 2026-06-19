import { forwardRef } from "react";

const MvpSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

MvpSection.displayName = "MvpSection";
export default MvpSection;
