'use client';

import { useState } from 'react';
import { Tool } from '@/types';

interface ProjectIframeProps {
  tool: Tool;
}

export function ProjectIframe({ tool }: ProjectIframeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const openInNewTab = () => {
    if (tool.htmlPath) {
      window.open(tool.htmlPath, '_blank', 'noopener,noreferrer');
    }
  };

  if (!tool.htmlPath) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-dark-lighter rounded-lg">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-6xl text-warning mb-4"></i>
          <p className="text-text-muted">No se encontró la ruta del proyecto</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-dark-lighter rounded-lg overflow-hidden">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-dark-lighter">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-muted">Cargando herramienta...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-dark-lighter">
          <div className="text-center max-w-md px-4">
            <i className="fas fa-exclamation-circle text-6xl text-danger mb-4"></i>
            <h3 className="text-xl font-bold text-text mb-2">Error al cargar</h3>
            <p className="text-text-muted mb-6">
              No se pudo cargar la herramienta. Verifica que el archivo exista en la ruta:
            </p>
            <code className="block bg-dark p-3 rounded text-sm text-primary mb-4 overflow-x-auto">
              {tool.htmlPath}
            </code>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-dark rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Reintentar
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={openInNewTab}
          className="px-4 py-2 bg-dark/80 backdrop-blur-md text-text border border-border rounded-lg font-medium hover:bg-primary hover:text-dark hover:border-primary transition-all duration-300 flex items-center gap-2"
          title="Abrir en nueva pestaña"
        >
          <i className="fas fa-external-link-alt"></i>
          <span className="hidden md:inline">Nueva pestaña</span>
        </button>
      </div>

      {/* Iframe */}
      <iframe
        src={tool.htmlPath}
        className="w-full h-full border-0"
        title={tool.name}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}
