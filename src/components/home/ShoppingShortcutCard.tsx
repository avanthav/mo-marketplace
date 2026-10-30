import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ShortcutCard } from '@/types';

interface ShoppingShortcutCardProps {
  card: ShortcutCard;
}

export const ShoppingShortcutCard: React.FC<ShoppingShortcutCardProps> = ({ card }) => {
  return (
    <Link
      href={card.href}
      className={`group relative flex items-center justify-between p-3.5 md:p-4 rounded-[14px] ${card.bgColor || 'bg-white'} border border-[#EBEBEB] hover:border-[#FF0000]/40 transition-all duration-200 hover:shadow-xs overflow-hidden`}
    >
      {/* Left side: Thumbnail Image */}
      <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="80px"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Middle info */}
      <div className="flex-1 px-3 min-w-0">
        <h3 className="text-[15px] md:text-[16px] font-bold text-[#000000] group-hover:text-[#FF0000] transition-colors leading-snug truncate">
          {card.title}
        </h3>
        <p className="text-[12px] text-[#737373] line-clamp-2 mt-0.5 font-normal leading-tight">
          {card.description}
        </p>
      </div>

      {/* Right Circular Arrow Button */}
      <div className="w-7 h-7 rounded-full bg-white border border-[#E0E0E0] flex items-center justify-center text-[#4A4A4A] group-hover:text-[#FF0000] group-hover:border-[#FF0000] transition-all shrink-0 shadow-2xs">
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
};
