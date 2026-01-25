"use client";

import {
  Orbit,
  Box,
  Diamond,
  Layers,
  Sparkles,
  Link,
  Asterisk,
  Hexagon,
  Mountain,
  Triangle,
  Shield,
} from "lucide-react";

export default function ChainLogos() {
  return (
    <section className="relative">
      <div className="max-w-7xl mt-16 mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200">Support top 30+ chains</h3>
          <p className="mt-2 text-sm text-neutral-400">Compatible across the leading ecosystems</p>
        </div>

        <div className="mt-8 space-y-4">
          {/* Row A */}
          <div className="flex items-center justify-center gap-10 py-5 flex-wrap">
            {[
              { icon: Orbit, name: "Elrond" },
              { icon: Box, name: "Binance" },
              { icon: Diamond, name: "TON" },
              { icon: Layers, name: "Solana" },
              { icon: Sparkles, name: "Ethereum" },
            ].map((chain) => (
              <div key={chain.name} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
                  <chain.icon className="h-4 w-4 text-neutral-300" />
                </span>
                <span className="text-sm font-medium text-neutral-300">{chain.name}</span>
              </div>
            ))}
          </div>

          {/* Row B */}
          <div className="flex gap-10 py-5 items-center justify-center flex-wrap">
            {[
              { icon: Link, name: "Polygon" },
              { icon: Asterisk, name: "Stacks" },
              { icon: Hexagon, name: "Arbitrum" },
              { icon: Mountain, name: "Avalanche" },
              { icon: Triangle, name: "TRON" },
              { icon: Shield, name: "Gnosis" },
            ].map((chain) => (
              <div key={chain.name} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
                  <chain.icon className="h-4 w-4 text-neutral-300" />
                </span>
                <span className="text-sm font-medium text-neutral-300">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
