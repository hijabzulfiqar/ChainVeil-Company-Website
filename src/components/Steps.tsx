"use client";

import { ArrowUpRight } from "lucide-react";

export default function Steps() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-neutral-200">Simple Steps to</span>
            <span className="block text-neutral-100">crypto confidence</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
            Get started in minutes and take full control of your digital assets. From signup to secure trading, everything is built for speed and clarity.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-24 mb-12 sm:mb-24">
          {/* Animated connection line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-emerald-500/30 overflow-hidden hidden lg:block">
            <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" style={{ width: "200px", animation: "connectionFlow 3s linear infinite" }} />
          </div>

          <div className="relative max-w-5xl mx-auto px-2 sm:px-6 space-y-10 sm:space-y-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
              {[
                "Create your account in seconds",
                "Complete identity verification process",
                "Fund your wallet with preferred methods",
                "Start trading instantly with real-time tools",
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="h-14 sm:h-20 w-full relative flex items-center justify-center">
                    <span className="inline-flex items-center justify-center font-semibold text-white w-10 h-10 sm:w-12 sm:h-12 ring-neutral-50/30 ring-4 sm:ring-8 rounded-full shadow-lg backdrop-blur-md text-sm sm:text-base" style={{ background: "radial-gradient(circle at center, rgba(16,185,129,0) 0%, rgb(5,150,105) 100%)" }}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 max-w-xs mt-2 sm:mt-3 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-10 flex justify-center">
              <a href="#" className="flex justify-center gap-2 items-center font-semibold relative z-10 overflow-hidden group text-sm sm:text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full py-1.5 sm:py-2 px-3 sm:px-4 shadow-xl backdrop-blur-md hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300">
                Create Account
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes connectionFlow {
          0% {
            transform: translateX(-200px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 200px));
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
