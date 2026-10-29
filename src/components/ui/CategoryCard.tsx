import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CategoryItem } from '@/types';

interface CategoryCardProps {
  category: CategoryItem;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  className = '',
}) => {
  return (
    <Link
      href={category.href || `#category-${category.id}`}
      className={`group flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-2xs ${className}`}
    >
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-[#DADADA] flex items-center justify-center overflow-hidden mb-2 group-hover:border-[#FF0000] transition-colors shadow-2xs">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="64px"
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-200"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#FFF0F0] text-[#FF0000] flex items-center justify-center font-bold text-xs">
            {category.name.substring(0, 2)}
          </div>
        )}
      </div>
      <span className="text-[11px] md:text-xs font-medium text-[#000000] text-center line-clamp-1 group-hover:text-[#FF0000] transition-colors">
        {category.name}
      </span>
    </Link>
  );
};
