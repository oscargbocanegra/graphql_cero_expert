# 🚨 Troubleshooting: Error 404 en Vercel

## ❌ Problema
Recibes un error `404: NOT_FOUND` al acceder a tu API GraphQL en Vercel.

## 🔍 Causa
El error 404 indica que Vercel no puede encontrar tu función serverless. Esto puede ser debido a:
1. Configuración incorrecta de `vercel.json`
2. Problemas con las rutas
3. Archivo de función serverless no detectado

## ✅ Solución Aplicada

### 1. **Configuración actualizada de `vercel.json`**
```json
{
  "version": 2,
  "functions": {
    "api/graphql.ts": {
      "runtime": "@vercel/node@2"
    }
  },
  "routes": [
    {
      "src": "/graphql",
      "dest": "/api/graphql"
    },
    {
      "src": "/",
      "dest": "/api/graphql"
    }
  ],
  "installCommand": "npm install --legacy-peer-deps",
  "buildCommand": "npm run build"
}
```

### 2. **Función serverless simplificada**
- Eliminadas configuraciones no compatibles con Apollo Server Lambda
- Mantenida solo la configuración esencial para funcionar en Vercel

## 🚀 Próximos Pasos

### 1. **Redesplegar el proyecto**
```bash
# En tu terminal local
cd /path/to/project
git add .
git commit -m "Fix: Updated Vercel configuration for 404 error"
git push origin main
```

### 2. **Verificar las URLs después del redespliegue**
- **GraphQL API**: `https://graphql-cero-expert.vercel.app/api/graphql`
- **Ruta principal**: `https://graphql-cero-expert.vercel.app/` (también debería funcionar)

### 3. **URLs alternativas para probar**
Si las anteriores no funcionan, prueba:
- `https://graphql-cero-expert.vercel.app/graphql`
- `https://graphql-cero-expert-pcgz21a6b-oscargbocanegras-projects.vercel.app/api/graphql`

## 🧪 Pruebas

### Desde el navegador:
1. Ve a: `https://graphql-cero-expert.vercel.app/api/graphql`
2. Deberías ver la interfaz de GraphQL o un mensaje de Apollo Server

### Desde Postman/Insomnia:
```
POST https://graphql-cero-expert.vercel.app/api/graphql
Content-Type: application/json

{
  "query": "{ __schema { types { name } } }"
}
```

## 📋 Checklist de Verificación

- [ ] `vercel.json` actualizado con configuración de functions
- [ ] `api/graphql.ts` sin errores de TypeScript
- [ ] Proyecto desplegado con los cambios
- [ ] Probado el endpoint `/api/graphql`
- [ ] Verificado que introspection está habilitado

---

**Nota**: Después de aplicar estos cambios, es necesario redesplegar el proyecto para que Vercel aplique la nueva configuración.
