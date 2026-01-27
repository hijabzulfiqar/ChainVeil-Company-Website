"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Clock,
  Linkedin,
  Twitter,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import { contactMethods, offices, faqData } from "@/data/contact";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Mail,
  MessageSquare,
  Phone,
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <div className="text-center max-w-4xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-neutral-400">Contact Us</p>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Let&apos;s build something
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-300">
              Amazing Together
            </span>
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mt-3 sm:mt-5 mx-auto px-2">
            Whether you have a question about our services, need technical
            support, or want to explore a partnership, we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method) => {
              const IconComponent = iconMap[method.icon];
              return (
                <a
                  key={method.title}
                  href={method.link}
                  className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 hover:bg-white/5 hover:border-brand/20 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/5 ring-1 ring-white/10 mb-4 group-hover:bg-brand/10 group-hover:ring-brand/20 transition-all">
                    {IconComponent && (
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-brand" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-1">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-2">
                    {method.description}
                  </p>
                  <span className="text-sm sm:text-base text-brand font-medium group-hover:underline">
                    {method.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5">
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-2">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-brand/10 ring-1 ring-brand/20 mb-4">
                      <CheckCircle className="h-7 w-7 text-brand" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-neutral-400">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formState.company}
                          onChange={(e) =>
                            setFormState({ ...formState, company: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                          Subject *
                        </label>
                        <select
                          required
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition"
                        >
                          <option value="" className="bg-neutral-900">
                            Select a topic
                          </option>
                          <option value="general" className="bg-neutral-900">
                            General Inquiry
                          </option>
                          <option value="sales" className="bg-neutral-900">
                            Sales & Pricing
                          </option>
                          <option value="support" className="bg-neutral-900">
                            Technical Support
                          </option>
                          <option value="partnership" className="bg-neutral-900">
                            Partnership
                          </option>
                          <option value="enterprise" className="bg-neutral-900">
                            Enterprise Solutions
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-300 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 ring-1 ring-white/5 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand/50 focus:ring-brand/20 transition resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 font-semibold text-neutral-900 bg-brand hover:bg-brand-light rounded-lg sm:rounded-xl py-2.5 sm:py-3 px-4 sm:px-6 transition-all duration-300"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Offices & Social */}
            <div className="order-1 lg:order-2 flex flex-col">
              {/* Wrapper to match the form card height */}
              <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 flex-1 flex flex-col">
                {/* Offices */}
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-4 sm:mb-6">
                    Our Offices
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 bg-white/5"
                      >
                        <div className="flex items-start gap-3">
                          <div className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white/5 ring-1 ring-white/10 shrink-0">
                            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand" />
                          </div>
                          <div>
                            <h3 className="text-sm sm:text-base font-semibold text-neutral-100">
                              {office.city}, {office.country}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                              {office.address}
                            </p>
                            <div className="flex items-center gap-1.5 mt-1.5 text-[10px] sm:text-xs text-neutral-500">
                              <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              {office.timezone}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 sm:my-6 h-px bg-white/10" />

                {/* Social Links */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-2">
                    Follow Us
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mb-4">
                    Stay updated with the latest news and updates
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
                    >
                      <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/5 text-neutral-400 ring-1 ring-white/10 hover:bg-white/10 hover:text-white transition"
                    >
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
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="hidden sm:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto pt-12 sm:pt-24 px-4 sm:px-6 pb-10 sm:pb-16">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
              Contact & Support FAQ
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
              Common questions about getting started and working with ChainVeil.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-5">
            {faqData.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-item rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-brand/30 ring-1 ring-brand/10"
                      : "border-white/10 ring-1 ring-white/5 bg-neutral-900/40 hover:bg-white/5"
                  }`}
                  style={
                    isOpen
                      ? {
                          background:
                            "linear-gradient(180deg, rgba(129, 214, 88, 0.12) 0%, rgba(129, 214, 88, 0.06) 50%, transparent 100%)",
                        }
                      : {}
                  }
                >
                  <button
                    type="button"
                    className="w-full text-left px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start justify-between gap-3 sm:gap-6 hover:bg-white/5 transition-colors"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-lg md:text-xl font-semibold tracking-tight text-neutral-100">
                      {item.question}
                    </span>
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
                      maxHeight: isOpen ? "200px" : "0",
                      opacity: isOpen ? "1" : "0",
                    }}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0">
                      <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
