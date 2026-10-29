'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export const MainNavigation: React.FC = () => {
  const mainCategories = [
    { label: 'All Categories', hasDropdown: true, href: '#all' },
    { label: 'Super Mall', hasDropdown: true, href: '#super-mall' },
    { label: 'Second Hand', hasDropdown: true, href: '#second-hand' },
    { label: 'Vehicles', hasDropdown: true, href: '#vehicles' },
    { label: 'Properties', hasDropdown: true, href: '#properties' },
  ];

  const secondaryLinks = [
    { label: "Today's Deals", href: '#deals' },
    { label: 'Top Brands', href: '#brands' },
    { label: 'New Arrivals', href: '#new' },
  ];

  return (
    <nav className="bg-white border-b border-[#F0F0F0] hidden md:block">
      <div className="mo-container flex items-center justify-between text-[13px] py-2.5">
        {/* Left Category Dropdowns */}
        <div className="flex items-center gap-7">
          {mainCategories.map((cat) => (
            <div key={cat.label} className="relative group">
              <Link
                href={cat.href}
                className="flex items-center gap-1.5 font-medium text-[#1E1E1E] hover:text-[#FF0000] transition-colors py-1"
              >
                <span>{cat.label}</span>
                {cat.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF0000] stroke-[2]" />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Right Deal Links with subtle vertical separator */}
        <div className="flex items-center gap-6 text-[#1E1E1E]">
          {secondaryLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              {idx === 0 && <span className="h-3.5 w-[1px] bg-[#E0E0E0] mr-2" />}
              <Link
                href={link.href}
                className="font-medium hover:text-[#FF0000] transition-colors py-1"
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
