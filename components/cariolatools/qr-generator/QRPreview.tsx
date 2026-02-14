'use client';

interface QRPreviewProps {
  qrDataUrl: string | null;
  loading: boolean;
  error: string | null;
  text: string;
}

export function QRPreview({ qrDataUrl, loading, error, text }: QRPreviewProps) {
  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-eye mr-2 text-primary"></i>
        Vista Previa
      </h3>

      <div className="aspect-square bg-dark-bg border-2 border-border rounded-xl flex items-center justify-center overflow-hidden">
        {loading ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-text-muted text-sm">Generando código QR...</p>
          </div>
        ) : error ? (
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 mx-auto bg-red-500/10 rounded-full flex items-center justify-center">
              <i className="fas fa-exclamation-triangle text-3xl text-red-400"></i>
            </div>
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        ) : qrDataUrl ? (
          <div className="p-8 w-full h-full flex items-center justify-center">
            <img
              src={qrDataUrl}
              alt="Código QR generado"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ) : (
          <div className="text-center space-y-4 p-6">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-qrcode text-3xl text-primary"></i>
            </div>
            <p className="text-text-muted text-sm">
              {text ? 'Generando código QR...' : 'Ingresa un texto para generar el código QR'}
            </p>
          </div>
        )}
      </div>

      {qrDataUrl && (
        <div className="mt-4 p-3 bg-dark-bg rounded-lg">
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              Código QR generado exitosamente
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
