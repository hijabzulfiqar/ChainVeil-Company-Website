"use client";

import {
  Send,
  LineChart,
  Bell,
  ReceiptText,
  Gauge,
  Shield,
} from "lucide-react";

export default function PowerfulFeatures() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-neutral-200">Enterprise-grade AI & blockchain</span>
            <span className="block text-neutral-100">tools for developers</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mt-3 sm:mt-4 mx-auto leading-relaxed px-2">
            Build intelligent decentralized applications with confidence using our comprehensive suite of AI-powered development, testing, and deployment tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: Send, title: "AI-powered bridges", description: "Transfer assets with AI-optimized routing across blockchains for lowest fees and fastest finality." },
            { icon: LineChart, title: "Predictive gas analysis", description: "Machine learning models predict optimal gas prices and transaction timing for maximum efficiency." },
            { icon: Bell, title: "AI threat detection", description: "Real-time AI monitoring for contract vulnerabilities, suspicious activity, and network anomalies." },
            { icon: ReceiptText, title: "ML contract audit", description: "Deep learning security scanning that catches vulnerabilities traditional audits miss." },
            { icon: Gauge, title: "Smart infrastructure", description: "AI-managed node infrastructure that auto-scales based on predictive demand analysis." },
            { icon: Shield, title: "Intelligent security", description: "AI-enhanced wallet protection with behavioral analysis and fraud prevention." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl sm:rounded-2xl border border-white/5 bg-neutral-900/40 p-4 sm:p-6 md:p-7 transition hover:bg-white/5">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="inline-flex bg-neutral-800/60 w-9 h-9 sm:w-10 sm:h-10 ring-white/10 ring-1 rounded-lg sm:rounded-xl items-center justify-center shrink-0">
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-100 tracking-tight">{feature.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-neutral-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
