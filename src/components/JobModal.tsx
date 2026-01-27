"use client";

import { useState } from "react";
import { X, Briefcase, MapPin, Clock, CheckCircle2, Send } from "lucide-react";
import { JobPosition } from "@/data/hiring";

interface JobModalProps {
  job: JobPosition;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: JobModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    portfolio: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Application submitted:", { job: job.id, ...formData });
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-white/10 ring-1 ring-white/5 rounded-2xl sm:rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand bg-brand/10 rounded-full px-3 py-1">
                <Briefcase className="h-3 w-3" />
                {job.department}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 bg-white/5 rounded-full px-3 py-1">
                <Clock className="h-3 w-3" />
                {job.type}
              </span>
              {job.remote && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 bg-white/5 rounded-full px-3 py-1">
                  <MapPin className="h-3 w-3" />
                  Remote
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100">
              {job.title}
            </h2>
          </div>

          {/* Job Description */}
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                About the Role
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                {job.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                Responsibilities
              </h3>
              <ul className="space-y-2">
                {job.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                Requirements
              </h3>
              <ul className="space-y-2">
                {job.requirements.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                Nice to Have
              </h3>
              <ul className="space-y-2">
                {job.niceToHave.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-neutral-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3">
                Benefits
              </h3>
              <ul className="space-y-2">
                {job.benefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm sm:text-base text-neutral-400"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* Application Form */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-100 mb-4">
              Apply for this Position
            </h3>

            {submitted ? (
              <div className="text-center py-8 px-4 bg-brand/10 border border-brand/20 rounded-xl">
                <CheckCircle2 className="h-12 w-12 text-brand mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-neutral-100 mb-2">
                  Application Submitted!
                </h4>
                <p className="text-sm text-neutral-400">
                  Thank you for your interest. We&apos;ll review your
                  application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-300 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-300 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-neutral-300 mb-1.5"
                    >
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-neutral-300 mb-1.5"
                    >
                      Portfolio / GitHub
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-300 mb-1.5"
                  >
                    Why are you interested in this role? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition resize-none"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-full py-3 px-6 transition-all duration-300"
                >
                  Submit Application
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
