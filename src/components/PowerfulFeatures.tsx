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
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
            <span className="text-neutral-200">Powerful features built for</span>
            <span className="block text-neutral-100">crypto confidence</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl mt-4 mx-auto leading-relaxed">
            Streamline your experience with tools designed to keep you secure, informed, and in control every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Send, title: "Instant transfers", description: "Send and receive crypto in seconds, without delays or bottlenecks." },
            { icon: LineChart, title: "Risk analysis", description: "Stay ahead of the market with smart insights into potential risks." },
            { icon: Bell, title: "Real-time alerts", description: "Get notified instantly about price moves, trends, and key events." },
            { icon: ReceiptText, title: "Tax Optimization", description: "Automate reports and minimise your tax burden with built-in tools." },
            { icon: Gauge, title: "Autopilot mode", description: "Let smart algorithms manage your assets while you stay hands-off." },
            { icon: Shield, title: "Maximum security", description: "Protect your funds with top-tier encryption and multi-layer defences." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
              <div className="flex items-start gap-4">
                <div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl items-center justify-center">
                  <feature.icon className="h-5 w-5 text-neutral-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
