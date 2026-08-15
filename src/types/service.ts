export type SellingPoint = {
  title: string;
  description: string;
};

export type StatItem = {
  value: number;
  suffix?: string;
  label: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  useCases: string[];
  techStack: string[];
  sellingPoints: SellingPoint[];
  stats?: StatItem[];
  pricingTiers?: PricingTier[];
  faqs?: FaqItem[];
};