export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string; // Full-time, Part-time, Contract
  remote: boolean;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

export const projectOverview = {
  title: "Join ChainVeil",
  subtitle: "Build the Future of AI & Blockchain",
  description:
    "We're on a mission to revolutionize the intersection of artificial intelligence and blockchain technology. At ChainVeil, you'll work alongside world-class engineers and researchers to build enterprise-grade infrastructure that powers the next generation of decentralized applications.",
  highlights: [
    {
      title: "Remote-First",
      description: "Work from anywhere in the world with flexible hours",
    },
    {
      title: "Cutting-Edge Tech",
      description: "Work with the latest in AI, ML, and blockchain technologies",
    },
    {
      title: "Competitive Package",
      description: "Top-tier salary, equity, and comprehensive benefits",
    },
    {
      title: "Growth Focused",
      description: "Learning budget and career development opportunities",
    },
  ],
};

export const jobPositions: JobPosition[] = [
  {
    id: "senior-blockchain-engineer",
    title: "Senior Blockchain Engineer",
    department: "Engineering",
    type: "Full-time",
    remote: true,
    description:
      "We're looking for a Senior Blockchain Engineer to help design and implement our core blockchain infrastructure. You'll work on smart contract development, protocol optimization, and cross-chain integrations.",
    responsibilities: [
      "Design and implement smart contracts for DeFi protocols",
      "Optimize gas efficiency and transaction throughput",
      "Build cross-chain bridges and integrations",
      "Conduct security audits and implement best practices",
      "Mentor junior engineers and contribute to technical documentation",
    ],
    requirements: [
      "5+ years of software engineering experience",
      "3+ years of blockchain development (Solidity, Rust, or similar)",
      "Deep understanding of EVM, consensus mechanisms, and cryptography",
      "Experience with DeFi protocols (AMMs, lending, staking)",
      "Strong problem-solving skills and attention to detail",
    ],
    niceToHave: [
      "Experience with zero-knowledge proofs",
      "Contributions to open-source blockchain projects",
      "Background in formal verification",
    ],
    benefits: [
      "Competitive salary + equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Annual learning budget",
    ],
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "Engineering",
    type: "Full-time",
    remote: true,
    description:
      "Join our AI team to build machine learning models that power our smart contract auditing, DeFi analytics, and predictive systems. You'll work on cutting-edge applications of AI in the blockchain space.",
    responsibilities: [
      "Develop and deploy ML models for smart contract analysis",
      "Build predictive models for DeFi market analytics",
      "Create NLP systems for code understanding and documentation",
      "Optimize model performance and inference speed",
      "Collaborate with blockchain engineers on AI-powered features",
    ],
    requirements: [
      "4+ years of experience in ML/AI engineering",
      "Strong proficiency in Python, PyTorch or TensorFlow",
      "Experience with NLP, transformer models, and code analysis",
      "Understanding of MLOps and model deployment",
      "MS or PhD in Computer Science, ML, or related field preferred",
    ],
    niceToHave: [
      "Experience with blockchain or smart contracts",
      "Knowledge of formal methods or program analysis",
      "Published research in ML/AI conferences",
    ],
    benefits: [
      "Competitive salary + equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Conference attendance budget",
    ],
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    department: "Engineering",
    type: "Full-time",
    remote: true,
    description:
      "We're seeking a Frontend Engineer to build beautiful, performant interfaces for our blockchain and AI products. You'll create dashboards, analytics tools, and developer experiences that make complex technology accessible.",
    responsibilities: [
      "Build responsive web applications using React and Next.js",
      "Create intuitive data visualization for blockchain analytics",
      "Implement Web3 wallet integrations and transaction flows",
      "Optimize performance and accessibility",
      "Collaborate with designers and backend engineers",
    ],
    requirements: [
      "3+ years of frontend development experience",
      "Expert-level React/Next.js and TypeScript skills",
      "Experience with Web3 libraries (ethers.js, wagmi, etc.)",
      "Strong CSS skills and eye for design",
      "Understanding of frontend performance optimization",
    ],
    niceToHave: [
      "Experience with data visualization (D3.js, Chart.js)",
      "Knowledge of blockchain concepts and DeFi",
      "Contributions to design systems or component libraries",
    ],
    benefits: [
      "Competitive salary + equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Home office stipend",
    ],
  },
  {
    id: "devrel-engineer",
    title: "Developer Relations Engineer",
    department: "DevRel",
    type: "Full-time",
    remote: true,
    description:
      "Help developers succeed with ChainVeil's platform. You'll create tutorials, documentation, sample projects, and engage with our developer community to drive adoption and gather feedback.",
    responsibilities: [
      "Create technical content, tutorials, and documentation",
      "Build sample applications and developer tools",
      "Engage with developers on Discord, Twitter, and forums",
      "Speak at conferences and host workshops",
      "Gather developer feedback and advocate for improvements",
    ],
    requirements: [
      "3+ years of software development experience",
      "Experience in developer relations or technical writing",
      "Strong communication and presentation skills",
      "Understanding of blockchain and Web3 concepts",
      "Active presence in developer communities",
    ],
    niceToHave: [
      "Existing following in blockchain/Web3 space",
      "Experience creating video content",
      "Background in education or training",
    ],
    benefits: [
      "Competitive salary + equity",
      "Remote-first culture",
      "Health, dental, and vision insurance",
      "Unlimited PTO",
      "Conference and travel budget",
    ],
  },
];

export const departments = ["All", "Engineering", "DevRel"];

export const benefits = [
  {
    icon: "Cpu",
    title: "Work on Cutting-Edge Tech",
    description: "Build with the latest AI/ML models, smart contract technologies, and Web3 infrastructure",
  },
  {
    icon: "Coins",
    title: "Token Allocation",
    description: "Receive token grants and participate in the growth of the ChainVeil ecosystem",
  },
  {
    icon: "Globe",
    title: "Remote-First Culture",
    description: "Work from anywhere globally with async-friendly workflows and flexible schedules",
  },
  {
    icon: "GraduationCap",
    title: "Learning & Growth",
    description: "Annual budget for Web3 conferences, AI courses, and blockchain certifications",
  },
  {
    icon: "Shield",
    title: "Security Research Time",
    description: "Dedicated time for security research, bug bounties, and open-source contributions",
  },
  {
    icon: "Users",
    title: "Collaborative Environment",
    description: "Work alongside AI researchers, blockchain engineers, and security experts",
  },
];

export const cultureValues = [
  {
    title: "Ship Fast, Iterate Faster",
    description: "We believe in rapid prototyping and continuous improvement. Launch early, gather feedback, and evolve.",
  },
  {
    title: "Ownership Mentality",
    description: "Every team member owns their domain. Take initiative, make decisions, and drive impact.",
  },
  {
    title: "Transparent by Default",
    description: "Open communication across all levels. Everyone has access to information they need to succeed.",
  },
  {
    title: "Build for Builders",
    description: "We're developers building for developers. We understand the problems because we've lived them.",
  },
];
