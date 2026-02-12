# 🚀 Guía Rápida: Sistema de Herramientas

## ✅ Sistema Completado

Tu portafolio ahora incluye un **sistema completo de categorías y proyectos** que soporta:

- ✅ **Proyectos HTML** (iframe viewer)
- ✅ **Proyectos externos** (links a Vercel, etc.)
- ✅ **5 categorías** predefinidas
- ✅ **Subcategorías opcionales**
- ✅ **Navegación dinámica** con breadcrumbs
- ✅ **Responsive** y optimizado
- ✅ **TypeScript** completo

---

## 📂 Estructura Creada

```
C:\Portafolio\portafolio/
├── app/herramientas/                    # Páginas del sistema
│   ├── page.tsx                         # Grid de categorías
│   ├── [categoria]/page.tsx             # Subcategorías o proyectos
│   └── [categoria]/[subcategoria]/
│       ├── page.tsx                     # Grid de proyectos
│       └── [proyecto]/page.tsx          # Visor iframe
│
├── components/herramientas/             # Componentes UI
│   ├── CategoryCard.tsx
│   ├── ProjectCard.tsx (universal)
│   ├── SubcategoryCard.tsx
│   ├── ProjectIframe.tsx
│   ├── TechBadge.tsx
│   └── Breadcrumb.tsx
│
├── data/herramientas.ts                 # BASE DE DATOS
│
└── public/
    ├── herramientas/                    # HTMLs organizados
    │   ├── ingenieria-civil/
    │   ├── habitos-organizacion/
    │   ├── infografias/
    │   ├── finanzas/
    │   ├── otros/
    │   └── ejemplo-template.html        # Template de referencia
    └── thumbnails/                      # Capturas de pantalla
```

---

## 🎯 Agregar Tu Primera Herramienta

### Opción A: Herramienta HTML

**1. Crea el archivo HTML:**

Copia tu HTML a la carpeta correcta:

```bash
public/herramientas/ingenieria-civil/estructuras/mi-calculadora.html
```

O usa el template de ejemplo:

```bash
cp public/herramientas/ejemplo-template.html public/herramientas/ingenieria-civil/estructuras/mi-calculadora.html
```

**2. Registra en `data/herramientas.ts`:**

Abre `data/herramientas.ts` y busca la subcategoría correcta. Por ejemplo, para "Estructuras":

```typescript
{
  id: "estructuras",
  name: "Estructuras",
  tools: [
    // ... proyectos existentes ...

    // AGREGAR AQUÍ ⬇️
    {
      id: "mi-calculadora",
      name: "Mi Calculadora de Vigas",
      description: "Calcula momentos y cortantes en vigas simplemente apoyadas",
      type: "html",
      htmlPath: "/herramientas/ingenieria-civil/estructuras/mi-calculadora.html",
      thumbnail: "https://placehold.co/800x600/1a2332/00d9ff?text=Mi+Calculadora",
      technologies: ["HTML", "CSS", "JavaScript"],
      featured: false
    }
  ]
}
```

**3. Crea thumbnail (opcional):**

Toma una captura de pantalla y guárdala:

```
public/thumbnails/mi-calculadora.png
```

Actualiza la línea `thumbnail`:

```typescript
thumbnail: "/thumbnails/mi-calculadora.png",
```

**¡Listo!** Tu herramienta ya está disponible en:
```
http://localhost:3000/herramientas/ingenieria-civil/estructuras
```

---

### Opción B: Proyecto Externo

**1. Registra en `data/herramientas.ts`:**

```typescript
{
  id: "mi-app-firebase",
  name: "Mi App con Firebase",
  description: "Sistema completo de gestión desplegado en Vercel",
  type: "external",                              // ← EXTERNO
  externalUrl: "https://mi-app.vercel.app",     // ← TU URL
  thumbnail: "https://placehold.co/800x600/1a2332/7c3aed?text=Mi+App",
  technologies: ["Next.js", "Firebase", "Tailwind"]
}
```

**¡Listo!** El proyecto se mostrará como card y al hacer click abrirá tu app en nueva pestaña.

---

## 🎨 Template HTML Incluido

Usa `public/herramientas/ejemplo-template.html` como base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Herramienta</title>
    <style>
        /* Estilos modernos incluidos */
    </style>
</head>
<body>
    <div class="container">
        <h1>🔧 Tu Herramienta</h1>
        <!-- Tu contenido -->
    </div>
    <script>
        // Tu JavaScript
    </script>
</body>
</html>
```

Características:
- ✅ Responsive
- ✅ Gradientes modernos
- ✅ Animaciones suaves
- ✅ Todo inline (sin dependencias)

---

## 📍 Navegación del Sistema

### Para categorías CON subcategorías:
```
/herramientas
  └─ /ingenieria-civil
      └─ /estructuras
          └─ /calc-vigas
```

### Para categorías SIN subcategorías:
```
/herramientas
  └─ /finanzas
      └─ /calculadora-roi
```

---

## 🔄 Placeholders Actuales

El sistema incluye **ejemplos placeholder** en `data/herramientas.ts`:

- ✅ 2 proyectos reales en "Control y Gestión"
- ✅ Placeholders en todas las categorías
- ✅ Mezcla de HTML y externos

**Reemplázalos con tus proyectos reales** editando `data/herramientas.ts`.

---

## 🧪 Probar el Sistema

### 1. Iniciar servidor:
```bash
cd C:\Portafolio\portafolio
npm run dev
```

### 2. Abrir navegador:
```
http://localhost:3000/herramientas
```

### 3. Navegar:
- Click en "Ingeniería Civil"
- Click en "Control y Gestión de Obras"
- Click en "Calculadora de Avance de Obra"
- Verás el visor de iframe (aunque el HTML aún no existe)

---

## ⚙️ Configuración Completa

### Categorías Predefinidas:

1. **Ingeniería Civil** → CON subcategorías (5)
2. **Hábitos y Organización** → SIN subcategorías
3. **Infografías** → SIN subcategorías
4. **Finanzas** → SIN subcategorías
5. **Otros Proyectos** → SIN subcategorías

### Para agregar una nueva categoría:

Edita `data/herramientas.ts`:

```typescript
export const categories: Category[] = [
  // ... categorías existentes ...

  {
    id: "mi-nueva-categoria",
    name: "Mi Nueva Categoría",
    description: "Descripción de la categoría",
    icon: "fa-lightbulb",                    // Font Awesome icon
    gradient: "from-pink-500 to-rose-500",  // Tailwind gradient
    hasSubcategories: false,                // true o false
    tools: [
      // Tus proyectos aquí
    ]
  }
];
```

---

## 🖼️ Thumbnails

### Opción 1: Usar placeholders (temporal)
```typescript
thumbnail: "https://placehold.co/800x600/1a2332/00d9ff?text=Mi+Proyecto"
```

### Opción 2: Subir imagen real
```typescript
thumbnail: "/thumbnails/mi-proyecto.png"
```

**Tamaños recomendados:**
- 800x600px (4:3)
- 1200x675px (16:9)

---

## ✨ Características Especiales

### Tags Personalizados:
```typescript
{
  tags: ["Nuevo", "Destacado", "Beta"]
}
```

### Featured (Destacados):
```typescript
{
  featured: true  // Marca como destacado
}
```

### Badges de Tecnología:
```typescript
{
  technologies: ["React", "TypeScript", "Firebase"]
  // Cada tech tiene color automático
}
```

---

## 🚀 Deploy

El sistema funciona perfecto en **Vercel**:

```bash
npm run build      # Build exitoso ✅
vercel --prod      # Deploy
```

**IMPORTANTE:**
- Los HTMLs en `public/` se sirven como assets estáticos
- Las rutas dinámicas se generan automáticamente con SSG
- No requiere configuración adicional

---

## 📖 Documentación Completa

- `README.md` → Documentación general del portafolio
- `DEPLOYMENT.md` → Guía de deploy
- `public/herramientas/README.md` → Info sobre HTMLs
- `public/thumbnails/README.md` → Info sobre imágenes

---

## 💡 Tips

1. **Empieza con placeholders**: Usa URLs de placehold.co mientras desarrollas
2. **Usa el template**: Copia `ejemplo-template.html` para nuevas herramientas
3. **Optimiza después**: Agrega thumbnails reales cuando tengas tiempo
4. **Mezcla tipos**: Combina proyectos HTML y externos sin problema
5. **Mantén orden**: Usa la estructura de carpetas predefinida

---

## 🎯 Próximos Pasos

1. ✅ **Probar el sistema**: `npm run dev` y explorar `/herramientas`
2. ✅ **Agregar tu primera herramienta** (HTML o externa)
3. ✅ **Crear thumbnails** para tus proyectos
4. ✅ **Deploy a Vercel**
5. ✅ **Compartir tu portafolio** 🎉

---

## ❓ Preguntas Frecuentes

### ¿Puedo mezclar HTML y externos en la misma categoría?
✅ Sí, sin problema. Ambos se muestran igual visualmente.

### ¿Cómo elimino los placeholders?
Edita `data/herramientas.ts` y borra las entradas que no necesites.

### ¿Puedo agregar más subcategorías?
Sí, en `data/herramientas.ts` agrega objetos al array `subcategories`.

### ¿Los iframes son seguros?
Sí, usan `sandbox` attribute para seguridad.

### ¿Qué pasa si mi HTML no carga?
El visor muestra un error con la ruta y botón de "Reintentar".

---

**¡Sistema listo para usar! 🚀**

Para dudas, revisa el `README.md` principal o la documentación de Next.js.
