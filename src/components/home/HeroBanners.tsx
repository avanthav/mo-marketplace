import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';

export const HeroBanners: React.FC = () => {
  return (
    <div className="mo-container">
      {/* 
        Width Ratio: Balanced with reduced left card and increased right card width (e.g. 58fr : 42fr)
        Maintains an exact 14px gap (gap-[14px])
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] gap-[14px] items-stretch">
        
        {/* Banner 1 (Left): Reduced width with text, badge & Claim button on top of image */}
        <div className="relative overflow-hidden rounded-[12px] shadow-xs group w-full h-[240px] sm:h-[280px] lg:h-[325px] bg-[#990000]">
          {/* Background Image: Excited Tech Gadgets on Red */}
          <Image
            src="/images/excited_tech_gadgets_on_red.png"
            alt="Get Special Offer - Up to 40% Off"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            loading="lazy"
            decoding="async"
            className="object-cover object-center transition-opacity duration-300"
          />

          {/* Left Text & Interactive Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none pointer-events-none">
            {/* Top row: Limited Time badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#000000] text-[11px] sm:text-[12px] font-semibold shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>Limited Time!</span>
              </div>
            </div>

            {/* Middle: Headings */}
            <div className="max-w-[55%]">
              <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold tracking-tight text-white leading-tight">
                Get Special Offer
              </h2>

              <div className="my-1 sm:my-1.5 flex items-baseline gap-1.5">
                <span className="text-sm sm:text-base font-semibold text-white/95">Up to</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  40% Off
                </span>
              </div>

              <p className="text-[11px] sm:text-[12px] text-white/90 font-medium truncate">
                Mobiles | Laptops | Accessories
              </p>
            </div>

            {/* Bottom: Claim button */}
            <div className="flex items-center justify-between pointer-events-auto">
              <Link
                href="#special-offer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full bg-[#FF0000] hover:bg-[#E00000] text-white text-[12px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group/btn"
              >
                <span>Claim</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>

              {/* Slider Dots Indicator */}
              <div className="flex items-center gap-1.5">
                <span className="w-4 sm:w-5 h-1.5 rounded-full bg-white transition-all" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors" />
              </div>
            </div>
          </div>

          {/* Nav Chevrons */}
          <button
            type="button"
            aria-label="Previous banner"
            className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next banner"
            className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/25 hover:bg-black/50 text-white items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Banner 2 (Right): Increased width with text, badge & Claim button on top of Cheerful Shopping Haul Banner */}
        <div className="relative overflow-hidden rounded-[12px] shadow-xs group w-full h-[240px] sm:h-[280px] lg:h-[325px] bg-[#EFEFEF]">
          {/* Background Image: Cheerful Shopping Haul Banner */}
          <Image
            src="/images/cheerful_shopping_haul_banner.png"
            alt="Top Brands - Up to 50% Off"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            loading="lazy"
            decoding="async"
            className="object-cover object-center transition-opacity duration-300"
          />

          {/* Text & Interactive Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none pointer-events-none">
            {/* Top row: Limited Time badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#000000] text-[11px] sm:text-[12px] font-semibold shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>Limited Time!</span>
              </div>
            </div>

            {/* Middle: Headings */}
            <div className="max-w-[60%]">
              <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#0F1B2A] leading-tight">
                Top Brands
              </h2>

              <div className="my-1 sm:my-1.5 flex items-baseline gap-1.5">
                <span className="text-sm sm:text-base font-semibold text-[#0F1B2A]">Up to</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FF0000] tracking-tight">
                  50% Off
                </span>
              </div>

              <p className="text-[11px] sm:text-[12px] text-[#4A4A4A] font-medium leading-tight">
                Fashion | Shoes | Bags<br />| Accessories
              </p>
            </div>

            {/* Bottom: Claim button */}
            <div className="flex items-center justify-end pointer-events-auto pr-1 sm:pr-2">
              <Link
                href="#top-brands"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full bg-[#FF0000] hover:bg-[#E00000] text-white text-[12px] sm:text-[14px] font-bold shadow-md hover:shadow-lg transition-all active:scale-95 group/btn"
              >
                <span>Claim</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
