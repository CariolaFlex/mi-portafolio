import Link from 'next/link';
import { Subcategory } from '@/types';

interface SubcategoryCardProps {
  subcategory: Subcategory;
  categoryId: string;
}

export function SubcategoryCard({ subcategory, categoryId }: SubcategoryCardProps) {
  return (
    <Link
      href={`/herramientas/${categoryId}/${subcategory.id}`}
      className="group block no-underline"
    >
      <div className="bg-dark-card p-6 rounded-xl border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,217,255,0.15)] hover:border-primary min-h-[200px] flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3">
          <i className={`fas ${subcategory.icon} text-2xl text-primary group-hover:text-dark transition-colors duration-300`}></i>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">
          {subcategory.name}
        </h3>

        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
          {subcategory.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-text-muted text-xs">
            {subcategory.tools.length} {subcategory.tools.length === 1 ? 'herramienta' : 'herramientas'}
          </span>
          <i className="fas fa-arrow-right text-primary transition-transform duration-300 group-hover:translate-x-2"></i>
        </div>
      </div>
    </Link>
  );
}
