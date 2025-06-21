# 🎓 Academia Online - GraphQL API Server

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/docs/apollo-server/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Learning Objectives](#-learning-objectives)
- [Contributing](#-contributing)
- [License](#-license)

## 🌟 Overview

**Academia Online** is a comprehensive GraphQL API server designed for educational platforms. This project serves as a practical implementation of modern web development technologies, specifically focusing on GraphQL API design patterns, TypeScript development, and scalable server architecture.

Built as a **training project**, it demonstrates best practices in GraphQL development, from schema design to resolver implementation, making it an excellent resource for developers learning GraphQL fundamentals and advanced concepts.

## ✨ Features

- 🚀 **High-Performance GraphQL API** - Built with Apollo Server for optimal query execution
- 🎯 **Schema-First Design** - Well-structured GraphQL schema with clear documentation 
- 🎮 **Interactive Playground** - Built-in GraphQL Playground for API exploration
- 📱 **Responsive Architecture** - Designed for scalability and maintainability
- 🧪 **Mock Data Layer** - JSON-based data storage with centralized data store
- 🌐 **Dynamic URL Generation** - Automatic Udemy URL path generation for courses
- ✅ **Data Validation** - Built-in validation for duplicate course prevention
- 🔄 **Real-time Updates** - Live data manipulation with immediate GraphQL response
- 📚 **Educational Focus** - Designed specifically for learning GraphQL best practices

## 🏗️ Architecture

The application follows a **modular, layered architecture** that promotes separation of concerns and maintainability:

```
┌─────────────────────────────────────────────────────────────┐
│                    GraphQL Layer                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │    Schema       │  │   Resolvers     │  │  Playground  │ │
│  │   (SDL-First)   │  │   (Business)    │  │  (DevTools)  │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
┌─────────────────────────────────────────────────────────────┐
│                  Application Layer                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │   Apollo        │  │    Express      │  │  Middleware  │ │
│  │   Server        │  │    Server       │  │   (CORS,     │ │
│  │                 │  │                 │  │ Compression) │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
                                │
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ │
│  │    Courses      │  │    Students     │  │  Data Store  │ │
│  │    (JSON)       │  │    (JSON)       │  │   Manager    │ │
│  └─────────────────┘  └─────────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Core Components:

- **Schema Layer**: GraphQL schema definitions using Schema Definition Language (SDL)
- **Resolver Layer**: Business logic implementation for queries and mutations
- **Service Layer**: Data access and manipulation logic
- **Data Layer**: JSON-based mock database for development and testing

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Runtime** | Node.js | JavaScript runtime environment |
| **Language** | TypeScript | Type-safe JavaScript development |
| **GraphQL** | Apollo Server | GraphQL server implementation |
| **Web Framework** | Express.js | HTTP server and middleware |
| **Security** | CORS, GraphQL Depth Limit | Cross-origin requests and query complexity control |
| **Development** | ts-node, nodemon | Development workflow and hot reloading |
| **Build** | TypeScript Compiler | Code compilation and optimization |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd academia-online
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run build:dev
   ```

4. **Access the application**
   - **GraphQL Playground**: http://localhost:5200/
   - **GraphQL Endpoint**: http://localhost:5200/graphql

## 📚 API Documentation

### Data Types

#### Course Levels
The API supports the following course difficulty levels:
- `BEGINNER` - Beginner level course
- `MEDIUM` - Intermediate level course  
- `ADVANCED` - Advanced level course
- `EXPERT` - Expert level course
- `PROFESSIONAL` - Professional level course
- `SPECIALIZED` - Specialized level course
- `MASTER` - Master level course
- `DOCTORATE` - Doctorate level course
- `OTHER` - Other level of course
- `ALL` - All levels

### Available Queries

#### Students
```graphql
# Get all students
query {
  estudiantes {
    id
    name
    email
    website
    courses {
      id
      title
    }
  }
}

# Get specific student
query {
  estudiante(id: "1") {
    id
    name
    email
    courses {
      title
      description
    }
  }
}
```

#### Courses
```graphql
# Get all courses
query {
  cursos {
    id
    title
    description
    clases
    time
    logo
    level
    path
    teacher
    reviews {
      id
      name
      points
      comment
    }
  }
}

# Get specific course
query {
  curso(curso: "1") {
    id
    title
    description
    clases
    time
    logo
    level
    path
    teacher
    students {
      id
      name
      email
    }
    reviews {
      id
      name
      points
      comment
    }
  }
}
```

### Available Mutations

```graphql
# Create new course
mutation {
  cursoNuevo(curso: {
    title: "New Course"
    description: "Course description"
    clases: 10
    time: 2.5
    logo: "https://example.com/logo.jpg"
    level: BEGINNER
    path: "/new-course"
    teacher: "John Doe"
  }) {
    id
    title
    description
    level
    teacher
  }
}

# Update course
mutation {
  modificarCurso(curso: {
    id: "1"
    title: "Updated Course Title"
    description: "Updated description"
    clases: 15
    time: 3.0
    logo: "https://example.com/new-logo.jpg"
    level: MEDIUM
    path: "/updated-course"
    teacher: "Jane Smith"
  }) {
    id
    title
    description
    level
    teacher
  }
}

# Delete course
mutation {
  eliminarCurso(id: "1") {
    id
    title
  }
}
```

## 📁 Project Structure

```
academia-online/
├── src/
│   ├── data/                    # Mock data layer
│   │   ├── courses.json         # Course data
│   │   ├── students.json        # Student data
│   │   └── data.store.ts        # Data access layer
│   ├── resolvers/               # GraphQL resolvers
│   │   ├── query.ts             # Query resolvers
│   │   ├── mutation.ts          # Mutation resolvers
│   │   ├── type.ts              # Type resolvers
│   │   └── resolversMap.ts      # Resolver mapping
│   ├── schema/                  # GraphQL schema
│   │   ├── schema.graphql       # Schema definition
│   │   └── index.ts             # Schema exports
│   ├── server.ts                # Apollo Server configuration
│   └── index.ts                 # Schema creation and export
├── .env                         # Environment variables
├── package.json                 # Project configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 📜 Scripts

| Script | Description | Usage |
|--------|-------------|--------|
| `npm run build:dev` | Start development server with hot reload using nodemon and ts-node | Development |
| `npm run build` | Build TypeScript to JavaScript and copy schema files | Production build |
| `npm start` | Start production server from built files | Production |
| `npm run start:dev` | Alias for build:dev command | Development |

## 🎯 Learning Objectives

This project is designed to help developers understand and master:

### GraphQL Concepts
- ✅ Schema Definition Language (SDL)
- ✅ Query and Mutation design patterns
- ✅ Resolver implementation strategies
- ✅ Type system and relationships
- ✅ Error handling and validation

### TypeScript Integration
- ✅ Type-safe GraphQL development
- ✅ Interface and type definitions
- ✅ Async/await patterns with types
- ✅ Generic programming concepts

### Server Architecture
- ✅ Apollo Server configuration
- ✅ Express.js integration
- ✅ Middleware implementation
- ✅ Security best practices
- ✅ Performance optimization

### Development Workflow
- ✅ Modern development tooling
- ✅ Hot reload configuration
- ✅ Build process optimization
- ✅ Code organization patterns


---

<div align="center">

**Built with ❤️ for learning GraphQL**

*This project is part of a comprehensive GraphQL training curriculum*

</div>