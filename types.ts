import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: LucideIcon;
  features?: string[];
  image?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  content?: string;
  items?: ServiceItem[] | FeatureItem[];
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  contact: {
    email: string;
    phone: string;
    whatsapp?: string;
    address: string;
  };
}