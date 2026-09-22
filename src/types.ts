export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: 'Formação Acadêmica' | 'Google' | 'IBM' | 'Universidade Internacional';
  description: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  headlineKeyword: string;
  badge: string;
  shortDescription: string;
  targetAudience: string;
  deliverables: string[];
  conversionFocus: string;
  whatsappPresetMessage: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  text: string;
  rating: number;
  highlight: string;
  serviceUsed: string;
}

export interface BusinessSegmentOption {
  id: string;
  name: string;
  iconName: string;
  description: string;
  averageSearchesLocal: string;
  recommendedService: string;
  strategicFocus: string;
}

export interface PricingPlanFeature {
  text: string;
  detail?: string;
}

export interface PricingPlan {
  id: string;
  optionLabel: string;
  title: string;
  format: string;
  objective: string;
  setupPrice: string;
  monthlyPrice: string;
  isPopular?: boolean;
  badge?: string;
  features: PricingPlanFeature[];
  whatsappMessage: string;
}

