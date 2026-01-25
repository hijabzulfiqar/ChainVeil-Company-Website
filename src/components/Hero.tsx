"use client";

import {
  Search,
  Settings,
  LayoutDashboard,
  BarChart3,
  Database,
  Bell,
  Settings2,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
        <p className="text-xs sm:text-sm text-neutral-400">Enterprise-grade blockchain infrastructure</p>
        <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
          Building the future of
          <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
            Decentralized Technology
          </span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
          Harness the power of distributed ledger technology. ChainVeil delivers secure smart contracts, seamless DeFi integration, and enterprise blockchain solutions.
        </p>

        <div>
          <button type="button" className="button">
            <div className="points_wrapper">
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
              <i className="point"></i>
            </div>
            <span className="inner">
              Get Started
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="relative max-w-5xl mt-8 sm:mt-14 mx-auto px-4 sm:px-6" style={{ perspective: "1000px" }}>
        <div className="pointer-events-none relative mb-4 hidden sm:block">
          <div className="absolute -top-10 left-1/2 h-16 w-full max-w-4xl -translate-x-1/2 rounded-full blur-xl" style={{ background: "linear-gradient(to right, transparent, rgba(129, 214, 88, 0.6), transparent)" }} />
          <div className="absolute -top-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full blur-lg" style={{ background: "linear-gradient(to right, transparent, rgba(129, 214, 88, 0.4), transparent)" }} />
        </div>

        <div className="relative transition-transform duration-800 ease-out">
          <div className="pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

          <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-2xl shadow-black/60 ring-1 ring-white/5 backdrop-blur overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 bg-neutral-900/80">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500/70" />
                <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 px-2 sm:px-3">
                <div className="mx-auto max-w-[120px] sm:max-w-xs rounded-full bg-neutral-800/60 px-2 sm:px-3 py-0.5 sm:py-1 text-center text-[10px] sm:text-xs text-neutral-300 ring-1 ring-white/5">
                  chainveil.app
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-400">
                <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <Settings className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Sidebar */}
              <aside className="hidden lg:block border-r border-white/10 p-3">
                <div className="flex items-center gap-2 px-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-white/10 overflow-hidden">
                    <div className="w-6 h-6 rounded" style={{ background: "linear-gradient(to bottom right, #81D658, #6BC248)" }} />
                  </span>
                  <div>
                    <div className="text-xs font-medium">Alex Carter</div>
                    <div className="text-[10px] text-neutral-400">Developer</div>
                  </div>
                </div>

                <nav className="mt-4 space-y-0.5">
                  <a className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-xs text-white ring-1 ring-white/10" href="#">
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    Dashboard
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <BarChart3 className="h-3.5 w-3.5" />
                    Transactions
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <Database className="h-3.5 w-3.5" />
                    Smart Contracts
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <Bell className="h-3.5 w-3.5" />
                    Alerts
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <Settings2 className="h-3.5 w-3.5" />
                    Settings
                  </a>
                </nav>
              </aside>

              {/* Main Content */}
              <main className="lg:col-span-4">
                <div className="p-3 sm:p-4">
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h2 className="text-sm sm:text-base font-semibold tracking-tight">Blockchain Overview</h2>
                      <span className="inline-flex items-center gap-1 rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium ring-1" style={{ backgroundColor: "rgba(129, 214, 88, 0.1)", color: "#81D658", borderColor: "rgba(129, 214, 88, 0.2)" }}>
                        <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        +12.4%
                      </span>
                    </div>

                    {/* Metric cards */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                      {[
                        { label: "Transactions", value: "2.4M", change: "+8.2%", positive: true },
                        { label: "Gas Saved", value: "42.8%", change: "+0.3%", positive: true },
                        { label: "TVL", value: "$124.0M", change: "+15.1%", positive: true },
                        { label: "Active Nodes", value: "18.3K", change: "-2.1%", positive: false },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-lg border border-white/10 bg-neutral-900/60 p-2 sm:p-3">
                          <div className="text-[10px] sm:text-xs text-neutral-400">{metric.label}</div>
                          <div className="text-sm sm:text-lg font-semibold">{metric.value}</div>
                          <div className="text-[10px] sm:text-xs" style={{ color: metric.positive ? "#81D658" : "#f87171" }}>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Charts section */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    <div className="rounded-lg sm:rounded-xl border border-white/10 bg-neutral-900/60 p-2 sm:p-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h3 className="text-[10px] sm:text-sm font-semibold">Block Activity</h3>
                        <button className="text-neutral-400 hover:text-white hidden sm:block">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex bg-gradient-to-b from-white/10 to-white/0 h-16 sm:h-24 border-white/5 border rounded-lg p-1.5 sm:p-2 items-end justify-between">
                        {[40, 60, 80, 45, 75, 90, 70].map((height, i) => (
                          <div
                            key={i}
                            className="w-1.5 sm:w-2 rounded-t transition-all duration-1000"
                            style={{ height: `${height}%`, background: i >= 5 ? "linear-gradient(to top, #6BC248, #81D658)" : "linear-gradient(to top, #81D658, #9AE076)" }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg sm:rounded-xl border border-white/10 bg-neutral-900/60 p-2 sm:p-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h3 className="text-[10px] sm:text-sm font-semibold">Network Load</h3>
                        <button className="text-neutral-400 hover:text-white hidden sm:block">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="h-16 sm:h-24 flex items-center justify-center">
                        <div className="relative">
                          <div
                            className="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
                            style={{ transform: "rotate(240deg)", border: "4px solid rgba(129, 214, 88, 0.3)", borderTopColor: "#81D658", borderRightColor: "#6BC248", borderBottomColor: "#9AE076" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-semibold">67%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Table - Hidden on very small screens */}
                  <div className="hidden sm:block rounded-lg sm:rounded-xl border border-white/10 bg-neutral-900/60 overflow-hidden">
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-white/10">
                      <h4 className="text-xs sm:text-sm font-semibold">Recent Transactions</h4>
                      <a href="#" className="text-[10px] sm:text-xs text-neutral-300 hover:text-white">View all</a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="text-[10px] sm:text-xs text-neutral-400">
                          <tr className="border-b border-white/10">
                            <th className="px-3 sm:px-4 py-1.5 sm:py-2 font-medium">Type</th>
                            <th className="px-3 sm:px-4 py-1.5 sm:py-2 font-medium hidden md:table-cell">Hash</th>
                            <th className="px-3 sm:px-4 py-1.5 sm:py-2 font-medium">Block</th>
                            <th className="px-3 sm:px-4 py-1.5 sm:py-2 font-medium">Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-[10px] sm:text-xs">
                          {[
                            { event: "contract_deploy", color: "#81D658", user: "0x8f3...a2b", count: "#18204", time: "2m ago" },
                            { event: "token_transfer", color: "#6BC248", user: "0x4c1...f8e", count: "#18203", time: "5m ago" },
                            { event: "swap_executed", color: "#9AE076", user: "0x7d2...c3a", count: "#18202", time: "8m ago" },
                          ].map((row) => (
                            <tr key={row.event} className="hover:bg-white/5">
                              <td className="px-3 sm:px-4 py-1.5 sm:py-2">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: row.color }} />
                                  <span className="truncate max-w-[80px] sm:max-w-none">{row.event}</span>
                                </div>
                              </td>
                              <td className="px-3 sm:px-4 py-1.5 sm:py-2 text-neutral-300 hidden md:table-cell">{row.user}</td>
                              <td className="px-3 sm:px-4 py-1.5 sm:py-2">{row.count}</td>
                              <td className="px-3 sm:px-4 py-1.5 sm:py-2 text-neutral-400">{row.time}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
