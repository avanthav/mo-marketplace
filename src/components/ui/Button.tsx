import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'pill-red';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-colors cursor-pointer select-none rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#FF0000]/25 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-[#FF0000] text-white hover:bg-[#E00000] active:bg-[#C40000]',
    secondary: 'bg-white text-[#000000] hover:bg-[#F0F0F0] border border-[#DADADA]',
    outline: 'border border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000]/10',
    ghost: 'text-[#000000] hover:bg-[#F0F0F0]',
    'pill-red': 'bg-[#FF0000] text-white hover:bg-[#E00000] rounded-full px-5 py-2 font-bold shadow-xs',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
