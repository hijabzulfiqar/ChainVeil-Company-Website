"use client";

import { heroData } from "@/data/home";

export default function Hero() {
  return (
    <section className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Blockchain AI Background"
          className="w-full h-full object-cover"
        />
        {/* Green tint overlay to match brand */}
        <div className="absolute inset-0 bg-brand/10" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-16 sm:pb-20 md:pb-24 w-full text-center">
        {/* Badge */}
        <p className="text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-6">
          {heroData.badge}
        </p>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4 sm:mb-6">
          <span className="text-neutral-100">{heroData.heading.line1}</span>
          <span className="block bg-clip-text text-transparent pb-1.5 bg-gradient-to-br from-neutral-50 to-neutral-300">
            {heroData.heading.line2}
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {heroData.description}
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
    </section>
  );
}
