import React from 'react';
import { formatPrice } from '@/lib/utils';

interface PriceProps {
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Price: React.FC<PriceProps> = ({
  price,
  originalPrice,
  discountPercentage,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: {
      current: 'text-xs font-bold text-[#FF0000]',
      original: 'text-[11px] text-[#737373] line-through font-normal',
    },
    md: {
      current: 'text-sm font-bold text-[#FF0000]',
      original: 'text-xs text-[#737373] line-through font-normal',
    },
    lg: {
      current: 'text-lg font-bold text-[#FF0000]',
      original: 'text-sm text-[#737373] line-through font-normal',
    },
  };

  return (
    <div className={`flex items-baseline gap-1.5 flex-wrap ${className}`}>
      <span className={sizeClasses[size].current}>{formatPrice(price)}</span>
      {originalPrice && originalPrice > price && (
        <span className={sizeClasses[size].original}>{formatPrice(originalPrice)}</span>
      )}
      {discountPercentage && (
        <span className="text-[10px] font-bold text-[#FF0000] bg-[#FFF0F0] px-1 py-0.5 rounded">
          -{discountPercentage}%
        </span>
      )}
    </div>
  );
};
