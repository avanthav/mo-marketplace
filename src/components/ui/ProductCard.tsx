'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  priority = false,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const discountVal =
    product.discountPercentage ||
    (product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : undefined);

  return (
    <div
      className="group relative flex flex-col h-full bg-white rounded-[16px] transition-all duration-200 overflow-hidden"
      style={{
        boxShadow: '1px 1px 4.7px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* 
        Divided Product Image Area:
        Clean separate image container rounded on all corners like Figma 
      */}
      <div className="p-2.5 pb-0">
        <div className="relative aspect-square w-full rounded-[12px] bg-[#F7F7F7] overflow-hidden">
          {/* Discount Badge */}
          {discountVal && (
            <div className="absolute top-2 left-2 z-10 bg-[#FF0000] text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-[4px] shadow-xs">
              {discountVal}% OFF
            </div>
          )}

          {/* Wishlist Button */}
          <button
            onClick={toggleWishlist}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white text-[#4A4A4A] hover:text-[#FF0000] flex items-center justify-center transition-all active:scale-90 shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                isWishlisted ? 'fill-[#FF0000] text-[#FF0000]' : 'stroke-[#000000] stroke-[1.6]'
              }`}
            />
          </button>

          {/* Product Image */}
          <Link href={`#product-${product.id}`} className="block w-full h-full">
            {imageError ? (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#F7F7F7] text-[#737373] p-2 text-center text-xs">
                <span className="font-semibold text-[#000000] mb-1">{product.category}</span>
                <span className="line-clamp-2">{product.name}</span>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  priority={priority}
                  onError={() => setImageError(true)}
                />
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* Divided Content Area: Cleanly spaced below the image */}
      <div className="flex flex-col justify-between flex-1 p-3 pt-2.5">
        <div>
          {/* Title */}
          <Link
            href={`#product-${product.id}`}
            className="text-[14px] sm:text-[15px] font-semibold text-[#000000] line-clamp-1 hover:text-[#FF0000] transition-colors mb-1"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 whitespace-nowrap overflow-hidden">
            <span className="text-[14px] sm:text-[16px] font-bold text-[#000000]">
              Rs {product.price.toLocaleString()}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[11px] sm:text-[12px] text-[#9E9E9E] line-through font-normal">
                Rs {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Location row with pin icon matching the Figma UI */}
        <div className="flex items-center gap-1 text-[11px] text-[#737373] mt-2 pt-1 border-t border-[#F0F0F0]/70">
          <MapPin className="w-3 h-3 text-[#737373] stroke-[1.6]" />
          <span>{product.location || 'Colombo'}</span>
        </div>
      </div>
    </div>
  );
};
