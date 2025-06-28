# 🚀 Deployment Guide - REST to GraphQL API

This guide will help you deploy your Formula 1 GraphQL API on different platforms.

## 🔧 Dependency Conflict Resolution

### ❌ Current Issue
```
npm ERR! peer dep missing: graphql@^15.3.0 || ^16.0.0, required by apollo-datasource-rest@3.7.0
```

The project uses GraphQL v14.3.1, but `apollo-datasource-rest@3.7.0` requires GraphQL v15.3.0 or higher.

### ✅ Available Solutions

#### **Option 1: Update GraphQL (Recommended)**
```bash
npm install graphql@^16.8.1 apollo-server@^3.13.0
```

**Advantages:**
- Modern compatibility
- Better performance
- Long-term support

**Required changes:**
- Verify compatibility in `src/schema/index.ts`
- Possible minor adjustments in imports

#### **Option 2: Downgrade apollo-datasource-rest**
```bash
npm install apollo-datasource-rest@^0.6.15
```

**Advantages:**
- Immediate compatibility
- No code changes required

**Disadvantages:**
- Older version
- Fewer features

#### **Option 3: Use --legacy-peer-deps**
```bash
npm install --legacy-peer-deps
```

**Advantages:**
- Quick solution
- No dependency changes required

**Disadvantages:**
- Doesn't solve the underlying issue
- May cause future problems

#### **Option 4: Migrate to Apollo Server 4 (Advanced)**
```bash
npm install @apollo/server@^4.0.0 @apollo/datasource-rest@^6.0.0
```

**Advantages:**
- More modern stack
- Better performance
- Future-proof

**Disadvantages:**
- Requires significant refactoring
- Breaking changes in the API

## 🌐 Deployment Options

### 1. **Vercel** (Recommended for this project)

#### Automatic Configuration
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Vercel will automatically detect the Node.js project

#### Manual Configuration (`vercel.json`)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/graphql.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/graphql",
      "dest": "/api/graphql"
    },
    {
      "src": "/",
      "dest": "/api/graphql"
    },
    {
      "src": "/(.*)",
      "dest": "/api/graphql"
    }
  ]
}
```

#### Serverless Function (`api/graphql.js`)
```javascript
const { ApolloServer } = require('apollo-server-lambda');
const schema = require('../build/schema').default;
const { dataSources } = require('../build/data');

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
    dataSources: () => ({
        // Your data sources here
    })
});

module.exports.handler = server.createHandler({
    cors: {
        origin: '*',
        credentials: true,
    },
});
```

#### Scripts para Vercel
```json
{
  "scripts": {
    "vercel-build": "npm run build",
    "start": "node build/server.js"
  }
}
```

### 2. **Heroku**

#### Configuración
1. Crea un `Procfile`:
```
web: npm start
```

2. Asegúrate de que el puerto sea dinámico:
```typescript
const PORT = process.env.PORT || 4000;
```

#### Deployment
```bash
heroku create tu-app-graphql-f1
git push heroku main
```

### 3. **Railway**

#### Configuración
1. Conecta tu repositorio
2. Railway detecta automáticamente Node.js
3. Configura variables de entorno si es necesario

### 4. **Netlify Functions**

#### Configuración para Serverless
1. Crea `netlify/functions/graphql.js`:
```javascript
const { ApolloServer } = require('apollo-server-lambda');
const { typeDefs, resolvers } = require('../../build/schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});

exports.handler = server.createHandler();
```

### 5. **GitHub Pages + GitHub Actions**

#### Para documentación estática
```yaml
# .github/workflows/docs.yml
name: Deploy Docs
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm ci
    - run: npm run build:docs
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./docs
```

## 🛠️ Pasos de Deployment Recomendados

### Para Vercel (Solución Rápida)

1. **Resolver dependencias:**
```bash
cd rest-to-api-graphql
npm install graphql@^16.8.1 --save
npm install --legacy-peer-deps
```

2. **Crear archivo de configuración:**
```bash
echo '{
  "version": 2,
  "builds": [
    { "src": "build/server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "build/server.js" }
  ]
}' > vercel.json
```

3. **Actualizar scripts en package.json:**
```json
{
  "scripts": {
    "vercel-build": "npm run build",
    "start": "node build/server.js"
  }
}
```

4. **Deploy en Vercel:**
```bash
npx vercel --prod
```

### Para desarrollo local después de resolver dependencias:

```bash
npm install
npm run build:dev
```

## 🔍 Verificación Post-Deployment

1. **Health Check:**
   - Visita `/graphql` para el playground
   - Ejecuta query básica: `{ drivers { name } }`

2. **Performance Test:**
   - Usa la colección Postman incluida
   - Verifica tiempos de respuesta

3. **Error Monitoring:**
   - Configura logging apropiado
   - Monitorea métricas de uso

## 📞 Soporte

Si encuentras problemas durante el deployment:

1. Revisa los logs de la plataforma
2. Verifica que todas las dependencias estén correctamente instaladas
3. Confirma que el puerto sea configurable via variables de entorno
4. Asegúrate de que el build se complete exitosamente

## 🔄 Actualizaciones Futuras

Para mantener el proyecto actualizado:

1. **Dependencias:**
```bash
npm audit
npm update
```

2. **GraphQL Schema:**
   - Versiona tus cambios de schema
   - Documenta breaking changes

3. **API de OpenF1:**
   - Monitorea cambios en la API externa
   - Ajusta data sources según sea necesario
