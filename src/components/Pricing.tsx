"use client";

import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { pricingData } from "@/data/home";

export default function Pricing() {
  return (
    <section className="relative" id="pricing">
      <div className="max-w-7xl mx-auto pt-24 pb-16 px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">{pricingData.heading}</h2>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">{pricingData.description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Free */}
          <div
            className="pricing-card group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:ring-white-500/20 hover:bg-white/5"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "-9px -9px",
            }}
          >
            <div className="flex flex-col relative z-10 h-full max-h-full">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-100">Free</h3>
                <p className="mt-2 text-sm text-neutral-400">Start your crypto journey at no cost. Access essential tools — all in one place.</p>

                <div className="mt-6">
                  <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$0</div>
                  <div className="mt-2 text-sm text-neutral-400">Free forever / no hidden fees</div>
                </div>

                <div className="mt-8 mb-6 h-px bg-white/10"></div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Dedicated dashboard</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Real-time charts</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Basic portfolio tracker</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Wallet integration</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Community support</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110">
                  Start for free
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Pro */}
          <div className="pricing-card group relative overflow-hidden sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white-500/40 hover:ring-white-500/30 hover:bg-white/5 bg-neutral-50/0 border-white/10 border ring-white/5 ring-1 rounded-3xl p-6">
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-transparent blur-3xl"></div>
            <div className="flex flex-col relative z-10 h-full">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-neutral-100">Pro</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-neutral-200 ring-1 ring-white/10">
                  <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                  Popular
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-300">Unlock full potential with advanced analytics, portfolio tracking, and priority support.</p>

              <div className="mt-6">
                <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white" id="pro-price">$19</div>
                <div className="mt-2 text-sm text-neutral-300" id="pro-billing">Per user / month</div>
              </div>

              {/* Billing toggle */}
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/20 focus:outline-none"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const isYearly = btn.getAttribute('aria-pressed') === 'true';
                    const willBeYearly = !isYearly;
                    btn.setAttribute('aria-pressed', String(willBeYearly));
                    const knob = btn.querySelector('span');
                    if (knob) {
                      (knob as HTMLElement).style.transform = willBeYearly ? 'translateX(1.25rem)' : 'translateX(0)';
                    }
                    const priceEl = document.getElementById('pro-price');
                    const billingEl = document.getElementById('pro-billing');
                    if (priceEl) priceEl.textContent = willBeYearly ? '$159' : '$19';
                    if (billingEl) billingEl.textContent = willBeYearly ? 'Per user / year' : 'Per user / month';
                  }}
                  aria-pressed="false"
                >
                  <span className="absolute left-0.5 inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow transition-transform duration-300"></span>
                </button>
                <span className="text-sm text-neutral-300">Yearly</span>
                <span className="ml-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-neutral-200 ring-1 ring-white/10">30% OFF</span>
              </div>

              <div className="mt-6 mb-6 h-px bg-white/10"></div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-neutral-100">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>
                  <span>AI-powered dashboard</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-100">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-100">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>
                  <span>Pro portfolio tools</span>
                </li>
                <li className="flex items-center gap-3 text-neutral-100">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                  </span>
                  <span>Price alerts</span>
                </li>
              </ul>

              <div className="mt-8">
                <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110">
                  Sign up with pro
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Lifetime */}
          <div
            className="pricing-card group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:ring-violet-500/20 hover:bg-white/5"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              backgroundPosition: "-9px -9px",
            }}
          >
            <div className="flex flex-col h-full relative z-10">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-100">Lifetime</h3>
                <p className="mt-2 text-sm text-neutral-400">Pay once, use forever. All premium features, lifetime updates.</p>

                <div className="mt-6">
                  <div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$249</div>
                  <div className="mt-2 text-sm text-neutral-400">Single payment / lifetime access</div>
                </div>

                <div className="mt-8 mb-6 h-px bg-white/10"></div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>All pro features</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Exclusive lifetime updates</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>No recurring fees</span>
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                    <span>Early access to new features</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a href="#" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110">
                  Get lifetime access
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
