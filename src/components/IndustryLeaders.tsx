"use client";

import { Star, ArrowUpRight } from "lucide-react";

export default function IndustryLeaders() {
  return (
    <section className="relative" id="testimonials">
      <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-24 py-12 sm:py-16">
        <div
          className="relative overflow-visible bg-neutral-900/50 border border-white/10 ring-1 ring-white/5 rounded-2xl sm:rounded-3xl"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            backgroundPosition: "-9px -9px",
          }}
        >
          {/* Center divider */}
          <div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-white/10" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: stacked review cards */}
            <div className="relative p-6 sm:p-10 md:p-12 flex items-center justify-center">
              <div className="relative w-full h-72 sm:h-96 max-w-7xl">
                <div className="testimonial-container relative flex justify-center items-center h-full scale-75 sm:scale-100">
                  {/* Card 1 - Back */}
                  <div
                    className="testimonial-glass absolute"
                    style={{
                      width: "260px",
                      height: "260px",
                      background: "linear-gradient(rgba(255,255,255,0.1), transparent)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 25px 25px rgba(0, 0, 0, 0.25)",
                      borderRadius: "1rem",
                      backdropFilter: "blur(10px)",
                      transform: "rotate(-10deg) translateX(-40px)",
                      transition: "all 0.5s ease",
                      zIndex: 1,
                    }}
                  >
                    <div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                      <div className="p-5">
                        <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
                          <svg className="h-4 w-4 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          </svg>
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-900 mb-4">
                          &ldquo;ChainVeil&apos;s AI-optimized cross-chain infrastructure reduced our bridge development time from months to days. The ML routing is incredible.&rdquo;
                        </p>
                        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand to-brand-dark" />
                            <div>
                              <div className="text-xs font-medium text-neutral-900">Jordan Avery</div>
                              <div className="text-xs text-neutral-500">CTO at DeFi Labs</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-medium">5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Middle */}
                  <div
                    className="testimonial-glass absolute"
                    style={{
                      width: "260px",
                      height: "260px",
                      background: "linear-gradient(rgba(255,255,255,0.08), transparent)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 25px 25px rgba(0, 0, 0, 0.25)",
                      borderRadius: "1rem",
                      backdropFilter: "blur(10px)",
                      transform: "rotate(0deg)",
                      transition: "all 0.5s ease",
                      zIndex: 2,
                    }}
                  >
                    <div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                      <div className="p-5">
                        <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
                          <svg className="h-4 w-4 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          </svg>
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-900 mb-4">
                          &ldquo;The AI-powered analytics engine gives us predictive insights into protocol health that we couldn&apos;t get anywhere else.&rdquo;
                        </p>
                        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500" />
                            <div>
                              <div className="text-xs font-medium text-neutral-900">Taylor Chen</div>
                              <div className="text-xs text-neutral-500">Blockchain Architect</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-medium">5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Front */}
                  <div
                    className="testimonial-glass absolute"
                    style={{
                      width: "300px",
                      height: "300px",
                      background: "linear-gradient(rgba(255,255,255,0.06), transparent)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0 25px 25px rgba(0, 0, 0, 0.25)",
                      borderRadius: "1rem",
                      backdropFilter: "blur(10px)",
                      transform: "rotate(10deg) translateX(40px)",
                      transition: "all 0.5s ease",
                      zIndex: 3,
                    }}
                  >
                    <div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                      <div className="p-5">
                        <div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
                          <svg className="h-4 w-4 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                          </svg>
                        </div>
                        <p className="text-sm leading-relaxed text-neutral-900 mb-4">
                          &ldquo;The ML-driven smart contract audit caught vulnerabilities our own team missed. ChainVeil&apos;s AI is now essential to our pipeline.&rdquo;
                        </p>
                        <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand to-brand-dark" />
                            <div>
                              <div className="text-xs font-medium text-neutral-900">Sarah Kim</div>
                              <div className="text-xs text-neutral-500">Security Lead at NFT Studio</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span className="text-xs font-medium">5.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: headline and CTA */}
            <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-100 leading-[1.1]">
                Trusted by AI & Web3 Builders
              </h2>
              <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed mx-auto lg:mx-0">
                Join 500+ teams who&apos;ve accelerated their AI and blockchain development with ChainVeil&apos;s intelligent infrastructure.
              </p>

              <div className="mt-6 sm:mt-10 flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 sm:gap-3 hover:bg-white/10 transition text-xs sm:text-sm font-semibold text-white bg-white/5 ring-1 ring-white/10 rounded-full py-2 sm:py-2.5 px-3 sm:px-4 backdrop-blur-lg"
                >
                  View case studies
                  <span className="inline-flex items-center justify-center group-hover:translate-x-0.5 transition text-neutral-900 bg-white w-6 h-6 sm:w-7 sm:h-7 rounded-full">
                    <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-container:hover .testimonial-glass {
          transform: rotate(0deg) translateX(0) !important;
        }
        .testimonial-container:hover .testimonial-glass:first-child {
          transform: translateX(-60px) !important;
        }
        .testimonial-container:hover .testimonial-glass:last-child {
          transform: translateX(60px) !important;
        }
      `}</style>
    </section>
  );
}
