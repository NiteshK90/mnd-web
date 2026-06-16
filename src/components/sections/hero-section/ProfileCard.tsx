interface ProfileCardProps {
  name: string;
  years: number;
  role: string;
  mostLikelyTo: string;
  quote: string;
}

export const ProfileCard = ({ name, years, role, mostLikelyTo, quote }: ProfileCardProps) => {
  return (
    <div className="min-w-[230px] bg-white/60 rounded-[36px] py-6 px-4 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.08),0_2px_8px_rgba(0,0,0,.04)] flex flex-col gap-4">
      <h3 className="font-sans text-[18px] font-bold leading-[1.2] text-mnd-charcoal">
        Meet {name},
      </h3>

      <div className="flex items-center gap-4">
        <div className="w-[42px] h-[42px] flex items-center justify-center shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="9" width="24" height="17" rx="3" stroke="#231F20" strokeWidth="1.75" />
            <path d="M9 9V7a5 5 0 0 1 10 0v2" stroke="#231F20" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M2 16h24" stroke="#231F20" strokeWidth="1.75" />
          </svg>
        </div>
        <p className="font-sans text-sm font-medium text-mnd-charcoal">{years} Yrs Work Ex {role}</p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-[18px] font-bold text-mnd-charcoal">Most likely to:</p>
        <p className="font-sans text-sm font-medium leading-[1.35] text-mnd-charcoal">
          {mostLikelyTo}
        </p>
      </div>

      <div className="flex gap-3 items-start">
        <span className="font-sans text-[48px] font-extrabold text-mnd-charcoal leading-[0.8]">&ldquo;</span>
        <p className="font-sans text-sm font-medium leading-[1.35] text-mnd-charcoal mt-5">
          {quote}
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-medium text-mnd-charcoal">Previously at:</p>
      </div>
    </div>
  );
}
