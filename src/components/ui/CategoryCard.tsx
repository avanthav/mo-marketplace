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
      className={`group flex flex-col items-center justify-center transition-all duration-200 ${className}`}
    >
      <div className="relative w-full aspect-square rounded-[10px] bg-white border border-[#EBEBEB] flex items-center justify-center overflow-hidden mb-2 group-hover:border-[#FF0000]/60 transition-colors">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 20vw, 80px"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#FFF0F0] text-[#FF0000] flex items-center justify-center font-bold text-xs">
            {category.name.substring(0, 2)}
          </div>
        )}
      </div>
      <span className="text-[11px] sm:text-[12px] font-medium text-[#222222] text-center line-clamp-1 group-hover:text-[#FF0000] transition-colors leading-tight">
        {category.name}
      </span>
    </Link>
  );
};
