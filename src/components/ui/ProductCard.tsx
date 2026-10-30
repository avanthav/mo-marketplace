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
          className="absolute top-2 right-2 z-10 w-6 h-6 rounded-full bg-transparent hover:bg-white/80 text-[#737373] hover:text-[#FF0000] flex items-center justify-center transition-all active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#FF0000] text-[#FF0000]' : 'stroke-[#000000] stroke-[1.5]'
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
      <div className="flex flex-col flex-1 p-2.5">
        {/* Title */}
        <Link
          href={`#product-${product.id}`}
          className="text-xs font-medium text-[#000000] line-clamp-1 hover:text-[#FF0000] transition-colors mb-1"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* Price Area */}
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-xs md:text-sm font-bold text-[#FF0000]">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-[10px] md:text-xs text-[#9E9E9E] line-through font-normal">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
