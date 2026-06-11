"use client";

import { useState } from "react";
import Image from "next/image";

export default function PreLanding() {
  const [isFun, setIsFun] = useState(false);

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
              onClick={() => setIsFun(!isFun)}
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
        <div className="w-px h-6 bg-white" />
        <Image src="/mnd-white-logo.png" alt="MND Logo" width={60} height={20} />
      </div>
    </div>
  );
}
