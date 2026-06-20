import Image from "next/image";

const logos = [
  { name: "atomic", width: 60, height: 60 },
  { name: "aionios-alpha", width: 80, height: 96 },
  { name: "scaura", width: 60, height: 60 },
  { name: "artificient", width: 100, height: 100 },
  { name: "nerve", width: 100, height: 100 },
  { name: "petcare", width: 28, height: 28 },
  { name: "legal-ai", width: 80, height: 80 },
  { name: "squisshy", width: 80, height: 80 },
  { name: "silicon-society", width: 100, height: 80 },
  { name: "scrybe", width: 80, height: 80 },
  { name: "schbang", width: 100, height: 100 },
  { name: "quantiphi", width: 80, height: 60 },
  { name: "medinfini", width: 65, height: 65 },
  { name: "matrickz", width: 80, height: 80 },
  { name: "astronome-ai", width: 80, height: 80 },
  { name: "haystack", width: 80, height: 80 },
  { name: "gematlas", width: 60, height: 60 },
  { name: "iotis", width: 60, height: 60 },
  { name: "araya", width: 80, height: 80 },
  { name: "underpay", width: 60, height: 60 },
  { name: "gainn-fintech", width: 60, height: 60 },
  { name: "holocene", width: 60, height: 60 },
  { name: "trybe", width: 80, height: 80 },
];

export default function ClientTicker() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-marquee gap-1">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex items-center justify-center shrink-0">
            <Image
              src={`/landing/clients/${logo.name}.png`}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
