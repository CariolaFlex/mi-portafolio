'use client';

import { useState } from 'react';
import { ToolLayout } from '@/components/cariolatools/ToolLayout';
import { FileUploader } from '@/components/cariolatools/excel-to-json/FileUploader';
import { DataPaster } from '@/components/cariolatools/excel-to-json/DataPaster';
import { ConfigPanel } from '@/components/cariolatools/excel-to-json/ConfigPanel';
import { TablePreview } from '@/components/cariolatools/excel-to-json/TablePreview';
import { JsonPreview } from '@/components/cariolatools/excel-to-json/JsonPreview';
import { parseExcelFile, parsePastedData, ParseOptions, ParseResult } from '@/lib/cariolatools/excel-parser';

export default function ExcelToJsonPage() {
  const [mode, setMode] = useState<'file' | 'paste'>('file');
  const [options, setOptions] = useState<ParseOptions>({
    hasHeaders: true,
    detectTypes: true,
    includeEmpty: false,
    format: 'object',
  });
  const [result, setResult] = useState<ParseResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (file: File) => {
    setLoading(true);
    setError(null);
    try {
      const parsed = await parseExcelFile(file, options);
      setResult(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar el archivo');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePasteData = (text: string) => {
    setLoading(true);
    setError(null);
    try {
      const parsed = parsePastedData(text, options);
      setResult(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al procesar los datos');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionsChange = (newOptions: Partial<ParseOptions>) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  };

  return (
    <ToolLayout
      title="Excel/Sheets → JSON"
      description="Convierte archivos Excel, CSV o datos de Google Sheets a formato JSON"
      icon="fa-file-code"
    >
      <div className="space-y-6">
        {/* Mode Selector */}
        <div className="flex gap-4 p-2 bg-dark-card border border-border rounded-xl">
          <button
            onClick={() => setMode('file')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              mode === 'file'
                ? 'bg-primary text-dark'
                : 'text-text-muted hover:text-text hover:bg-dark-bg'
            }`}
          >
            <i className="fas fa-file-upload mr-2"></i>
            Subir Archivo
          </button>
          <button
            onClick={() => setMode('paste')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              mode === 'paste'
                ? 'bg-primary text-dark'
                : 'text-text-muted hover:text-text hover:bg-dark-bg'
            }`}
          >
            <i className="fas fa-paste mr-2"></i>
            Pegar Datos
          </button>
        </div>

        {/* Input Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Upload/Paste */}
          <div className="lg:col-span-2">
            {mode === 'file' ? (
              <FileUploader onFileUpload={handleFileUpload} loading={loading} />
            ) : (
              <DataPaster onPasteData={handlePasteData} loading={loading} />
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                {error}
              </div>
            )}
          </div>

          {/* Right: Config Panel */}
          <div className="lg:col-span-1">
            <ConfigPanel options={options} onOptionsChange={handleOptionsChange} />
          </div>
        </div>

        {/* Preview Area */}
        {result && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-text-muted text-sm">
              <span>
                <i className="fas fa-table mr-2 text-primary"></i>
                {result.rowCount} filas × {result.columnCount} columnas
              </span>
            </div>

            {/* Table Preview */}
            <TablePreview result={result} />

            {/* JSON Preview */}
            <JsonPreview result={result} />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
