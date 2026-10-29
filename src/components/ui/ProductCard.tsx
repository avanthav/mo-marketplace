'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, MapPin } from 'lucide-react';
import { Product } from '@/types';
import { Price } from './Price';

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
    <div className="group relative flex flex-col bg-white rounded-[10px] border border-[#DADADA] hover:border-[#FF0000]/40 hover:shadow-sm transition-all duration-200 overflow-hidden">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-[#F0F0F0] overflow-hidden">
        {/* Discount Badge with Exact Brand Red */}
        {discountVal && (
          <div className="absolute top-2 left-2 z-10 bg-[#FF0000] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-2xs">
            {discountVal}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white/95 hover:bg-white text-[#737373] hover:text-[#FF0000] flex items-center justify-center shadow-2xs transition-transform active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#FF0000] text-[#FF0000]' : ''
            }`}
          />
        </button>

        {/* Product Image */}
        <Link href={`#product-${product.id}`} className="block w-full h-full">
          {imageError ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#F0F0F0] text-[#737373] p-2 text-center text-xs">
              <span className="font-semibold text-[#000000] mb-1">{product.category}</span>
              <span className="line-clamp-2">{product.name}</span>
            </div>
          ) : (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              priority={priority}
              onError={() => setImageError(true)}
            />
          )}
        </Link>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1 p-3">
        {/* Title */}
        <Link
          href={`#product-${product.id}`}
          className="text-xs md:text-sm font-medium text-[#000000] line-clamp-1 hover:text-[#FF0000] transition-colors mb-1.5"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* Price Area */}
        <Price
          price={product.price}
          originalPrice={product.originalPrice}
          size="sm"
        />

        {/* Footer info: Rating or Location */}
        <div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-[#737373]">
          {product.rating ? (
            <div className="flex items-center gap-1 text-[#000000] font-medium">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              {product.reviewCount && (
                <span className="text-[#737373]">({product.reviewCount})</span>
              )}
            </div>
          ) : product.location ? (
            <div className="flex items-center gap-1 text-[#737373] truncate">
              <MapPin className="w-3 h-3 shrink-0" />
              <span className="truncate">{product.location}</span>
            </div>
          ) : (
            <span className="text-[#737373]">{product.category}</span>
          )}
        </div>
      </div>
    </div>
  );
};
