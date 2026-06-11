"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PreLanding() {
  const [isFun, setIsFun] = useState(false);
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      router.push("/boring");
    }, 20000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [router]);

  const handleToggle = () => {
    if (!isFun) {
      setIsFun(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        router.push("/fun");
      }, 2000);
    } else {
      setIsFun(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold">Welcome to MND</h1>
          <p className="text-white mt-4 mx-auto text-sm max-w-60">
            Before we begin, which website would you like to see?
          </p>
          <hr className="border-2 border-t border-white my-18 w-10 mx-auto" />
          <div className="flex items-center justify-center gap-3">
            <span className="text-white text-sm">The boring one</span>
            <button
              onClick={handleToggle}
              className="relative w-20 h-6 rounded-full bg-transparent border border-white cursor-pointer"
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 rounded-full border border-white bg-transparent transition-transform duration-300 ease-in-out ${
                  isFun ? "translate-x-14" : "translate-x-0"
                }`}
              />
            </button>
            <span className="text-white text-sm">The fun one!</span>
          </div>

        </div>
      </div>
      <div className="flex justify-end items-center gap-4 pb-6 pr-6">
        <span className="text-white text-sm font-semibold tracking-[0.3em]">
          PRIVACY
        </span>
        <div className="w-px h-8 bg-white" />
        <Image src="/mnd-white-logo.png" alt="MND Logo" width={80} height={20} />
      </div>
    </div>
  );
}
