'use client';

import { QROptions as QROptionsType } from '@/lib/cariolatools/qr-generator';

interface QROptionsProps {
  options: QROptionsType;
  onOptionsChange: (options: Partial<QROptionsType>) => void;
}

const errorCorrectionLevels = [
  { value: 'L' as const, label: 'Baja (7%)', description: 'Menos datos de corrección' },
  { value: 'M' as const, label: 'Media (15%)', description: 'Balance recomendado' },
  { value: 'Q' as const, label: 'Alta (25%)', description: 'Mayor tolerancia a daños' },
  { value: 'H' as const, label: 'Muy Alta (30%)', description: 'Máxima corrección' },
];

const presetColors = [
  { color: '#000000', bg: '#FFFFFF', label: 'Clásico' },
  { color: '#1E40AF', bg: '#DBEAFE', label: 'Azul' },
  { color: '#DC2626', bg: '#FEE2E2', label: 'Rojo' },
  { color: '#059669', bg: '#D1FAE5', label: 'Verde' },
  { color: '#7C3AED', bg: '#EDE9FE', label: 'Púrpura' },
  { color: '#EA580C', bg: '#FFEDD5', label: 'Naranja' },
];

export function QROptions({ options, onOptionsChange }: QROptionsProps) {
  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-sliders-h mr-2 text-primary"></i>
        Opciones de Diseño
      </h3>

      <div className="space-y-6">
        {/* Size */}
        <div>
          <label className="block text-text font-medium mb-2">
            Tamaño: {options.size}px
          </label>
          <input
            type="range"
            min="200"
            max="800"
            step="50"
            value={options.size}
            onChange={(e) => onOptionsChange({ size: Number(e.target.value) })}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted mt-1">
            <span>200px</span>
            <span>800px</span>
          </div>
        </div>

        {/* Color Presets */}
        <div>
          <label className="block text-text font-medium mb-3">
            Colores predefinidos
          </label>
          <div className="grid grid-cols-3 gap-2">
            {presetColors.map((preset, index) => (
              <button
                key={index}
                onClick={() =>
                  onOptionsChange({
                    color: preset.color,
                    backgroundColor: preset.bg,
                  })
                }
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  options.color === preset.color && options.backgroundColor === preset.bg
                    ? 'border-primary scale-105'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div
                  className="w-full aspect-square rounded mb-2"
                  style={{
                    backgroundColor: preset.bg,
                    border: `4px solid ${preset.color}`,
                  }}
                />
                <p className="text-xs text-text-muted text-center">{preset.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Colors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-text font-medium mb-2 text-sm">
              Color QR
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={options.color}
                onChange={(e) => onOptionsChange({ color: e.target.value })}
                className="w-12 h-10 rounded border border-border cursor-pointer"
              />
              <input
                type="text"
                value={options.color}
                onChange={(e) => onOptionsChange({ color: e.target.value })}
                className="flex-1 px-3 py-2 bg-dark-bg border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-text font-medium mb-2 text-sm">
              Color Fondo
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={options.backgroundColor}
                onChange={(e) => onOptionsChange({ backgroundColor: e.target.value })}
                className="w-12 h-10 rounded border border-border cursor-pointer"
              />
              <input
                type="text"
                value={options.backgroundColor}
                onChange={(e) => onOptionsChange({ backgroundColor: e.target.value })}
                className="flex-1 px-3 py-2 bg-dark-bg border border-border rounded-lg text-text text-sm font-mono focus:outline-none focus:border-primary transition-colors duration-300"
              />
            </div>
          </div>
        </div>

        {/* Error Correction Level */}
        <div>
          <label className="block text-text font-medium mb-3">
            Nivel de Corrección de Errores
          </label>
          <div className="space-y-2">
            {errorCorrectionLevels.map((level) => (
              <label
                key={level.value}
                className="flex items-center gap-3 p-3 bg-dark-bg rounded-lg cursor-pointer hover:bg-dark-bg/50 transition-colors duration-300"
              >
                <input
                  type="radio"
                  name="errorCorrection"
                  value={level.value}
                  checked={options.errorCorrectionLevel === level.value}
                  onChange={() => onOptionsChange({ errorCorrectionLevel: level.value })}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <div className="flex-1">
                  <div className="text-text text-sm font-medium">{level.label}</div>
                  <div className="text-text-muted text-xs">{level.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
