'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Heart, ShoppingCart, MapPin, X } from 'lucide-react';
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden animate-in fade-in">
          <div className="bg-white w-[85%] max-w-[320px] h-full p-5 overflow-y-auto flex flex-col justify-between border-r border-[#DADADA]">
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
                  className="p-1 text-[#4A4A4A] hover:text-[#FF0000]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4">
                <Link
                  href="#sell"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-2.5 rounded-lg bg-[#FF2B44] text-white font-bold text-sm shadow-xs"
                >
                  Sell on MO
                </Link>

                <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                  <MapPin className="w-5 h-5 text-[#FF0000]" />
                  <div>
                    <span className="text-xs text-[#737373] block">Deliver to</span>
                    <span className="text-sm font-semibold text-[#000000]">{deliverTo}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-bold text-[#737373] uppercase tracking-wider px-2 py-1">
                    Quick Links
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
                      className="block px-3 py-2 text-sm text-[#333333] hover:bg-[#F0F0F0] hover:text-[#FF0000] rounded-md transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0F0F0] text-xs text-[#737373] text-center">
              MO Marketplace Sri Lanka
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
