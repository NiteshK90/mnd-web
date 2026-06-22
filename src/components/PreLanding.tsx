"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PreLanding() {
  const [isFun, setIsFun] = useState(false);
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleToggle = () => {
    setIsFun(!isFun);
    setTimeout(() => {
      router.push("/landing");
    }, 2000);
  };

  const fadeBase = "transition-all duration-[2000ms] ease-out";
  const fadeHidden = "opacity-0 translate-y-3";
  const fadeVisible = "opacity-100 translate-y-0";

  return (
    <div className="flex flex-col min-h-screen bg-black p-6">
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-8 text-center">
          <h1
            className={`text-white text-3xl md:text-5xl font-bold tracking-[0.1] font-[Inter,sans-serif] ${fadeBase} ${visible ? fadeVisible : fadeHidden}`}
            style={{ transitionDelay: "0ms" }}
          >
            Welcome to MND
          </h1>
          <div
            className={`text-white mx-auto text-xs md:text-sm font-semibold max-w-xs md:max-w-100 ${fadeBase} ${visible ? fadeVisible : fadeHidden}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div>Before we begin,</div>
            <div>which website would you like to see?</div>
          </div>
          <hr
            className={`border-2 border-t border-white w-6 mx-auto my-4 ${fadeBase} ${visible ? fadeVisible : fadeHidden}`}
            style={{ transitionDelay: "800ms" }}
          />
          <div
            className={`flex items-center justify-center gap-4 md:gap-6 ${fadeBase} ${visible ? fadeVisible : fadeHidden}`}
            style={{ transitionDelay: "1200ms" }}
          >
            <span className="flex-1 text-right font-[Inter,sans-serif] text-white text-xs md:text-sm font-semibold capitalize">The boring one</span>
            <button
              onClick={handleToggle}
              className="relative w-14 h-5 rounded-full bg-transparent border border-white cursor-pointer shrink-0"
            >
              <span
                className={`absolute left-1 top-1 w-3 h-3 rounded-full border border-white bg-transparent transition-transform duration-300 ease-in-out ${
                  isFun ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className="flex-1 text-left font-[Cormorant-Garamond] text-white text-xs md:text-sm italic font-bold capitalize">The fun one!</span>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-end items-center gap-4 pb-6 ${fadeBase} ${visible ? fadeVisible : fadeHidden}`}
        style={{ transitionDelay: "1600ms" }}
      >
        <span className="text-white text-xs font-bold tracking-[0.3em]">
          PRIVACY
        </span>
        <div className="w-px h-6 bg-white" />
        <Image src="/mnd-white-logo.png" alt="MND Logo" width={80} height={18} />
      </div>
    </div>
  );
}
