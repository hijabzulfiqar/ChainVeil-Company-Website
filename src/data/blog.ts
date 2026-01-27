// Blog Page Data

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
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

export const categories = [
  "All",
  "AI & Security",
  "Development",
  "DeFi",
  "Infrastructure",
  "AI & Analytics",
  "Security",
];
