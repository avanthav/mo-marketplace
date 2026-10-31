import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const BANNERS = [
  {
    id: 'tech-gadgets',
    title: 'Latest Tech & Gadgets',
    subtitle: 'Top brands, best prices',
    ctaText: 'Shop Now',
    ctaLink: '#tech',
    image: '/images/futuristic_blue_tech.png',
    textColor: 'text-white',
    subtitleColor: 'text-[#DADADA]',
  },
  {
    id: 'upgrade-home',
    title: 'Upgrade Your Home',
    subtitle: 'Smart appliances for a better living',
    ctaText: 'Shop Now',
    ctaLink: '#home',
    image: '/images/modern_appliance_banner.png',
    textColor: 'text-[#0F1B2A]',
    subtitleColor: 'text-[#4A4A4A]',
  },
  {
    id: 'next-ride',
    title: 'Find Your Next Ride',
    subtitle: 'Cars, bikes & more',
    ctaText: 'Explore Vehicles',
    ctaLink: '#vehicles',
    image: '/images/honda_suv_banner.png',
    textColor: 'text-white',
    subtitleColor: 'text-[#DADADA]',
  },
];

export const PromotionalBanners: React.FC = () => {
  return (
    <div className="mo-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
        {BANNERS.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-[16px] overflow-hidden w-full h-[155px] sm:h-[165px] md:h-[155px] lg:h-[175px] shadow-xs group"
          >
            {/* Clean Background Image without baked-in text */}
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-right md:object-center"
              priority
            />

            {/* Left Manual Text & Button Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 sm:p-5 select-none">
              <div className="max-w-[62%]">
                <h3
                  className={`text-[17px] sm:text-[18px] lg:text-[20px] font-bold leading-tight tracking-tight ${banner.textColor}`}
                >
                  {banner.title}
                </h3>
                <p
                  className={`text-[11px] sm:text-[12px] font-medium mt-1 line-clamp-1 ${banner.subtitleColor}`}
                >
                  {banner.subtitle}
                </p>
              </div>

              {/* Red Pill Button */}
              <div>
                <Link
                  href={banner.ctaLink}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF0000] hover:bg-[#E00000] text-white text-[11px] sm:text-[12px] font-bold shadow-sm hover:shadow transition-all active:scale-95 group/btn"
                >
                  <span>{banner.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
