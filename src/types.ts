export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "Secretarial" | "Corporate Law" | "Compliance & Audit" | "Intellectual Property" | "Restructuring" | "Cross-Border";
  iconName: string;
  keyOfferings: string[];
  subServices?: string[];
  statutoryFramework?: string;
  deliverables?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  qualification: string;
  experience: string;
  bio: string;
  specializations: string[];
  photoUrl: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  iconName: string;
  description: string;
  examples: string[];
}

export interface ComplianceCalendarItem {
  id: string;
  formName: string;
  purpose: string;
  applicableLaw: string;
  duePeriod: string;
  category: string;
}

export interface RegulatoryLink {
  id: string;
  name: string;
  category: string;
  url: string;
  description: string;
}

export type PageSlug = 
  | "home" 
  | "about"
  | "about-profile" 
  | "about-team" 
  | "services" 
  | "industries"
  | "clientele" 
  | "knowledge-base" 
  | "careers" 
  | "faq"
  | "contact"
  | "disclaimer";

