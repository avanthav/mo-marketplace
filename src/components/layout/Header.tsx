'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  MapPin,
  Heart,
  ShoppingCart,
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
  cartCount = 0,
  wishlistCount = 0,
  deliverTo = 'Colombo',
  onSearch,
  className = '',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white border-b border-[#F0F0F0] ${className}`}>
      <div className="mo-container">
        <div className="flex items-center justify-between h-[70px]">
          {/* Left section: Hamburger Icon + MO Logo + Search Bar with exact 35px gap */}
          <div className="flex items-center flex-1 min-w-0">
            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#000000] hover:text-[#FF0000] transition-colors focus:outline-none cursor-pointer shrink-0 mr-3 sm:mr-4"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8]" />
            </button>

            {/* MO Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo_mo.svg"
                alt="MO Logo"
                width={72}
                height={34}
                priority
                className="h-7 md:h-[30px] w-auto object-contain"
              />
            </Link>

            {/* Gap 35px from Logo to Search Bar */}
            <div className="hidden md:flex flex-1 ml-[35px] mr-[69px]">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>

          {/* Right section: Deliver to | Sign in | Wishlist | Cart */}
          <div className="flex items-center gap-5 lg:gap-7 shrink-0">
            {/* Deliver to Colombo */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer group text-left select-none shrink-0">
              <MapPin className="w-5 h-5 text-[#333333] group-hover:text-[#FF0000] transition-colors stroke-[1.6]" />
              <div className="text-[12px] leading-tight">
                <span className="text-[#8E8E93] block text-[11px] font-normal">Deliver to</span>
                <span className="font-semibold text-[#000000]">{deliverTo}</span>
              </div>
            </div>

            {/* Sign in / My Account */}
            <Link
              href="#account"
              className="hidden sm:flex items-center gap-2 text-left group select-none shrink-0"
            >
              {/* User Avatar outline matching Figma */}
              <svg
                className="w-5 h-5 text-[#333333] group-hover:text-[#FF0000] transition-colors stroke-current stroke-[1.6] fill-none"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
              </svg>
              <div className="text-[12px] leading-tight">
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
              <Heart className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.6]" />
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
              <ShoppingCart className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.6]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[16px] h-[16px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="pb-3 md:hidden">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden animate-in fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full p-5 overflow-y-auto flex flex-col justify-between border-r border-[#DADADA]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
                <Image
                  src="/images/logo_mo.svg"
                  alt="MO Logo"
                  width={72}
                  height={34}
                  className="h-7 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-[#737373] hover:text-[#000000]"
                >
                  <X className="w-6 h-6 stroke-[1.8]" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-4 space-y-3">
                <div className="text-xs font-bold text-[#8E8E93] uppercase tracking-wider mb-2">
                  Categories & Channels
                </div>
                {[
                  'All Categories',
                  'Super Mall',
                  'Second Hand',
                  'Vehicles',
                  'Properties',
                  "Today's Deals",
                  'Top Brands',
                  'New Arrivals',
                ].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-sm font-semibold text-[#000000] hover:text-[#FF0000]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#F0F0F0] pt-4 space-y-2 text-xs text-[#737373]">
              <div className="flex items-center gap-2 py-1">
                <MapPin className="w-4 h-4 text-[#FF0000]" />
                <span className="text-[#000000]">Deliver to {deliverTo}, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 py-1">
                <svg
                  className="w-4 h-4 text-[#FF0000] stroke-current stroke-[1.8] fill-none"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                </svg>
                <span className="text-[#000000]">Sign In / Create Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
