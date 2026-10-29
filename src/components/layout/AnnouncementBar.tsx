import React from 'react';
import Link from 'next/link';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#FF0000] text-white text-[12px] py-1.5 px-4 font-normal">
      <div className="mo-container flex items-center justify-between">
        {/* Left: Delivery Message with Delivery Truck */}
        <div className="flex items-center gap-2">
          {/* Custom Delivery Van SVG matching screenshot */}
          <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
            <path d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5m1.5-9 1.96 2.5H17V9.5h2.5M6 18.5A1.5 1.5 0 0 1 4.5 17 1.5 1.5 0 0 1 6 15.5 1.5 1.5 0 0 1 7.5 17 1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
          </svg>
          <span className="font-medium tracking-tight truncate">
            Free delivery for orders over Rs. 5,000
          </span>
        </div>

        {/* Right utility links */}
        <div className="hidden sm:flex items-center gap-6 text-[11px] font-medium opacity-95">
          <Link href="#help" className="hover:underline transition-all">
            Help Center
          </Link>
          <Link href="#sell" className="hover:underline transition-all">
            Sell on MO
          </Link>
          <Link href="#track" className="hover:underline transition-all">
            Track Order
          </Link>
          <Link href="#download" className="hover:underline transition-all">
            Download App
          </Link>
        </div>
      </div>
    </div>
  );
};
