"use client";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "10+ years in distributed systems and AI. Previously led blockchain and machine learning initiatives at a Fortune 500 tech company.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    name: "Sarah Martinez",
    role: "CTO",
    bio: "Core contributor to multiple Layer 2 protocols. PhD in Cryptography and AI from MIT.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    name: "James Wilson",
    role: "Head of AI & Security",
    bio: "Former security researcher specializing in AI-powered threat detection. Identified vulnerabilities in major DeFi protocols.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format",
  },
  {
    name: "Emily Park",
    role: "Lead Blockchain Engineer",
    bio: "Solidity expert with 50+ audited smart contracts. Pioneer in integrating AI models with on-chain data.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face&auto=format",
  },
];

export default function Members() {
  return (
    <section className="relative" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-100">
            Meet Our Team
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed px-2">
            AI and blockchain experts building the infrastructure for the decentralized future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/5 p-5 sm:p-6 transition-all duration-300 hover:bg-white/5 hover:border-brand/20"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4 sm:mb-5">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full ring-2 ring-white/10 shadow-lg overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-brand font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
