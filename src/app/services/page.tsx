"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Brain,
  Shield,
  Zap,
  LineChart,
  Code2,
  Server,
  ArrowUpRight,
  Cpu,
  Database,
  Lock,
  Activity,
  Layers,
  GitBranch,
  LucideIcon,
} from "lucide-react";
import { services, capabilities, processSteps } from "@/data/services";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Brain,
  Shield,
  Zap,
  LineChart,
  Code2,
  Server,
  Cpu,
  Database,
  Lock,
  Activity,
  Layers,
  GitBranch,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">
            AI-Powered Services
          </p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Enterprise-grade AI &
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Blockchain Infrastructure
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            From smart contract auditing to cross-chain infrastructure, we
            provide cutting-edge tools powered by machine learning and
            distributed systems.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 ring-1 ring-white/5 p-3 sm:p-4 md:p-6"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              backgroundPosition: "-9px -9px",
            }}
          >
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
              {capabilities.map((cap) => {
                const IconComponent = iconMap[cap.icon];
                return (
                  <div key={cap.label} className="text-center">
                    <div className="inline-flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg sm:rounded-xl bg-white/5 ring-1 ring-white/10 mb-1.5 sm:mb-2 md:mb-3">
                      {IconComponent && (
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-brand" />
                      )}
                    </div>
                    <div className="text-sm sm:text-lg md:text-2xl font-semibold text-neutral-100">
                      {cap.value}
                    </div>
                    <div className="text-[8px] sm:text-[10px] md:text-xs text-neutral-400">
                      {cap.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - 2 Column Layout */}
      <section className="relative pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              <span className="text-neutral-200">
                Powering the next generation of
              </span>
              <span className="block text-neutral-100">intelligent dApps</span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
              Our comprehensive suite of AI-enhanced blockchain services covers
              every aspect of Web3 development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden ring-1 ring-white/5 transition-all duration-500 hover:ring-brand/20 bg-neutral-900/40 border-white/10 border rounded-xl sm:rounded-2xl"
                >
                  {/* Background glow */}
                  <div
                    className="absolute -bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(129, 214, 88, 0.25), transparent 70%)",
                    }}
                  />

                  <div className="relative p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4 sm:mb-5">
                      <div className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10">
                        {IconComponent && (
                          <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-brand" />
                        )}
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-white/5 ring-white/10 ring-1 rounded-lg py-1 px-2 sm:px-2.5">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 tracking-tight mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 sm:mb-5">
                      {service.description}
                    </p>

                    {/* Stats row */}
                    <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10">
                      <div>
                        <div className="text-[10px] sm:text-xs text-neutral-500 mb-1">
                          {service.stats.label}
                        </div>
                        <div className="text-lg sm:text-2xl font-semibold text-brand">
                          {service.stats.value}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition group/link"
                      >
                        Learn more
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              <span className="text-neutral-200">How we deliver</span>
              <span className="block text-neutral-100">
                AI-powered solutions
              </span>
            </h2>
            <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
              Our streamlined process ensures rapid deployment without
              compromising on quality or security.
            </p>
          </div>

          <div className="relative mt-12 sm:mt-20">
            {/* Animated connection line */}
            <div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-brand/30 overflow-hidden hidden lg:block">
              <div
                className="absolute inset-0 h-full"
                style={{
                  width: "200px",
                  animation: "connectionFlow 3s linear infinite",
                  background:
                    "linear-gradient(to right, transparent, #81D658, transparent)",
                }}
              />
            </div>

            <div className="relative max-w-5xl mx-auto px-2 sm:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10">
                {processSteps.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-14 sm:h-20 w-full relative flex items-center justify-center">
                      <span
                        className="inline-flex items-center justify-center font-semibold text-white w-10 h-10 sm:w-12 sm:h-12 ring-neutral-50/30 ring-4 sm:ring-8 rounded-full shadow-lg backdrop-blur-md text-sm sm:text-base"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(129, 214, 88, 0) 0%, #6BC248 100%)",
                        }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-neutral-100 mt-2 sm:mt-3">
                      {item.step}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-neutral-400 max-w-xs mt-1 sm:mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 ring-1 ring-white/5 p-8 sm:p-12 md:p-16 text-center"
            style={{
              background: `
                radial-gradient(600px 240px at 25% 10%, rgba(129, 214, 88, 0.12), transparent 65%),
                radial-gradient(700px 280px at 90% 100%, rgba(107, 194, 72, 0.12), transparent 70%)
              `,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-4">
              Ready to build with AI & blockchain?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-6 sm:mb-8">
              Get in touch with our team to discuss your project requirements
              and discover how ChainVeil can accelerate your development.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-300"
            >
              Contact Our Team
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Bottom glow */}
            <div className="pointer-events-none absolute inset-x-6 sm:inset-x-10 bottom-0">
              <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-10 sm:h-12 w-[88%] sm:w-[82%] rounded-full bg-brand/25 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
    </div>
  );
}
