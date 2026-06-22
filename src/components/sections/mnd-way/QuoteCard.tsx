interface QuoteCardProps {
  quote: string;
  body: string;
}

export const QuoteCard = ({ quote, body }: QuoteCardProps) => {
  return (
    <div
      className="border border-white/40 rounded-[36px] p-8 shadow-[0_10px_30px_rgba(0,0,0,.08),0_2px_8px_rgba(0,0,0,.04)] flex flex-col gap-4"
      style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="flex gap-3 items-start">
        <span className="font-sans text-[60px] font-normal italic text-mnd-charcoal leading-[0.8] shrink-0">&ldquo;</span>
        <p className="font-sans text-[12px] font-medium italic leading-[1.4] text-mnd-charcoal w-[120px]">
          {quote}
        </p>
      </div>
      <p className="font-sans text-[12px] font-semibold w-[150px] leading-[1.4] text-mnd-charcoal">
        {body}
      </p>
    </div>
  );
};
