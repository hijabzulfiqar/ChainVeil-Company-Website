"use client";

import TeamCarousel from "@/components/TeamCarousel";
import { team } from "@/data/about";

export default function Members() {
  return (
    <section className="relative" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
            Meet Our Team
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
            AI and blockchain experts building the infrastructure for the decentralized future.
          </p>
        </div>

        {/* Team Carousel */}
        <TeamCarousel team={team} />
      </div>
    </section>
  );
}
