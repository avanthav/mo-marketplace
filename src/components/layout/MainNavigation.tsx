'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export interface MainNavigationProps {
  categories?: Array<{ label: string; href: string; hasDropdown?: boolean }>;
  secondaryLinks?: Array<{ label: string; href: string }>;
  className?: string;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({
  categories = [
    { label: 'All Categories', hasDropdown: true, href: '#all' },
    { label: 'Super Mall', hasDropdown: true, href: '#super-mall' },
    { label: 'Second Hand', hasDropdown: true, href: '#second-hand' },
    { label: 'Vehicles', hasDropdown: true, href: '#vehicles' },
    { label: 'Properties', hasDropdown: true, href: '#properties' },
  ],
  secondaryLinks = [
    { label: "Today's Deals", href: '#deals' },
    { label: 'Top Brands', href: '#brands' },
    { label: 'New Arrivals', href: '#new' },
  ],
  className = '',
}) => {
  return (
    <nav className={`bg-white border-b border-[#F0F0F0] hidden md:block ${className}`}>
      <div className="mo-container flex items-center justify-between text-[13px] h-10">
        {/* Left Category Dropdowns */}
        <div className="flex items-center gap-7 lg:gap-8">
          {categories.map((cat) => (
            <div key={cat.label} className="relative group">
              <Link
                href={cat.href}
                className="flex items-center gap-1.5 font-normal text-[#1E1E1E] hover:text-[#FF0000] transition-colors py-1"
              >
                <span>{cat.label}</span>
                {cat.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF0000] stroke-[1.8]" />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Right Deal Links with subtle vertical separator */}
        <div className="flex items-center gap-6 text-[#1E1E1E]">
          {secondaryLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              {idx === 0 && <span className="h-3 w-[1px] bg-[#E0E0E0] mr-2" />}
              <Link
                href={link.href}
                className="font-normal hover:text-[#FF0000] transition-colors py-1"
              >
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};
