import React from 'react';
import Link from 'next/link';

export interface AnnouncementBarProps {
  deliveryText?: string;
  minOrderAmount?: string;
  links?: Array<{ label: string; href: string }>;
  showIcon?: boolean;
  className?: string;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  deliveryText = 'Free delivery for orders over Rs. 5,000',
  links = [
    { label: 'Help Center', href: '#help' },
    { label: 'Sell on MO', href: '#sell', isButton: true },
    { label: 'Track Order', href: '#track' },
    { label: 'Download App', href: '#download' },
  ],
  showIcon = true,
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-[#FF0000] text-white h-[42px] flex items-center select-none text-[12px] font-semibold leading-none ${className}`}
    >
      <div className="mo-container flex items-center justify-between w-full h-full">
        {/* Left: Delivery outline icon and text */}
        <div className="flex items-center gap-2.5">
          {showIcon && (
            <svg
              className="w-4 h-4 stroke-white stroke-[1.8] fill-none shrink-0"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 3h15v13H1z" />
              <path d="M16 8h4l3 3v5h-7V8z" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          )}
          <span className="font-semibold text-white text-[12px] tracking-normal truncate">
            {deliveryText}
          </span>
        </div>

        {/* Right: Quick Utility Links + Pill Button */}
        <div className="hidden sm:flex items-center gap-5 lg:gap-6 text-[12px] font-semibold">
          {links.map((link: any) =>
            link.isButton ? (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-[#FF2B44] hover:bg-white hover:text-[#FF0000] text-white font-bold text-[12px] shadow-xs transition-all active:scale-95"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-white hover:text-white/85 transition-opacity"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};
