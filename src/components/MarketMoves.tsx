"use client";

import {
  ArrowUpRight,
  Shield,
  Share2,
  Equal,
  Link2,
  Droplets,
  Box,
  CircleDot,
  PieChart,
  Flame,
  Activity,
} from "lucide-react";

export default function MarketMoves() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-24 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight">
              <span className="block text-neutral-300">Stay on top of market</span>
              <span className="block text-neutral-100">moves in real time</span>
            </h3>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
              Track live price changes, market shifts, and key events as they happen. Never miss an opportunity or a critical update again.
            </p>
            <div className="mt-6">
              <a href="#" className="flex justify-center gap-2 items-center font-semibold relative z-10 overflow-hidden group text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full py-2 px-4 shadow-xl backdrop-blur-md hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300">
                Start investing
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          </div>

          {/* Watchlist */}
          <div className="rounded-3xl border border-white/5 bg-neutral-900/50 p-5 sm:p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-neutral-300">Watchlist</div>
              <div className="inline-flex items-center gap-2 text-xs text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Column A - scrolls down */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <div className="space-y-3" style={{ animation: "scrollDown 20s linear infinite" }}>
                  {[
                    { symbol: "NEM", price: "$0.0193", change: "24.80%", up: false, icon: Shield },
                    { symbol: "XRP", price: "$2.14", change: "13.45%", up: true, icon: Share2 },
                    { symbol: "EDR", price: "$0.0049", change: "4.80%", up: false, icon: Equal },
                    { symbol: "VIN", price: "$0.026889", change: "4.75%", up: true, icon: Link2 },
                    { symbol: "ETH", price: "$1,829.04", change: "2.55%", up: true, icon: Droplets },
                  ].concat([
                    { symbol: "NEM", price: "$0.0193", change: "24.80%", up: false, icon: Shield },
                    { symbol: "XRP", price: "$2.14", change: "13.45%", up: true, icon: Share2 },
                    { symbol: "EDR", price: "$0.0049", change: "4.80%", up: false, icon: Equal },
                    { symbol: "VIN", price: "$0.026889", change: "4.75%", up: true, icon: Link2 },
                    { symbol: "ETH", price: "$1,829.04", change: "2.55%", up: true, icon: Droplets },
                  ]).map((coin, i) => (
                    <div key={`${coin.symbol}-${i}`} className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
                          <coin.icon className="h-4 w-4 text-neutral-300" />
                        </span>
                        <div>
                          <div className="text-sm font-medium text-neutral-200">{coin.symbol}</div>
                          <div className="text-[10px] text-neutral-500">{coin.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="72" height="22" viewBox="0 0 72 22" className="opacity-90">
                          <path d={coin.up ? "M1 18 L9 12 L17 14 L25 10 L33 9 L41 11 L49 8 L57 9 L65 7" : "M1 8 L10 11 L18 10 L26 12 L34 9 L42 11 L50 8 L58 10 L66 6"} stroke={coin.up ? "rgb(16,185,129)" : "rgb(244,63,94)"} strokeWidth="2" fill="none" />
                        </svg>
                        <div className="text-right">
                          <div className="text-sm text-neutral-300">{coin.price}</div>
                          <div className={`text-xs ${coin.up ? "text-emerald-300" : "text-rose-400"}`}>{coin.change}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column B - scrolls up */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <div className="space-y-3" style={{ animation: "scrollUp 20s linear infinite" }}>
                  {[
                    { symbol: "BNB", price: "$604.76", change: "7.40%", up: true, icon: Box },
                    { symbol: "GXS", price: "$0.55", change: "8.20%", up: false, icon: CircleDot },
                    { symbol: "PPC", price: "$0.2778", change: "27.35%", up: false, icon: PieChart },
                    { symbol: "HOT", price: "$0.009484", change: "7.25%", up: false, icon: Flame },
                    { symbol: "PHR", price: "$0.057030", change: "2.55%", up: true, icon: Activity },
                  ].concat([
                    { symbol: "BNB", price: "$604.76", change: "7.40%", up: true, icon: Box },
                    { symbol: "GXS", price: "$0.55", change: "8.20%", up: false, icon: CircleDot },
                    { symbol: "PPC", price: "$0.2778", change: "27.35%", up: false, icon: PieChart },
                    { symbol: "HOT", price: "$0.009484", change: "7.25%", up: false, icon: Flame },
                    { symbol: "PHR", price: "$0.057030", change: "2.55%", up: true, icon: Activity },
                  ]).map((coin, i) => (
                    <div key={`${coin.symbol}-${i}`} className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
                          <coin.icon className="h-4 w-4 text-neutral-300" />
                        </span>
                        <div>
                          <div className="text-sm font-medium text-neutral-200">{coin.symbol}</div>
                          <div className="text-[10px] text-neutral-500">{coin.price}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg width="72" height="22" viewBox="0 0 72 22" className="opacity-90">
                          <path d={coin.up ? "M1 17 L9 14 L16 12 L24 15 L31 10 L39 12 L47 9 L55 11 L63 7 L71 9" : "M1 6 L10 9 L18 8 L26 10 L34 9 L42 11 L50 8 L58 9 L66 7"} stroke={coin.up ? "rgb(16,185,129)" : "rgb(244,63,94)"} strokeWidth="2" fill="none" />
                        </svg>
                        <div className="text-right">
                          <div className="text-sm text-neutral-300">{coin.price}</div>
                          <div className={`text-xs ${coin.up ? "text-emerald-300" : "text-rose-400"}`}>{coin.change}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fades */}
            <div className="pointer-events-none absolute inset-x-3 top-12 h-10 bg-gradient-to-b from-neutral-900/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 h-10 bg-gradient-to-t from-neutral-900/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
