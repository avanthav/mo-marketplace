import { CategoryItem, ShortcutCard, PromoBanner } from '@/types';

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    "id": "mobiles",
    "name": "Mobiles",
    "image": "/images/glossy_trio_of_modern_iphones.png"
  },
  {
    "id": "laptops",
    "name": "Laptops",
    "image": "/images/category_laptop.png"
  },
  {
    "id": "audio",
    "name": "Audio",
    "image": "/images/category_headphones.png"
  },
  {
    "id": "television",
    "name": "Television",
    "image": "/images/category_tv.png"
  },
  {
    "id": "home-appliances",
    "name": "Home Appliances",
    "image": "/images/isolated_black_jbl_bluetooth_speaker.png"
  },
  {
    "id": "fashion",
    "name": "Fashion",
    "image": "/images/fresh_green_summer_outfit_casual_clean_girl_aesthe.jpg"
  },
  {
    "id": "groceries",
    "name": "Groceries",
    "image": "/images/pre-loved_treasures_marketplace.png"
  },
  {
    "id": "beauty-health",
    "name": "Beauty & Health",
    "image": "/images/white_wireless_earbuds_in_open_charging_case.png"
  },
  {
    "id": "gaming",
    "name": "Gaming",
    "image": "/images/modern_black_smartwatch_product_cutout.png"
  },
  {
    "id": "living",
    "name": "Living",
    "image": "/images/turquoise_armchair_with_woven_throws.png"
  },
  {
    "id": "baby-kids",
    "name": "Baby & Kids",
    "image": "/images/thrifted_treasures_in_sunlit_studio.png"
  },
  {
    "id": "grocery",
    "name": "Grocery",
    "image": "/images/three_red_handbags_with_gold_hardware.png"
  },
  {
    "id": "automotive",
    "name": "Automotive",
    "image": "/images/white_crossover_in_three-quarter_view.png"
  },
  {
    "id": "tools-diy",
    "name": "Tools & DIY",
    "image": "/images/golden-hour_urban_vehicle_lineup.png"
  },
  {
    "id": "pets",
    "name": "Pets",
    "image": "/images/441610602332ldrdckaab5tovln.jpg"
  }
];

export const SHORTCUT_CARDS: ShortcutCard[] = [
  {
    "id": "super-mall",
    "title": "Super Mall",
    "description": "Brand new products from trusted sellers",
    "image": "/images/three_red_handbags_with_gold_hardware.png",
    "href": "#super-mall",
    "bgColor": "bg-[#FDEBEA]"
  },
  {
    "id": "second-hand",
    "title": "Second Hand",
    "description": "Quality pre-owned items at great prices",
    "image": "/images/turquoise_armchair_with_woven_throws.png",
    "href": "#second-hand",
    "bgColor": "bg-[#E7F3FD]"
  },
  {
    "id": "vehicles",
    "title": "Vehicles",
    "description": "Cars, bikes, trucks and more",
    "image": "/images/white_crossover_in_three-quarter_view.png",
    "href": "#vehicles",
    "bgColor": "bg-[#E2F4EC]"
  },
  {
    "id": "properties",
    "title": "Properties",
    "description": "Houses, lands and commercial",
    "image": "/images/modern_luxury_villa_cutout.png",
    "href": "#properties",
    "bgColor": "bg-[#FEEDDF]"
  }
];

export const PROMO_BANNER_ROW: PromoBanner[] = [
  {
    "id": "tech-gadgets",
    "title": "Latest Tech & Gadgets",
    "subtitle": "Top brands, best prices",
    "ctaText": "Shop Now",
    "ctaLink": "#tech",
    "image": "/images/latest_tech_gadgets_banner.png",
    "bgGradient": "from-gray-950 via-slate-900 to-indigo-950"
  },
  {
    "id": "upgrade-home",
    "title": "Upgrade Your Home",
    "subtitle": "Smart appliances for a better living",
    "ctaText": "Shop Now",
    "ctaLink": "#home",
    "image": "/images/upgrade_your_home_with_smart_appliances.png",
    "bgGradient": "from-slate-800 via-sky-950 to-slate-900"
  },
  {
    "id": "next-ride",
    "title": "Find Your Next Ride",
    "subtitle": "Cars, bikes & more",
    "ctaText": "Explore Vehicles",
    "ctaLink": "#vehicles",
    "image": "/images/find_your_next_ride.png",
    "bgGradient": "from-zinc-900 via-neutral-900 to-stone-900"
  }
];
