import {
  ShieldCheck,
  FileText,
  Layers,
  Cloud,
  Smartphone,
  Package,
  ClipboardList,
  Building2,
  Users,
  Warehouse,
  FolderKanban
} from 'lucide-react';
import { NavItem, ServiceItem, CompanyInfo, FeatureItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Ārjava",
  tagline: "Clarity in Systems. Integrity in Execution.",
  contact: {
    email: "hello@arjavahub.com",
    phone: "+91 97112 38920",
    whatsapp: "919711238920",
    address: "Aerocity, New Delhi, India"
  }
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Why Ārjava", path: "/why-arjava" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const HERO_CONTENT = {
  headline: "Enterprise-grade ERP Systems for Government & Industry",
  subtext: "Custom-built, secure, scalable ERP solutions tailored for public and private sector organizations in India and globally.",
  primaryCta: "Request a Consultation",
  secondaryCta: "View Our Capabilities"
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Tender & Procurement",
    description: "Digitize your entire procurement process from tender creation to contract award. Our e-procurement system ensures complete transparency, regulatory compliance, and maintains comprehensive audit trails for every transaction.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Online Tender Publishing & Management",
      "Automated Bid Evaluation & Scoring",
      "E-Auction & Reverse Auction Support",
      "Compliance & Audit Trail Reports"
    ]
  },
  {
    title: "Vendor Management",
    description: "Build and maintain a reliable vendor ecosystem with comprehensive supplier lifecycle management. From registration and qualification to performance evaluation, manage all your vendor relationships in one place.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Vendor Registration & Onboarding",
      "Performance Scorecards & Ratings",
      "Contract & SLA Management",
      "Blacklisting & Compliance Tracking"
    ]
  },
  {
    title: "Project Management",
    description: "Plan, execute, and monitor projects of any scale with real-time visibility into progress, budgets, and resources. Keep stakeholders informed with automated reports and milestone tracking dashboards.",
    icon: FolderKanban,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Gantt Charts & Timeline Views",
      "Budget Tracking & Cost Control",
      "Resource Allocation & Scheduling",
      "Milestone & Deliverable Tracking"
    ]
  },
  {
    title: "Inventory Management",
    description: "Gain complete visibility and control over your inventory across multiple locations. Optimize stock levels, reduce carrying costs, and ensure materials are available when needed with intelligent forecasting.",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Multi-Warehouse Stock Tracking",
      "Automated Reorder Points",
      "Batch & Serial Number Tracking",
      "Stock Valuation & Aging Reports"
    ]
  },
  {
    title: "Asset Management",
    description: "Track and manage your organization's physical assets throughout their entire lifecycle. From acquisition to disposal, maintain accurate records, schedule maintenance, and maximize asset utilization.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Asset Register & Tagging",
      "Depreciation & Valuation",
      "Preventive Maintenance Scheduling",
      "Asset Transfer & Disposal Workflow"
    ]
  }
];

export const APPROACH_STEPS: FeatureItem[] = [
  { title: "1. Discovery", description: "Deep-dive analysis of existing workflows and statutory requirements." },
  { title: "2. Design", description: "Architecting secure, scalable systems with enterprise-grade data models." },
  { title: "3. Build", description: "Agile development of custom modules tailored to organizational needs." },
  { title: "4. Deploy", description: "Phased rollout with data migration and extensive user training." },
  { title: "5. Support", description: "Long-term maintenance, security updates, and SLA-driven support." },
];

export const WHY_ARJAVA_POINTS: FeatureItem[] = [
  {
    title: "Unified Platform",
    description: "All your business functions—finance, HR, operations—integrated into one seamless system, eliminating data silos and ensuring consistency",
    icon: Layers
  },
  {
    title: "Cloud-Native",
    description: "Built for the cloud from day one with zero infrastructure overhead, automatic updates, and enterprise-grade security at reduced costs",
    icon: Cloud
  },
  {
    title: "Procurement Excellence",
    description: "Streamline your entire procurement cycle from requisition to payment with automated workflows, approval hierarchies, and spend analytics",
    icon: FileText
  },
  {
    title: "Asset Management",
    description: "Track, maintain, and optimize your physical assets throughout their lifecycle with depreciation tracking, maintenance schedules, and valuation reports",
    icon: Building2
  },
  {
    title: "Inventory Control",
    description: "Maintain optimal stock levels with real-time visibility across warehouses, automated reordering, and accurate demand forecasting",
    icon: Package
  },
  {
    title: "Project Tracking",
    description: "Monitor project progress from initiation to completion with milestone tracking, budget management, and resource allocation dashboards",
    icon: ClipboardList
  },
  {
    title: "Mobile Access",
    description: "Stay connected to your business on the go with fully responsive interfaces that work seamlessly on phones, tablets, and desktops",
    icon: Smartphone
  },
  {
    title: "Vendor Management",
    description: "Manage your entire vendor ecosystem with performance scorecards, compliance tracking, contract management, and streamlined onboarding",
    icon: ShieldCheck
  }
];

export const INDUSTRIES: string[] = [
  "Central Government Ministries",
  "State Government Departments",
  "Public Sector Undertakings (PSUs)",
  "Defense & Aerospace",
  "Large Infrastructure Firms",
  "Global Manufacturing Enterprises"
];

export const ABOUT_CONTENT = {
  story: "Founded by veterans in government technology and enterprise architecture, Ārjava emerged from a need for serious, robust software in the public sector. We recognized that generic SaaS tools often fail to meet the complex, multi-layered requirements of government and large industry.",
  mission: "To design and deliver reliable, scalable, and responsible technology solutions that simplify complex operations and create long-term value for organizations.",
  vision: "To become a globally trusted technology partner known for engineering excellence, disciplined execution, and systems that stand the test of time."
};

// Formspree.io endpoint - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
// Get your form ID from https://formspree.io/forms after creating a form
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykkyoeo';