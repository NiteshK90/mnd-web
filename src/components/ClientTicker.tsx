const logos: { name: string; width: number; height: number }[] = [
  { name: "atomic", width: 50, height: 50 },
  { name: "aionios-alpha", width: 90, height: 108 },
  { name: "scaura", width: 50, height: 50 },
  { name: "artificient", width: 50, height: 50 },
  { name: "nerve", width: 40, height: 40 },
  { name: "petcare", width: 30, height: 30 },
  { name: "legal-ai", width: 38, height: 38 },
  { name: "squisshy", width: 44, height: 44 },
  { name: "silicon-society", width: 80, height: 80 },
  { name: "scrybe", width: 30, height: 30 },
  { name: "schbang", width: 60, height: 60 },
  { name: "quantiphi", width: 60, height: 60 },
  { name: "medinfini", width: 36, height: 36 },
  { name: "matrickz", width: 38, height: 38 },
  { name: "astronome-ai", width: 85, height: 85 },
  { name: "haystack", width: 38, height: 38 },
  { name: "gematlas", width: 30, height: 30 },
  { name: "iotis", width: 30, height: 30 },
  { name: "araya", width: 50, height: 50 },
  { name: "underpay", width: 50, height: 50 },
  { name: "gainn-fintech", width: 50, height: 50 },
  { name: "holocene", width: 60, height: 60 },
  { name: "trybe", width: 40, height: 40 },
];

/* ClientTicker */
export default function ClientTicker() {
  return (
    /* Ticker wrapper */
    <div className="overflow-hidden w-full pb-6">
      {/* Marquee track */}
      <div className="flex items-center w-max animate-marquee gap-6">
        {[...logos, ...logos].map(({ name, width, height }, i) => (
          /* Logo item */
          <div key={i} className="flex items-center justify-center">
            <img
              src={`/landing/clients/${name}.png`}
              alt={name}
              width={width}
              height={height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
