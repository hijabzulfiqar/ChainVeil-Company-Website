"use client";

import { Star, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto pt-12 sm:pt-24 px-4 sm:px-6 pb-12 sm:pb-24">
        {/* Promo + Testimonial container */}
        <div
          className="relative overflow-hidden bg-neutral-50/0 border-white/10 border ring-white/5 ring-1 rounded-2xl sm:rounded-3xl"
          style={{
            background: `
              radial-gradient(600px 240px at 25% 10%, rgba(129, 214, 88, 0.12), transparent 65%),
              radial-gradient(700px 280px at 90% 100%, rgba(107, 194, 72, 0.12), transparent 70%)
            `,
          }}
        >
          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 p-5 sm:p-8 md:p-10 lg:p-14 items-center">
            {/* Left: Headline + copy + CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.1] font-semibold text-neutral-100 tracking-tight">
                Take control of your
                <span className="block text-neutral-100">crypto future</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400 max-w-xl mt-3 sm:mt-5 mx-auto lg:mx-0">
                Thousands of investors are already maximising their gains with ChainVeil. Don&apos;t get left behind — start trading smarter today.
              </p>

              <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
                <button type="button" className="button">
                  <div className="points_wrapper">
                    {[...Array(10)].map((_, i) => (
                      <i key={i} className="point"></i>
                    ))}
                  </div>
                  <span className="inner">
                    Get Started
                    <ArrowRight className="icon" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right: Testimonial card */}
            <div className="lg:pl-4">
              <div className="rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 ring-1 ring-white/5 p-4 sm:p-6 md:p-8 shadow-lg shadow-black/20 backdrop-blur">
                {/* Stars */}
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed text-center lg:text-left">
                  &ldquo;Switching to ChainVeil was a total game-changer! Trading is seamless, transactions happen instantly, and managing my portfolio has never been easier or more secure.&rdquo;
                </p>

                {/* Author */}
                <div className="mt-4 sm:mt-6 text-center lg:text-left">
                  <div className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-100">Lucas Clarke</div>
                  <div className="text-[10px] sm:text-xs text-neutral-500 mt-1">Investor at Shortline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom neon underline + glow */}
          <div className="pointer-events-none absolute inset-x-6 sm:inset-x-10 bottom-0">
            <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-10 sm:h-12 w-[88%] sm:w-[82%] rounded-full bg-brand/25 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
