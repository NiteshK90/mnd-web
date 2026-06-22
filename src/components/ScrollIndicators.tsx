interface ScrollIndicatorsProps {
  total: number;
  activeIndex: number;
  white: boolean;
  onScrollTo: (i: number) => void;
}

export default function ScrollIndicators({ total, activeIndex, white, onScrollTo }: ScrollIndicatorsProps) {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-[7px] z-50">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onScrollTo(i)}
          className={`h-[10px] w-[10px] rounded-full transition-all duration-300 cursor-pointer border ${
            white
              ? `border-white ${i === activeIndex ? "bg-white" : "bg-transparent"}`
              : `border-black ${i === activeIndex ? "bg-black" : "bg-transparent"}`
          }`}
        />
      ))}
    </div>
  );
}
