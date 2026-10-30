import React from 'react';
import { Product } from '@/types';
import { ProductGrid } from './ProductGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  products: Product[];
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  viewAllLink,
  products,
  columns = 6,
  className = '',
}) => {
  return (
    <section className={`mo-container ${className}`}>
      <SectionHeading
        title={title}
        subtitle={subtitle}
        viewAllLink={viewAllLink}
      />
      <ProductGrid products={products} columns={columns} />
    </section>
  );
};

