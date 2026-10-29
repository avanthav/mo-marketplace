export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discountPercentage?: number;
  rating?: number;
  reviewCount?: number;
  location?: string;
  tag?: string;
  badge?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconName?: string;
  image?: string;
  itemCount?: string;
  href?: string;
}

export interface ShortcutCard {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  bgColor?: string;
}

export interface HeroBanner {
  id: string;
  tag: string;
  title: string;
  highlightText: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  theme: 'red' | 'coral' | 'dark';
}

export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  bgGradient: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}

