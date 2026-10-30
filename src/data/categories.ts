import { CategoryItem, ShortcutCard, PromoBanner } from '@/types';

export const POPULAR_CATEGORIES: CategoryItem[] = [
  { id: 'mobiles', name: 'Mobiles', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&auto=format&fit=crop&q=80' },
  { id: 'laptops', name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&auto=format&fit=crop&q=80' },
  { id: 'audio', name: 'Audio', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=150&auto=format&fit=crop&q=80' },
  { id: 'television', name: 'Television', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=150&auto=format&fit=crop&q=80' },
  { id: 'home-appliances', name: 'Home Appliances', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=150&auto=format&fit=crop&q=80' },
  { id: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=150&auto=format&fit=crop&q=80' },
  { id: 'groceries', name: 'Groceries', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=150&auto=format&fit=crop&q=80' },
  { id: 'beauty-health', name: 'Beauty & Health', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=150&auto=format&fit=crop&q=80' },
  { id: 'gaming', name: 'Gaming', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=150&auto=format&fit=crop&q=80' },
  { id: 'living', name: 'Living', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&auto=format&fit=crop&q=80' },
  { id: 'baby-kids', name: 'Baby & Kids', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=150&auto=format&fit=crop&q=80' },
  { id: 'grocery', name: 'Grocery', image: 'https://images.unsplash.com/photo-1506484381205-f7945653044d?w=150&auto=format&fit=crop&q=80' },
  { id: 'automotive', name: 'Automotive', image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=150&auto=format&fit=crop&q=80' },
  { id: 'tools-diy', name: 'Tools & DIY', image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=150&auto=format&fit=crop&q=80' },
  { id: 'pets', name: 'Pets', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=150&auto=format&fit=crop&q=80' },
];

export const SHORTCUT_CARDS: ShortcutCard[] = [
  {
    id: 'super-mall',
    title: 'Super Mall',
    description: 'Brand new products from trusted sellers',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&auto=format&fit=crop&q=80',
    href: '#super-mall',
    bgColor: 'bg-[#FDF3F3]',
  },
  {
    id: 'second-hand',
    title: 'Second Hand',
    description: 'Quality pre-owned items at great prices',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&auto=format&fit=crop&q=80',
    href: '#second-hand',
    bgColor: 'bg-[#F0F7FD]',
  },
  {
    id: 'vehicles',
    title: 'Vehicles',
    description: 'Cars, bikes, trucks and more',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&auto=format&fit=crop&q=80',
    href: '#vehicles',
    bgColor: 'bg-[#EFF8F2]',
  },
  {
    id: 'properties',
    title: 'Properties',
    description: 'Houses, lands and commercial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&auto=format&fit=crop&q=80',
    href: '#properties',
    bgColor: 'bg-[#FDF4EA]',
  },
];

export const PROMO_BANNER_ROW: PromoBanner[] = [
  {
    id: 'tech-gadgets',
    title: 'Latest Tech & Gadgets',
    subtitle: 'Top brands, best prices',
    ctaText: 'Shop Now',
    ctaLink: '#tech',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
    bgGradient: 'from-gray-950 via-slate-900 to-indigo-950',
  },
  {
    id: 'upgrade-home',
    title: 'Upgrade Your Home',
    subtitle: 'Smart appliances for a better living',
    ctaText: 'Shop Now',
    ctaLink: '#home',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
    bgGradient: 'from-slate-800 via-sky-950 to-slate-900',
  },
  {
    id: 'next-ride',
    title: 'Find Your Next Ride',
    subtitle: 'Cars, bikes & more',
    ctaText: 'Explore Vehicles',
    ctaLink: '#vehicles',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80',
    bgGradient: 'from-zinc-900 via-neutral-900 to-stone-900',
  },
];

