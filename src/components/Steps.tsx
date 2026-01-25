"use client";

import { ArrowUpRight } from "lucide-react";

export default function Steps() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-neutral-200">Simple Steps to</span>
            <span className="block text-neutral-100">crypto confidence</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">
            Get started in minutes and take full control of your digital assets. From signup to secure trading, everything is built for speed and clarity.
          </p>
        </div>

        <div className="relative mt-24 mb-24">
          {/* Animated connection line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-emerald-500/30 overflow-hidden hidden lg:block">
            <div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent" style={{ width: "200px", animation: "connectionFlow 3s linear infinite" }} />
          </div>

          <div className="relative max-w-5xl mx-auto px-6 space-y-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                "Create your account in seconds",
                "Complete identity verification process",
                "Fund your wallet with preferred methods",
                "Start trading instantly with real-time tools",
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="h-20 w-full relative flex items-center justify-center">
                    <span className="inline-flex items-center justify-center font-semibold text-white w-12 h-12 ring-neutral-50/30 ring-8 rounded-full shadow-lg backdrop-blur-md" style={{ background: "radial-gradient(circle at center, rgba(16,185,129,0) 0%, rgb(5,150,105) 100%)" }}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-200 max-w-xs mt-3 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a href="#" className="flex justify-center gap-2 items-center font-semibold relative z-10 overflow-hidden group text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full py-2 px-4 shadow-xl backdrop-blur-md hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300">
                Create Account
                <ArrowUpRight className="h-4 w-4" />
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
