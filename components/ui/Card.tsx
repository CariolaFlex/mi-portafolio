import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-dark-card rounded-2xl overflow-hidden border border-border transition-all duration-300",
        hover && "hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)] hover:border-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
