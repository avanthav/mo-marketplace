'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  Heart,
  ShoppingCart,
  MapPin,
  X,
  User,
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  ShoppingBag,
  RotateCcw,
  Car,
  Home as HomeIcon,
  Package,
  Store,
  BarChart2,
  Headphones,
  Truck,
  Phone,
  Info,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { SearchBar } from './SearchBar';

export interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
  deliverTo?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount = 2,
  wishlistCount = 4,
  deliverTo = 'Colombo',
  onSearch,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className={`bg-white border-b border-[#F0F0F0] ${className}`}>
      <div className="mo-container">
        {/* Top Header Row (Mobile: Hamburger + MO Logo + Sell on MO + Wishlist + Cart all in 390px) */}
        <div className="flex items-center justify-between h-[56px] sm:h-[64px] md:h-[70px] gap-2 sm:gap-3">
          {/* Left section: Hamburger Icon + MO Logo */}
          <div className="flex items-center shrink-0 gap-2 sm:gap-3">
            {/* Hamburger button (Mobile view) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1 text-[#000000] hover:text-[#FF0000] transition-colors focus:outline-none cursor-pointer shrink-0"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 stroke-[1.9]" />
            </button>

            {/* MO Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo_mo.svg"
                alt="MO Logo"
                width={72}
                height={34}
                priority
                className="h-6 sm:h-7 md:h-[30px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 ml-6 lg:ml-[35px] mr-5 lg:mr-8">
            <SearchBar onSearch={onSearch} />
          </div>

          {/* Right section: Sell on MO + Actions */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0">
            {/* Sell on MO Red Button */}
            <Link
              href="#sell"
              className="inline-flex items-center justify-center h-[34px] sm:h-[38px] md:h-[42px] px-3 sm:px-4 md:px-5 rounded-lg bg-[#FF2B44] hover:bg-[#E01E35] text-white font-bold text-[11px] sm:text-[12px] md:text-[13px] shadow-xs transition-all active:scale-95 shrink-0 whitespace-nowrap"
            >
              Sell on MO
            </Link>

            {/* Deliver to Colombo (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer group text-left select-none shrink-0">
              <MapPin className="w-5 h-5 text-[#333333] group-hover:text-[#FF0000] transition-colors stroke-[1.6]" />
              <div className="text-[12px] leading-tight">
                <span className="text-[#8E8E93] block text-[11px] font-normal">Deliver to</span>
                <span className="font-semibold text-[#000000]">{deliverTo}</span>
              </div>
            </div>

            {/* Sign in / My Account (Tablet/Desktop) */}
            <Link
              href="#account"
              className="hidden sm:flex items-center gap-2 text-left group select-none shrink-0"
            >
              <svg
                className="w-5 h-5 text-[#333333] group-hover:text-[#FF0000] transition-colors stroke-current stroke-[1.6] fill-none"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
              </svg>
              <div className="text-[12px] leading-tight hidden md:block">
                <span className="text-[#8E8E93] block text-[11px] font-normal">Sign in</span>
                <span className="font-semibold text-[#000000]">My Account</span>
              </div>
            </Link>

            {/* Wishlist Icon with Red Badge */}
            <Link
              href="#wishlist"
              className="relative p-1 text-[#1E1E1E] hover:text-[#FF0000] transition-colors flex items-center justify-center shrink-0"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.6]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full">
                {wishlistCount}
              </span>
            </Link>

            {/* Cart Icon with Red Badge */}
            <Link
              href="#cart"
              className="relative p-1 text-[#1E1E1E] hover:text-[#FF0000] transition-colors flex items-center justify-center shrink-0"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-[22px] sm:h-[22px] stroke-[1.6]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Full-width 390px Search Bar Row */}
        <div className="pb-3 md:hidden w-full">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      {/* Mobile Drawer Menu - Designed exactly matching Figma Mobile UI Side Menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 md:hidden animate-in fade-in duration-200 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[86%] max-w-[340px] h-full overflow-y-auto no-scrollbar flex flex-col justify-between border-r border-[#EBEBEB] shadow-2xl animate-in slide-in-from-left duration-200 cursor-default"
          >
            {/* Drawer Content */}
            <div className="px-4 py-4 pb-8 space-y-4">
              {/* Header: MO Red Logo & Close button */}
              <div className="flex items-center justify-between pb-3">
                <Image
                  src="/images/logo_mo.svg"
                  alt="MO Logo"
                  width={76}
                  height={36}
                  className="h-7 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#1E1E1E] hover:text-[#FF0000] rounded-full hover:bg-[#F5F5F5] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[2]" />
                </button>
              </div>

              {/* Welcome to MO Profile Card */}
              <div className="rounded-2xl bg-[#FFF1F2] p-3.5 border border-[#FFE4E6]">
                <div className="flex items-center justify-between mb-3 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FECDD3] flex items-center justify-center text-[#E11D48] shrink-0">
                      <User className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#111827] leading-tight">
                        Welcome to MO
                      </h4>
                      <p className="text-[11px] text-[#6B7280] mt-0.5 font-normal">
                        Sign in or create an account
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#111827] group-hover:translate-x-0.5 transition-all" />
                </div>

                {/* Sign In & Create Account Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="#signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center h-[34px] rounded-lg bg-[#FF0000] hover:bg-[#E00000] text-white font-bold text-[12px] shadow-xs transition-all active:scale-95"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="#register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center h-[34px] rounded-lg bg-white border border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#1F2937] font-semibold text-[12px] transition-all active:scale-95"
                  >
                    Create Account
                  </Link>
                </div>
              </div>

              {/* SECTION: SHOP BY CATEGORY */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5 px-1">
                  Shop by Category
                </span>
                <div className="divide-y divide-[#F3F4F6] border-y border-[#F3F4F6]">
                  {/* All Categories */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection('all-categories')}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <LayoutGrid className="w-4 h-4 text-[#FF0000]" />
                        <span>All Categories</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] transition-transform duration-200 ${
                          expandedSections['all-categories'] ? 'rotate-180 text-[#FF0000]' : ''
                        }`}
                      />
                    </button>
                    {expandedSections['all-categories'] && (
                      <div className="pl-8 pr-2 pb-2 space-y-1.5 bg-[#FAFBFD] py-2 rounded-lg my-1">
                        {[
                          'Mobiles & Tablets',
                          'Laptops & Computers',
                          'Audio & Headphones',
                          'Televisions & Home Theater',
                          'Home Appliances',
                          'Men & Women Fashion',
                          'Beauty & Health',
                          'Gaming Consoles & Gear',
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[12px] text-[#4B5563] hover:text-[#FF0000] font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Super Mall */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection('super-mall')}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <ShoppingBag className="w-4 h-4 text-[#FF0000]" />
                        <span>Super Mall</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] transition-transform duration-200 ${
                          expandedSections['super-mall'] ? 'rotate-180 text-[#FF0000]' : ''
                        }`}
                      />
                    </button>
                    {expandedSections['super-mall'] && (
                      <div className="pl-8 pr-2 pb-2 space-y-1.5 bg-[#FAFBFD] py-2 rounded-lg my-1">
                        {[
                          'Brand Stores (Apple, Samsung, Nike)',
                          'Official Electronics Warranty',
                          'Certified Home Appliances',
                          'Designer Fashion & Apparel',
                          'Luxury Watches & Perfumes',
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[12px] text-[#4B5563] hover:text-[#FF0000] font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Second Hand */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection('second-hand')}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <RotateCcw className="w-4 h-4 text-[#FF0000]" />
                        <span>Second Hand</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] transition-transform duration-200 ${
                          expandedSections['second-hand'] ? 'rotate-180 text-[#FF0000]' : ''
                        }`}
                      />
                    </button>
                    {expandedSections['second-hand'] && (
                      <div className="pl-8 pr-2 pb-2 space-y-1.5 bg-[#FAFBFD] py-2 rounded-lg my-1">
                        {[
                          'Used Mobile Phones',
                          'Used Laptops & PCs',
                          'Pre-Owned Electronics & Audio',
                          'Second Hand Furniture & Home',
                          'Vintage & Thrift Fashion',
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[12px] text-[#4B5563] hover:text-[#FF0000] font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Vehicles */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection('vehicles')}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <Car className="w-4 h-4 text-[#FF0000]" />
                        <span>Vehicles</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] transition-transform duration-200 ${
                          expandedSections['vehicles'] ? 'rotate-180 text-[#FF0000]' : ''
                        }`}
                      />
                    </button>
                    {expandedSections['vehicles'] && (
                      <div className="pl-8 pr-2 pb-2 space-y-1.5 bg-[#FAFBFD] py-2 rounded-lg my-1">
                        {[
                          'Cars for Sale',
                          'Motorbikes & Scooters',
                          'Vans, SUVs & Crossovers',
                          'Auto Spare Parts & Accessories',
                          'Vehicle Rentals',
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[12px] text-[#4B5563] hover:text-[#FF0000] font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Properties */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSection('properties')}
                      className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <HomeIcon className="w-4 h-4 text-[#FF0000]" />
                        <span>Properties</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] transition-transform duration-200 ${
                          expandedSections['properties'] ? 'rotate-180 text-[#FF0000]' : ''
                        }`}
                      />
                    </button>
                    {expandedSections['properties'] && (
                      <div className="pl-8 pr-2 pb-2 space-y-1.5 bg-[#FAFBFD] py-2 rounded-lg my-1">
                        {[
                          'Houses for Sale',
                          'Apartments & Condos',
                          'Land & Plots',
                          'Commercial Property',
                          'House & Room Rentals',
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-[12px] text-[#4B5563] hover:text-[#FF0000] font-normal"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SECTION: MY ACCOUNT */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5 px-1">
                  My Account
                </span>
                <div className="divide-y divide-[#F3F4F6] border-y border-[#F3F4F6]">
                  <Link
                    href="#profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-[#374151]" />
                      <span>My Profile</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#orders"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-[#374151]" />
                      <span>My Orders</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#wishlist"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Heart className="w-4 h-4 text-[#374151]" />
                      <span>Wishlist</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#saved-addresses"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#374151]" />
                      <span>Saved Addresses</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>

              {/* SECTION: SELL ON MO */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5 px-1">
                  Sell on MO
                </span>
                <div className="divide-y divide-[#F3F4F6] border-y border-[#F3F4F6]">
                  <Link
                    href="#start-selling"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Store className="w-4 h-4 text-[#FF0000]" />
                      <span>Start Selling on MO</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#seller-dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <BarChart2 className="w-4 h-4 text-[#FF0000]" />
                      <span>Seller Dashboard</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>

              {/* SECTION: HELP & SUPPORT */}
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-1.5 px-1">
                  Help & Support
                </span>
                <div className="divide-y divide-[#F3F4F6] border-y border-[#F3F4F6]">
                  <Link
                    href="#help-center"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Headphones className="w-4 h-4 text-[#374151]" />
                      <span>Help Center</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#track-order"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Truck className="w-4 h-4 text-[#374151]" />
                      <span>Track Order</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#374151]" />
                      <span>Contact Us</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>

                  <Link
                    href="#about-mo"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] hover:text-[#FF0000] font-medium group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Info className="w-4 h-4 text-[#374151]" />
                      <span>About MO</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#FF0000] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Language Selector */}
              <div className="pt-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2.5 px-1 text-[13px] text-[#1F2937] font-medium hover:text-[#FF0000] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#374151]" />
                    <span>Language: English</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
                </button>
              </div>

              {/* Footer Privacy & Terms */}
              <div className="pt-2 flex items-center gap-2 text-[11px] text-[#9CA3AF] px-1">
                <ShieldCheck className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                <div className="flex items-center gap-1.5">
                  <Link href="#privacy" className="hover:underline">Privacy Policy</Link>
                  <span>•</span>
                  <Link href="#terms" className="hover:underline">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
