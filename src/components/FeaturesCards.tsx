"use client";

import {
  Search,
  Settings,
  TrendingUp,
  ArrowUpRight,
  Wallet,
  Zap,
  Hexagon,
} from "lucide-react";

export default function FeaturesCards() {
  return (
    <section className="relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold tracking-tight">
            <span className="text-neutral-200">Powering the next generation of</span>
            <span className="block text-neutral-100">AI & blockchain infrastructure</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
            Enterprise-grade AI and distributed ledger solutions built on cutting-edge machine learning and cryptographic protocols, setting a new standard for intelligent decentralized applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Enhanced Payments */}
          <div className="group relative overflow-hidden ring-1 ring-white/5 transition-all duration-500 hover:border-white-500/30 bg-neutral-50/0 border-white/10 border rounded-xl sm:rounded-2xl" style={{ ["--tw-ring-color" as string]: "rgba(129, 214, 88, 0.2)" }}>
            <div className="absolute -bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-gradient-to-tr from-white-500/25 via-white-500/15 to-transparent w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 sm:w-36 h-24 sm:h-36 rounded-full blur-2xl" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.2), rgba(129, 214, 88, 0.1), transparent)" }} />

            <div className="p-4 sm:p-6">
              <div className="flex mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2.5">
                  <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#81D658" }} />
                  Active
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                Seamless cross-chain transfers
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-6">
                Execute atomic swaps and bridge assets across multiple blockchains with sub-second finality and minimal gas fees on 50+ supported networks.
              </p>

              <div className="flex items-center justify-between text-xs text-neutral-400 mb-3 sm:mb-4">
                <span className="font-medium">Recent Transactions</span>
                <a className="inline-flex items-center gap-1 text-neutral-300 transition-colors group/link hover:[color:#81D658]" href="#">
                  <span>Show all</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>

              <div className="mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-2.5 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-300 transition-all duration-300 hover:bg-white/10 focus-within:border-[#81D658]/50 focus-within:ring-1 focus-within:ring-[#81D658]/20">
                  <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-400" />
                  <span className="flex-1">Search transactions by hash</span>
                  <span className="text-[10px] sm:text-xs text-neutral-500 hidden sm:inline">⌘K</span>
                </div>
              </div>

              <div className="space-y-2 sm:space-y-3">
                {[
                  { name: "0x8f3...a2b", role: "Token Bridge", amount: "+2.45 ETH", time: "2 blocks ago", positive: true },
                  { name: "0x4c1...f8e", role: "Swap Execute", amount: "+0.85 ETH", time: "5 blocks ago", positive: true },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 ring-white/10 ring-1 rounded-full" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.2), rgba(107, 194, 72, 0.2))" }}>
                          <Wallet className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: "#81D658" }} />
                        </span>
                        <div className="absolute -bottom-0.5 -right-0.5 h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ring-2 ring-neutral-900" style={{ backgroundColor: "#81D658" }} />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-neutral-200">{item.name}</div>
                        <div className="text-[10px] sm:text-xs text-neutral-400">{item.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-medium" style={{ color: item.positive ? "#81D658" : "#fda4af" }}>
                        {item.amount}
                      </div>
                      <div className="text-[10px] sm:text-xs text-neutral-400">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Enhanced Built-in AI */}
          <div className="group relative overflow-hidden transition-all duration-500 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 border-white/10 border ring-white/5 ring-1 rounded-xl sm:rounded-2xl hover:border-brand/30 hover:ring-brand/20">
            <div className="absolute -bottom-16 -right-16 h-40 sm:h-56 w-40 sm:w-56 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110" style={{ background: "linear-gradient(to top right, rgba(129, 214, 88, 0.3), rgba(129, 214, 88, 0.2), rgba(129, 214, 88, 0.1))" }} />
            <div className="absolute -top-8 -left-8 w-28 sm:w-40 h-28 sm:h-40 rounded-full blur-2xl" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.25), rgba(129, 214, 88, 0.15), transparent)" }} />

            <div className="p-4 sm:p-6">
              <div className="flex mb-3 sm:mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2 sm:px-2.5">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: "#81D658" }} />
                  AI Powered
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                AI-powered smart contract analysis
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-6">
                Leverage machine learning to audit smart contracts, detect vulnerabilities, and optimize gas usage before deployment on mainnet.
              </p>

              {/* Radar visualization */}
              <div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-36 sm:h-44 ring-white/5 ring-1 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center">
                <div className="relative w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] rounded-full border border-neutral-700 flex items-center justify-center">
                  <div className="absolute inset-3 sm:inset-5 rounded-full border border-dashed border-neutral-600" />
                  <div className="absolute w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] rounded-full border border-dashed border-neutral-600" />
                  <span
                    className="absolute top-1/2 left-1/2 origin-top-left border-t border-white w-1/2 h-full"
                    style={{ animation: "radar81 4s linear infinite" }}
                  >
                    <span className="absolute top-0 left-0 w-full h-full origin-top-left -rotate-[55deg] blur-xl" style={{ background: "linear-gradient(to right, rgba(129, 214, 88, 0.5), rgba(129, 214, 88, 0))" }} />
                  </span>
                </div>

                {/* Floating chips - hidden on mobile, shown on larger screens */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 hidden sm:block">
                  <span className="inline-flex items-center ring-1 ring-white/10 text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">audit</span>
                </div>
                <div className="absolute top-2 sm:top-3 right-2 sm:right-4 hidden sm:block">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">Check gas estimates?</span>
                </div>
                <div className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 hidden sm:block">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">Optimize</span>
                </div>
                <div className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 hidden sm:block">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">verify</span>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 hidden sm:block">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">deploy</span>
                </div>
                <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-4 hidden sm:block">
                  <span className="inline-flex items-center text-[10px] sm:text-xs font-medium text-neutral-200 bg-white/10 ring-white/10 ring-1 rounded-full py-0.5 sm:py-1 px-2 sm:px-3 backdrop-blur-sm">Security scan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Enhanced Markets with Code Editor */}
          <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 transition-all duration-500 hover:border-brand/30 hover:ring-brand/20">
            <div className="absolute -bottom-12 -right-12 h-32 sm:h-48 w-32 sm:w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-110" style={{ background: "linear-gradient(to top right, rgba(129, 214, 88, 0.25), rgba(129, 214, 88, 0.15), rgba(129, 214, 88, 0.2))" }} />
            <div className="absolute -top-6 -left-6 w-24 sm:w-36 h-24 sm:h-36 rounded-full blur-2xl" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.2), rgba(129, 214, 88, 0.15), transparent)" }} />

            <div className="p-4 sm:p-6">
              <div className="flex mb-3 sm:mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2 sm:px-2.5">
                  <Zap className="w-2.5 h-2.5" />
                  49% faster
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight mb-2">
                Developer-first smart contracts
              </h3>
              <p className="leading-relaxed text-xs sm:text-sm text-neutral-400 mb-4 sm:mb-6">
                Build, test, and deploy Solidity contracts with our integrated development environment. Real-time compilation, automated testing, and one-click mainnet deployment.
              </p>

              {/* Code Editor Window */}
              <div className="relative rounded-lg sm:rounded-xl ring-1 ring-inset ring-white/5 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 border-b border-white/10 bg-neutral-900/80">
                  <div className="flex items-center gap-1 sm:gap-1.5 text-neutral-300">
                    <button className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                  <div className="flex-1 px-2 sm:px-3">
                    <div className="mx-auto max-w-[100px] sm:max-w-xs rounded-md bg-neutral-800/60 px-2 sm:px-3 py-0.5 sm:py-1 text-center text-[9px] sm:text-xs text-neutral-400 ring-1 ring-white/5">contract.sol</div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 text-neutral-400">
                    <button className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" /></svg>
                    </button>
                    <button className="hidden sm:inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
                    </button>
                    <button className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/5">
                      <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                    </button>
                  </div>
                </div>

                {/* Body with sidebar */}
                <div className="grid grid-cols-1 sm:grid-cols-[42px_1fr]">
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
                  <div className="p-3 sm:p-5">
                    <div className="relative ring-inset p-2 sm:p-4 overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg" style={{ height: "200px" }}>
                      <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />

                      {/* Scrolling Code Container */}
                      <div className="overflow-hidden h-full relative">
                        <div className="font-mono text-[11px] sm:text-[12px] leading-relaxed" style={{ animation: "smoothCodeScroll 20s linear infinite" }}>
                          {/* Code Lines */}
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">1</span><span><span className="text-neutral-500">// SPDX-License-Identifier: MIT</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">2</span><span><span className="text-brand">pragma</span> solidity ^0.8.19;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">3</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">4</span><span><span className="text-brand">contract</span> <span className="text-neutral-200">ChainVeil</span> &#123;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">5</span><span className="whitespace-pre">    <span className="text-brand">mapping</span>(address =&gt; uint256) balances;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">6</span><span className="whitespace-pre">    <span className="text-brand">event</span> Transfer(address indexed from);</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">7</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">8</span><span className="whitespace-pre">    <span className="text-brand">function</span> <span className="text-brand">deposit</span>() <span className="text-brand">external payable</span> &#123;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">9</span><span className="whitespace-pre">        balances[msg.sender] += msg.value;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">10</span><span className="whitespace-pre">    &#125;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">11</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">12</span><span className="whitespace-pre">    <span className="text-brand">function</span> <span className="text-brand">withdraw</span>(uint256 amt) <span className="text-brand">external</span> &#123;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">13</span><span className="whitespace-pre">        <span className="text-brand">require</span>(balances[msg.sender] &gt;= amt);</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">14</span><span className="whitespace-pre">        balances[msg.sender] -= amt;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">15</span><span className="whitespace-pre">        payable(msg.sender).transfer(amt);</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">16</span><span className="whitespace-pre">    &#125;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">17</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">18</span><span className="whitespace-pre">    <span className="text-brand">function</span> <span className="text-brand">getBalance</span>() <span className="text-brand">view returns</span> (uint256) &#123;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">19</span><span className="whitespace-pre">        <span className="text-brand">return</span> balances[msg.sender];</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">20</span><span className="whitespace-pre">    &#125;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">21</span><span>&#125;</span></div>

                          {/* Duplicate for seamless loop */}
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">1</span><span><span className="text-neutral-500">// SPDX-License-Identifier: MIT</span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">2</span><span><span className="text-brand">pragma</span> solidity ^0.8.19;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">3</span><span></span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">4</span><span><span className="text-brand">contract</span> <span className="text-neutral-200">ChainVeil</span> &#123;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">5</span><span className="whitespace-pre">    <span className="text-brand">mapping</span>(address =&gt; uint256) balances;</span></div>
                          <div className="flex gap-4"><span className="w-6 text-right text-neutral-500 select-none">6</span><span className="whitespace-pre">    <span className="text-brand">event</span> Transfer(address indexed from);</span></div>
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
          <div className="group relative overflow-hidden transition-all duration-500 hover:border-brand/30 hover:ring-brand/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 border-white/10 border ring-white/5 ring-1 rounded-xl sm:rounded-2xl">
            <div className="p-4 sm:p-6">
              <div className="flex mb-3 sm:mb-4 items-start justify-between">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-white/0 ring-white/20 ring-1 rounded-lg py-1 px-2 sm:px-2.5">
                  <Hexagon className="w-2.5 h-2.5 text-brand" />
                  Real-time
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-100 mb-2">
                AI-driven on-chain analytics
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                Track wallet activity, monitor token flows, and analyze DeFi protocols with AI-powered predictions. Machine learning models provide real-time insights and anomaly detection.
              </p>

              <div className="relative overflow-visible bg-black/40 border-white/10 border rounded-xl sm:rounded-2xl p-3 sm:p-4 pb-6 sm:pb-8">
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: "radial-gradient(220px 140px at 0% 100%, rgba(129, 214, 88, 0.15), transparent 60%), radial-gradient(240px 160px at 100% 0%, rgba(107, 194, 72, 0.10), transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"
                  }}
                />

                <h3 className="text-base sm:text-lg tracking-tight font-semibold mb-2">AI + Blockchain Data Pipeline</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">AI-enhanced indexing and predictive querying for EVM-compatible chains.</p>

                <div className="relative rounded-lg sm:rounded-xl bg-neutral-900/60 border border-white/10 ring-1 ring-white/5 overflow-hidden p-3 sm:p-6">
                  {/* Animated Connectors */}
                  <div className="absolute inset-y-0 left-20 right-20 sm:left-36 sm:right-36 z-0 flex flex-col items-stretch justify-center gap-1 sm:gap-2 pointer-events-none">
                    <div className="h-px relative overflow-hidden" style={{ background: "linear-gradient(to right, transparent, rgba(129, 214, 88, 0.8), transparent)" }}>
                      <div
                        className="absolute inset-0 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite", background: "linear-gradient(to right, #81D658, #6BC248)" }}
                      />
                    </div>
                    <div className="h-px relative overflow-hidden" style={{ background: "linear-gradient(to right, transparent, rgba(129, 214, 88, 0.6), transparent)" }}>
                      <div
                        className="absolute inset-0 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite 0.3s", background: "linear-gradient(to right, #81D658, #6BC248)" }}
                      />
                    </div>
                    <div className="h-px relative overflow-hidden" style={{ background: "linear-gradient(to right, transparent, rgba(129, 214, 88, 0.4), transparent)" }}>
                      <div
                        className="absolute inset-0 h-full"
                        style={{ animation: "flowLeft 2s ease-in-out infinite 0.6s", background: "linear-gradient(to right, #81D658, #6BC248)" }}
                      />
                    </div>
                  </div>

                  {/* Nodes */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* Left Node - Our solution */}
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="relative w-16 h-16 sm:w-28 sm:h-28 rounded-lg sm:rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10 shadow-lg shadow-black/50 flex items-center justify-center overflow-hidden">
                        {/* Subtle glow behind image */}
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.1), transparent, rgba(129, 214, 88, 0.1))" }} />
                        {/* Solution image */}
                        <img
                          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop&auto=format"
                          alt="Our solution"
                          className="w-full h-full object-cover opacity-80"
                        />
                        {/* Overlay icon */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <svg className="w-6 h-6 sm:w-10 sm:h-10" style={{ color: "#81D658" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs text-neutral-300">Data indexer</span>
                    </div>

                    {/* Right Node - Your stack */}
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="relative w-16 h-16 sm:w-28 sm:h-28 rounded-lg sm:rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/10 shadow-lg shadow-black/50 flex items-center justify-center overflow-hidden">
                        {/* Subtle glow behind image */}
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(129, 214, 88, 0.1), transparent, rgba(129, 214, 88, 0.1))" }} />
                        {/* Stack image */}
                        <img
                          src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=200&fit=crop&auto=format"
                          alt="Your dApp"
                          className="w-full h-full object-cover opacity-80"
                        />
                        {/* Overlay icon */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <svg className="w-6 h-6 sm:w-10 sm:h-10" style={{ color: "#81D658" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-[10px] sm:text-xs text-neutral-300">Your dApp</span>
                    </div>
                  </div>
                </div>

                {/* Meta row */}
                <div className="mt-2 sm:mt-3 flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand" />
                    See Growth
                  </span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">AI Powered</span>
                  <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">Multi-chain</span>
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
