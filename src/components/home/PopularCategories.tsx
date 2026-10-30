import React from 'react';
import { POPULAR_CATEGORIES } from '@/data/categories';
import { CategoryCard } from '@/components/ui/CategoryCard';

export const PopularCategories: React.FC = () => {
  return (
    <div className="mo-container">
      <div className="bg-white p-4 md:p-6 rounded-[20px] border border-[#EBEBEB] shadow-2xs">
        <h3 className="text-sm md:text-[15px] font-bold text-[#000000] mb-4 tracking-tight">
          Popular categories for you
        </h3>

        {/* 15 category items: 15 columns on lg/xl, responsive wrap on smaller screens */}
        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-[repeat(15,minmax(0,1fr))] gap-2.5 sm:gap-3">
          {POPULAR_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
};
