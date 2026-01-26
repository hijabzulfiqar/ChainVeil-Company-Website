"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User, Tag } from "lucide-react";

const allBlogPosts = [
  // AI & Security
  {
    title: "How AI is Revolutionizing Smart Contract Security in 2026",
    excerpt:
      "Discover how machine learning models are detecting vulnerabilities that traditional audits miss, and why AI-powered security is becoming essential for blockchain projects.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&auto=format",
    author: "Alex Chen",
    date: "Jan 24, 2026",
    readTime: "8 min read",
    category: "AI & Security",
    slug: "ai-revolutionizing-smart-contract-security",
    featured: true,
  },
  {
    title: "Machine Learning Models for Detecting Reentrancy Attacks",
    excerpt:
      "How our deep learning algorithms identify complex reentrancy vulnerabilities in smart contracts before they can be exploited.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop&auto=format",
    author: "Sarah Kim",
    date: "Jan 18, 2026",
    readTime: "10 min read",
    category: "AI & Security",
    slug: "ml-detecting-reentrancy-attacks",
    featured: false,
  },
  {
    title: "AI-Powered Threat Detection for DeFi Protocols",
    excerpt:
      "Real-time threat monitoring using neural networks to protect your decentralized finance applications from emerging attack vectors.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&auto=format",
    author: "Marcus Chen",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    category: "AI & Security",
    slug: "ai-threat-detection-defi",
    featured: false,
  },

  // Development
  {
    title: "Gas Optimization Strategies for Solidity Developers",
    excerpt:
      "Practical tips and AI-powered techniques to minimize transaction costs and maximize efficiency in your smart contracts.",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=250&fit=crop&auto=format",
    author: "James Wilson",
    date: "Jan 20, 2026",
    readTime: "10 min read",
    category: "Development",
    slug: "gas-optimization-strategies",
    featured: false,
  },
  {
    title: "Building Your First Smart Contract with AI Assistance",
    excerpt:
      "A step-by-step guide to writing, testing, and deploying smart contracts using AI-powered development tools.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format",
    author: "Emily Park",
    date: "Jan 14, 2026",
    readTime: "12 min read",
    category: "Development",
    slug: "first-smart-contract-ai-assistance",
    featured: false,
  },
  {
    title: "Advanced Solidity Patterns: Proxies and Upgradability",
    excerpt:
      "Master the art of upgradeable smart contracts with transparent proxies, UUPS, and diamond patterns.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop&auto=format",
    author: "Jordan Avery",
    date: "Jan 5, 2026",
    readTime: "15 min read",
    category: "Development",
    slug: "advanced-solidity-proxies-upgradability",
    featured: false,
  },

  // DeFi
  {
    title: "The Future of DeFi: AI-Powered Yield Optimization",
    excerpt:
      "Exploring how machine learning algorithms are transforming decentralized finance with predictive analytics and automated strategies.",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&h=250&fit=crop&auto=format",
    author: "Emily Park",
    date: "Jan 18, 2026",
    readTime: "7 min read",
    category: "DeFi",
    slug: "future-of-defi-ai-yield",
    featured: false,
  },
  {
    title: "Automated Market Makers: How AI Improves Liquidity",
    excerpt:
      "Understanding how machine learning optimizes AMM curves and improves capital efficiency in decentralized exchanges.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&auto=format",
    author: "Taylor Chen",
    date: "Jan 11, 2026",
    readTime: "9 min read",
    category: "DeFi",
    slug: "amm-ai-improves-liquidity",
    featured: false,
  },
  {
    title: "Flash Loan Strategies: Risks and Rewards",
    excerpt:
      "A comprehensive guide to understanding flash loans, their use cases, and how to protect your protocols against flash loan attacks.",
    image:
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=250&fit=crop&auto=format",
    author: "Alex Chen",
    date: "Dec 28, 2025",
    readTime: "11 min read",
    category: "DeFi",
    slug: "flash-loan-strategies-risks-rewards",
    featured: false,
  },

  // Infrastructure
  {
    title: "Understanding Cross-Chain Bridges: A Technical Deep Dive",
    excerpt:
      "Learn how atomic swaps and bridge protocols enable seamless asset transfers across different blockchain networks.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop&auto=format",
    author: "Sarah Martinez",
    date: "Jan 22, 2026",
    readTime: "6 min read",
    category: "Infrastructure",
    slug: "understanding-cross-chain-bridges",
    featured: false,
  },
  {
    title: "Layer 2 Scaling Solutions Compared: 2026 Edition",
    excerpt:
      "An in-depth comparison of Arbitrum, Optimism, zkSync, and other L2 solutions for your blockchain applications.",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=400&h=250&fit=crop&auto=format",
    author: "Sarah Martinez",
    date: "Jan 12, 2026",
    readTime: "12 min read",
    category: "Infrastructure",
    slug: "layer-2-scaling-compared",
    featured: false,
  },
  {
    title: "Running Your Own Ethereum Node: Complete Guide",
    excerpt:
      "Everything you need to know about setting up and maintaining Ethereum nodes for maximum reliability and performance.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
    author: "James Wilson",
    date: "Dec 30, 2025",
    readTime: "14 min read",
    category: "Infrastructure",
    slug: "running-ethereum-node-guide",
    featured: false,
  },

  // AI & Analytics
  {
    title: "Implementing Real-Time On-Chain Analytics with ML",
    excerpt:
      "How to build powerful analytics dashboards using machine learning for wallet tracking and protocol monitoring.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    author: "James Wilson",
    date: "Jan 10, 2026",
    readTime: "11 min read",
    category: "AI & Analytics",
    slug: "realtime-onchain-analytics-ml",
    featured: false,
  },
  {
    title: "Predictive Gas Price Models: How We Achieve 98% Accuracy",
    excerpt:
      "Deep dive into the machine learning architecture behind our gas price prediction system that helps users save on transaction fees.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format",
    author: "Emily Park",
    date: "Jan 3, 2026",
    readTime: "9 min read",
    category: "AI & Analytics",
    slug: "predictive-gas-price-models",
    featured: false,
  },
  {
    title: "Whale Tracking with AI: Detecting Large Movements",
    excerpt:
      "Using neural networks to identify and predict whale wallet behavior before it impacts market prices.",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=250&fit=crop&auto=format",
    author: "Marcus Chen",
    date: "Dec 22, 2025",
    readTime: "8 min read",
    category: "AI & Analytics",
    slug: "whale-tracking-ai-large-movements",
    featured: false,
  },

  // Security
  {
    title: "Building Secure Multi-Sig Wallets: Best Practices",
    excerpt:
      "A comprehensive guide to implementing enterprise-grade wallet security with customizable signature requirements.",
    image:
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=400&h=250&fit=crop&auto=format",
    author: "Alex Chen",
    date: "Jan 15, 2026",
    readTime: "9 min read",
    category: "Security",
    slug: "building-secure-multisig-wallets",
    featured: false,
  },
  {
    title: "Common Smart Contract Vulnerabilities in 2026",
    excerpt:
      "An updated list of the most common security vulnerabilities found in smart contracts and how to avoid them.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format",
    author: "Sarah Kim",
    date: "Jan 6, 2026",
    readTime: "13 min read",
    category: "Security",
    slug: "common-smart-contract-vulnerabilities-2026",
    featured: false,
  },
  {
    title: "Incident Response for DeFi Protocols",
    excerpt:
      "How to prepare for and respond to security incidents in decentralized applications, from detection to recovery.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=250&fit=crop&auto=format",
    author: "Jordan Avery",
    date: "Dec 19, 2025",
    readTime: "10 min read",
    category: "Security",
    slug: "incident-response-defi-protocols",
    featured: false,
  },
];

const categories = [
  "All",
  "AI & Security",
  "Development",
  "DeFi",
  "Infrastructure",
  "AI & Analytics",
  "Security",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = allBlogPosts.find((post) => post.featured);

  const filteredPosts = allBlogPosts.filter((post) => {
    if (activeCategory === "All") return !post.featured;
    return post.category === activeCategory && !post.featured;
  });

  const showFeatured = activeCategory === "All" || featuredPost?.category === activeCategory;

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">Blog & Resources</p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Insights on AI &
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Blockchain Technology
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            Stay updated with the latest trends, tutorials, and insights from our team of AI and blockchain experts.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative pt-12 sm:pt-16 pb-6 sm:pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 text-[10px] sm:text-xs md:text-sm font-medium rounded-full px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-brand text-neutral-900"
                    : "bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && featuredPost && (
        <section className="relative pb-10 sm:pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-brand/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-40 sm:h-56 md:h-64 lg:h-full min-h-[200px] lg:min-h-[280px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950/60" />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white bg-brand/90 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1">
                    Featured
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-brand mb-2 sm:mb-3">
                    <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    {featuredPost.category}
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-100 mb-2 sm:mb-3 group-hover:text-brand transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed mb-3 sm:mb-4 md:mb-6 line-clamp-3 sm:line-clamp-none">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs md:text-sm text-neutral-400">
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <User className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="hidden sm:inline">{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="relative pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-brand/20"
                >
                  {/* Image */}
                  <div className="relative h-36 sm:h-40 md:h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-3 sm:p-4 md:p-5">
                    <span className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-medium text-brand mb-1.5 sm:mb-2">
                      <Tag className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      {post.category}
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-neutral-100 mb-1.5 sm:mb-2 group-hover:text-brand transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs md:text-sm text-neutral-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <User className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-sm sm:text-base text-neutral-400">No articles found in this category.</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <button className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-full py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 transition-all duration-300">
                Load More Articles
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 ring-1 ring-white/5 p-5 sm:p-8 md:p-12 text-center"
            style={{
              background: `
                radial-gradient(600px 240px at 25% 10%, rgba(129, 214, 88, 0.12), transparent 65%),
                radial-gradient(700px 280px at 90% 100%, rgba(107, 194, 72, 0.12), transparent 70%)
              `,
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl mx-auto mb-5 sm:mb-6 md:mb-8 px-2">
              Get the latest insights on AI, blockchain, and Web3 development
              delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
              />
              <button className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 transition-all duration-300">
                Subscribe
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Bottom glow */}
            <div className="pointer-events-none absolute inset-x-4 sm:inset-x-6 md:inset-x-10 bottom-0">
              <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-8 sm:h-10 md:h-12 w-[90%] sm:w-[88%] md:w-[82%] rounded-full bg-brand/25 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
