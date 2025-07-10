# 🔰 GraphQL Hello World

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5+-blue.svg)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16+-e10098.svg)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4+-311C87.svg)](https://www.apollographql.com/)
[![Express](https://img.shields.io/badge/Express-4+-000000.svg)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🚀 **Learn GraphQL from Zero** - Your first steps into GraphQL with a simple, beginner-friendly Hello World API.

## 🎯 What You'll Learn

This project is designed to teach GraphQL fundamentals through a simple, easy-to-understand implementation:

- ✅ **GraphQL Basics** - Schema definition, queries, mutations
- ✅ **Apollo Server Setup** - Modern GraphQL server configuration
- ✅ **TypeScript Integration** - Type-safe GraphQL development
- ✅ **Resolver Functions** - Data fetching and manipulation
- ✅ **GraphQL Playground** - Interactive API exploration
- ✅ **Express Integration** - Web server fundamentals
- ✅ **Development Workflow** - Hot reload and debugging

## 🏁 Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 8.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/graphql_cero_expert.git
cd graphql_cero_expert/holamundo

# Install dependencies
npm install

# Start development server
npm run build:dev
```

### 🚀 Server Running

Your GraphQL playground will be available at:
```
http://localhost:5000/graphql
```
## 📊 API Features

### 🔰 **Simple User Management**

| Endpoint | Description | Type |
|----------|-------------|------|
| `users` | Get all users | Query |
| `user(id)` | Get user by ID | Query |
| `addUser` | Create new user | Mutation |
| `updateUser` | Update existing user | Mutation |
| `deleteUser` | Delete user | Mutation |

## 🎮 Example Queries

### 🔍 Get All Users
```graphql
query GetAllUsers {
  users {
    id
    name
    email
    age
    website
  }
}
```

### 👤 Get Single User
```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    age
    website
  }
}
```

### ➕ Create New User
```graphql
mutation AddUser($input: UserInput!) {
  addUser(input: $input) {
    id
    name
    email
    message
  }
}
```

### ✏️ Update User
```graphql
mutation UpdateUser($id: ID!, $input: UserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    message
  }
}
```

### 🗑️ Delete User
```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
    message
  }
}
```

## 🏗️ Project Structure

```
holamundo/
├── 📁 src/                    # Source code
│   ├── 📁 data/              # Data layer
│   │   └── data.store.ts     # In-memory data store
│   ├── 📁 resolvers/         # GraphQL Resolvers
│   │   ├── mutation.ts       # Mutation resolvers
│   │   ├── query.ts          # Query resolvers
│   │   ├── type.ts           # Type resolvers
│   │   └── resolversMap.ts   # Resolver mapping
│   ├── 📁 schema/            # GraphQL Schema
│   │   ├── index.ts          # Schema builder
│   │   └── schema.graphql    # Type definitions
│   ├── index.ts              # Application entry point
│   └── server.ts             # Apollo Server setup
├── � package.json           # Dependencies & scripts
├── � tsconfig.json          # TypeScript configuration
└── 📖 README.md              # This documentation
```
## 🎓 Learning Path

### 1️⃣ **Understanding GraphQL Basics**
- Explore the schema in `src/schema/schema.graphql`
- Learn about types, queries, and mutations
- Understand the GraphQL type system

### 2️⃣ **Resolver Functions**
- Study `src/resolvers/` folder structure
- Learn how resolvers fetch and manipulate data
- Understand the resolver pattern

### 3️⃣ **Data Management**
- Check `src/data/data.store.ts` for data handling
- Learn about in-memory data storage
- Practice CRUD operations

### 4️⃣ **Server Configuration**
- Examine `src/server.ts` for Apollo Server setup
- Understand middleware integration
- Learn development vs production configurations

## 🔧 Development Scripts

```bash
# Development with hot reload
npm run build:dev

# Production build
npm run build

# Start production server
npm start
```

## 🧪 Testing with GraphQL Playground

Once your server is running, visit `http://localhost:5000/graphql` to:

- 📋 **Explore the Schema** - Browse all available types and operations
- 🔍 **Try Example Queries** - Use the queries provided above
- 📝 **Create Your Own** - Experiment with different query combinations
- 🔧 **Learn GraphQL Syntax** - Get familiar with the query language

## 🎯 Use Cases

### 🔰 **Learning Applications**
- First steps in GraphQL development
- Understanding API design patterns
- Learning TypeScript with GraphQL

### 📚 **Educational Projects**
- GraphQL fundamentals course
- API development training
- Server-side development basics

### 🛠️ **Development Training**
- Apollo Server implementation
- Express.js integration
- TypeScript development patterns

## 🤝 Contributing

This is an educational project! Here's how you can help improve it:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 💡 Contribution Ideas
- Add more example queries
- Improve error handling
- Add input validation
- Create additional resolvers
- Enhance documentation

## 📚 Resources

### 📖 **GraphQL Learning**
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript GraphQL Guide](https://typegraphql.com/)

### 🛠️ **Development Tools**
- [GraphQL Playground](https://github.com/graphql/graphql-playground)
- [Apollo Studio](https://studio.apollographql.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **Apollo GraphQL** for the excellent server framework
- **The GraphQL Community** for continuous innovation
- **TypeScript Team** for making JavaScript development better

---

<div align="center">

**🔰 Ready to learn GraphQL basics? Start here! 🔰**

[![Back to Main Project](https://img.shields.io/badge/Back%20to%20Main-GraphQL%20Zero%20to%20Expert-blue.svg)](../README.md)

</div>

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

