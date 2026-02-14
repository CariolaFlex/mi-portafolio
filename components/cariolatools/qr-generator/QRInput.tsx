'use client';

interface QRInputProps {
  text: string;
  onTextChange: (text: string) => void;
}

export function QRInput({ text, onTextChange }: QRInputProps) {
  const exampleTexts = [
    { label: 'URL', value: 'https://andrescariola.com' },
    { label: 'Email', value: 'mailto:contacto@andrescariola.com' },
    { label: 'Teléfono', value: 'tel:+56912345678' },
    { label: 'WiFi', value: 'WIFI:T:WPA;S:MiRed;P:MiContraseña;;' },
  ];

  return (
    <div className="bg-dark-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-text mb-4">
        <i className="fas fa-keyboard mr-2 text-primary"></i>
        Contenido del QR
      </h3>

      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Ingresa texto, URL, email, teléfono o cualquier dato...&#10;&#10;Ejemplos:&#10;• https://andrescariola.com&#10;• mailto:contacto@email.com&#10;• tel:+56912345678&#10;• WIFI:T:WPA;S:NombreRed;P:Contraseña;;"
        className="w-full h-48 p-4 bg-dark-bg border border-border rounded-lg text-text resize-none focus:outline-none focus:border-primary transition-colors duration-300"
      />

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-text-muted">
          {text.length} caracteres
        </span>
        {text && (
          <button
            onClick={() => onTextChange('')}
            className="text-sm text-text-muted hover:text-primary transition-colors duration-300"
          >
            <i className="fas fa-times mr-1"></i>
            Limpiar
          </button>
        )}
      </div>

      {/* Quick Examples */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-xs text-text-muted mb-3">Ejemplos rápidos:</p>
        <div className="flex flex-wrap gap-2">
          {exampleTexts.map((example, index) => (
            <button
              key={index}
              onClick={() => onTextChange(example.value)}
              className="px-3 py-1.5 bg-dark-bg border border-border rounded-lg text-xs text-text-muted hover:text-primary hover:border-primary transition-all duration-300"
            >
              <i className="fas fa-magic mr-1"></i>
              {example.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
