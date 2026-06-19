import { forwardRef } from "react";

const OtherStuffNoteSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="h-screen w-full snap-start" />
  );
});

OtherStuffNoteSection.displayName = "OtherStuffNoteSection";
export default OtherStuffNoteSection;
