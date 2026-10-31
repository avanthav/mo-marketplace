import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0C1B2A] text-white flex flex-col justify-between mt-12 md:mt-16">
      {/* Main Footer Container */}
      <div className="mo-container flex-1 pt-12 md:pt-14 pb-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand & Bio & Socials (Width: ~3 cols) */}
          <div className="md:col-span-3 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center shrink-0 transition-transform hover:scale-105 duration-200">
              <Image
                src="/images/logo_mo.svg"
                alt="MO Logo"
                width={72}
                height={34}
                className="h-6 sm:h-7 md:h-[30px] w-auto object-contain"
              />
            </Link>

            <p className="text-white/80 text-[14px] font-normal leading-relaxed max-w-[240px] mt-4 mb-8">
              Sri Lanka&apos;s trusted online marketplace for everything you need.
            </p>

            {/* Social Icons - Icon only, no circle container */}
            <div className="flex items-center gap-5">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="text-white hover:text-[#FF0000] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="text-white hover:text-[#FF0000] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="text-white hover:text-[#FF0000] transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[16px] font-bold text-white tracking-wide leading-none">Shop</h4>
            <ul className="flex flex-col gap-2.5 text-[14px] font-normal text-white/75">
              <li><Link href="#all-categories" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">All Categories</Link></li>
              <li><Link href="#super-mall" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Super Mall</Link></li>
              <li><Link href="#second-hand" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Second Hand</Link></li>
              <li><Link href="#vehicles" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Vehicles</Link></li>
              <li><Link href="#properties" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Properties</Link></li>
              <li><Link href="#todays-deals" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Today&apos;s Deals</Link></li>
              <li><Link href="#top-brands" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Top Brands</Link></li>
              <li><Link href="#new-arrivals" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[16px] font-bold text-white tracking-wide leading-none">Customer Care</h4>
            <ul className="flex flex-col gap-2.5 text-[14px] font-normal text-white/75">
              <li><Link href="#help-center" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Help Center</Link></li>
              <li><Link href="#track-order" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Track Order</Link></li>
              <li><Link href="#returns-refunds" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Returns & Refunds</Link></li>
              <li><Link href="#shipping" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Shipping Information</Link></li>
              <li><Link href="#contact" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Sell on MO */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <h4 className="text-[16px] font-bold text-white tracking-wide leading-none">Sell on MO</h4>
            <ul className="flex flex-col gap-2.5 text-[14px] font-normal text-white/75">
              <li><Link href="#seller-account" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Create a Seller Account</Link></li>
              <li><Link href="#seller-guide" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Seller Guide</Link></li>
              <li><Link href="#list-product" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">List a Product</Link></li>
            </ul>
          </div>

          {/* Col 5: About MO & Download App */}
          <div className="md:col-span-3 flex flex-col gap-3.5">
            <h4 className="text-[16px] font-bold text-white tracking-wide leading-none">About MO</h4>
            <ul className="flex flex-col gap-2.5 text-[14px] font-normal text-white/75">
              <li><Link href="#about-us" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">About Us</Link></li>
              <li><Link href="#careers" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Careers</Link></li>
              <li><Link href="#terms" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Terms & Conditions</Link></li>
              <li><Link href="#privacy" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link href="#cookie" className="hover:text-white hover:translate-x-0.5 inline-block transition-all">Cookie Policy</Link></li>
            </ul>

            {/* Download Our App section */}
            <div className="pt-3">
              <span className="block text-[15px] font-bold text-white mb-2.5">
                Download Our App
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Google Play Badge */}
                <a
                  href="#google-play"
                  aria-label="Get it on Google Play"
                  className="inline-block transition-transform hover:scale-105 active:scale-95 duration-200"
                >
                  <Image
                    src="/images/google_play_badge.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto object-contain rounded-md"
                  />
                </a>

                {/* App Store Badge */}
                <a
                  href="#app-store"
                  aria-label="Download on the App Store"
                  className="inline-block transition-transform hover:scale-105 active:scale-95 duration-200"
                >
                  <Image
                    src="/images/app_store_badge.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                    className="h-10 w-auto object-contain rounded-md"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="w-full bg-[#000000] h-[42px] flex items-center justify-center border-t border-white/5">
        <p className="text-white/70 text-[13px] font-normal text-center tracking-normal select-none">
          © 2026 MO Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
