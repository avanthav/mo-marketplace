import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/ui/ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 6,
  className = '',
}) => {
  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-3 md:gap-4 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
