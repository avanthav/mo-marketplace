import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LifestyleBanners: React.FC = () => {
  return (
    <div className="mo-container">
      {/* 
        Container Grid:
        Desktop Height exactly 595px (or 592px)
        Left card takes full 595px height
        Right column has two stacked cards that together fill 595px with a 14px gap (each ~290px)
        Rounded corners: 12px (matching Figma r: 12)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] lg:h-[595px]">
        {/* Left Big Banner: Smart Tech Better Life (Watch) - exact height 595px */}
        <div className="relative rounded-[12px] overflow-hidden w-full h-[360px] sm:h-[440px] lg:h-full flex flex-col justify-between p-6 sm:p-8 bg-[#000000] text-white group shadow-xs">
          <Image
            src="/images/paul-cuoco-CO2vOhPqlrM-unsplash.jpg"
            alt="Smart Tech Better Life"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50" />

          {/* Top text */}
          <div className="relative z-10">
            <h4 className="text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-white leading-tight">
              Smart Tech Better Life
            </h4>
            <p className="text-sm sm:text-base text-[#E0E0E0] mt-1.5 font-normal">
              Discover smart watches and wearables
            </p>
          </div>

          {/* Bottom Right CTA */}
          <div className="relative z-10 flex justify-end">
            <Link
              href="#smart-tech"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-[#000000] hover:bg-[#F0F0F0] text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Stacked 2 Banners: Turn up the sound & Your style your statement */}
        <div className="flex flex-col gap-[14px] lg:h-full">
          {/* Top Stacked Card: Turn up the sound */}
          <div className="relative rounded-[12px] overflow-hidden w-full flex-1 min-h-[220px] lg:min-h-0 flex flex-col justify-end p-6 sm:p-7 bg-[#000000] text-white group shadow-xs">
            <Image
              src="/images/priscilla-du-preez-nF8xhLMmg0c-unsplash.jpg"
              alt="Turn up the sound"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Bottom text right-aligned to match Figma */}
            <div className="relative z-10 flex flex-col items-end text-right">
              <h4 className="text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-white leading-tight">
                Turn up the sound
              </h4>
              <p className="text-sm sm:text-base text-[#E0E0E0] mt-1.5 font-normal">
                Enjoy Today
              </p>
            </div>
          </div>

          {/* Bottom Stacked Card: Your style your statement */}
          <div className="relative rounded-[12px] overflow-hidden w-full flex-1 min-h-[220px] lg:min-h-0 flex flex-col justify-between p-6 sm:p-7 bg-[#000000] text-white group shadow-xs">
            <Image
              src="/images/lance-reis-RQO2DmrRJFg-unsplash.jpg"
              alt="Your style your statement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

            {/* Top Right Discover more button */}
            <div className="relative z-10 flex justify-end">
              <Link
                href="#style"
                className="inline-flex items-center px-5 py-2 rounded-full bg-white text-[#000000] hover:bg-[#F0F0F0] text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
              >
                Discover more
              </Link>
            </div>

            {/* Bottom Left text */}
            <div className="relative z-10 text-left">
              <h4 className="text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-white leading-tight">
                Your style your statement
              </h4>
              <p className="text-sm sm:text-base text-[#E0E0E0] mt-1.5 font-normal">
                Trending women fashion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
