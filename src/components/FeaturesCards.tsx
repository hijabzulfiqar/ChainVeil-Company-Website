"use client";

import {
  Search,
  Settings,
  Settings2,
  TrendingUp,
  ArrowUpRight,
  Wallet,
  Zap,
  Hexagon,
} from "lucide-react";

export default function FeaturesCards() {
  return (
    <section className="relative" id="features">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight">
            <span className="text-neutral-200">Redefining the future of</span>
            <span className="block text-neutral-100">investing solutions</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">
            Harness cutting-edge technology built to the highest industry standard, setting a new benchmark for modern investing experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Enhanced Payments */}
          <div className="group relative overflow-hidden ring-1 ring-white/5 transition-all duration-500 hover:border-white-500/30 hover:ring-emerald-500/20 bg-neutral-50/0 border-white/10 border rounded-2xl">
            <div className="absolute -bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-gradient-to-tr from-white-500/25 via-white-500/15 to-transparent w-48 h-48 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent w-36 h-36 rounded-full blur-2xl" />

            <div className="p-6">
              <div className="flex mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2.5">
                  <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
                  Active
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                Effortless payments & requests
              </h3>
              <p className="leading-relaxed text-sm text-neutral-400 mb-6">
                Easily send or request payments from anyone just like you would with your bank with support for 100+ currencies and instant settlements.
              </p>

              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                <span className="font-medium">Recent History</span>
                <a className="inline-flex items-center gap-1 text-neutral-300 hover:text-emerald-300 transition-colors group/link" href="#">
                  <span>Show all</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 transition-all duration-300 hover:bg-white/10 focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/20">
                  <Search className="h-4 w-4 text-neutral-400" />
                  <span className="flex-1">Search payment requests</span>
                  <span className="text-xs text-neutral-500">⌘K</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: "John Doe", role: "Premium Member", amount: "+0.025 ETH", time: "2 hours ago", positive: true },
                  { name: "Sean Dale", role: "Standard Member", amount: "+0.025 ETH", time: "5 hours ago", positive: true },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <span className="inline-flex items-center justify-center bg-gradient-to-br from-emerald-500/20 to-green-500/20 w-8 h-8 ring-white/10 ring-1 rounded-full">
                          <Wallet className="h-4 w-4 text-emerald-400" />
                        </span>
                        <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-neutral-200">{item.name}</div>
                        <div className="text-xs text-neutral-400">{item.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${item.positive ? "text-emerald-300" : "text-rose-300"}`}>
                        {item.amount}
                      </div>
                      <div className="text-xs text-neutral-400">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Enhanced Built-in AI */}
          <div className="group relative overflow-hidden transition-all duration-500 hover:border-green-500/30 hover:ring-green-500/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 border-white/10 border ring-white/5 ring-1 rounded-2xl">
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-emerald-500/30 via-green-500/20 to-teal-500/10 blur-3xl transition-all duration-700 group-hover:scale-110" />
            <div className="absolute -top-8 -left-8 bg-gradient-to-br from-green-500/25 via-emerald-500/15 to-transparent w-40 h-40 rounded-full blur-2xl" />

            <div className="p-6">
              <div className="flex mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2.5">
                  <div className="h-1.5 w-1.5 animate-pulse bg-green-400 rounded-full" />
                  AI Powered
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                Built-in AI for smarter workflows
              </h3>
              <p className="leading-relaxed text-sm text-neutral-400 mb-6">
                Get your investments on autopilot with powerful AI integrated right into the platform always ready to help you stay ahead of market trends.
              </p>

              {/* Radar visualization */}
              <div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-44 ring-white/5 ring-1 rounded-xl px-4 py-3 flex items-center justify-center">
                <div className="relative w-[150px] h-[150px] rounded-full border border-neutral-700 flex items-center justify-center">
                  <div className="absolute inset-5 rounded-full border border-dashed border-neutral-600" />
                  <div className="absolute w-[50px] h-[50px] rounded-full border border-dashed border-neutral-600" />
                  <span
                    className="absolute top-1/2 left-1/2 origin-top-left border-t border-white w-1/2 h-full"
                    style={{ animation: "radar81 4s linear infinite" }}
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/50 to-green-500/0 origin-top-left -rotate-[55deg] blur-xl" />
                  </span>
                </div>

                {/* Floating chips */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center ring-1 ring-white/10 text-xs font-medium text-neutral-200 bg-white/10 rounded-full py-1 px-3 backdrop-blur-sm">consult</span>
                </div>
                <div className="absolute top-3 right-4">
                  <span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-1 px-3 backdrop-blur-sm">How to check balance?</span>
                </div>
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-1 px-3 backdrop-blur-sm">Summarize last week</span>
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-1 px-3 backdrop-blur-sm">report</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-1 px-3 backdrop-blur-sm">invest</span>
                </div>
                <div className="absolute bottom-3 right-4">
                  <span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-1 px-3 backdrop-blur-sm">Generate report</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Enhanced Markets with Code Editor */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 transition-all duration-500 hover:border-teal-500/30 hover:ring-teal-500/20">
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-green-500/20 blur-3xl transition-all duration-700 group-hover:scale-110" />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-teal-500/20 via-emerald-500/15 to-transparent w-36 h-36 rounded-full blur-2xl" />

            <div className="p-6">
              <div className="flex mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2.5">
                  <Zap className="w-2.5 h-2.5" />
                  49% faster
                </span>
              </div>

              <h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-2">
                Instant access to all markets
              </h3>
              <p className="leading-relaxed text-sm text-neutral-400 mb-6">
                Access real-time data across crypto and stock markets instantly, without switching platforms. Stream live prices and execute trades seamlessly.
              </p>

              {/* Code Editor Window */}
              <div className="relative rounded-xl ring-1 ring-inset ring-white/5 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-neutral-900/80">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                  <div className="flex-1 px-3">
                    <div className="mx-auto max-w-xs rounded-md bg-neutral-800/60 px-3 py-1 text-center text-[10px] sm:text-xs text-neutral-400 ring-1 ring-white/5">automation.py</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" /></svg>
                    </button>
                    <button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
                    </button>
                    <button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                    </button>
                  </div>
                </div>

                {/* Body with sidebar */}
                <div className="grid grid-cols-[42px_1fr]">
                  {/* Sidebar */}
                  <aside className="hidden sm:flex flex-col items-center gap-3 py-4 border-r border-white/10">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 0 0 2 2h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12-3 3 3 3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 3-3-3-3" /></svg>
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
                      <Search className="h-4 w-4" />
                    </span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
                      <Settings className="h-4 w-4" />
                    </span>
                  </aside>

                  {/* Code */}
                  <div className="p-4 sm:p-5">
                    <div className="relative ring-inset sm:p-4 overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg p-3" style={{ height: "280px" }}>
                      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

                      {/* Scrolling Code Container */}
                      <div className="overflow-hidden h-full relative">
                        <div className="font-mono text-[11px] sm:text-[12px] leading-relaxed" style={{ animation: "smoothCodeScroll 20s linear infinite" }}>
                          {/* Code Lines */}
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">1</span><span><span className="text-purple-400">class</span> <span className="text-neutral-200">Automation</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">2</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">__init__</span>(self):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">3</span><span className="whitespace-pre">        self.status = <span className="text-emerald-400">&quot;idle&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">4</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">5</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">run</span>(self, event):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">6</span><span className="whitespace-pre">        <span className="text-purple-400">if</span> event == <span className="text-emerald-400">&quot;threshold_reached&quot;</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">7</span><span className="whitespace-pre">            self.status = <span className="text-emerald-400">&quot;active&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">8</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> <span className="text-emerald-400">&quot;Automation triggered!&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">9</span><span className="whitespace-pre">        <span className="text-purple-400">else</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">10</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> <span className="text-emerald-400">&quot;No action taken.&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">11</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">12</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">get_status</span>(self):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">13</span><span className="whitespace-pre">        <span className="text-purple-400">return</span> f<span className="text-emerald-400">&quot;Status: &#123;self.status&#125;&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">14</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">15</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">execute_trade</span>(self, symbol, amount):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">16</span><span className="whitespace-pre">        <span className="text-purple-400">try</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">17</span><span className="whitespace-pre">            result = self.api.place_order(symbol, amount)</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">18</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> result</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">19</span><span className="whitespace-pre">        <span className="text-purple-400">except</span> Exception <span className="text-purple-400">as</span> e:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">20</span><span className="whitespace-pre">            print(f<span className="text-emerald-400">&quot;Error: &#123;e&#125;&quot;</span>)</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">21</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> <span className="text-emerald-400">None</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">22</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">23</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">analyze_market</span>(self):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">24</span><span className="whitespace-pre">        data = self.fetch_market_data()</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">25</span><span className="whitespace-pre">        signals = self.process_indicators(data)</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">26</span><span className="whitespace-pre">        <span className="text-purple-400">return</span> signals</span></div>

                          {/* Duplicate for seamless loop */}
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">1</span><span><span className="text-purple-400">class</span> <span className="text-neutral-200">Automation</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">2</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">__init__</span>(self):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">3</span><span className="whitespace-pre">        self.status = <span className="text-emerald-400">&quot;idle&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">4</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">5</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">run</span>(self, event):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">6</span><span className="whitespace-pre">        <span className="text-purple-400">if</span> event == <span className="text-emerald-400">&quot;threshold_reached&quot;</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">7</span><span className="whitespace-pre">            self.status = <span className="text-emerald-400">&quot;active&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">8</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> <span className="text-emerald-400">&quot;Automation triggered!&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">9</span><span className="whitespace-pre">        <span className="text-purple-400">else</span>:</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">10</span><span className="whitespace-pre">            <span className="text-purple-400">return</span> <span className="text-emerald-400">&quot;No action taken.&quot;</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">11</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">12</span><span className="whitespace-pre">    <span className="text-purple-400">def</span> <span className="text-purple-400">get_status</span>(self):</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">13</span><span className="whitespace-pre">        <span className="text-purple-400">return</span> f<span className="text-emerald-400">&quot;Status: &#123;self.status&#125;&quot;</span></span></div>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Enhanced Data & Decisions */}
          <div className="group relative overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:ring-emerald-500/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 border-white/10 border ring-white/5 ring-1 rounded-2xl">
            <div className="p-6">
              <div className="flex mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2.5">
                  <Hexagon className="w-2.5 h-2.5 text-emerald-400" />
                  Real-time
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                Data that drives decisions
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                Analyse your investments from every angle. Dive into performance and returns, and easily filter your data using advanced analytics and machine learning insights.
              </p>

              <div className="relative overflow-visible bg-black/40 border-white/10 border rounded-2xl p-4 pb-8">
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(220px 140px at 0% 100%, rgba(139,92,246,0.20), transparent 60%), radial-gradient(240px 160px at 100% 0%, rgba(232,121,249,0.10), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"
                  }}
                />

                <h3 className="text-lg tracking-tight font-semibold mb-2">Crypto Data Solutions</h3>
                <p className="text-sm text-gray-300 mb-4">Your on-chain guide to making informed crypto decisions.</p>

                <div className="relative rounded-xl bg-neutral-900/60 border border-white/10 ring-1 ring-white/5 overflow-hidden p-4 sm:p-6">
                  {/* Animated Connectors */}
                  <div className="absolute inset-y-0 left-28 right-28 sm:left-36 sm:right-36 z-0 flex flex-col items-stretch justify-center gap-2 pointer-events-none">
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite" }}
                      />
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite 0.3s" }}
                      />
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite 0.6s" }}
                      />
                    </div>
                  </div>

                  {/* Nodes */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Left Node - Our solution (Gear/Settings icon) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10 shadow-lg shadow-black/50 flex items-center justify-center overflow-hidden">
                        {/* Subtle glow behind icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-emerald-500/10" />
                        {/* Gear icon with paper plane inside */}
                        <div className="relative">
                          <Settings2 className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-400" strokeWidth={1.5} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-300">Our solution</span>
                    </div>

                    {/* Right Node - Your stack (Wallet icon) */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10 shadow-lg shadow-black/50 flex items-center justify-center overflow-hidden">
                        {/* Subtle glow behind icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />
                        {/* Wallet icon */}
                        <div className="relative">
                          <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                            {/* Wallet body */}
                            <rect x="8" y="16" width="48" height="36" rx="4" fill="url(#walletGradient)" />
                            {/* Wallet flap */}
                            <path d="M8 20C8 17.7909 9.79086 16 12 16H52C54.2091 16 56 17.7909 56 20V24H8V20Z" fill="url(#flapGradient)" />
                            {/* Card slot */}
                            <rect x="36" y="30" width="16" height="12" rx="2" fill="#1a1a1a" />
                            <circle cx="44" cy="36" r="3" fill="#10b981" />
                            <defs>
                              <linearGradient id="walletGradient" x1="8" y1="16" x2="56" y2="52" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#065f46" />
                                <stop offset="1" stopColor="#047857" />
                              </linearGradient>
                              <linearGradient id="flapGradient" x1="8" y1="16" x2="56" y2="24" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#10b981" />
                                <stop offset="1" stopColor="#059669" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-300">Your stack</span>
                    </div>
                  </div>
                </div>

                {/* Meta row */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                    <TrendingUp className="w-3 h-3 text-emerald-300" />
                    See Growth
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">On-chain metrics</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">Last 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes radar81 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
