import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg no-underline font-semibold inline-flex items-center gap-2 transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,217,255,0.3)]";

  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white",
    secondary: "bg-transparent text-primary border-2 border-primary"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
