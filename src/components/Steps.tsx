"use client";

import { stepsData } from "@/data/home";

export default function Steps() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-10 sm:pb-16">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-neutral-200">{stepsData.heading.line1}</span>
            <span className="block text-neutral-100">{stepsData.heading.line2}</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
            {stepsData.description}
          </p>
        </div>

        <div className="relative mt-12 sm:mt-24 mb-12 sm:mb-24">
          {/* Animated connection line */}
          <div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-brand/30 overflow-hidden hidden lg:block">
            <div className="absolute inset-0 h-full" style={{ width: "200px", animation: "connectionFlow 3s linear infinite", background: "linear-gradient(to right, transparent, #81D658, transparent)" }} />
          </div>

          <div className="relative max-w-5xl mx-auto px-2 sm:px-6 space-y-10 sm:space-y-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
              {stepsData.steps.map((stepText, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="h-14 sm:h-20 w-full relative flex items-center justify-center">
                    <span className="inline-flex items-center justify-center font-semibold text-white w-10 h-10 sm:w-12 sm:h-12 ring-neutral-50/30 ring-4 sm:ring-8 rounded-full shadow-lg backdrop-blur-md text-sm sm:text-base" style={{ background: "radial-gradient(circle at center, rgba(129, 214, 88, 0) 0%, #6BC248 100%)" }}>
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 max-w-xs mt-2 sm:mt-3 leading-relaxed">{stepText}</p>
                </div>
              ))}
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
