import Link from 'next/link';
import { ReactNode } from 'react';

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: string;
  children: ReactNode;
}

export function ToolLayout({ title, description, icon, children }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Back Button */}
        <Link
          href="/cariolatools"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors duration-300 mb-8 group"
        >
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform duration-300"></i>
          <span>Volver a CariolaTools</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary p-1 rounded-full mb-4">
            <div className="bg-dark rounded-full px-6 py-3 flex items-center gap-3">
              <i className={`fas ${icon} text-2xl text-primary`}></i>
              <span className="text-white font-bold text-xl">{title}</span>
            </div>
          </div>
          <p className="text-text-muted text-lg max-w-[700px] mx-auto">
            {description}
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-dark-card border border-border rounded-2xl p-6 md:p-8 mb-8">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center py-6 border-t border-border">
          <p className="text-text-muted text-sm">
            🛠️ Herramienta gratuita by{' '}
            <Link href="/" className="text-primary hover:underline font-semibold">
              Andrés Cariola
            </Link>
          </p>
          <p className="text-text-muted text-xs mt-2">
            Sin registro, sin límites. 100% gratis.
          </p>
        </div>
      </div>
    </div>
  );
}
