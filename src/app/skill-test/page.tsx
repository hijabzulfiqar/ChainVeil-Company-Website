"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Download,
  Clock,
  FileCode,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Code2,
  GitBranch,
  Send,
} from "lucide-react";
import {
  skillTestData,
  testSteps,
  requirements,
  tips,
  submissionSteps,
} from "@/data/skillTest";

export default function SkillTestPage() {
  const handleDownload = () => {
    // In production, this would download the actual test project
    // For now, we'll just show an alert
    alert(
      "Download started! In production, this would download the test project zip file."
    );
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <Link
            href="/hiring"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Careers
          </Link>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            {skillTestData.hero.title}
            <span className="block pb-1.5 bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              {skillTestData.hero.subtitle}
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            {skillTestData.hero.description}
          </p>
        </div>
      </section>

      {/* Test Info */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Time Estimate */}
          <div className="flex items-center justify-center gap-2 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-sm sm:text-base text-neutral-300 bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-full px-4 sm:px-5 py-2 sm:py-2.5">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-brand" />
              Estimated Time: {skillTestData.hero.estimatedTime}
            </div>
          </div>

          {/* Download Card */}
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 ring-1 ring-white/5 p-6 sm:p-8 md:p-10 text-center mb-8 sm:mb-12"
            style={{
              background: `
                radial-gradient(600px 240px at 25% 10%, rgba(129, 214, 88, 0.12), transparent 65%),
                radial-gradient(700px 280px at 90% 100%, rgba(107, 194, 72, 0.12), transparent 70%)
              `,
            }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand/10 text-brand mb-4 sm:mb-6">
              <FileCode className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              {skillTestData.download.title}
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto mb-6 sm:mb-8">
              {skillTestData.download.description}
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-3 px-6 sm:px-8 transition-all duration-300"
            >
              <Download className="h-4 w-4 sm:h-5 sm:w-5" />
              {skillTestData.download.buttonText}
            </button>

            {/* Bottom glow */}
            <div className="pointer-events-none absolute inset-x-4 sm:inset-x-6 md:inset-x-10 bottom-0">
              <div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-brand to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-8 sm:h-10 md:h-12 w-[90%] sm:w-[88%] md:w-[82%] rounded-full bg-brand/25 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100 mb-6 sm:mb-8 text-center">
            How It Works
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {testSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand font-semibold text-lg sm:text-xl shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Tips */}
      <section className="relative pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Requirements */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 text-neutral-300">
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                  Requirements
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 text-neutral-300">
                  <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100">
                  Tips for Success
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs sm:text-sm text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Info */}
      <section className="relative pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand shrink-0">
                <GitBranch className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-2 sm:mb-3">
                  How to Submit
                </h3>
                <ol className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-400 list-decimal list-inside">
                  {submissionSteps.map((step, index) => (
                    <li key={index} dangerouslySetInnerHTML={{
                      __html: step.includes('@chainveil-hiring')
                        ? step.replace('@chainveil-hiring', '<span class="text-brand">@chainveil-hiring</span>')
                        : step
                    }} />
                  ))}
                </ol>
                <div className="mt-4 sm:mt-6">
                  <Link
                    href="/hiring#open-roles"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Apply Now with Your Solution
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
