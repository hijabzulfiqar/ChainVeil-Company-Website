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
      <div className="text-center max-w-4xl mx-auto pt-6 px-6 space-y-8">
        <p className="text-sm text-neutral-400">Ship faster with data you trust</p>
        <h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-tight">
          Take control of your
          <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
            Product Analytics
          </span>
        </h1>
        <p className="text-base text-neutral-400 max-w-2xl mt-5 mx-auto">
          Your funnels, cohorts, and retention streamlined. ChainVeil delivers real-time insights, low overhead, and next-level security.
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
      <div className="relative max-w-5xl mt-14 mx-auto px-6" style={{ perspective: "1000px" }}>
        <div className="pointer-events-none relative mb-4">
          <div className="absolute -top-10 left-1/2 h-16 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent blur-xl" />
          <div className="absolute -top-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-green-400/40 to-transparent blur-lg" />
        </div>

        <div className="relative transition-transform duration-800 ease-out">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />

          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-2xl shadow-black/60 ring-1 ring-white/5 backdrop-blur overflow-hidden">
            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-neutral-900/80">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 px-3">
                <div className="mx-auto max-w-xs rounded-full bg-neutral-800/60 px-3 py-1 text-center text-xs text-neutral-300 ring-1 ring-white/5">
                  chainveil.app
                </div>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Search className="h-3.5 w-3.5" />
                <Settings className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Sidebar */}
              <aside className="hidden lg:block border-r border-white/10 p-3">
                <div className="flex items-center gap-2 px-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-white/10 overflow-hidden">
                    <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-400 rounded" />
                  </span>
                  <div>
                    <div className="text-xs font-medium">Alex Carter</div>
                    <div className="text-[10px] text-neutral-400">Product</div>
                  </div>
                </div>

                <nav className="mt-4 space-y-0.5">
                  <a className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-xs text-white ring-1 ring-white/10" href="#">
                    <LayoutDashboard className="h-3.5 w-3.5" />
                    Overview
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <BarChart3 className="h-3.5 w-3.5" />
                    Analytics
                  </a>
                  <a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
                    <Database className="h-3.5 w-3.5" />
                    Sources
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
                <div className="p-4">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-base font-semibold tracking-tight">Dashboard Overview</h2>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
                        <TrendingUp className="h-3 w-3" />
                        +12.4%
                      </span>
                    </div>

                    {/* Metric cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Total Events", value: "2.4M", change: "+8.2%", positive: true },
                        { label: "Conversion", value: "4.2%", change: "+0.3%", positive: true },
                        { label: "Revenue", value: "$124.0K", change: "+15.1%", positive: true },
                        { label: "Users", value: "18.3K", change: "-2.1%", positive: false },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
                          <div className="text-xs text-neutral-400">{metric.label}</div>
                          <div className="text-lg font-semibold">{metric.value}</div>
                          <div className={`text-xs ${metric.positive ? "text-emerald-400" : "text-rose-400"}`}>
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Charts section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold">Event Timeline</h3>
                        <button className="text-neutral-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex bg-gradient-to-b from-white/10 to-white/0 h-24 border-white/5 border rounded-lg p-2 items-end justify-between">
                        {[40, 60, 80, 45, 75, 90, 70].map((height, i) => (
                          <div
                            key={i}
                            className={`w-2 rounded-t transition-all duration-1000 ${
                              i >= 5
                                ? "bg-gradient-to-t from-green-500 to-green-400"
                                : "bg-gradient-to-t from-emerald-500 to-emerald-400"
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold">Top Sources</h3>
                        <button className="text-neutral-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="h-24 flex items-center justify-center">
                        <div className="relative">
                          <div
                            className="w-16 h-16 rounded-full border-8 border-emerald-500/30 border-t-emerald-500 border-r-green-500 border-b-teal-500"
                            style={{ transform: "rotate(240deg)" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">67%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="rounded-xl border border-white/10 bg-neutral-900/60 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <h4 className="text-sm font-semibold">Recent Events</h4>
                      <a href="#" className="text-xs text-neutral-300 hover:text-white">View all</a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="text-xs text-neutral-400">
                          <tr className="border-b border-white/10">
                            <th className="px-4 py-2 font-medium">Event</th>
                            <th className="px-4 py-2 font-medium">User</th>
                            <th className="px-4 py-2 font-medium">Count</th>
                            <th className="px-4 py-2 font-medium">Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-xs">
                          {[
                            { event: "signup_completed", color: "bg-emerald-400", user: "user_1204", count: "1.2K", time: "2m ago" },
                            { event: "page_view", color: "bg-green-400", user: "user_8847", count: "892", time: "5m ago" },
                            { event: "purchase", color: "bg-teal-400", user: "user_5521", count: "456", time: "8m ago" },
                          ].map((row) => (
                            <tr key={row.event} className="hover:bg-white/5">
                              <td className="px-4 py-2">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2 h-2 rounded-full ${row.color}`} />
                                  {row.event}
                                </div>
                              </td>
                              <td className="px-4 py-2 text-neutral-300">{row.user}</td>
                              <td className="px-4 py-2">{row.count}</td>
                              <td className="px-4 py-2 text-neutral-400">{row.time}</td>
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
