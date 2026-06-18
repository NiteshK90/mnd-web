interface SectionCardProps {
  title: React.ReactNode;
  quote?: string;
  body: string;
  className?: string;
}

export default function SectionCard({ title, quote, body, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-[28px] shadow-card flex flex-col gap-3 md:gap-6 ${className}`}>
      <h3 className="font-canela text-[14px] md:text-[20px] font-semibold tracking-[-0.02em] text-mnd-charcoal">
        {title}
      </h3>
      <div className="w-[50px] h-[4px] bg-mnd-charcoal" />
      {quote && (
        <div className="flex items-center gap-4 justify-start">
          <div className="text-[36px] md:text-[58px] italic">"</div>
          <p className="w-full max-w-[230px] font-sans text-[11px] md:text-sm italic font-normal leading-[1.3] text-mnd-charcoal">
            {quote}
          </p>
        </div>
      )}
      <div className="flex gap-4">
        <div className="w-px bg-black self-stretch shrink-0" />
        <p className="w-full max-w-[250px] font-sans text-[12px] md:text-[16px] font-bold leading-[1.35] text-mnd-charcoal">
          {body}
        </p>
      </div>
    </div>
  );
}
