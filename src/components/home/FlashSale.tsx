'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FLASH_SALE_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import Link from 'next/link';

export const FlashSale: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mo-container py-4">
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#DADADA] shadow-2xs">
        {/* Header row */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#DADADA]">
          <div className="flex items-center gap-3 md:gap-5 flex-wrap">
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#FF0000] uppercase">
              Flash Sale
            </h2>
            <CountdownTimer initialHours={3} initialMinutes={12} initialSeconds={42} />
          </div>

          <Link
            href="#flash-sale"
            className="group inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#FF0000] hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Carousel / Product items */}
        <div className="relative pt-4 group/carousel">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous products"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-[#DADADA] text-[#000000] flex items-center justify-center hover:bg-[#F0F0F0] transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next products"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-8 h-8 rounded-full bg-white shadow-md border border-[#DADADA] text-[#000000] flex items-center justify-center hover:bg-[#F0F0F0] transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3.5 overflow-x-auto no-scrollbar scroll-smooth pb-1"
          >
            {FLASH_SALE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="w-[160px] sm:w-[180px] md:w-[200px] shrink-0"
              >
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
