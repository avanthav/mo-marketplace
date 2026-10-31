import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { MainNavigation } from '@/components/layout/MainNavigation';
import { HeroBanners } from '@/components/home/HeroBanners';
import { CategoryShortcuts } from '@/components/home/CategoryShortcuts';
import { FlashSale } from '@/components/home/FlashSale';
import { PopularCategories } from '@/components/home/PopularCategories';
import { PromotionalBanners } from '@/components/home/PromotionalBanners';
import { ProductSection } from '@/components/home/ProductSection';
import { LifestyleBanners } from '@/components/home/LifestyleBanners';
import { TextTicker } from '@/components/ui/TextTicker';
import { Footer } from '@/components/layout/Footer';
import { FEATURED_PRODUCTS_GRID, GLOW_MORE_PRODUCTS } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD]">
      {/* 1. Slim Red Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Auto-Scrolling Text Slider (Positioned right after the red announcement bar) */}
      <TextTicker />

      {/* 3. Main Header */}
      <Header cartCount={2} wishlistCount={4} />

      {/* 4. Primary Category / Channel Navigation */}
      <MainNavigation />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-5 pt-5 pb-10">
        {/* Hero Promotional Banners */}
        <HeroBanners />

        {/* Shopping Shortcut Cards */}
        <CategoryShortcuts />

        {/* Flash Sale with Countdown Timer & Horizontal Scroll */}
        <FlashSale />

        {/* Popular Categories strip */}
        <PopularCategories />

        {/* Promotional 3-Banner Row */}
        <PromotionalBanners />

        {/* Featured Products Grid (6 columns desktop) */}
        <ProductSection
          title="Featured Products"
          subtitle="Top picks curated for you"
          viewAllLink="#featured"
          products={FEATURED_PRODUCTS_GRID}
          columns={6}
        />

        {/* Lifestyle Editorial Banners (Smart tech watch + 2 stacked) */}
        <LifestyleBanners />

        {/* Additional Product Section: Glow More. Care Better. */}
        <ProductSection
          title="Glow More. Care Better."
          subtitle="Trending beauty, gadgets, and lifestyle favorites"
          viewAllLink="#glow-more"
          products={GLOW_MORE_PRODUCTS}
          columns={6}
        />
      </main>

      {/* Full-width Dark Navy Footer */}
      <Footer />
    </div>
  );
}
