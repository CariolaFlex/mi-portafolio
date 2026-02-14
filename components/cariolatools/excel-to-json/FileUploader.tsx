'use client';

import { useState, useCallback } from 'react';

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  loading: boolean;
}

export function FileUploader({ onFileUpload, loading }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        const file = files[0];
        setFileName(file.name);
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const file = files[0];
        setFileName(file.name);
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-file-upload mr-2 text-primary"></i>
        Subir Archivo
      </h3>

      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
          isDragging
            ? 'border-primary bg-primary/5 scale-[1.02]'
            : 'border-border hover:border-primary/50 hover:bg-dark-bg'
        } ${loading ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <input
          type="file"
          id="file-upload"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileSelect}
          disabled={loading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />

        {loading ? (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-text-muted">Procesando archivo...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <i className="fas fa-cloud-upload-alt text-3xl text-primary"></i>
            </div>

            {fileName ? (
              <div className="space-y-2">
                <p className="text-text font-medium">
                  <i className="fas fa-check-circle text-green-400 mr-2"></i>
                  {fileName}
                </p>
                <p className="text-text-muted text-sm">
                  Arrastra otro archivo o haz clic para cambiar
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-text font-medium">
                  Arrastra tu archivo aquí
                </p>
                <p className="text-text-muted text-sm">
                  o haz clic para seleccionar
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2 justify-center text-xs text-text-muted">
              <span className="px-3 py-1 bg-dark-bg rounded-full">.xlsx</span>
              <span className="px-3 py-1 bg-dark-bg rounded-full">.xls</span>
              <span className="px-3 py-1 bg-dark-bg rounded-full">.csv</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
