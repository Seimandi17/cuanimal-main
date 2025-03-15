
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  'rounded-full font-medium transition-all duration-300 focus:outline-none shadow-sm focus:ring-4',
  {
    variants: {
      variant: {
        primary: 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white focus:ring-brand-blue-200',
        secondary: 'bg-brand-teal hover:bg-opacity-90 text-white focus:ring-brand-teal/20',
        accent: 'bg-brand-yellow hover:bg-opacity-90 text-gray-900 focus:ring-brand-yellow/20',
        outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700',
        ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 shadow-none',
        default: 'bg-brand-blue-600 hover:bg-brand-blue-700 text-white focus:ring-brand-blue-200',
        destructive: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-200',
        link: 'text-brand-blue-600 hover:underline underline-offset-4 bg-transparent shadow-none',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-base px-5 py-2.5',
        lg: 'text-lg px-6 py-3',
        default: 'text-base px-5 py-2.5',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'default' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'default' | 'icon';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
