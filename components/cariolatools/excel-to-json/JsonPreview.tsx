'use client';

import { useState } from 'react';
import { ParseResult } from '@/lib/cariolatools/excel-parser';

interface JsonPreviewProps {
  result: ParseResult;
}

export function JsonPreview({ result }: JsonPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);

  const jsonString = JSON.stringify(result.data, null, indentSize);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Simple syntax highlighting
  const highlightJson = (json: string) => {
    return json
      .replace(/(".*?"):/g, '<span class="text-blue-400">$1</span>:')
      .replace(/: (".*?")/g, ': <span class="text-green-400">$1</span>')
      .replace(/: (\d+\.?\d*)/g, ': <span class="text-purple-400">$1</span>')
      .replace(/: (true|false|null)/g, ': <span class="text-orange-400">$1</span>');
  };

  return (
    <div className="bg-dark-card border border-border rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between flex-wrap gap-4">
        <h3 className="text-lg font-semibold text-text">
          <i className="fas fa-code mr-2 text-primary"></i>
          JSON Generado
        </h3>

        <div className="flex items-center gap-3">
          {/* Indent Size */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-text-muted">Indentación:</label>
            <select
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="px-3 py-1.5 bg-dark-bg border border-border rounded-lg text-text text-sm focus:outline-none focus:border-primary transition-colors duration-300"
            >
              <option value={0}>Compacto</option>
              <option value={2}>2 espacios</option>
              <option value={4}>4 espacios</option>
            </select>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
              copied
                ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-dark'
            }`}
          >
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
            {copied ? 'Copiado' : 'Copiar'}
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg font-semibold text-sm hover:bg-accent hover:text-dark transition-all duration-300"
          >
            <i className="fas fa-download mr-2"></i>
            Descargar
          </button>
        </div>
      </div>

      <div className="relative">
        <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
          <code
            dangerouslySetInnerHTML={{ __html: highlightJson(jsonString) }}
          />
        </pre>

        {/* Copy Overlay on Hover */}
        <div className="absolute top-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-dark-bg/90 backdrop-blur-sm border border-border rounded-lg text-text-muted hover:text-primary text-xs"
          >
            <i className="fas fa-copy mr-1"></i>
            Copiar
          </button>
        </div>
      </div>

      <div className="px-6 py-3 bg-dark-bg border-t border-border flex items-center justify-between text-xs text-text-muted">
        <span>
          <i className="fas fa-info-circle mr-2 text-primary"></i>
          {result.data.length} {result.data.length === 1 ? 'elemento' : 'elementos'} •{' '}
          {new Blob([jsonString]).size} bytes
        </span>
        <span>
          {indentSize === 0 ? 'Formato compacto' : `Indentado con ${indentSize} espacios`}
        </span>
      </div>
    </div>
  );
}
