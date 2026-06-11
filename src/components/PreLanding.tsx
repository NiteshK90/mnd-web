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
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              isFun ? "bg-white" : "bg-zinc-600"
            }`}
          >
            <span
              className={`absolute left-0 top-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                isFun ? "translate-x-7 bg-black" : "translate-x-1 bg-white"
              }`}
            />
          </button>
          <span className="text-white text-sm">The fun one!</span>
        </div>
      </div>
    </div>
  );
}
