# Nave Component Library - Deployment Guide

## ✅ Configuración Completa para Vercel/Netlify

### 📋 Archivos de Configuración Creados:

1. **`app/page.tsx`** - Página raíz requerida por Next.js
2. **`vercel.json`** - Configuración para Vercel
3. **`netlify.toml`** - Configuración para Netlify
4. **`package.json`** - Scripts de build actualizados

---

## 🚀 Desplegar en Vercel

### Opción 1: CLI (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Build local para verificar
npm run build

# Deploy
vercel --prod
```

### Opción 2: Dashboard
1. Ve a https://vercel.com/new
2. Importa tu repositorio GitHub
3. Vercel detectará automáticamente Next.js
4. **NO MODIFICAR** la configuración, ya está en `vercel.json`
5. Click en "Deploy"

---

## 🌐 Desplegar en Netlify

### Opción 1: CLI
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Build local
npm run build

# Deploy
netlify deploy --prod
```

### Opción 2: Dashboard
1. Ve a https://app.netlify.com/start
2. Conecta tu repositorio
3. Netlify detectará `netlify.toml` automáticamente
4. Click en "Deploy site"

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Build completo (librería + app)
npm run build

# Solo build de la librería UI
npm run build:lib

# Iniciar servidor de producción
npm start
```

---

## ⚠️ Notas Importantes

### Build Order
El build sigue este orden:
1. `postinstall` → Instala deps de `packages/ui-library`
2. `prebuild` → Compila `packages/ui-library/dist`
3. `build` → Compila la app Next.js

### Directorios
- `/dist` global está ignorado
- `packages/ui-library/dist` **NO está ignorado** (necesario para producción)

### Variables de Entorno
Si necesitas variables de entorno:

**Vercel:**
```bash
vercel env add NEXT_PUBLIC_API_URL
```

**Netlify:**
```bash
netlify env:set NEXT_PUBLIC_API_URL "https://api.example.com"
```

---

## 🐛 Troubleshooting

### Error 404 en producción
✅ **Solucionado** - `app/page.tsx` ahora existe

### "Module not found: @/packages/ui-library/dist"
✅ **Solucionado** - `prebuild` compila la librería automáticamente

### Build timeout
Si el build tarda más de 10 minutos en Netlify/Vercel:
- Verifica que `node_modules` no esté en el repo
- Asegúrate que `packages/ui-library/dist` esté commiteado

---

## 📝 Checklist Pre-Deploy

- [x] `app/page.tsx` existe
- [x] `vercel.json` configurado
- [x] `netlify.toml` configurado
- [x] Scripts de build actualizados
- [x] `.gitignore` permite `packages/ui-library/dist`
- [ ] Compilar librería: `npm run build:lib`
- [ ] Commit y push de `packages/ui-library/dist`
- [ ] Test local: `npm run build && npm start`

---

## 🎯 Comando Rápido para Deploy

```bash
# 1. Compilar todo
npm run build:lib
npm run build

# 2. Commit (si es necesario)
git add packages/ui-library/dist
git commit -m "chore: build ui-library for production"
git push

# 3. Deploy
vercel --prod
# o
netlify deploy --prod
```

---

## 📚 Recursos

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Monorepo](https://vercel.com/docs/concepts/monorepos)
- [Netlify Next.js Plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
