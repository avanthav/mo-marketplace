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
      className="group relative flex items-center justify-between p-3.5 md:p-4 rounded-xl bg-white border border-[#DADADA] hover:border-[#FF0000]/50 transition-all duration-200 hover:shadow-xs overflow-hidden"
    >
      {/* Left side: Image */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="80px"
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Middle info */}
      <div className="flex-1 px-3">
        <h3 className="text-sm md:text-base font-bold text-[#000000] group-hover:text-[#FF0000] transition-colors">
          {card.title}
        </h3>
        <p className="text-[11px] md:text-xs text-[#737373] line-clamp-2 mt-0.5 font-normal">
          {card.description}
        </p>
      </div>

      {/* Right button */}
      <div className="w-7 h-7 rounded-full bg-white border border-[#DADADA] flex items-center justify-center text-[#737373] group-hover:text-[#FF0000] group-hover:border-[#FF0000] transition-all shadow-2xs shrink-0">
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
};
