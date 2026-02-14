'use client';

import { useState } from 'react';

interface DataPasterProps {
  onPasteData: (text: string) => void;
  loading: boolean;
}

export function DataPaster({ onPasteData, loading }: DataPasterProps) {
  const [text, setText] = useState('');

  const handleProcess = () => {
    if (text.trim()) {
      onPasteData(text);
    }
  };

  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-paste mr-2 text-primary"></i>
        Pegar Datos
      </h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pega aquí tus datos desde Excel o Google Sheets&#10;&#10;Ejemplo:&#10;Nombre    Edad    Ciudad&#10;Juan      25      Madrid&#10;María     30      Barcelona"
        disabled={loading}
        className="w-full h-64 p-4 bg-dark-bg border border-border rounded-lg text-text font-mono text-sm resize-none focus:outline-none focus:border-primary transition-colors duration-300 disabled:opacity-50"
      />

      <button
        onClick={handleProcess}
        disabled={!text.trim() || loading}
        className="mt-4 w-full px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
      >
        {loading ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Procesando...
          </>
        ) : (
          <>
            <i className="fas fa-magic mr-2"></i>
            Procesar Datos
          </>
        )}
      </button>

      <div className="mt-4 text-xs text-text-muted space-y-1">
        <p>
          <i className="fas fa-info-circle mr-2 text-primary"></i>
          Formatos aceptados: TSV (separado por tabuladores) o CSV (separado por comas)
        </p>
        <p className="ml-5">
          Copia directamente desde Excel o Google Sheets usando Ctrl+C / Cmd+C
        </p>
      </div>
    </div>
  );
}
