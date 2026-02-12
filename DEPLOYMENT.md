# 🚀 Guía de Deployment

## 📋 Checklist Pre-Deploy

Antes de hacer deploy, verifica que:

- [ ] El build de producción funciona: `npm run build`
- [ ] No hay errores de TypeScript
- [ ] Todas las imágenes externas están configuradas en `next.config.ts`
- [ ] Los meta tags de SEO están correctos en `app/layout.tsx`
- [ ] El contenido en `/data` está actualizado
- [ ] El `.gitignore` incluye `.env*` si usas variables de entorno

## 🌐 Deploy a Vercel (Recomendado)

### Opción 1: Deploy desde GitHub

1. **Subir código a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Next.js"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tu-portafolio.git
git push -u origin main
```

2. **Conectar con Vercel:**
   - Ir a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importar tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

3. **Configuración automática:**
   - Framework: Next.js (detectado automáticamente)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Deploy completado:**
   - URL: `https://tu-proyecto.vercel.app`
   - Dominio personalizado (opcional): Settings → Domains

### Opción 2: Deploy con CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 🔧 Deploy a Netlify

1. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Netlify.toml (opcional):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🐳 Deploy con Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Comandos:**
```bash
# Build
docker build -t portafolio .

# Run
docker run -p 3000:3000 portafolio
```

## 🌍 Variables de Entorno (si las necesitas)

Si en el futuro agregas variables de entorno:

**Local (`.env.local`):**
```env
NEXT_PUBLIC_API_URL=https://api.example.com
CONTACT_FORM_EMAIL=tu@email.com
```

**Vercel:**
- Dashboard → Settings → Environment Variables
- Agregar cada variable
- Redeploy para que tomen efecto

**Netlify:**
- Site settings → Environment variables
- Agregar variables
- Redeploy

## 📊 Optimizaciones Post-Deploy

### 1. Configurar Analytics

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

En `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Configurar Dominio Personalizado

**En Vercel:**
- Settings → Domains → Add Domain
- Configurar DNS según instrucciones
- Esperar propagación (5-10 minutos)

**DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. Configurar HTTPS

- Vercel: Automático (Let's Encrypt)
- Netlify: Automático (Let's Encrypt)
- Otros: Configurar certificado SSL manualmente

## 🔍 Monitoreo Post-Deploy

### Verificar que todo funciona:

1. **Homepage carga correctamente**
   ```bash
   curl -I https://tu-dominio.com
   # Debe retornar: HTTP/2 200
   ```

2. **SEO Tags están presentes**
   - Abrir DevTools → Elements
   - Verificar `<head>` tiene meta tags
   - Usar [Meta Tags Tester](https://metatags.io/)

3. **Imágenes cargan correctamente**
   - Verificar todas las secciones
   - Abrir Network tab para ver errores

4. **Performance**
   - Lighthouse (DevTools)
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - Meta: Score > 90

5. **Mobile Responsive**
   - DevTools → Toggle Device Toolbar
   - Probar en dispositivos reales

## 🐛 Troubleshooting Común

### Build falla en producción

**Error: "Module not found"**
```bash
# Verificar package.json
npm install --production=false
npm run build
```

**Error: "Image optimization error"**
- Verificar `next.config.ts` tiene los dominios correctos
- Asegurar URLs de imágenes son HTTPS

**Error: "TypeScript errors"**
```bash
# Revisar errores localmente
npm run build
# Corregir errores mostrados
```

### Imágenes no cargan en producción

1. Verificar `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.postimg.cc',
    },
  ],
}
```

2. Verificar URLs sean HTTPS (no HTTP)
3. Verificar imágenes existan en URLs

### Performance lento

1. **Optimizar imágenes:**
   - Usar WebP
   - Comprimir con TinyPNG
   - Lazy loading (ya implementado con next/image)

2. **Code Splitting:**
   - Ya implementado automáticamente por Next.js

3. **Caching:**
   - Vercel/Netlify lo manejan automáticamente

## 📈 Actualizaciones Futuras

### Workflow de actualización:

```bash
# 1. Hacer cambios localmente
# 2. Probar localmente
npm run dev

# 3. Verificar build
npm run build

# 4. Commit y push
git add .
git commit -m "feat: descripción del cambio"
git push

# 5. Deploy automático (si está configurado)
# O manual: vercel --prod
```

### CI/CD Automático:

Vercel y Netlify hacen deploy automático en cada push a `main`.

Para configurar diferentes ambientes:
- `main` → Producción
- `develop` → Staging
- Feature branches → Preview

## 📞 Soporte

Si encuentras problemas durante el deploy:

1. Revisar logs de build en Vercel/Netlify
2. Revisar esta guía de troubleshooting
3. Consultar [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
4. Contactar: Cariolaflex@gmail.com

---

✨ **¡Feliz Deploy!**
