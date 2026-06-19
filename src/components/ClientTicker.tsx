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
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0">
            <Image
              src={`/landing/clients/${logo}.png`}
              alt={logo}
              width={80}
              height={80}
              className="h-20 w-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
