'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  MapPin,
  User,
  Heart,
  ShoppingCart,
} from 'lucide-react';
import { SearchBar } from './SearchBar';
import { MoLogo } from '@/components/ui/MoLogo';

interface HeaderProps {
  cartCount?: number;
  wishlistCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  wishlistCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#F0F0F0]">
      <div className="mo-container">
        <div className="flex items-center justify-between gap-4 md:gap-8 h-16 md:h-[72px]">
          {/* Left section: Hamburger Icon + MO Logo */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* Hamburger button visible on all or mobile, styled thin three horizontal bars */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#000000] hover:text-[#FF0000] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>

            {/* MO Logo exactly as in screenshot */}
            <Link href="/" className="flex items-center">
              <MoLogo className="h-7 md:h-8 w-auto" />
            </Link>
          </div>

          {/* Middle: Prominent Wide Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center max-w-[720px]">
            <SearchBar />
          </div>

          {/* Right section: Deliver to Colombo | Sign In My Account | Wishlist | Cart */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            {/* Deliver to Colombo */}
            <div className="hidden lg:flex items-center gap-2 cursor-pointer group text-left select-none">
              <MapPin className="w-5 h-5 text-[#4A4A4A] group-hover:text-[#FF0000] transition-colors stroke-[1.8]" />
              <div className="text-xs leading-tight">
                <span className="text-[#8E8E93] block text-[11px] font-normal">Deliver to</span>
                <span className="font-semibold text-[#000000]">Colombo</span>
              </div>
            </div>

            {/* Sign In / My Account */}
            <Link
              href="#account"
              className="hidden sm:flex items-center gap-2 text-left group select-none"
            >
              <User className="w-5 h-5 text-[#4A4A4A] group-hover:text-[#FF0000] transition-colors stroke-[1.8]" />
              <div className="text-xs leading-tight">
                <span className="text-[#8E8E93] block text-[11px] font-normal">Sign in</span>
                <span className="font-semibold text-[#000000]">My Account</span>
              </div>
            </Link>

            {/* Wishlist Icon with Red Circular Badge */}
            <Link
              href="#wishlist"
              className="relative p-1 text-[#000000] hover:text-[#FF0000] transition-colors flex items-center justify-center"
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6 stroke-[1.6]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full">
                {wishlistCount}
              </span>
            </Link>

            {/* Cart Icon with Red Circular Badge */}
            <Link
              href="#cart"
              className="relative p-1 text-[#000000] hover:text-[#FF0000] transition-colors flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6 stroke-[1.6]" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[17px] h-[17px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="pb-3 md:hidden">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden animate-in fade-in">
          <div className="bg-white w-4/5 max-w-sm h-full p-5 overflow-y-auto flex flex-col justify-between border-r border-[#DADADA]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#F0F0F0]">
                <MoLogo className="h-7 w-auto" />
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
                <span className="text-[#000000]">Deliver to Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 py-1">
                <User className="w-4 h-4 text-[#FF0000]" />
                <span className="text-[#000000]">Sign In / Create Account</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
