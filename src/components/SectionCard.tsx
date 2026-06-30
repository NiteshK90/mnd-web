interface SectionCardProps {
  title: React.ReactNode;
  quote?: string;
  body: string;
  className?: string;
}

export default function SectionCard({ title, quote, body, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-[28px] shadow-card flex flex-col gap-5 md:gap-6 ${className}`}>
      {/* Card title */}
      <h3 className="font-playfair text-[18px] font-bold leading-[1.333] text-mnd-charcoal max-w-[225px]">
        {title}
      </h3>
      <div className="w-10 md:w-16 h-[2px] md:h-[3px] bg-mnd-charcoal" />
      {/* Pull quote */}
      {quote && (
        <div className="flex items-start gap-4">
          <span className="font-inter text-[36px] md:text-[46px] font-bold italic text-mnd-charcoal leading-none">&ldquo;</span>
          <p className="w-full max-w-[230px] font-inter text-[12px] italic font-normal leading-[1.3] text-mnd-charcoal mt-2">
            {quote}
          </p>
        </div>
      )}
      {/* Body text */}
      <div className="flex gap-4">
        <div className="w-px bg-black self-stretch shrink-0" />
        <p className="w-full max-w-[250px] font-inter text-[16px] font-bold leading-[1.333] text-mnd-charcoal">
          {body}
        </p>
      </div>
    </div>
  );
}
