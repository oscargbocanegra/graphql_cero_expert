#!/bin/bash

# Script de despliegue automatizado para Vercel
# Formula 1 GraphQL API

echo "🏎️  Desplegando Formula 1 GraphQL API a Vercel..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde el directorio del proyecto."
    exit 1
fi

# Verificar que vercel está instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Limpiar builds anteriores
echo "🧹 Limpiando builds anteriores..."
rm -rf build/ dist/ .vercel/

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install --legacy-peer-deps

# Compilar el proyecto
echo "🔨 Compilando proyecto..."
npm run build

# Verificar que la compilación fue exitosa
if [ ! -d "build" ]; then
    echo "❌ Error: La compilación falló. No se encontró el directorio build."
    exit 1
fi

# Desplegar a Vercel
echo "🚀 Desplegando a Vercel..."
vercel --prod

echo "✅ ¡Despliegue completado!"
echo ""
echo "📋 Próximos pasos:"
echo "   1. Verifica que el endpoint GraphQL funcione correctamente"
echo "   2. Prueba las queries en GraphQL Playground"
echo "   3. Revisa los logs en Vercel Dashboard si hay errores"
echo ""
echo "🔗 Endpoints útiles:"
echo "   • GraphQL API: https://tu-proyecto.vercel.app/graphql"
echo "   • GraphQL Playground: https://tu-proyecto.vercel.app/"
echo ""
echo "📚 Documentación disponible:"
echo "   • DEPLOYMENT.md - Guía completa de despliegue"
echo "   • TROUBLESHOOTING.md - Solución de problemas"
echo "   • QUICK-DEPLOY.md - Guía rápida"
