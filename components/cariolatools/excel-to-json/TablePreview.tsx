'use client';

import { ParseResult } from '@/lib/cariolatools/excel-parser';

interface TablePreviewProps {
  result: ParseResult;
}

export function TablePreview({ result }: TablePreviewProps) {
  const maxRows = 10;
  const displayData = result.data.slice(0, maxRows);
  const hasMore = result.data.length > maxRows;

  return (
    <div className="bg-dark-card border border-border rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">
          <i className="fas fa-table mr-2 text-primary"></i>
          Vista Previa de Datos
        </h3>
        {hasMore && (
          <span className="text-xs text-text-muted">
            Mostrando {maxRows} de {result.rowCount} filas
          </span>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-dark-bg border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider sticky left-0 bg-dark-bg">
                #
              </th>
              {result.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-xs font-semibold text-text-muted uppercase tracking-wider whitespace-nowrap"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-border hover:bg-dark-bg transition-colors duration-200"
              >
                <td className="px-4 py-3 text-text-muted text-sm font-mono sticky left-0 bg-dark-card">
                  {rowIndex + 1}
                </td>
                {result.headers.map((header, colIndex) => {
                  const value = row[header];
                  const valueType = typeof value;

                  return (
                    <td
                      key={colIndex}
                      className={`px-4 py-3 text-sm whitespace-nowrap ${
                        valueType === 'number'
                          ? 'text-blue-400 font-mono'
                          : valueType === 'boolean'
                          ? 'text-purple-400 font-mono'
                          : value === null || value === undefined
                          ? 'text-text-muted italic'
                          : 'text-text'
                      }`}
                    >
                      {value === null || value === undefined
                        ? 'null'
                        : valueType === 'boolean'
                        ? value.toString()
                        : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasMore && (
        <div className="px-6 py-3 bg-dark-bg border-t border-border text-center text-xs text-text-muted">
          <i className="fas fa-info-circle mr-2"></i>
          {result.rowCount - maxRows} filas más no mostradas
        </div>
      )}
    </div>
  );
}
