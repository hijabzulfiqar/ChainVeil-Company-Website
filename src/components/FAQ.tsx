"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What blockchain networks does ChainVeil support?",
    answer: "ChainVeil supports all major EVM-compatible networks including Ethereum, Polygon, Arbitrum, Optimism, and BSC. We also provide cross-chain bridging to Solana, Avalanche, and 20+ other networks with sub-second finality.",
  },
  {
    question: "How does the smart contract audit process work?",
    answer: "Our AI-powered security scanner analyzes your Solidity code for vulnerabilities, gas inefficiencies, and common attack vectors. You'll receive a detailed report with remediation suggestions before deploying to mainnet.",
  },
  {
    question: "What node infrastructure options are available?",
    answer: "Choose from shared RPC endpoints for development, dedicated nodes for production, or archive nodes for historical data access. All nodes feature 99.9% uptime SLA and automatic failover.",
  },
  {
    question: "How are gas fees and transaction costs handled?",
    answer: "Our gas optimization engine batches transactions when possible and suggests optimal gas prices. Enterprise plans include gas subsidies and meta-transaction support for gasless user experiences.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative">
      {/* Header accent line */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hidden sm:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-12 sm:pt-24 px-4 sm:px-6 pb-10 sm:pb-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">Developer Questions, Answered</h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">Everything you need to know about building on ChainVeil infrastructure.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-brand/30 ring-1 ring-brand/10"
                    : "border-white/10 ring-1 ring-white/5 bg-neutral-900/40 hover:bg-white/5"
                }`}
                style={isOpen ? { background: "linear-gradient(180deg, rgba(129, 214, 88, 0.12) 0%, rgba(129, 214, 88, 0.06) 50%, transparent 100%)" } : {}}
              >
                <button
                  type="button"
                  className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start justify-between gap-3 sm:gap-6 hover:bg-white/5 transition-colors"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-neutral-100">{item.question}</span>
                  <span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-6 w-6 sm:h-8 sm:w-8 shrink-0 transition-transform duration-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      {!isOpen && <path d="M12 5v14"></path>}
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-panel transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    opacity: isOpen ? '1' : '0',
                  }}
                >
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0">
                    <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
