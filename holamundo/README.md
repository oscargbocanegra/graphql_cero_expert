# GraphQL Hello World 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Part of the "GraphQL Zero to Expert" course series**

A simple GraphQL API built with Express.js and TypeScript. This project serves as an introduction to GraphQL fundamentals and demonstrates how to set up a basic GraphQL server from scratch.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 🎯 About

This is the **first project** in the **GraphQL Zero to Expert** course. It demonstrates:

- Basic GraphQL server setup with Express.js
- TypeScript integration for type safety
- GraphQL schema definition and resolvers
- Query handling and GraphiQL playground
- Development environment configuration
- Production build setup

Perfect for beginners who want to understand GraphQL fundamentals before diving into more complex topics.

## ✨ Features

- 🔥 **GraphQL API** with Express.js
- 📝 **TypeScript** for type safety
- 🔧 **GraphiQL** playground for testing queries
- 🗜️ **Compression** middleware for performance
- 🌐 **CORS** enabled for cross-origin requests
- 🚀 **Hot reload** in development mode
- 📦 **Production build** support
- 🎨 **Clean architecture** with organized folders

## 🏗️ Architecture

This project follows a simple yet scalable GraphQL server architecture:

```
Client Request → Express.js → CORS → Compression → GraphQL Middleware → Schema → Resolvers → Response
```

### Data Flow

1. **Client** sends GraphQL query/mutation
2. **Express.js** receives the HTTP request
3. **Middleware** (CORS, Compression) processes the request
4. **GraphQL middleware** parses and validates the query
5. **Schema** defines the structure and types
6. **Resolvers** execute the business logic
7. **Response** is sent back to the client

## 📋 Prerequisites

Before running this application, make sure you have installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Basic knowledge of JavaScript/TypeScript
- Understanding of HTTP and APIs

## 🛠️ Installation

### Step 1: Initialize the project

```bash
npm init
```
Creates the `package.json` file with project metadata.

### Step 2: Configure TypeScript

```bash
npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6
```
Creates the `tsconfig.json` file with TypeScript configuration optimized for Node.js and GraphQL.

### Step 3: Install project dependencies

**Required dependencies for this project:**
- `express` - Web framework for Node.js
- `express-graphql` - GraphQL middleware for Express
- `graphql` - GraphQL implementation
- `graphql-import-node` - Import GraphQL files
- `compression` - Compression middleware
- `cors` - Cross-Origin Resource Sharing
- `typescript` - TypeScript language
- `graphql-tools` - GraphQL utilities

**Production dependencies:**
```bash
npm install express@^4.18.0 express-graphql graphql graphql-import-node compression cors typescript graphql-tools
```

**Development dependencies:**
```bash
npm install @types/compression @types/express @types/cors @types/express-graphql @types/node @types/graphql ts-node nodemon -D
```

### Step 4: Configure package.json scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "node build/server.js",
    "start:dev": "nodemon --exec ts-node src/server.ts",
    "build": "tsc",
    "dev": "npm run start:dev",
    "clean": "rm -rf build"
  }
}
```

## 🚀 Usage

### Development Mode

```bash
npm run start:dev
# or
npm run dev
```

The server will start with hot-reload enabled on `http://localhost:5300`

### Production Mode

```bash
npm run build
npm start
```

### Accessing GraphiQL Playground

Once the server is running, access the interactive GraphiQL playground at:
```
http://localhost:5300/
```
Here you can write and test GraphQL queries in real-time.


## 📁 Project Structure

```
holamundo/
├── src/
│   ├── resolvers/
│   │   ├── query.ts           # Query resolvers
│   │   └── resolversMap.ts    # Resolver mapping
│   ├── schema/
│   │   ├── index.ts           # Schema exports
│   │   └── schema.graphql     # GraphQL schema definition
│   └── server.ts              # Express server setup
├── build/                     # Compiled JavaScript files (generated)
├── node_modules/              # Dependencies
├── package.json               # Project configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

### Key Files Description

- **`src/server.ts`** - Main server file with Express and GraphQL configuration
- **`src/schema/index.ts`** - GraphQL schema definition and exports
- **`src/schema/schema.graphql`** - GraphQL type definitions
- **`src/resolvers/query.ts`** - Implementation of GraphQL queries
- **`src/resolvers/resolversMap.ts`** - Maps resolvers to schema
- **`tsconfig.json`** - TypeScript compiler configuration
- **`package.json`** - Project dependencies and scripts

## 🛠️ Technologies Used

| Technology | Purpose | Version |
|------------|---------|---------|
| **TypeScript** | Type-safe JavaScript superset | ^5.x |
| **Node.js** | JavaScript runtime environment | ^14.x |
| **Express.js** | Web application framework | ^4.18.x |
| **GraphQL** | Query language for APIs | ^16.x |
| **express-graphql** | GraphQL HTTP server middleware | ^0.12.x |
| **graphql-tools** | Build and manipulate GraphQL schemas | ^8.x |
| **compression** | Node.js compression middleware | ^1.x |
| **cors** | Cross-Origin Resource Sharing | ^2.x |

## 🐛 Troubleshooting

### Common Issues and Solutions

#### 1. Port Already in Use
```bash
Error: listen EADDRINUSE: address already in use :::5300
```
**Solution:** 
- Change the PORT in `src/server.ts`
- Or kill the process using port 5300: `sudo lsof -t -i:5300 | xargs kill -9`

#### 2. TypeScript Compilation Errors
```bash
npm run build
```
Check your `tsconfig.json` configuration and ensure all TypeScript files are valid.

#### 3. Module Not Found Errors
```bash
npm install
```
Reinstall all dependencies to ensure they're properly installed.

#### 4. GraphQL Schema Errors
Verify your schema syntax in `src/schema/schema.graphql` and ensure resolvers match the schema definition.

#### 5. Express Version Compatibility
If you encounter dependency conflicts, use Express v4:
```bash
npm install express@^4.18.0
```

### Development Tips

- Use the GraphiQL playground to test queries before implementing in your application
- Check the browser's Network tab for GraphQL request/response details
- Enable TypeScript strict mode for better type checking
- Use `console.log()` in resolvers for debugging

---

## 🎓 Learning Objectives

After completing this project, you should understand:

- ✅ How to set up a GraphQL server with Express.js
- ✅ TypeScript integration with GraphQL
- ✅ Schema definition and type system
- ✅ Writing and testing GraphQL queries
- ✅ Project structure best practices
- ✅ Development vs production environments

## 🚀 Next Steps

Ready to advance your GraphQL skills? Continue with:

1. **Advanced Queries** - Learn about fragments, variables, and aliases
2. **Mutations** - Implement data modification operations
3. **Subscriptions** - Real-time data with WebSocket connections
4. **Database Integration** - Connect to MongoDB or PostgreSQL
5. **Authentication** - Secure your GraphQL endpoints
6. **Testing** - Unit and integration testing strategies

**Course Progress:** 📚 Module 1 of 12 - Hello World ✅

---

