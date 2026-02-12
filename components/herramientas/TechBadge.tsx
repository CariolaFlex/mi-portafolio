interface TechBadgeProps {
  technology: string;
}

export function TechBadge({ technology }: TechBadgeProps) {
  // Mapeo de tecnologías a colores (opcional, personalizable)
  const getTechColor = (tech: string): string => {
    const lowerTech = tech.toLowerCase();

    // Frontend Frameworks
    if (lowerTech.includes('react') || lowerTech.includes('next')) return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (lowerTech.includes('vue')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (lowerTech.includes('angular')) return 'bg-red-500/20 text-red-400 border-red-500/30';

    // Languages
    if (lowerTech.includes('typescript')) return 'bg-blue-600/20 text-blue-500 border-blue-600/30';
    if (lowerTech.includes('javascript')) return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    if (lowerTech.includes('python')) return 'bg-blue-400/20 text-blue-300 border-blue-400/30';

    // CSS Frameworks
    if (lowerTech.includes('tailwind')) return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    if (lowerTech.includes('css')) return 'bg-purple-500/20 text-purple-400 border-purple-500/30';

    // Backend
    if (lowerTech.includes('node') || lowerTech.includes('express')) return 'bg-green-600/20 text-green-500 border-green-600/30';
    if (lowerTech.includes('firebase')) return 'bg-orange-500/20 text-orange-400 border-orange-500/30';

    // Databases
    if (lowerTech.includes('mongo')) return 'bg-green-500/20 text-green-400 border-green-500/30';
    if (lowerTech.includes('postgres') || lowerTech.includes('sql')) return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';

    // Tools & Others
    if (lowerTech.includes('chart')) return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    if (lowerTech.includes('html')) return 'bg-orange-600/20 text-orange-500 border-orange-600/30';

    // Default
    return 'bg-primary/20 text-primary border-primary/30';
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 ${getTechColor(technology)}`}>
      {technology}
    </span>
  );
}
