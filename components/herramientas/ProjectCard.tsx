'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Tool } from '@/types';
import { TechBadge } from './TechBadge';

interface ProjectCardProps {
  tool: Tool;
  categoryId: string;
  subcategoryId?: string;
}

export function ProjectCard({ tool, categoryId, subcategoryId }: ProjectCardProps) {
  // Construir la URL según el tipo de proyecto
  const getProjectUrl = () => {
    if (tool.type === 'external') {
      return tool.externalUrl || '#';
    } else {
      // Para HTML: ruta al visor de iframe
      // Siempre usar subcategoryId, si no existe usar "direct"
      const sub = subcategoryId || 'direct';
      return `/herramientas/${categoryId}/${sub}/${tool.id}`;
    }
  };

  const projectUrl = getProjectUrl();
  const isExternal = tool.type === 'external';

  // Componente compartido del contenido de la card
  const CardContent = () => (
    <div className="bg-dark-card rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)] hover:border-primary flex flex-col h-full group">
      {/* Thumbnail */}
      <div className="relative w-full h-48 bg-gradient-to-br from-dark-lighter to-dark overflow-hidden">
        <Image
          src={tool.thumbnail}
          alt={tool.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Type Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            isExternal
              ? 'bg-purple-500/80 text-white'
              : 'bg-primary/80 text-dark'
          }`}>
            {isExternal ? 'Externo' : 'HTML'}
          </span>
        </div>

        {/* Tags (Nuevo, Destacado, etc.) */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex gap-2">
            {tool.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent/90 text-white text-xs font-bold rounded backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors duration-300">
          {tool.name}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
          {tool.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.technologies.map((tech, index) => (
            <TechBadge key={index} technology={tech} />
          ))}
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-3 bg-primary/10 border border-primary rounded-lg text-primary text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-dark flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]">
          {isExternal ? (
            <>
              <i className="fas fa-external-link-alt"></i>
              Abrir proyecto
            </>
          ) : (
            <>
              <i className="fas fa-eye"></i>
              Ver herramienta
            </>
          )}
        </button>
      </div>
    </div>
  );

  // Si es externo, usar <a>, si es HTML usar Link de Next.js
  if (isExternal) {
    return (
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline block"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <Link href={projectUrl} className="no-underline block">
      <CardContent />
    </Link>
  );
}
