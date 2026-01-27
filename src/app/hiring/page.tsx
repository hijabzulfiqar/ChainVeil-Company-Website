"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobModal from "@/components/JobModal";
import {
  Briefcase,
  Clock,
  MapPin,
  Globe,
  Zap,
  DollarSign,
  TrendingUp,
  ArrowRight,
  FileCode,
  GraduationCap,
  ChevronRight,
  LucideIcon,
  Cpu,
  Coins,
  Shield,
  Users,
} from "lucide-react";
import {
  projectOverview,
  jobPositions,
  departments,
  benefits,
  JobPosition,
} from "@/data/hiring";

const highlightIcons: Record<string, React.ReactNode> = {
  "Remote-First": <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
  "Cutting-Edge Tech": <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
  "Competitive Package": <DollarSign className="h-5 w-5 sm:h-6 sm:w-6" />,
  "Growth Focused": <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
};

const benefitIcons: Record<string, LucideIcon> = {
  Cpu,
  Coins,
  Globe,
  GraduationCap,
  Shield,
  Users,
};

export default function HiringPage() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  const filteredJobs =
    activeDepartment === "All"
      ? jobPositions
      : jobPositions.filter((job) => job.department === activeDepartment);

  // Group jobs by department for display
  const jobsByDepartment = filteredJobs.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {} as Record<string, JobPosition[]>);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">Careers</p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Join ChainVeil &
            <span className="block pb-1.5 bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Build the Future
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            {projectOverview.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#open-roles"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-300"
            >
              View Open Roles
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/skill-test"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-full py-2.5 sm:py-3 px-5 sm:px-6 transition-all duration-300"
            >
              <FileCode className="h-4 w-4" />
              Take Skill Test
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Highlights Row */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {projectOverview.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand shrink-0">
                  {highlightIcons[highlight.title]}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Benefits & Perks
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              We take care of our team so they can focus on building great things
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit) => {
              const IconComponent = benefitIcons[benefit.icon];
              return (
                <div
                  key={benefit.title}
                  className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 hover:bg-neutral-900/60 hover:border-brand/20 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 text-brand mb-4 group-hover:bg-brand/20 transition-all">
                    {IconComponent && (
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-16 sm:py-20 md:py-24" id="open-roles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-neutral-100 mb-3 sm:mb-4">
              Open Positions
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 max-w-xl mx-auto">
              Find your next opportunity and help shape the future of decentralized technology
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`text-xs sm:text-sm font-medium rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-300 ${
                  activeDepartment === department
                    ? "bg-brand text-neutral-900"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Job Listings by Department */}
          <div className="space-y-8 sm:space-y-10">
            {Object.entries(jobsByDepartment).map(([department, jobs]) => (
              <div key={department}>
                <h3 className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3 sm:mb-4">
                  {department} ({jobs.length})
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {jobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="w-full group p-4 sm:p-5 rounded-xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 hover:bg-neutral-900/60 hover:border-brand/20 transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg font-semibold text-neutral-100 mb-1 group-hover:text-brand transition-colors">
                            {job.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-500">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                              {job.type}
                            </span>
                            {job.remote && (
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                Remote
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-brand transition-colors">
                          <span className="hidden sm:inline text-sm font-medium">
                            View JD
                          </span>
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <Briefcase className="h-12 w-12 text-neutral-700 mx-auto mb-4" />
              <p className="text-sm sm:text-base text-neutral-400">
                No open positions in this department at the moment.
              </p>
            </div>
          )}

          {/* Don't see your role? */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-100 mb-2">
                Don&apos;t see your role?
              </h3>
              <p className="text-sm text-neutral-400 mb-4">
                We&apos;re always looking for talented people. Send us your resume.
              </p>
              <a
                href="mailto:careers@chainveil.io"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-light transition-colors"
              >
                careers@chainveil.io
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Modal */}
      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

      <Footer />
    </div>
  );
}
