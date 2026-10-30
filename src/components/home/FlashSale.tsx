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
    <div className="mo-container">
      <div className="bg-white p-4 md:p-6 rounded-[20px] border border-[#EBEBEB] shadow-2xs">
        {/* Header row */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            <h2 className="text-lg md:text-xl font-extrabold tracking-tight text-[#FF0000] uppercase">
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
        <div className="relative pt-2 group/carousel">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous products"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3.5 z-20 w-8 h-8 rounded-full bg-[#EDEDED] hover:bg-[#E0E0E0] text-[#737373] flex items-center justify-center transition-all shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next products"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3.5 z-20 w-8 h-8 rounded-full bg-[#EDEDED] hover:bg-[#E0E0E0] text-[#737373] flex items-center justify-center transition-all shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1"
          >
            {FLASH_SALE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="w-[145px] sm:w-[155px] md:w-[165px] lg:w-[172px] shrink-0"
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
