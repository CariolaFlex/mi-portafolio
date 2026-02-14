import * as XLSX from 'xlsx';

export interface ParseOptions {
  hasHeaders: boolean;
  detectTypes: boolean;
  includeEmpty: boolean;
  format: 'array' | 'object';
}

export interface ParseResult {
  data: any[];
  headers: string[];
  rowCount: number;
  columnCount: number;
}

/**
 * Parsea un archivo Excel/CSV y lo convierte a array de objetos
 */
export function parseExcelFile(file: File, options: ParseOptions): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });

        // Tomar la primera hoja
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convertir a array de arrays
        const rawData: any[][] = XLSX.utils.sheet_to_json(firstSheet, {
          header: 1,
          defval: options.includeEmpty ? null : undefined,
          raw: !options.detectTypes,
        });

        if (rawData.length === 0) {
          reject(new Error('El archivo está vacío'));
          return;
        }

        // Procesar headers
        let headers: string[];
        let dataRows: any[][];

        if (options.hasHeaders) {
          headers = rawData[0].map((h: any) => String(h || ''));
          dataRows = rawData.slice(1);
        } else {
          // Generar headers automáticos
          const colCount = rawData[0].length;
          headers = Array.from({ length: colCount }, (_, i) => `col${i + 1}`);
          dataRows = rawData;
        }

        // Convertir a objetos
        const result = dataRows
          .filter(row => row.some(cell => cell !== null && cell !== undefined && cell !== ''))
          .map(row => {
            const obj: any = {};
            headers.forEach((header, index) => {
              const value = row[index];
              if (options.includeEmpty || (value !== null && value !== undefined && value !== '')) {
                obj[header] = options.detectTypes ? detectType(value) : value;
              }
            });
            return obj;
          });

        resolve({
          data: result,
          headers,
          rowCount: result.length,
          columnCount: headers.length,
        });
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsBinaryString(file);
  });
}

/**
 * Parsea texto pegado (TSV o CSV)
 */
export function parsePastedData(text: string, options: ParseOptions): ParseResult {
  // Detectar delimitador (tab o coma)
  const hasTab = text.includes('\t');
  const delimiter = hasTab ? '\t' : ',';

  // Dividir en filas
  const rows = text
    .trim()
    .split('\n')
    .map(row => row.split(delimiter).map(cell => cell.trim()));

  if (rows.length === 0) {
    throw new Error('No hay datos para procesar');
  }

  // Procesar headers
  let headers: string[];
  let dataRows: string[][];

  if (options.hasHeaders) {
    headers = rows[0];
    dataRows = rows.slice(1);
  } else {
    const colCount = rows[0].length;
    headers = Array.from({ length: colCount }, (_, i) => `col${i + 1}`);
    dataRows = rows;
  }

  // Convertir a objetos
  const result = dataRows
    .filter(row => row.some(cell => cell !== ''))
    .map(row => {
      const obj: any = {};
      headers.forEach((header, index) => {
        const value = row[index] || '';
        if (options.includeEmpty || value !== '') {
          obj[header] = options.detectTypes ? detectType(value) : value;
        }
      });
      return obj;
    });

  return {
    data: result,
    headers,
    rowCount: result.length,
    columnCount: headers.length,
  };
}

/**
 * Detecta el tipo de un valor y lo convierte
 */
function detectType(value: any): any {
  if (value === null || value === undefined || value === '') {
    return value;
  }

  const str = String(value).trim();

  // Booleanos
  if (str.toLowerCase() === 'true') return true;
  if (str.toLowerCase() === 'false') return false;

  // Números
  if (!isNaN(Number(str)) && str !== '') {
    return Number(str);
  }

  return value;
}
