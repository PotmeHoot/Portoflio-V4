import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

export interface SiteSettings {
  title: string;
  ownerName: string;
  email: string;
  location: string;
  seo: {
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export interface NavItem {
  id: string;
  label: string;
  visible: boolean;
  order: number;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ShowreelContent {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  poster: string;
  videoUrl: string;
  cta: {
    label: string;
    href: string;
  };
  featured: boolean;
}

export type ProjectStatus = 'ready' | 'coming_soon' | 'hidden';
export type MediaType = 'image' | 'video' | 'mixed';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  agency?: string;
  category: string;
  type: string;
  shortDescription: string;
  deliverables: string[];
  mediaType: MediaType;
  poster: string;
  previewImages?: string[];
  previewVideo?: string;
  platforms: string[];
  year: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  tags?: string[];
}

export interface ARItem {
  id: string;
  title: string;
  platform: 'TikTok' | 'Snapchat';
  previewImage?: string;
  qrCode?: string;
  link: string;
  status: ProjectStatus;
  featured: boolean;
  order: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  order: number;
}

export interface CollaborationStep {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  order: number;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  cta: string;
  status: string;
  email: string;
  socials: {
    name: string;
    url: string;
    icon?: IconName;
  }[];
}

export interface AboutContent {
  title: string;
  description: string;
  expertise: string[];
  experience: {
    icon: IconName;
    title: string;
    desc: string;
  }[];
  tools: {
    name: string;
    level: string;
    desc: string;
  }[];
}

export interface SiteContent {
  settings: SiteSettings;
  navigation: NavItem[];
  hero: HeroContent;
  showreel: ShowreelContent;
  projects: Project[];
  arItems: ARItem[];
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  collaboration: {
    title: string;
    description: string;
    steps: CollaborationStep[];
  };
  contact: ContactContent;
  about: AboutContent;
}
