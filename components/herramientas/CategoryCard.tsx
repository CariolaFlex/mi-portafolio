import Link from 'next/link';
import { Category } from '@/types';
import { countToolsInCategory } from '@/data/herramientas';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const toolCount = countToolsInCategory(category);

  return (
    <Link
      href={`/herramientas/${category.id}`}
      className="group block no-underline"
    >
      <div
        className={`relative bg-gradient-to-br ${category.gradient} p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] min-h-[280px] flex flex-col justify-between`}
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 transition-transform duration-300 group-hover:scale-125"></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <i className={`fas ${category.icon} text-3xl text-white`}></i>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-white/90 text-sm leading-relaxed mb-4">
            {category.description}
          </p>
        </div>

        {/* Footer with count */}
        <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
          <span className="text-white/80 text-sm font-medium">
            {toolCount} {toolCount === 1 ? 'herramienta' : 'herramientas'}
          </span>
          <i className="fas fa-arrow-right text-white transition-transform duration-300 group-hover:translate-x-2"></i>
        </div>
      </div>
    </Link>
  );
}
