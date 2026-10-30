import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const LifestyleBanners: React.FC = () => {
  return (
    <div className="mo-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Big Banner: Smart Tech Better Life */}
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 bg-[#000000] border border-[#1E1E1E] text-white group shadow-xs">
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=80"
            alt="Smart Tech Better Life"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Top text */}
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white">
              Smart Tech Better Life
            </h3>
            <p className="text-xs sm:text-sm text-[#DADADA] mt-1 font-normal">
              Discover smart watches and wearables
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="relative z-10 pt-16">
            <Link
              href="#smart-tech"
              className="inline-flex items-center px-4 py-2 rounded-full bg-white text-[#000000] hover:bg-[#F0F0F0] text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Stacked 2 Banners */}
        <div className="flex flex-col gap-4">
          {/* Top Stacked Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[190px] flex flex-col justify-end p-5 sm:p-6 bg-[#000000] border border-[#1E1E1E] text-white group shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80"
              alt="Turn up the sound"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 flex items-end justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Turn up the sound
                </h4>
                <p className="text-xs text-[#DADADA] mt-0.5 font-normal">Enjoy Hi-Fi</p>
              </div>

              <Link
                href="#audio"
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F0F0F0] text-[#000000] text-xs font-bold transition-colors shrink-0"
              >
                Explore Audio
              </Link>
            </div>
          </div>

          {/* Bottom Stacked Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[160px] sm:min-h-[190px] flex flex-col justify-end p-5 sm:p-6 bg-[#000000] border border-[#1E1E1E] text-white group shadow-xs">
            <Image
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80"
              alt="Your style your statement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-500 opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="relative z-10 flex items-end justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Your style your statement
                </h4>
                <p className="text-xs text-[#DADADA] mt-0.5 font-normal">Trending women fashion</p>
              </div>

              <Link
                href="#fashion"
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F0F0F0] text-[#000000] text-xs font-bold transition-colors shrink-0"
              >
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
