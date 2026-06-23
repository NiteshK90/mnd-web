const AppleLogo = () => (
  <svg height="20" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.4-318.2 268.5-318.2 71 0 130.1 46.9 175 46.9 42.8 0 109.1-49.9 188.5-49.9 30.5 0 132.8 2.6 198.1 98.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="currentColor" />
    <rect x="11" y="1" width="9" height="9" fill="currentColor" />
    <rect x="1" y="11" width="9" height="9" fill="currentColor" />
    <rect x="11" y="11" width="9" height="9" fill="currentColor" />
  </svg>
);

const logoMap: Record<string, React.FC> = {
  apple: AppleLogo,
  microsoft: MicrosoftLogo,
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
      <h3 className="font-inter text-[16px] font-bold leading-[1.2] text-mnd-charcoal">
        Meet {name},
      </h3>

      <div className="flex items-center gap-4">
        <div className="w-[38px] h-[38px] flex items-center justify-center shrink-0">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="9" width="24" height="17" rx="3" stroke="#231F20" strokeWidth="1.75" />
            <path d="M9 9V7a5 5 0 0 1 10 0v2" stroke="#231F20" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M2 16h24" stroke="#231F20" strokeWidth="1.75" />
          </svg>
        </div>
        <div className="font-inter text-xs font-medium text-mnd-charcoal tracking-[0.1] flex flex-col [word-spacing:0.02em]">
          <div>{years} Yrs Work Ex</div>
          <div className="font-semibold">{role}</div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-inter text-[16px] font-bold text-mnd-charcoal">Most likely to:</p>
        <p className="font-inter text-sm font-medium leading-[1.35] text-mnd-charcoal">
          {mostLikelyTo}
        </p>
      </div>

      <div className="flex gap-5 items-start">
        <span className="font-inter text-[52px] font-extrabold text-mnd-charcoal leading-[0.8] italic">"</span>
        <p className="font-inter text-xs font-medium leading-[1.35] text-mnd-charcoal w-[100px]">
          {quote}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-inter text-[10px] font-light text-mnd-charcoal">Previously at:</p>
        {previousLogos.length > 0 && (
          <div className="flex items-center gap-4 flex-wrap text-mnd-charcoal">
            {previousLogos.map((logo) => {
              const Logo = logoMap[logo];
              return Logo ? <Logo key={logo} /> : null;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
