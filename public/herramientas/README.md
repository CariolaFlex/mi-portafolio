# 📁 Carpeta de Herramientas HTML

Esta carpeta contiene todas las herramientas HTML standalone organizadas por categoría.

## 📂 Estructura de Carpetas

```
herramientas/
├── ingenieria-civil/
│   ├── control-gestion/     # Control y Gestión de Obras
│   ├── estructuras/         # Calculadoras estructurales
│   ├── hidraulica/          # Herramientas hidráulicas
│   ├── geotecnia/           # Análisis geotécnico
│   └── vial/                # Diseño vial
├── habitos-organizacion/    # Apps de productividad
├── infografias/             # Infografías interactivas
├── finanzas/                # Calculadoras financieras
└── otros/                   # Proyectos diversos
```

## ➕ Cómo Agregar una Nueva Herramienta HTML

### 1. Crear el archivo HTML

Crea tu archivo HTML en la carpeta correspondiente. Por ejemplo:

```
public/herramientas/ingenieria-civil/estructuras/mi-calculadora.html
```

### 2. Registrar en la base de datos

Edita `data/herramientas.ts` y agrega tu herramienta:

```typescript
{
  id: "mi-calculadora",
  name: "Mi Calculadora de Vigas",
  description: "Descripción de la herramienta",
  type: "html",
  htmlPath: "/herramientas/ingenieria-civil/estructuras/mi-calculadora.html",
  thumbnail: "/thumbnails/mi-calculadora.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  featured: false
}
```

### 3. Crear thumbnail (opcional)

Crea una captura de pantalla de tu herramienta y guárdala en:

```
public/thumbnails/mi-calculadora.png
```

Tamaño recomendado: **800x600px** o **16:9 aspect ratio**

Si no tienes thumbnail, usa: `/thumbnails/placeholder.png`

## 🎨 Template HTML Recomendado

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nombre de tu Herramienta</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        h1 {
            color: #333;
            margin-bottom: 1.5rem;
            font-size: 2rem;
        }

        /* Tus estilos aquí */
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 Tu Herramienta</h1>
        <!-- Contenido de tu herramienta -->
    </div>

    <script>
        // Tu JavaScript aquí
    </script>
</body>
</html>
```

## ⚠️ Notas Importantes

- **Rutas relativas**: Los archivos HTML deben ser autocontenidos o usar URLs absolutas para assets externos
- **Seguridad**: Los iframes usan `sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"`
- **Responsive**: Asegúrate de que tu HTML sea responsive (mobile-friendly)
- **Performance**: Optimiza imágenes y minimiza JS/CSS cuando sea posible

## 🖼️ Crear Thumbnails

### Opción 1: Captura de Pantalla Manual
1. Abre tu herramienta en el navegador
2. Toma screenshot
3. Redimensiona a 800x600px
4. Guarda en `public/thumbnails/nombre.png`

### Opción 2: Herramientas Online
- [Screenshot API](https://www.screenshotapi.net/)
- [Puppeteer](https://pptr.dev/) (Node.js)
- Extensiones de Chrome para screenshots

## 📖 Más Información

Ver `README.md` en la raíz del proyecto para instrucciones completas sobre el sistema de herramientas.
