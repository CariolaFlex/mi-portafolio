import Link from 'next/link';
import { Tool } from '@/data/cariolatools';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/cariolatools/${tool.slug}`}
      className="group block no-underline"
    >
      <div className="bg-dark-card p-8 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,217,255,0.3)] hover:border-primary min-h-[320px] flex flex-col relative overflow-hidden">
        {/* Background gradient decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-300 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full -ml-12 -mb-12 transition-transform duration-300 group-hover:scale-125"></div>

        <div className="relative z-10 flex flex-col flex-grow">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <i className={`fas ${tool.icon} text-2xl text-white`}></i>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
            {tool.name}
          </h3>

          {/* Description */}
          <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
            {tool.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="px-3 py-1 bg-text-muted/10 text-text-muted text-xs font-medium rounded-full">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>

          {/* Action indicator */}
          <div className="flex items-center gap-2 text-primary text-sm font-semibold">
            <span>Usar herramienta</span>
            <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-2"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
