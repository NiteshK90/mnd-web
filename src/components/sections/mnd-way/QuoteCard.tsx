interface QuoteCardProps {
  quote: string;
  body: string;
}

export const QuoteCard = ({ quote, body }: QuoteCardProps) => {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-[36px] py-6 px-4 shadow-[0_10px_30px_rgba(0,0,0,.08),0_2px_8px_rgba(0,0,0,.04)] flex flex-col gap-4">
      <div className="flex gap-3 items-start">
        <span className="font-sans text-[48px] font-extrabold text-mnd-charcoal leading-[0.8] shrink-0">&ldquo;</span>
        <p className="font-sans text-xs font-medium leading-[1.4] text-mnd-charcoal mt-4 w-[150px]">
          {quote}
        </p>
      </div>
      <p className="font-sans text-xs font-semibold w-[150px] leading-[1.4] text-mnd-charcoal/70">
        {body}
      </p>
    </div>
  );
};
