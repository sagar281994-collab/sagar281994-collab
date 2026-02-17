
import React from 'react';
import { 
  Brain, 
  Network, 
  TrendingUp, 
  ShieldCheck, 
  Search, 
  Users, 
  CheckCircle, 
  Handshake,
  Cpu,
  Database,
  BarChart3
} from 'lucide-react';
import { SuccessStory, PortfolioProject } from './types.ts';

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    role: "Lead Machine Learning Engineer",
    clientProfile: "Fortune 500 Retail Tech Giant",
    challenge: "Client needed a specialist to optimize 3D garment simulations and reduce revision cycles by 20%.",
    result: "Sourced an elite candidate who successfully reduced physical sample production by 30%, saving millions in annual material costs.",
    icon: <Cpu className="w-8 h-8" />
  },
  {
    role: "Director of AI Research",
    clientProfile: "Stealth-Mode Silicon Valley Startup",
    challenge: "Building a core recommendation engine from the ground up required a unique blend of data integrity and retail analytics expertise.",
    result: "Placed a vision-aligned leader who accelerated client approval cycles by 40% through innovative 3D modeling workflows.",
    icon: <Brain className="w-8 h-8" />
  },
  {
    role: "Principal Data Scientist",
    clientProfile: "Global E-commerce Brand (Inditex/Benetton Partner)",
    challenge: "Identifying trends in massive inventory data to support seasonal product planning across global markets.",
    result: "Implemented a recruitment strategy that filled 5 high-impact roles, improving first-pass accuracy by 25% across their analytical departments.",
    icon: <BarChart3 className="w-8 h-8" />
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "AI Talent Landscape Report 2024",
    description: "An in-depth analysis of shifting trends in Machine Learning hiring across the North American market.",
    link: "#",
    tags: ["Market Analysis", "Data Visualization"]
  },
  {
    title: "Vetting Framework for ML Ops",
    description: "A proprietary technical screening methodology designed to validate pattern recognition and material data integrity skills.",
    link: "#",
    tags: ["HR Tech", "Process Improvement"]
  },
  {
    title: "Retail Intelligence Network",
    description: "Connecting over 500+ top-tier data professionals specializing in workflow optimization for fashion and retail.",
    link: "#",
    tags: ["Networking", "Community"]
  }
];

export const APPROACH_STEPS = [
  {
    title: "Deep Dive & Strategy",
    description: "I partner with you to understand the DNA of your team and the unique technical nuances of your AI stack.",
    icon: <Search className="w-10 h-10" />
  },
  {
    title: "Elite Talent Sourcing",
    description: "Tapping into my exclusive network of passive high-performers in ML, Data Science, and AI Research.",
    icon: <Users className="w-10 h-10" />
  },
  {
    title: "Rigorous Vetting",
    description: "Every candidate undergoes a multi-stage technical and cultural assessment to ensure long-term fit.",
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: "Long-Term Partnership",
    description: "My commitment doesn't end at placement; I support the onboarding and integration for sustained success.",
    icon: <Handshake className="w-10 h-10" />
  }
];
