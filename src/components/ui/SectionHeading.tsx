import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  viewAllLink?: string;
  viewAllText?: string;
  children?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  viewAllLink,
  viewAllText = 'View All',
  children,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between gap-4 mb-4 ${className}`}>
      <div className="flex items-baseline gap-3">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#000000]">
          {title}
        </h2>
        {subtitle && (
          <span className="text-xs md:text-sm text-[#737373] font-normal">
            {subtitle}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {children}
        {viewAllLink && (
          <Link
            href={viewAllLink}
            className="group inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-[#FF0000] hover:text-[#E00000] transition-colors"
          >
            {viewAllText}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </div>
  );
};
