import QRCode from 'qrcode';

export interface QROptions {
  size: number;
  color: string;
  backgroundColor: string;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
}

export const defaultQROptions: QROptions = {
  size: 300,
  color: '#000000',
  backgroundColor: '#FFFFFF',
  errorCorrectionLevel: 'M',
};

/**
 * Genera un código QR como Data URL (PNG)
 */
export async function generateQRCode(
  text: string,
  options: QROptions = defaultQROptions
): Promise<string> {
  if (!text.trim()) {
    throw new Error('El texto no puede estar vacío');
  }

  try {
    const dataUrl = await QRCode.toDataURL(text, {
      width: options.size,
      color: {
        dark: options.color,
        light: options.backgroundColor,
      },
      errorCorrectionLevel: options.errorCorrectionLevel,
      margin: 2,
    });

    return dataUrl;
  } catch (error) {
    throw new Error('Error al generar el código QR');
  }
}

/**
 * Genera un código QR como SVG string
 */
export async function generateQRCodeSVG(
  text: string,
  options: QROptions = defaultQROptions
): Promise<string> {
  if (!text.trim()) {
    throw new Error('El texto no puede estar vacío');
  }

  try {
    const svg = await QRCode.toString(text, {
      type: 'svg',
      width: options.size,
      color: {
        dark: options.color,
        light: options.backgroundColor,
      },
      errorCorrectionLevel: options.errorCorrectionLevel,
      margin: 2,
    });

    return svg;
  } catch (error) {
    throw new Error('Error al generar el código QR SVG');
  }
}

/**
 * Descarga un Data URL como archivo
 */
export function downloadDataUrl(dataUrl: string, filename: string) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Descarga un string SVG como archivo
 */
export function downloadSVG(svgString: string, filename: string) {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
