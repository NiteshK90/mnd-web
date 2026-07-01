const logoMap: Record<string, string> = {
  apple: "/svgs/apple.svg",
  microsoft: "/svgs/microsoft.svg",
};

interface ProfileCardProps {
  name: string;
  years: number;
  role: string;
  mostLikelyTo: string;
  quote: string;
  previousLogos?: string[];
}

export const ProfileCard = ({ name, years, role, mostLikelyTo, quote, previousLogos = [] }: ProfileCardProps) => {
  return (
    <div
      className="min-w-[230px] border border-white/40 rounded-[36px] py-8 px-6 shadow-[0_10px_30px_rgba(0,0,0,.08),0_2px_8px_rgba(0,0,0,.04)] flex flex-col gap-4"
      style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
    >
      {/* Engineer name */}
      <h3 className="font-inter text-[16px] font-bold leading-[1.2] text-mnd-charcoal">
        Meet {name},
      </h3>

      {/* Role + experience */}
      <div className="flex items-center gap-4">
        <div className="w-[38px] h-[38px] flex items-center justify-center shrink-0">
          <img src="/svgs/briefcase.svg" alt="" width={28} height={28} />
        </div>
        <div className="font-inter text-xs font-medium text-mnd-charcoal tracking-[0.1] flex flex-col [word-spacing:0.02em]">
          <div>{years} Yrs Work Ex</div>
          <div className="font-semibold">{role}</div>
        </div>
      </div>

      {/* Fun fact */}
      <div className="flex flex-col gap-1">
        <p className="font-inter text-[16px] font-bold text-mnd-charcoal">Most likely to:</p>
        <p className="font-inter text-sm font-medium leading-[1.35] text-mnd-charcoal">
          {mostLikelyTo}
        </p>
      </div>

      {/* Quote */}
      <div className="flex gap-5 items-start">
        <span className="font-inter text-[52px] font-extrabold text-mnd-charcoal leading-[0.8] italic">"</span>
        <p className="font-inter text-xs font-medium leading-[1.35] text-mnd-charcoal w-[100px]">
          {quote}
        </p>
      </div>

      {/* Previous companies */}
      <div className="flex flex-col gap-2">
        <p className="font-inter text-[10px] font-light text-mnd-charcoal">Previously at:</p>
        {previousLogos.length > 0 && (
          <div className="flex items-center gap-4 flex-wrap">
            {previousLogos.map((logo) => {
              const src = logoMap[logo];
              return src ? <img key={logo} src={src} alt={logo} className="h-5 w-auto" /> : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
