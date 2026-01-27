"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin: string;
}

interface TeamCarouselProps {
  team: TeamMember[];
}

export default function TeamCarousel({ team }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, team.length - slidesToShow);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mb-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-white/10 transition-colors"
          aria-label="Previous team member"
        >
          <ChevronLeft className="h-5 w-5 text-neutral-300" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-white/10 bg-neutral-900/60 hover:bg-white/10 transition-colors"
          aria-label="Next team member"
        >
          <ChevronRight className="h-5 w-5 text-neutral-300" />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {team.map((member) => (
            <div
              key={member.name}
              className="flex-shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 p-5 sm:p-6 transition-all duration-300 hover:bg-white/5 hover:border-brand/20 h-full">
                {/* Larger Avatar */}
                <div className="flex justify-center mb-5 sm:mb-6">
                  <div className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full ring-2 ring-white/10 shadow-lg overflow-hidden group-hover:ring-brand/30 transition-all">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-brand font-medium mt-1">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* LinkedIn Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-brand/10 hover:border-brand/30 text-sm text-neutral-300 hover:text-brand transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    View on LinkedIn
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-brand"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
