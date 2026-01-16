import { 
  ShieldCheck, 
  Server, 
  Globe, 
  Users, 
  Briefcase, 
  FileText, 
  BarChart3, 
  Layers,
  Database,
  Lock
} from 'lucide-react';
import { NavItem, ServiceItem, CompanyInfo, FeatureItem } from './types';

export const COMPANY_INFO: CompanyInfo = {
  name: "Ārjava",
  tagline: "Clarity in Systems. Integrity in Execution.",
  contact: {
    email: "hello@arjavahub.com",
    phone: "+91 11 2345 6789",
    whatsapp: "911123456789",
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
    title: "Government ERP",
    description: "Specialized platforms for departmental workflows, public interfacing, and inter-agency data exchange.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Inter-Ministerial Data Exchange",
      "Secure File Movement & Tracking",
      "Citizen-Centric Service Portals",
      "Digital Signature Integration"
    ]
  },
  {
    title: "Tender & Procurement",
    description: "End-to-end e-procurement systems ensuring transparency, compliance, and audit trails for public sector undertakings.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Automated Bid Evaluation Logic",
      "Vendor Credibility Scoring",
      "Contract Lifecycle Management",
      "Spend Analysis & Forecasting"
    ]
  },
  {
    title: "Compliance & Audit",
    description: "Built-in regulatory adherence mechanisms for GFR, taxation, and labor laws with automated reporting.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Real-time GFR Compliance Checks",
      "Forensic-Grade Audit Trails",
      "Automated Tax Filing Engines",
      "Legislative Update Patches"
    ]
  },
  {
    title: "Finance & Accounting",
    description: "Robust ledgers, budget control, and treasury management integrated with national payment gateways.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Multi-Currency Treasury Mgmt",
      "Budget Appropriation Controls",
      "Automated Bank Reconciliation",
      "Grant Utilization Tracking"
    ]
  },
  {
    title: "HR & Payroll",
    description: "Scalable workforce management handling complex pay scales, transfers, and service records.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    features: [
      "Complex Pay-Scale Structures",
      "Service Book Digitization",
      "Transfer & Promotion Logic",
      "Biometric Attendance Sync"
    ]
  },
  {
    title: "Project & Asset Management",
    description: "Lifecycle tracking for infrastructure projects and large-scale physical asset inventories.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    features: [
      "Geo-Spatial Asset Tagging",
      "Project Milestone Monitoring",
      "Depreciation & Valuation Engines",
      "Maintenance Scheduling"
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
  { title: "Philosophy", description: "We believe in clarity and integrity. We build long-term systems, not temporary patches." },
  { title: "Custom vs Generic", description: "We do not sell off-the-shelf software. We build tailored platforms that fit your exact governance model." },
  { title: "India + Global", description: "Deep expertise in Indian bureaucratic processes combined with global best practices in technology." },
  { title: "Security First", description: "Military-grade encryption, role-based access control, and on-premise/hybrid cloud deployment options." },
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
  mission: "To empower large organizations with software that is as reliable, transparent, and dignified as the institutions they serve."
};

// Formspree.io endpoint - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
// Get your form ID from https://formspree.io/forms after creating a form
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykkyoeo';