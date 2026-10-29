import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel: string;
  variant?: 'default' | 'solid' | 'badge';
  size?: 'sm' | 'md' | 'lg';
  badgeCount?: number;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  ariaLabel,
  variant = 'default',
  size = 'md',
  badgeCount,
  className = '',
  ...props
}) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const variantMap = {
    default: 'text-[#000000] hover:text-[#FF0000] hover:bg-[#F0F0F0]',
    solid: 'bg-white text-[#000000] shadow-2xs border border-[#DADADA] hover:bg-[#F0F0F0]',
    badge: 'text-[#000000] hover:text-[#FF0000]',
  };

  return (
    <button
      aria-label={ariaLabel}
      className={`relative inline-flex items-center justify-center rounded-full transition-colors cursor-pointer ${sizeMap[size]} ${variantMap[variant]} ${className}`}
      {...props}
    >
      {children}
      {badgeCount !== undefined && badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white bg-[#FF0000] rounded-full border-2 border-white">
          {badgeCount > 99 ? '99+' : badgeCount}
        </span>
      )}
    </button>
  );
};
