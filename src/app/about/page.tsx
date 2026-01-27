"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamCarousel from "@/components/TeamCarousel";
import {
  Target,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Award,
  TrendingUp,
  Users,
  LucideIcon,
} from "lucide-react";
import { stats, values, team, milestones, missionStats } from "@/data/about";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Lightbulb,
  Users,
  Zap,
  Globe,
  Award,
  TrendingUp,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">About ChainVeil</p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Building the future of
            <span className="block pb-1.5 bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Intelligent Blockchain
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            We&apos;re a team of AI researchers, blockchain engineers, and
            security experts united by a single mission: making Web3 safer and
            smarter.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-12 sm:py-16 md:py-24" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand mb-4">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-4 sm:mb-6">
                Democratizing AI-powered blockchain security
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed mb-4">
                We believe that every blockchain project deserves
                enterprise-grade security, regardless of size or budget. Our
                AI-powered tools make advanced security accessible to everyone.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                By combining machine learning with deep blockchain expertise,
                we&apos;re creating a new standard for smart contract security
                and cross-chain infrastructure.
              </p>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 p-6 sm:p-8"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                  backgroundPosition: "-9px -9px",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {missionStats.map((item) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <div key={item.label} className="text-center p-3 sm:p-4">
                        <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-2 sm:mb-3">
                          {IconComponent && (
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
                          )}
                        </div>
                        <div className="text-lg sm:text-xl font-semibold text-neutral-100">
                          {item.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-neutral-400">
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value) => {
              const IconComponent = iconMap[value.icon];
              return (
                <div
                  key={value.title}
                  className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 hover:bg-white/5 hover:border-brand/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-4 group-hover:bg-brand/10 group-hover:ring-brand/20 transition-all">
                    {IconComponent && (
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
              From a small team with a big vision to an industry leader
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-brand/20 to-transparent sm:-translate-x-px" />

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-4 sm:gap-8 ${
                    index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 h-3 w-3 rounded-full bg-brand ring-4 ring-neutral-950 sm:-translate-x-1.5" />

                  <div
                    className={`flex-1 ml-10 sm:ml-0 ${
                      index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
                      <div className="text-brand font-semibold text-sm sm:text-base mb-1">
                        {milestone.year}
                      </div>
                      <div className="text-neutral-100 font-semibold text-base sm:text-lg mb-1">
                        {milestone.title}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-12 sm:py-16 md:py-24" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
              Meet Our Team
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
              AI and blockchain experts building the infrastructure for the
              decentralized future.
            </p>
          </div>

          <TeamCarousel team={team} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 ring-1 ring-white/5 p-6 sm:p-10 md:p-14 text-center"
            style={{
              background: `
                radial-gradient(600px 240px at 25% 10%, rgba(129, 214, 88, 0.12), transparent 65%),
                radial-gradient(700px 280px at 90% 100%, rgba(107, 194, 72, 0.12), transparent 70%)
              `,
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Want to join our team?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-6 sm:mb-8">
              We&apos;re always looking for talented individuals who are
              passionate about AI and blockchain technology.
            </p>
            <Link
              href="/hiring"
              className="inline-flex items-center gap-2 font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-300"
            >
              View Open Positions
            </Link>

            <div className="pointer-events-none absolute inset-x-4 sm:inset-x-6 md:inset-x-10 bottom-0">
              <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-8 sm:h-10 md:h-12 w-[90%] sm:w-[88%] md:w-[82%] rounded-full bg-brand/25 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
