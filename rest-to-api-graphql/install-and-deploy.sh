#!/bin/bash

# 🚀 Automatic Installation and Deploy Script
# For the rest-to-api-graphql project

echo "🔧 Starting automatic project setup..."

# Verify we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the rest-to-api-graphql directory"
    exit 1
fi

echo "📦 Installing dependencies..."

# Backup package-lock.json if it exists
if [ -f "package-lock.json" ]; then
    mv package-lock.json package-lock.json.backup
    echo "🔄 package-lock.json backup created"
fi

# Clean node_modules if it exists
if [ -d "node_modules" ]; then
    rm -rf node_modules
    echo "🧹 Cleaning previous node_modules"
fi

# Install updated GraphQL
echo "⬆️ Updating GraphQL to version 16..."
npm install graphql@^16.8.1 --save

# Install all dependencies
echo "📥 Installing all dependencies..."
npm install

# Verify everything is working
echo "🔍 Verifying installation..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Installation completed successfully!"
    echo ""
    echo "🚀 Available deployment options:"
    echo ""
    echo "   1️⃣ Vercel (Recommended):"
    echo "      npx vercel --prod"
    echo ""
    echo "   2️⃣ Heroku:"
    echo "      git push heroku main"
    echo ""
    echo "   3️⃣ Railway:"
    echo "      Connect your GitHub repository"
    echo ""
    echo "📋 For more detailed options, check:"
    echo "   - DEPLOYMENT.md (complete guide)"
    echo "   - QUICK-DEPLOY.md (quick solution)"
    echo ""
    echo "🎯 To test locally:"
    echo "   npm run dev"
    echo "   Then visit: http://localhost:5000/graphql"
else
    echo "❌ Error during build. Check the error messages above."
    echo "💡 Alternative solution:"
    echo "   npm install --legacy-peer-deps"
fi
