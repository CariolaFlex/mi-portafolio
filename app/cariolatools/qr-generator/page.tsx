'use client';

import { useState, useEffect } from 'react';
import { ToolLayout } from '@/components/cariolatools/ToolLayout';
import { QRInput } from '@/components/cariolatools/qr-generator/QRInput';
import { QRPreview } from '@/components/cariolatools/qr-generator/QRPreview';
import { QROptions } from '@/components/cariolatools/qr-generator/QROptions';
import { QRDownload } from '@/components/cariolatools/qr-generator/QRDownload';
import {
  generateQRCode,
  generateQRCodeSVG,
  QROptions as QROptionsType,
  defaultQROptions,
} from '@/lib/cariolatools/qr-generator';

export default function QRGeneratorPage() {
  const [text, setText] = useState('');
  const [options, setOptions] = useState<QROptionsType>(defaultQROptions);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [qrSvg, setQrSvg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate QR code whenever text or options change
  useEffect(() => {
    const generateQR = async () => {
      if (!text.trim()) {
        setQrDataUrl(null);
        setQrSvg(null);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const [dataUrl, svg] = await Promise.all([
          generateQRCode(text, options),
          generateQRCodeSVG(text, options),
        ]);

        setQrDataUrl(dataUrl);
        setQrSvg(svg);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al generar el código QR');
        setQrDataUrl(null);
        setQrSvg(null);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the generation
    const timeoutId = setTimeout(generateQR, 300);
    return () => clearTimeout(timeoutId);
  }, [text, options]);

  const handleOptionsChange = (newOptions: Partial<QROptionsType>) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  };

  return (
    <ToolLayout
      title="Generador de QR"
      description="Genera códigos QR personalizados desde texto o URL. Descarga en PNG o SVG"
      icon="fa-qrcode"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Input & Options */}
        <div className="space-y-6">
          <QRInput text={text} onTextChange={setText} />
          <QROptions options={options} onOptionsChange={handleOptionsChange} />
        </div>

        {/* Right Column: Preview & Download */}
        <div className="space-y-6">
          <QRPreview
            qrDataUrl={qrDataUrl}
            loading={loading}
            error={error}
            text={text}
          />

          {qrDataUrl && qrSvg && (
            <QRDownload qrDataUrl={qrDataUrl} qrSvg={qrSvg} text={text} />
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
