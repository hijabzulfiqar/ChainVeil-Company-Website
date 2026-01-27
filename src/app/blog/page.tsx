"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import { blogPosts, categories } from "@/data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = blogPosts.find((post) => post.featured);

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === "All") return !post.featured;
    return post.category === activeCategory && !post.featured;
  });

  const showFeatured =
    activeCategory === "All" || featuredPost?.category === activeCategory;

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">
            Blog & Resources
          </p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Insights on AI &
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Blockchain Technology
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            Stay updated with the latest trends, tutorials, and insights from
            our team of AI and blockchain experts.
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
            <div className="group block rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 overflow-hidden">
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
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-100 mb-2 sm:mb-3">
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
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="relative pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="group flex flex-col rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 overflow-hidden"
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
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-neutral-100 mb-1.5 sm:mb-2 line-clamp-2">
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

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-sm sm:text-base text-neutral-400">
                No articles found in this category.
              </p>
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
