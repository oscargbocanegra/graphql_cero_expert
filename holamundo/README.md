paso 1.
npm init
crea el archivo package.json

paso 2.
npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6
crea el archivo tsconfig.json

paso 3.
Instalaciones necesarias proyecto
Lista de dependencias que necesitaremos para trabajar en este
proyecto:
● express
● express-graphql
● graphql
● graphql-import-node
● compression
● cors
● typescript
● graphql-tools
● graphql-playground-middleware-express

Dependencias de producción:
npm install express express-graphql graphql ncp http graphql-import-node compression cors
typescript graphql-tools graphql-playground-middleware-express
Dependencias de desarrollo:
npm install @types/compression @types/express @types/cors @types/express-graphql
@types/node @types/graphql -D

