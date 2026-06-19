import { forwardRef } from "react";

const CommunitySection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

CommunitySection.displayName = "CommunitySection";
export default CommunitySection;
