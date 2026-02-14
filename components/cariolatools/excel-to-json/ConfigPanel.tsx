'use client';

import { ParseOptions } from '@/lib/cariolatools/excel-parser';

interface ConfigPanelProps {
  options: ParseOptions;
  onOptionsChange: (options: Partial<ParseOptions>) => void;
}

export function ConfigPanel({ options, onOptionsChange }: ConfigPanelProps) {
  return (
    <div className="bg-dark-card border border-border rounded-xl p-6 h-fit sticky top-24">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-cog mr-2 text-primary"></i>
        Configuración
      </h3>

      <div className="space-y-4">
        {/* Has Headers */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={options.hasHeaders}
            onChange={(e) => onOptionsChange({ hasHeaders: e.target.checked })}
            className="mt-1 w-4 h-4 accent-primary cursor-pointer"
          />
          <div className="flex-1">
            <div className="text-text font-medium group-hover:text-primary transition-colors duration-300">
              Primera fila como headers
            </div>
            <div className="text-xs text-text-muted mt-1">
              Usar la primera fila como nombres de columnas
            </div>
          </div>
        </label>

        {/* Detect Types */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={options.detectTypes}
            onChange={(e) => onOptionsChange({ detectTypes: e.target.checked })}
            className="mt-1 w-4 h-4 accent-primary cursor-pointer"
          />
          <div className="flex-1">
            <div className="text-text font-medium group-hover:text-primary transition-colors duration-300">
              Detectar tipos
            </div>
            <div className="text-xs text-text-muted mt-1">
              Convertir automáticamente números y booleanos
            </div>
          </div>
        </label>

        {/* Include Empty */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={options.includeEmpty}
            onChange={(e) => onOptionsChange({ includeEmpty: e.target.checked })}
            className="mt-1 w-4 h-4 accent-primary cursor-pointer"
          />
          <div className="flex-1">
            <div className="text-text font-medium group-hover:text-primary transition-colors duration-300">
              Incluir celdas vacías
            </div>
            <div className="text-xs text-text-muted mt-1">
              Mantener campos vacíos como null en el JSON
            </div>
          </div>
        </label>

        {/* Format */}
        <div className="pt-2 border-t border-border">
          <label className="block text-text font-medium mb-2">
            Formato de salida
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="format"
                value="object"
                checked={options.format === 'object'}
                onChange={() => onOptionsChange({ format: 'object' })}
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <div className="flex-1">
                <div className="text-text text-sm group-hover:text-primary transition-colors duration-300">
                  Array de objetos
                </div>
                <div className="text-xs text-text-muted">
                  [{"{"} "col": "val" {"}"}]
                </div>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="format"
                value="array"
                checked={options.format === 'array'}
                onChange={() => onOptionsChange({ format: 'array' })}
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <div className="flex-1">
                <div className="text-text text-sm group-hover:text-primary transition-colors duration-300">
                  Array de arrays
                </div>
                <div className="text-xs text-text-muted">
                  [["col"], ["val"]]
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
