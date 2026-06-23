"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PreLanding() {
  const [isFun, setIsFun] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleToggle = () => {
    setIsFun(true);
  };

  const text = isFun ? "text-black" : "text-white";
  const border = isFun ? "border-black" : "border-white";

  const slide = (delay: string) =>
    `transition-[opacity,transform] duration-700 ease-out ${delay} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <div
      className={`flex flex-col min-h-screen p-6 transition-colors duration-500 ${isFun ? "bg-yellow-400" : "bg-black"}`}
    >
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-8 text-center">
          <div className={slide("[transition-delay:0ms]")}>
            <h1 className={`${text} text-3xl md:text-5xl font-bold tracking-[0.1] font-[Inter,sans-serif] transition-colors duration-500`}>
              Welcome to MND
            </h1>
          </div>

          <div className={`${text} mx-auto text-xs md:text-sm font-semibold max-w-xs md:max-w-100 transition-colors duration-500`}>
            <div className={slide("[transition-delay:400ms]")}>Before we begin,</div>
            <div className={slide("[transition-delay:650ms]")}>which website would you like to see?</div>
          </div>

          <div className={slide("[transition-delay:1000ms]")}>
            <hr className={`border-2 border-t ${border} w-6 mx-auto my-4 transition-colors duration-500`} />
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className={`flex-1 text-right ${slide("[transition-delay:1300ms]")}`}>
              <span className={`font-[Inter,sans-serif] ${text} text-xs md:text-sm font-semibold capitalize transition-colors duration-500`}>The boring one</span>
            </div>

            <div className={slide("[transition-delay:1550ms]")}>
              <button
                onClick={handleToggle}
                className={`relative w-14 h-5 rounded-full bg-transparent border ${border} cursor-pointer shrink-0 transition-colors duration-500`}
              >
                <span
                  className={`absolute left-1 top-1 w-3 h-3 rounded-full border ${border} bg-transparent transition-all duration-500 ${
                    isFun ? "translate-x-8" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className={`flex-1 text-left ${slide("[transition-delay:1800ms]")}`}>
              <span className={`font-[Cormorant-Garamond] ${text} text-xs md:text-sm italic font-bold capitalize transition-colors duration-500`}>The fun one!</span>
            </div>
          </div>
        </div>
      </div>

      <div className={slide("[transition-delay:2100ms]")}>
        <div className="flex justify-end items-center gap-4 pb-6">
          <span className={`${text} text-xs font-bold tracking-[0.3em] transition-colors duration-500`}>
            PRIVACY
          </span>
          <div className={`w-px h-6 transition-colors duration-500 ${isFun ? "bg-black" : "bg-white"}`} />
          <Image src="/mnd-white-logo.png" alt="MND Logo" width={80} height={18} />
        </div>
      </div>
    </div>
  );
}
