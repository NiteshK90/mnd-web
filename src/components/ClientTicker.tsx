import Image from "next/image";

const logos = [
  "aionios-alpha",
  "araya",
  "artificient",
  "astronome-ai",
  "atomic",
  "gainn-fintech",
  "gematlas",
  "haystack",
  "holocene",
  "iotis",
  "legal-ai",
  "matrickz",
  "medinfini",
  "nerve",
  "petcare",
  "quantiphi",
  "scaura",
  "schbang",
  "scrybe",
  "silicon-society",
  "squisshy",
  "trybe",
  "underpay",
];

export default function ClientTicker() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-marquee gap-12">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center w-36 h-16 shrink-0">
            <Image
              src={`/landing/clients/${logo}.png`}
              alt={logo}
              width={180}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
