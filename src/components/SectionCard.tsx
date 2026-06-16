interface SectionCardProps {
  title: React.ReactNode;
  quote?: string;
  body: string;
  className?: string;
}

export default function SectionCard({ title, quote, body, className = "" }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-[28px] shadow-card flex flex-col gap-6 ${className}`}>
      <h3 className="font-canela text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-mnd-charcoal">
        {title}
      </h3>
      <div className="w-[60px] h-[5px] bg-mnd-charcoal" />
      {quote && (
        <div className="flex items-center gap-4 justify-end">
          <div className="text-[58px] italic">"</div>
          <p className="font-sans text-[14px] italic font-medium leading-[1.3] text-mnd-charcoal">
            {quote}
          </p>
        </div>
      )}
      <p className="font-sans text-[20px] font-bold leading-[1.35] text-mnd-charcoal">
        {body}
      </p>
    </div>
  );
}
