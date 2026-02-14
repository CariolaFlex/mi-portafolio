'use client';

import { downloadDataUrl, downloadSVG } from '@/lib/cariolatools/qr-generator';

interface QRDownloadProps {
  qrDataUrl: string;
  qrSvg: string;
  text: string;
}

export function QRDownload({ qrDataUrl, qrSvg, text }: QRDownloadProps) {
  const generateFilename = (extension: string) => {
    const sanitized = text
      .slice(0, 30)
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const timestamp = Date.now();
    return `qr-${sanitized || 'code'}-${timestamp}.${extension}`;
  };

  const handleDownloadPNG = () => {
    downloadDataUrl(qrDataUrl, generateFilename('png'));
  };

  const handleDownloadSVG = () => {
    downloadSVG(qrSvg, generateFilename('svg'));
  };

  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-download mr-2 text-primary"></i>
        Descargar Código QR
      </h3>

      <div className="space-y-3">
        {/* PNG Download */}
        <button
          onClick={handleDownloadPNG}
          className="w-full px-6 py-4 bg-primary/10 border border-primary rounded-xl text-left hover:bg-primary hover:text-dark transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/20 group-hover:bg-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <i className="fas fa-image text-xl text-primary group-hover:text-dark transition-colors duration-300"></i>
              </div>
              <div>
                <div className="text-text group-hover:text-dark font-semibold transition-colors duration-300">
                  Descargar PNG
                </div>
                <div className="text-text-muted group-hover:text-dark/70 text-sm transition-colors duration-300">
                  Imagen rasterizada para web y impresión
                </div>
              </div>
            </div>
            <i className="fas fa-download text-primary group-hover:text-dark transition-colors duration-300"></i>
          </div>
        </button>

        {/* SVG Download */}
        <button
          onClick={handleDownloadSVG}
          className="w-full px-6 py-4 bg-accent/10 border border-accent rounded-xl text-left hover:bg-accent hover:text-dark transition-all duration-300 group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 group-hover:bg-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                <i className="fas fa-vector-square text-xl text-accent group-hover:text-dark transition-colors duration-300"></i>
              </div>
              <div>
                <div className="text-text group-hover:text-dark font-semibold transition-colors duration-300">
                  Descargar SVG
                </div>
                <div className="text-text-muted group-hover:text-dark/70 text-sm transition-colors duration-300">
                  Imagen vectorial escalable sin pérdida de calidad
                </div>
              </div>
            </div>
            <i className="fas fa-download text-accent group-hover:text-dark transition-colors duration-300"></i>
          </div>
        </button>
      </div>

      <div className="mt-4 p-4 bg-dark-bg rounded-lg">
        <p className="text-xs text-text-muted leading-relaxed">
          <i className="fas fa-info-circle mr-2 text-primary"></i>
          <strong>PNG:</strong> Mejor para web, redes sociales y uso general. <strong>SVG:</strong> Ideal para impresión profesional y diseño gráfico.
        </p>
      </div>
    </div>
  );
}
