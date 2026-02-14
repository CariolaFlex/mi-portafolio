/**
 * CARIOLATOOLS - Herramientas Gratuitas
 *
 * Metadata de todas las herramientas disponibles en CariolaTools
 */

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  icon: string;           // Font Awesome class
  tags: string[];
  featured: boolean;
}

export const tools: Tool[] = [
  {
    id: "excel-to-json",
    slug: "excel-to-json",
    name: "Excel/Sheets → JSON",
    description: "Convierte archivos Excel, CSV o datos de Google Sheets a formato JSON",
    longDescription: "Herramienta completa para convertir tus hojas de cálculo a formato JSON. Soporta archivos Excel (.xlsx, .xls), CSV y datos pegados directamente desde Google Sheets. Configura opciones como headers, detección de tipos y formato de salida.",
    icon: "fa-file-code",
    tags: ["Excel", "CSV", "JSON", "Google Sheets", "Conversor"],
    featured: true
  },
  {
    id: "qr-generator",
    slug: "qr-generator",
    name: "Generador de QR",
    description: "Genera códigos QR desde texto o URL. Descarga en PNG o SVG",
    longDescription: "Crea códigos QR personalizados con opciones de tamaño, color y nivel de corrección de errores. Genera códigos QR para URLs, texto, o cualquier contenido. Descarga en formato PNG (rasterizado) o SVG (vectorial) para uso en cualquier proyecto.",
    icon: "fa-qrcode",
    tags: ["QR", "Código QR", "Generador", "PNG", "SVG"],
    featured: true
  }
];

// Helper functions
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.featured);
}
