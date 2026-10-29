import React from 'react';
import { POPULAR_CATEGORIES } from '@/data/categories';
import { CategoryCard } from '@/components/ui/CategoryCard';

export const PopularCategories: React.FC = () => {
  return (
    <div className="mo-container py-3">
      <div className="bg-white p-4 md:p-6 rounded-2xl border border-[#DADADA] shadow-2xs">
        <h3 className="text-xs md:text-sm font-bold text-[#4A4A4A] mb-4 tracking-tight uppercase">
          Popular categories for you
        </h3>

        {/* Responsive grid / scrollable strip of 15 categories */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-15 gap-2 overflow-x-auto no-scrollbar">
          {POPULAR_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};
