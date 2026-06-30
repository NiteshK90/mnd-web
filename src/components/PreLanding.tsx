"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface PreLandingProps {
  onComplete?: () => void;
}

export default function PreLanding({ onComplete }: PreLandingProps) {
  const [isFun, setIsFun] = useState(false);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const text = isFun ? "text-black" : "text-white";
  const border = isFun ? "border-black" : "border-white";

  const su = (delay: string) => ({ animationDelay: delay });

  const complete = useCallback(() => {
    localStorage.setItem("mnd_visited", "true");
    if (onComplete) {
      onComplete();
    } else {
      router.replace("/");
    }
  }, [onComplete, router]);

  // Auto-focus first interactive element; restore focus on unmount
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const firstFocusable = modalRef.current?.querySelector<HTMLElement>("button, [href]");
    firstFocusable?.focus();
    return () => { previouslyFocused?.focus(); };
  }, []);

  // Escape to dismiss; Tab to trap focus inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        complete();
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [complete]);

  // Page wrapper — transitions bg from black to mnd-yellow on toggle, then redirects
  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to MND"
      className={`flex flex-col min-h-screen p-4 md:p-6 transition-colors duration-500 ${isFun ? "bg-mnd-yellow" : "bg-black"}`}
      onTransitionEnd={(e) => {
        if (e.propertyName === "background-color" && isFun) {
          complete();
        }
      }}
    >
      {/* Center card */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col gap-5 md:gap-8 text-center">

          {/* Headline */}
          <h1
            className={`animate-slide-up ${text} text-3xl md:text-5xl font-bold tracking-[0.1] font-[Inter,sans-serif] transition-colors duration-500`}
            style={su("0ms")}
          >
            Welcome to MND
          </h1>

          {/* Subtitle */}
          <div className={`${text} mx-auto text-xs md:text-sm font-semibold max-w-xs md:max-w-100 transition-colors duration-500`}>
            <div className="animate-slide-up" style={su("400ms")}>Before we begin,</div>
            <div className="animate-slide-up" style={su("650ms")}>which website would you like to see?</div>
          </div>

          {/* Divider */}
          <hr
            className={`animate-slide-up border-2 border-t ${border} w-6 mx-auto my-2 md:my-4 transition-colors duration-500`}
            style={su("1000ms")}
          />

          {/* Toggle row — boring / fun */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {/* Boring label */}
            <span
              className={`animate-slide-up flex-1 text-right font-[Inter,sans-serif] ${text} text-xs md:text-sm font-semibold capitalize transition-colors duration-500`}
              style={su("1300ms")}
            >
              The boring one
            </span>

            {/* Toggle switch */}
            <button
              onClick={() => setIsFun(true)}
              aria-label="Switch to the fun version"
              className={`animate-slide-up relative w-16 h-5 rounded-full bg-transparent border ${border} cursor-pointer shrink-0 transition-colors duration-500`}
              style={su("1550ms")}
            >
              {/* Knob */}
              <span
                className={`absolute left-1 top-1 w-3 h-3 rounded-full border ${border} bg-transparent transition-all duration-500 ${isFun ? "translate-x-10" : "translate-x-0"}`}
              />
            </button>

            {/* Fun label */}
            <span
              className={`animate-slide-up flex-1 text-left font-playfair ${text} text-xs md:text-sm italic font-bold capitalize transition-colors duration-500`}
              style={su("1800ms")}
            >
              The fun one!
            </span>
          </div>

        </div>
      </div>

      {/* Footer bar — privacy link + logo */}
      <div
        className="animate-slide-up flex justify-end items-center gap-3 pb-4 md:pb-6"
        style={su("2100ms")}
      >
        <span className={`${text} text-xs font-bold tracking-[0.3em] transition-colors duration-500`}>
          PRIVACY
        </span>
        {/* Vertical separator */}
        <div className={`w-px h-6 transition-colors duration-500 ${isFun ? "bg-black" : "bg-white"}`} />
        <Link href="/">
          <Image src="/mnd-white-logo.png" alt="MND Logo" width={80} height={18} />
        </Link>
      </div>
    </div>
  );
}
