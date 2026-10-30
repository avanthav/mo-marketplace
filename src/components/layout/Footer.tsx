import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C1B2A] text-white flex flex-col justify-between mt-16 min-h-[524px]">
      {/* Main Footer Container */}
      <div className="mo-container flex-1 pt-12 md:pt-16 pb-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Bio & Socials (Width: ~3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo_mo.svg"
                alt="MO Logo"
                width={84}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-white text-[16px] font-semibold leading-relaxed max-w-[240px]">
              Sri Lanka&apos;s trusted online marketplace for everything you need.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0C1B2A] hover:bg-[#FF0000] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0C1B2A] hover:bg-[#FF0000] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0C1B2A] hover:bg-[#FF0000] hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div className="md:col-span-2 flex flex-col gap-[40px]">
            <h4 className="text-[20px] font-bold text-white tracking-normal leading-none">Shop</h4>
            <ul className="flex flex-col gap-[14px] text-[16px] font-semibold text-white/90">
              <li><Link href="#all-categories" className="hover:text-white transition-colors">All Categories</Link></li>
              <li><Link href="#super-mall" className="hover:text-white transition-colors">Super Mall</Link></li>
              <li><Link href="#second-hand" className="hover:text-white transition-colors">Second Hand</Link></li>
              <li><Link href="#vehicles" className="hover:text-white transition-colors">Vehicles</Link></li>
              <li><Link href="#properties" className="hover:text-white transition-colors">Properties</Link></li>
              <li><Link href="#todays-deals" className="hover:text-white transition-colors">Today&apos;s Deals</Link></li>
              <li><Link href="#top-brands" className="hover:text-white transition-colors">Top Brands</Link></li>
              <li><Link href="#new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="md:col-span-2 flex flex-col gap-[40px]">
            <h4 className="text-[20px] font-bold text-white tracking-normal leading-none">Customer Care</h4>
            <ul className="flex flex-col gap-[14px] text-[16px] font-semibold text-white/90">
              <li><Link href="#help-center" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#track-order" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="#returns-refunds" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link href="#shipping" className="hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Sell on MO */}
          <div className="md:col-span-2 flex flex-col gap-[40px]">
            <h4 className="text-[20px] font-bold text-white tracking-normal leading-none">Sell on MO</h4>
            <ul className="flex flex-col gap-[14px] text-[16px] font-semibold text-white/90">
              <li><Link href="#seller-account" className="hover:text-white transition-colors">Create a Seller Account</Link></li>
              <li><Link href="#seller-guide" className="hover:text-white transition-colors">Seller Guide</Link></li>
              <li><Link href="#list-product" className="hover:text-white transition-colors">List a Product</Link></li>
            </ul>
          </div>

          {/* Col 5: About MO & Download App */}
          <div className="md:col-span-3 flex flex-col gap-[40px]">
            <h4 className="text-[20px] font-bold text-white tracking-normal leading-none">About MO</h4>
            <ul className="flex flex-col gap-[14px] text-[16px] font-semibold text-white/90">
              <li><Link href="#about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#cookie" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>

            {/* Download Our App section */}
            <div className="pt-2">
              <span className="block text-[20px] font-bold text-white mb-3">
                Download Our App
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                {/* Google Play Button */}
                <a
                  href="#google-play"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-white/20 hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-1.436V3.25c0-.546.22-1.043.609-1.436zM15.207 13.414l2.58 2.58-11.498 6.54 8.918-9.12zm0-2.828L6.289 1.466 17.787 8.006l-2.58 2.58zm1.414 1.414l3.774 2.146a1.5 1.5 0 0 0 0-2.604l-3.774-2.146v2.604z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] uppercase tracking-wider block text-white/70">GET IT ON</span>
                    <span className="text-[12px] font-bold text-white">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#app-store"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black border border-white/20 hover:border-white transition-colors"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.7-0.9 2.73 1 .08 2.02-.51 2.58-1.22z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="text-[8px] uppercase tracking-wider block text-white/70">Download on the</span>
                    <span className="text-[12px] font-bold text-white">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Line Bar (Height: 38px, font: 14px semi-bold) */}
      <div className="w-full bg-[#000000] h-[38px] flex items-center justify-center border-t border-black/40">
        <p className="text-white text-[14px] font-semibold text-center select-none">
          © 2026 MO Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
