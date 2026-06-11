"use client";

import { useState } from "react";

export default function PreLanding() {
  const [isFun, setIsFun] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold">Welcome to MND</h1>
        <p className="text-white mt-4 mx-auto text-sm max-w-60">
          Before we begin, which website would you like to see?
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
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
  );
}
