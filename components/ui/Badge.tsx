import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: "bg-primary/10 text-primary border-primary",
    success: "bg-accent/10 text-accent border-accent",
    warning: "bg-warning/10 text-warning border-warning"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
