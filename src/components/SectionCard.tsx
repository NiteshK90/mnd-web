interface SectionCardProps {
  title: React.ReactNode;
  quote?: string;
  body: string;
  className?: string;
}

export default function SectionCard({ title, quote, body, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-[28px] shadow-card flex flex-col gap-3 md:gap-4 ${className}`}>
      <h3 className="font-playfair text-[14px] md:text-[20px] font-bold leading-[1.333] text-mnd-charcoal max-w-[225px]">
        {title}
      </h3>
      <div className="w-10 md:w-16 h-[2px] md:h-[3px] bg-mnd-charcoal" />
      {quote && (
        <div className="flex items-start gap-4">
          <span className="font-sans text-[36px] md:text-[60px] font-bold italic text-mnd-charcoal leading-none">&ldquo;</span>
          <p className="w-full max-w-[230px] font-sans text-[11px] md:text-xs italic font-normal leading-[1.3] text-mnd-charcoal mt-2">
            {quote}
          </p>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-px bg-black self-stretch shrink-0" />
        <p className="w-full max-w-[250px] font-sans text-[16px] font-bold leading-[1.333] text-mnd-charcoal">
          {body}
        </p>
      </div>
    </div>
  );
}
