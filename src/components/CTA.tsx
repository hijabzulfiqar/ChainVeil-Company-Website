"use client";

import { Star, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto pt-24 px-6 pb-24">
        {/* Promo + Testimonial container */}
        <div
          className="relative overflow-hidden bg-neutral-50/0 border-white/10 border ring-white/5 ring-1 rounded-3xl"
          style={{
            background: `
              radial-gradient(600px 240px at 25% 10%, rgba(16,185,129,0.12), transparent 65%),
              radial-gradient(700px 280px at 90% 100%, rgba(5,150,105,0.12), transparent 70%)
            `,
          }}
        >
          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 p-8 sm:p-10 lg:p-14 items-center">
            {/* Left: Headline + copy + CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl leading-[1.1] font-semibold text-neutral-100 tracking-tight">
                Take control of your
                <span className="block text-neutral-100">crypto future</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-400 max-w-xl mt-5">
                Thousands of investors are already maximising their gains with ChainVeil. Don&apos;t get left behind — start trading smarter today.
              </p>

              <div className="mt-8">
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
              <div className="rounded-3xl bg-white/5 border border-white/10 ring-1 ring-white/5 p-6 sm:p-8 shadow-lg shadow-black/20 backdrop-blur">
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                  &ldquo;Switching to ChainVeil was a total game-changer! Trading is seamless, transactions happen instantly, and managing my portfolio has never been easier or more secure.&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6">
                  <div className="text-sm font-semibold tracking-tight text-neutral-100">Lucas Clarke</div>
                  <div className="text-xs text-neutral-500 mt-1">Investor at Shortline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom neon underline + glow */}
          <div className="pointer-events-none absolute inset-x-6 sm:inset-x-10 bottom-0">
            <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-10 sm:h-12 w-[88%] sm:w-[82%] rounded-full bg-emerald-500/25 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
