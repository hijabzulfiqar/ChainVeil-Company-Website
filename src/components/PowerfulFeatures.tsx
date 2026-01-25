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
            <span className="text-neutral-200">Enterprise-grade tools for</span>
            <span className="block text-neutral-100">blockchain developers</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl mt-3 sm:mt-4 mx-auto leading-relaxed px-2">
            Build decentralized applications with confidence using our comprehensive suite of development, testing, and deployment tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { icon: Send, title: "Cross-chain bridges", description: "Transfer assets seamlessly between blockchains with atomic swap technology." },
            { icon: LineChart, title: "Gas optimization", description: "AI-powered analysis to minimize transaction costs and maximize efficiency." },
            { icon: Bell, title: "Block notifications", description: "Get instant alerts for contract events, whale movements, and network changes." },
            { icon: ReceiptText, title: "Smart contract audit", description: "Automated security scanning and vulnerability detection before deployment." },
            { icon: Gauge, title: "Node infrastructure", description: "Scalable RPC endpoints and dedicated nodes for high-throughput applications." },
            { icon: Shield, title: "Multi-sig security", description: "Enterprise-grade wallet security with customizable signature requirements." },
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
