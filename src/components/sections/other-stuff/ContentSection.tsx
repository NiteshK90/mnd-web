import { forwardRef } from "react";

const OtherStuffContentSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

OtherStuffContentSection.displayName = "OtherStuffContentSection";
export default OtherStuffContentSection;
