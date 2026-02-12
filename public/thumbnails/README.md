# 🖼️ Thumbnails de Proyectos

Esta carpeta contiene las imágenes de vista previa (thumbnails) de tus herramientas y proyectos.

## 📐 Especificaciones

- **Tamaño recomendado:** 800x600px (4:3) o 1200x675px (16:9)
- **Formato:** PNG o JPG
- **Peso máximo:** 500KB (optimiza tus imágenes)

## ➕ Cómo Crear Thumbnails

### Opción 1: Captura de Pantalla Manual
1. Abre tu herramienta en el navegador
2. Toma una captura de pantalla
3. Recórtala a 800x600px
4. Optimiza la imagen (TinyPNG, Squoosh, etc.)
5. Guarda como `nombre-proyecto.png`

### Opción 2: Herramientas Online
- [Screenshot API](https://www.screenshotapi.net/)
- [Puppeteer](https://pptr.dev/)
- [Playwright](https://playwright.dev/)

### Opción 3: Crear Mockup
Si aún no tienes la herramienta lista, crea un mockup:
- [Figma](https://figma.com)
- [Canva](https://canva.com)
- [Photopea](https://photopea.com) (gratis, online)

## 📝 Convención de Nombres

Usa el mismo `id` que en `data/herramientas.ts`:

```typescript
// En herramientas.ts
{
  id: "calc-vigas",
  thumbnail: "/thumbnails/calc-vigas.png",  // ← Mismo nombre
  ...
}
```

## 🎨 Placeholder

Si no tienes thumbnail todavía, usa:

```typescript
thumbnail: "/thumbnails/placeholder.png"
```

Esto mostrará una imagen genérica mientras preparas el thumbnail definitivo.

## 🚀 Tips

1. **Captura la parte más importante** de tu herramienta
2. **Usa alta resolución** para que se vea bien en pantallas Retina
3. **Optimiza el peso** antes de subir (Next.js también optimiza automáticamente)
4. **Mantén coherencia visual** entre todos tus thumbnails
