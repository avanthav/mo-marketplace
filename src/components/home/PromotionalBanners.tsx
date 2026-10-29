import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROMO_BANNER_ROW } from '@/data/categories';

export const PromotionalBanners: React.FC = () => {
  return (
    <div className="mo-container py-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROMO_BANNER_ROW.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-2xl bg-[#000000] border border-[#1E1E1E] text-white p-5 md:p-6 min-h-[160px] flex items-center justify-between overflow-hidden shadow-2xs group"
          >
            {/* Info */}
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-base sm:text-lg font-bold leading-snug text-white">
                {banner.title}
              </h3>
              <p className="text-xs text-[#DADADA] mt-1 mb-3 line-clamp-1 font-normal">
                {banner.subtitle}
              </p>
              <Link
                href={banner.ctaLink}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF0000] hover:bg-[#E00000] text-white text-xs font-bold shadow-2xs transition-all active:scale-95"
              >
                <span>{banner.ctaText}</span>
                <span>→</span>
              </Link>
            </div>

            {/* Thumbnail */}
            <div className="relative z-10 w-[38%] h-[100px] sm:h-[120px]">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                sizes="(max-width: 768px) 35vw, 15vw"
                className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
