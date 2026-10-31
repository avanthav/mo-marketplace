'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Smartphone,
  Laptop,
  Headphones,
  Tv,
  Home,
  Shirt,
  ShoppingBag,
  Sparkles,
  Gamepad2,
  Armchair,
  Baby,
  Car,
  Wrench,
  Cat,
  Store,
  Tag,
  Building,
  Key,
} from 'lucide-react';

interface SubCategory {
  name: string;
  href: string;
}

interface DropdownItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  subcategories?: SubCategory[];
}

export interface MainNavigationProps {
  className?: string;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({ className = '' }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuData: Record<string, { title: string; items: DropdownItem[] }> = {
    'all-categories': {
      title: 'Browse All Categories',
      items: [
        { name: 'Mobiles & Tablets', href: '#mobiles', icon: <Smartphone className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Laptops & Computers', href: '#laptops', icon: <Laptop className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Audio & Headphones', href: '#audio', icon: <Headphones className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Televisions & Home Theater', href: '#television', icon: <Tv className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Home Appliances', href: '#home-appliances', icon: <Home className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Men & Women Fashion', href: '#fashion', icon: <Shirt className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Beauty & Health', href: '#beauty-health', icon: <Sparkles className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Gaming Consoles & Gear', href: '#gaming', icon: <Gamepad2 className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Living & Furniture', href: '#living', icon: <Armchair className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Baby & Kids Toys', href: '#baby-kids', icon: <Baby className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Vehicles & Automobile', href: '#automotive', icon: <Car className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Tools, Hardware & DIY', href: '#tools-diy', icon: <Wrench className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Pet Supplies', href: '#pets', icon: <Cat className="w-4 h-4 text-[#FF0000]" /> },
      ],
    },
    'super-mall': {
      title: 'Super Mall Official Stores',
      items: [
        { name: 'Brand Stores (Apple, Samsung, Nike)', href: '#brand-stores', icon: <Store className="w-4 h-4 text-[#FF0000]" />, badge: '100% Genuine' },
        { name: 'Official Electronics Warranty', href: '#official-tech', icon: <Smartphone className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Certified Home Appliances', href: '#certified-home', icon: <Home className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Designer Fashion & Apparel', href: '#designer-fashion', icon: <Shirt className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Luxury Watches & Perfumes', href: '#luxury', icon: <Sparkles className="w-4 h-4 text-[#FF0000]" /> },
      ],
    },
    'second-hand': {
      title: 'Pre-Loved & Second Hand Marketplace',
      items: [
        { name: 'Used Mobile Phones', href: '#used-phones', icon: <Smartphone className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Used Laptops & PCs', href: '#used-laptops', icon: <Laptop className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Pre-Owned Electronics & Audio', href: '#used-audio', icon: <Headphones className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Second Hand Furniture & Home', href: '#used-furniture', icon: <Armchair className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Vintage & Thrift Fashion', href: '#thrift-fashion', icon: <Tag className="w-4 h-4 text-[#FF0000]" />, badge: 'Best Deals' },
      ],
    },
    'vehicles': {
      title: 'Vehicles Marketplace',
      items: [
        { name: 'Cars for Sale', href: '#cars', icon: <Car className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Motorbikes & Scooters', href: '#motorbikes', icon: <Car className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Vans, SUVs & Crossovers', href: '#vans-suvs', icon: <Car className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Auto Spare Parts & Accessories', href: '#spare-parts', icon: <Wrench className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Vehicle Rentals', href: '#rentals', icon: <Key className="w-4 h-4 text-[#FF0000]" /> },
      ],
    },
    'properties': {
      title: 'Properties & Real Estate',
      items: [
        { name: 'Houses for Sale', href: '#houses-sale', icon: <Building className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Houses & Apartments for Rent', href: '#houses-rent', icon: <Building className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Lands & Plots', href: '#lands', icon: <Building className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Commercial Property', href: '#commercial', icon: <Store className="w-4 h-4 text-[#FF0000]" /> },
        { name: 'Holiday & Short Lets', href: '#short-lets', icon: <Key className="w-4 h-4 text-[#FF0000]" /> },
      ],
    },
  };

  const navCategories = [
    { id: 'all-categories', label: 'All Categories' },
    { id: 'super-mall', label: 'Super Mall' },
    { id: 'second-hand', label: 'Second Hand' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'properties', label: 'Properties' },
  ];

  const secondaryLinks = [
    { label: "Today's Deals", href: '#todays-deals' },
    { label: 'Top Brands', href: '#top-brands' },
    { label: 'New Arrivals', href: '#new-arrivals' },
  ];

  return (
    <nav
      ref={navRef}
      className={`relative bg-white border-b border-[#F0F0F0] hidden md:block z-40 select-none ${className}`}
    >
      <div className="mo-container flex items-center justify-between text-[13px] h-10">
        {/* Left Category Dropdown Triggers */}
        <div className="flex items-center gap-7 lg:gap-8">
          {navCategories.map((cat) => {
            const isOpen = activeDropdown === cat.id;
            return (
              <div
                key={cat.id}
                className="relative py-2"
                
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                  className={`flex items-center gap-1.5 font-medium transition-colors cursor-pointer ${
                    isOpen ? 'text-[#FF0000]' : 'text-[#1E1E1E] hover:text-[#FF0000]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 stroke-[2] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#FF0000]' : 'text-[#666666]'
                    }`}
                  />
                </button>

                {/* Dropdown Menu Box */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-full mt-0 w-80 sm:w-[350px] bg-white rounded-2xl shadow-xl border border-[#EDEDED] py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="px-4 py-2 border-b border-[#F5F5F5] mb-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8E8E93]">
                        {menuData[cat.id]?.title}
                      </span>
                    </div>

                    <div className="max-h-[380px] overflow-y-auto no-scrollbar py-1">
                      {menuData[cat.id]?.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-between gap-3 px-3.5 py-2.5 text-[13px] text-[#1E1E1E] hover:bg-[#FFF5F5] hover:text-[#FF0000] transition-colors rounded-lg mx-1.5 group"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="shrink-0">{item.icon}</span>
                            <span className="font-medium truncate">{item.name}</span>
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFE8E8] text-[#FF0000] shrink-0 whitespace-nowrap text-center leading-tight">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
