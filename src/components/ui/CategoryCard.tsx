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
      className={`group flex flex-col items-center justify-start transition-all duration-200 w-full ${className}`}
    >
      {/* Category Icon Box: rounded 10px, subtle border, smooth hover */}
      <div className="relative w-full aspect-square rounded-[10px] bg-white border border-[#DADADA]/70 flex items-center justify-center overflow-hidden mb-1 sm:mb-1.5 transition-all duration-200 group-hover:border-[#FF0000]/60 group-hover:scale-105">
        {category.image ? (
          <div className="relative w-full h-full p-1.5 sm:p-2">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 18vw, 80px"
              className="object-contain object-center"
            />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#FFF0F0] text-[#FF0000] flex items-center justify-center font-bold text-xs">
            {category.name.substring(0, 2)}
          </div>
        )}
      </div>
      {/* Label: wrapped 2 lines max with fixed height and smaller font on 390px mobile so rows stay perfectly aligned */}
      <span className="text-[10px] sm:text-[11px] md:text-[12px] font-medium text-[#000000] text-center line-clamp-2 group-hover:text-[#FF0000] transition-colors leading-[1.2] h-[26px] sm:h-[28px] flex items-start justify-center px-0.5 break-words">
        {category.name}
      </span>
    </Link>
  );
};
