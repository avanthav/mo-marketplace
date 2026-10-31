import React from 'react';
import { POPULAR_CATEGORIES } from '@/data/categories';
import { CategoryCard } from '@/components/ui/CategoryCard';

export const PopularCategories: React.FC = () => {
  return (
    <div className="mo-container">
      <div
        className="bg-white p-3.5 sm:p-5 md:p-6 rounded-[20px]"
        style={{
          boxShadow: '1px 1px 4.7px rgba(0, 0, 0, 0.06)',
        }}
      >
        <h3 className="text-base sm:text-[17px] md:text-[18px] font-bold text-[#000000] mb-3.5 tracking-tight">
          Popular categories for you
        </h3>

        {/* 15 category items: exactly 5 columns on mobile for 3 neat rows of 5, scaling to 15 columns on desktop */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-[repeat(15,minmax(0,1fr))] gap-x-1.5 sm:gap-x-2.5 gap-y-3 sm:gap-y-3.5">
          {POPULAR_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};
