import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { HERO_BANNERS } from '@/data/banners';

export const HeroBanners: React.FC = () => {
  return (
    <div className="mo-container pt-3 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Banner 1: Left - Pure MO Brand Red */}
        <div className="relative overflow-hidden rounded-2xl bg-[#FF0000] text-white p-6 sm:p-8 min-h-[220px] md:min-h-[260px] flex items-center justify-between shadow-xs group">
          {/* Subtle geometric circles */}
          <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute right-32 -bottom-16 w-52 h-52 rounded-full bg-black/10 blur-xl pointer-events-none" />

          {/* Text content */}
          <div className="relative z-10 max-w-[60%] sm:max-w-[55%]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#FF0000] text-[11px] font-bold shadow-2xs mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Limited Time!</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
              Get Special Offer
            </h2>

            <div className="my-1.5 flex items-baseline gap-1">
              <span className="text-sm font-semibold opacity-90">Up to</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-300">
                40% Off
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-white/90 font-medium mb-4 line-clamp-1">
              Mobiles | Laptops | Accessories
            </p>

            <Link
              href="#special-offer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#000000] hover:bg-[#1E1E1E] text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95"
            >
              <span>Claim</span>
              <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative z-10 w-[42%] h-[180px] sm:h-[220px]">
            <Image
              src={HERO_BANNERS[0].image}
              alt="Special Offer Gadgets"
              fill
              priority
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-contain object-bottom drop-shadow-xl"
            />
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
            <span className="w-2 h-2 rounded-full bg-white/50" />
          </div>

          {/* Nav arrows */}
          <button
            aria-label="Previous banner"
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Next banner"
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Banner 2: Right - Clean Gray 2 Surface with Brand Red Accent */}
        <div className="relative overflow-hidden rounded-2xl bg-[#F0F0F0] border border-[#DADADA] text-[#000000] p-6 sm:p-8 min-h-[220px] md:min-h-[260px] flex items-center justify-between shadow-xs">
          {/* Graphic curved element in background using Brand Red */}
          <div className="absolute -right-16 top-0 w-80 h-80 rounded-full bg-[#FF0000] pointer-events-none" />

          {/* Text content */}
          <div className="relative z-10 max-w-[60%] sm:max-w-[55%]">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-[#FF0000] text-[11px] font-bold shadow-2xs mb-3 border border-[#DADADA]">
              <Clock className="w-3.5 h-3.5" />
              <span>Limited Time!</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight text-[#000000]">
              Top Brands
            </h2>

            <div className="my-1.5 flex items-baseline gap-1">
              <span className="text-sm font-semibold text-[#4A4A4A]">Up to</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FF0000]">
                50% Off
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-[#4A4A4A] font-medium mb-4 line-clamp-1">
              Fashion | Shoes | Bags | Accessories
            </p>

            <Link
              href="#top-brands"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FF0000] hover:bg-[#E00000] text-white text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95"
            >
              <span>Claim</span>
              <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="relative z-10 w-[42%] h-[180px] sm:h-[220px]">
            <Image
              src={HERO_BANNERS[1].image}
              alt="Fashion Top Brands"
              fill
              priority
              sizes="(max-width: 1024px) 45vw, 25vw"
              className="object-contain object-bottom drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
