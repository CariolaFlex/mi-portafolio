# 🚀 Portafolio de Andrés Cariola

Portafolio profesional desarrollado con **Next.js 14**, **TypeScript** y **Tailwind CSS**. Este proyecto presenta soluciones de automatización e integración de IA para transformación digital.

## ✨ Características

- ⚡ **Next.js 14** con App Router
- 🎨 **Tailwind CSS** con sistema de diseño personalizado
- 📱 **Responsive Design** - Mobile-first
- 🎭 **Animaciones suaves** y efectos visuales
- 📊 **Dashboard interactivo** con Chart.js
- 🖼️ **Lightbox** para visualización de imágenes
- 🌐 **SEO optimizado** con metadata dinámica
- ⚙️ **TypeScript** para type safety
- 🎯 **Componentización modular**

## 📋 Estructura del Proyecto

```
portafolio/
├── app/                      # App Router de Next.js
│   ├── layout.tsx           # Layout principal con SEO
│   ├── page.tsx             # Página home
│   └── globals.css          # Estilos globales y variables
├── components/
│   ├── layout/              # Componentes de estructura
│   │   ├── Header.tsx       # Navegación principal
│   │   └── Footer.tsx       # Pie de página
│   ├── sections/            # Secciones de la página
│   │   ├── Hero.tsx         # Sección hero con typewriter
│   │   ├── Projects.tsx     # Grid de proyectos
│   │   ├── ProjectModal.tsx # Modal con dashboard
│   │   ├── Skills.tsx       # Habilidades técnicas
│   │   └── Contact.tsx      # Formulario de contacto
│   └── ui/                  # Componentes reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Particles.tsx
│       └── FloatingActionButton.tsx
├── data/                    # Datos estructurados
│   ├── personal-info.ts     # Información personal
│   ├── projects.ts          # Proyectos del portafolio
│   ├── evoneuro-figures.ts  # 49 figuras del proyecto EvoNeuro
│   ├── skills.ts            # Categorías de habilidades
│   └── contact.ts           # Información de contacto
├── types/
│   └── index.ts             # Definiciones de tipos TypeScript
├── lib/
│   └── utils.ts             # Funciones helper
└── public/
    ├── images/              # Imágenes del proyecto
    ├── icons/               # Iconos personalizados
    └── backup-html/         # Backup del HTML original
```

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gráficos:** Chart.js + react-chartjs-2
- **Iconos:** Font Awesome 6.5.1
- **Fuentes:** Inter (Google Fonts), JetBrains Mono
- **Optimización de imágenes:** next/image

## 📦 Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Pasos de instalación

1. **Clonar el repositorio:**
```bash
git clone <tu-repositorio>
cd portafolio
```

2. **Instalar dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abrir en el navegador:**
```
http://localhost:3000
```

## 🏗️ Build para Producción

```bash
# Generar build optimizado
npm run build

# Ejecutar build de producción
npm run start

# Verificar el build localmente
npm run build && npm run start
```

## 🚀 Deploy a Vercel

La forma más rápida de deployar este proyecto es usando [Vercel](https://vercel.com):

1. **Crear cuenta en Vercel** (si no tienes una)

2. **Conectar repositorio:**
   - Ir a [vercel.com/new](https://vercel.com/new)
   - Importar tu repositorio Git
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configurar proyecto:**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (ya configurado)
   - Output Directory: `.next` (ya configurado)

4. **Deploy:**
   - Click en "Deploy"
   - Vercel creará un dominio automático (ej: `tu-portafolio.vercel.app`)

### Variables de entorno (opcional)

Si en el futuro agregas variables de entorno, créalas en:
```
Vercel Dashboard → Tu Proyecto → Settings → Environment Variables
```

## 📝 Personalización

### Modificar información personal

Edita los archivos en `/data`:

**`data/personal-info.ts`:**
```typescript
export const personalInfo = {
  name: "Tu Nombre",
  title: "Tu Título Principal",
  // ... resto de datos
};
```

**`data/contact.ts`:**
```typescript
export const contactInfo = {
  email: "tu@email.com",
  phone: "+56 9 XXXX XXXX",
  // ... redes sociales
};
```

### Agregar nuevos proyectos

Edita `data/projects.ts`:

```typescript
{
  id: "mi-proyecto",
  title: "Mi Nuevo Proyecto",
  description: "Descripción del proyecto",
  tech: ["React", "Node.js"],
  image: "https://...",
  stats: [
    { value: "100%", label: "Eficiencia" }
  ]
}
```

### Modificar colores del tema

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --primary: #00d9ff;      /* Color principal */
  --secondary: #7c3aed;    /* Color secundario */
  --accent: #10b981;       /* Color de acento */
  /* ... más colores */
}
```

## 🎨 Características Destacadas

### 1. Dashboard Interactivo del Proyecto EvoNeuro
- Sistema de tabs para diferentes flujos
- Gráficos animados con Chart.js
- 49 figuras arquitectónicas organizadas por secciones
- Lightbox para visualización ampliada

### 2. Animaciones y Efectos
- **Typewriter effect** en el título principal
- **Particles animation** en el fondo
- **Smooth scroll** entre secciones
- **Hover effects** en cards y botones
- **Fade-in animations** al scroll

### 3. SEO y Performance
- Meta tags optimizados
- Open Graph para redes sociales
- Lazy loading de imágenes
- Optimización con next/image
- Code splitting automático

### 4. Responsive Design
- Mobile-first approach
- Breakpoints adaptativos
- Menu hamburguesa en móvil
- Grid responsive en todas las secciones

### 5. Sistema de Herramientas y Proyectos
- **Categorías dinámicas** con subcategorías opcionales
- **Soporte dual**: Proyectos HTML (iframe) y externos (Vercel/otros)
- **Navegación intuitiva** con breadcrumbs
- **Thumbnails** y badges de tecnología
- **Filtrado** por categoría y subcategoría
- Ver sección completa "Agregar Herramientas" más abajo ⬇️

## 🔧 Sistema de Herramientas (Nuevo)

### Estructura de Categorías

El portafolio incluye un sistema completo de herramientas organizadas en 5 categorías:

1. **Ingeniería Civil** (con subcategorías)
   - Control y Gestión de Obras
   - Estructuras
   - Hidráulica
   - Geotecnia
   - Vial

2. **Hábitos y Organización** (sin subcategorías)
3. **Infografías** (sin subcategorías)
4. **Finanzas** (sin subcategorías)
5. **Otros Proyectos** (sin subcategorías)

### Tipos de Proyectos

El sistema soporta **DOS tipos de proyectos**:

#### 1. Proyectos HTML (Herramientas standalone)
- Se muestran en un **iframe** dentro del portafolio
- Archivos ubicados en `public/herramientas/[categoria]/[subcategoria]/`
- Se abren en una página del portafolio con visor de iframe
- Incluyen botón para "Abrir en nueva pestaña"

#### 2. Proyectos Externos (Apps desplegadas)
- Redirigen a **URL externa** (ej: Vercel, Netlify, etc.)
- Se abren en **nueva pestaña**
- Se muestran exactamente igual visualmente (misma card)

### ➕ Cómo Agregar una Nueva Herramienta

#### Opción A: Proyecto HTML

**1. Crea tu archivo HTML:**

```bash
# Ejemplo: Calculadora de vigas
public/herramientas/ingenieria-civil/estructuras/calc-vigas.html
```

**2. Registra en `data/herramientas.ts`:**

```typescript
// Dentro de la subcategoría correspondiente
{
  id: "calc-vigas",
  name: "Calculadora de Vigas",
  description: "Calcula momentos, cortantes y deflexiones en vigas",
  type: "html",
  htmlPath: "/herramientas/ingenieria-civil/estructuras/calc-vigas.html",
  thumbnail: "/thumbnails/calc-vigas.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  featured: true,  // Opcional: destacar en home
  tags: ["Nuevo"]  // Opcional: badges adicionales
}
```

**3. Agrega thumbnail (opcional):**

```bash
# Captura de pantalla 800x600px
public/thumbnails/calc-vigas.png
```

Si no tienes thumbnail, usa: `/thumbnails/placeholder.png`

#### Opción B: Proyecto Externo

**Registra en `data/herramientas.ts`:**

```typescript
{
  id: "dashboard-proyectos",
  name: "Dashboard de Gestión",
  description: "Sistema completo de gestión de obras con Firebase",
  type: "external",
  externalUrl: "https://mi-app.vercel.app",
  thumbnail: "/thumbnails/dashboard.png",
  technologies: ["Next.js", "Firebase", "Tailwind"],
  featured: false
}
```

### 📂 Ubicación de Archivos

```
public/
├── herramientas/
│   ├── ingenieria-civil/
│   │   ├── control-gestion/    # Tus HTMLs aquí
│   │   ├── estructuras/
│   │   ├── hidraulica/
│   │   ├── geotecnia/
│   │   └── vial/
│   ├── habitos-organizacion/
│   ├── infografias/
│   ├── finanzas/
│   ├── otros/
│   └── ejemplo-template.html   # Template de referencia
└── thumbnails/
    └── [nombre-proyecto].png
```

### 🎨 Template HTML Recomendado

Ver archivo: `public/herramientas/ejemplo-template.html`

Características del template:
- Autocontenido (CSS y JS inline)
- Responsive mobile-first
- Diseño moderno con gradientes
- Animaciones suaves

### 🔍 Navegación del Sistema

```
/herramientas                                    → Grid de categorías
/herramientas/ingenieria-civil                  → Subcategorías
/herramientas/ingenieria-civil/estructuras      → Proyectos
/herramientas/ingenieria-civil/estructuras/calc-vigas → Visor iframe
```

Para categorías sin subcategorías:
```
/herramientas/finanzas                          → Proyectos directos
/herramientas/finanzas/calculadora-roi          → Visor iframe
```

## 📊 Scripts Disponibles

```bash
npm run dev          # Desarrollo en localhost:3000
npm run build        # Build de producción
npm run start        # Ejecutar build de producción
npm run lint         # Linter ESLint
```

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
# Limpiar caché y reinstalar
rm -rf .next node_modules
npm install
```

### Build falla en Vercel
- Verificar que todas las dependencias estén en `package.json`
- Revisar logs de Vercel para errores específicos
- Asegurar que no haya errores de TypeScript

### Imágenes no cargan
- Verificar URLs de imágenes externas
- Configurar `next.config.ts` si usas dominios externos:
```typescript
module.exports = {
  images: {
    domains: ['i.postimg.cc', 'via.placeholder.com'],
  },
}
```

## 📄 Licencia

Este proyecto es de uso personal para el portafolio de Andrés Cariola.

## 📞 Contacto

- **Email:** Cariolaflex@gmail.com
- **WhatsApp:** +56 9 9284 1001
- **LinkedIn:** [Andrés Cariola](https://www.linkedin.com/in/cariola-flex-cariola-ampuero-65154939a)
- **GitHub:** [@CariolaFlex](https://github.com/CariolaFlex)

---

**Desarrollado con ❤️ usando Next.js 14 y TypeScript**
