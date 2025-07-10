# 🎓 Academia Online GraphQL API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5+-blue.svg)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16+-e10098.svg)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4+-311C87.svg)](https://www.apollographql.com/)
[![Express](https://img.shields.io/badge/Express-4+-000000.svg)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> � **Intermediate GraphQL Learning** - A comprehensive online academy API with complex relationships, business logic, and real-world application patterns.

## 🎯 What You'll Learn

This project is designed to teach intermediate GraphQL concepts through a realistic online academy scenario:

- ✅ **Complex Data Relationships** - Students, courses, and enrollments
- ✅ **Advanced Resolver Patterns** - Nested resolvers and data fetching
- ✅ **Business Logic Implementation** - Enrollment validation and management
- ✅ **GraphQL Best Practices** - Schema design and organization
- ✅ **Error Handling** - Proper GraphQL error management
- ✅ **Data Modeling** - Real-world entity relationships
- ✅ **TypeScript Integration** - Advanced type safety patterns

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
cd graphql_cero_expert/academia-online

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

### 🎓 **Complete Educational Platform**

| Endpoint | Description | Type |
|----------|-------------|------|
| `students` | Get all students | Query |
| `student(id)` | Get student by ID | Query |
| `courses` | Get all courses | Query |
| `course(id)` | Get course by ID | Query |
| `addStudent` | Create new student | Mutation |
| `addCourse` | Create new course | Mutation |
| `editStudent` | Update student info | Mutation |
| `editCourse` | Update course info | Mutation |
| `deleteStudent` | Remove student | Mutation |
| `deleteCourse` | Remove course | Mutation |

## 🎮 Example Queries

### 🎓 Get All Students with Their Courses
```graphql
query GetStudentsWithCourses {
  students {
    id
    name
    email
    courses {
      id
      title
      description
      instructor
      topic
      url
      level
    }
  }
}
```

### 📚 Get All Courses with Enrolled Students
```graphql
query GetCoursesWithStudents {
  courses {
    id
    title
    description
    instructor
    topic
    level
    url
    students {
      id
      name
      email
    }
  }
}
```

### 👤 Get Single Student Details
```graphql
query GetStudent($id: ID!) {
  student(id: $id) {
    id
    name
    email
    courses {
      id
      title
      instructor
      topic
      level
    }
  }
}
```

### ➕ Create New Student
```graphql
mutation AddStudent($student: StudentInput!) {
  addStudent(student: $student) {
    id
    name
    email
  }
}
```

### 📖 Create New Course
```graphql
mutation AddCourse($course: CourseInput!) {
  addCourse(course: $course) {
    id
    title
    description
    instructor
    topic
    level
    url
  }
}
```

### ✏️ Update Student Information
```graphql
mutation EditStudent($id: ID!, $student: StudentInput!) {
  editStudent(id: $id, student: $student) {
    id
    name
    email
    courses {
      id
      title
    }
  }
}
```

## 🏗️ Project Structure

```
academia-online/
├── 📁 src/                       # Source code
│   ├── 📁 data/                 # Data layer
│   │   ├── courses.json         # Course data
│   │   ├── students.json        # Student data
│   │   └── data.store.ts        # Data store management
│   ├── 📁 resolvers/            # GraphQL Resolvers
│   │   ├── mutation.ts          # Mutation resolvers
│   │   ├── query.ts             # Query resolvers
│   │   ├── type.ts              # Type resolvers
│   │   └── resolversMap.ts      # Resolver mapping
│   ├── 📁 schema/               # GraphQL Schema
│   │   ├── index.ts             # Schema builder
│   │   └── schema.graphql       # Type definitions
│   ├── index.ts                 # Application entry point
│   └── server.ts                # Apollo Server setup
├── 📁 postman-collection/       # API Testing
│   └── Api-Graphql-Academia-online.postman_collection.json
├── 📋 package.json              # Dependencies & scripts
├── 📄 tsconfig.json             # TypeScript configuration
└── 📖 README.md                 # This documentation
```

## 🎓 Learning Path

### 1️⃣ **Complex Data Relationships**
- Explore the relationship between Students and Courses
- Learn about GraphQL type relationships
- Understand bidirectional data fetching

### 2️⃣ **Advanced Resolver Patterns**
- Study `src/resolvers/` for complex resolver implementations
- Learn nested resolver patterns
- Understand data transformation techniques

### 3️⃣ **Business Logic Implementation**
- Examine validation logic in mutations
- Learn about data consistency patterns
- Practice real-world business rules

### 4️⃣ **Schema Design Best Practices**
- Review `src/schema/schema.graphql` for advanced patterns
- Learn input type design
- Understand schema evolution principles

## 🔧 Development Scripts

```bash
# Development with hot reload
npm run build:dev

# Production build
npm run build

# Start production server
npm start
```

## 📡 Data Source

This API uses JSON files for data storage to focus on GraphQL learning:

- 📚 **Student Data** - Complete student profiles with course enrollments
- 📖 **Course Data** - Detailed course information with relationships
- 🔄 **Dynamic Updates** - Real-time data manipulation
- ✅ **Data Validation** - Duplicate prevention and consistency checks

## 🧪 Testing with Postman

Import the collection from `postman-collection/Api-Graphql-Academia-online.postman_collection.json`:

- 📂 **Organized queries** - Separated by functionality
- 🔢 **Variable examples** - Pre-configured test data
- 🎯 **CRUD operations** - Complete lifecycle testing
- 📋 **Ready to use** - Import and start testing immediately

## 🎯 Use Cases

### 🎓 **Educational Applications**
- Online learning platforms
- Student management systems
- Course catalog applications

### 📊 **Business Applications**
- Training program management
- Certification tracking
- Educational analytics

### 🔧 **Development Training**
- Intermediate GraphQL patterns
- Business logic implementation
- API design best practices

## 🤝 Contributing

We welcome contributions to improve this educational project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 💡 Contribution Ideas
- Add more complex business logic
- Improve error handling examples
- Create additional resolver patterns
- Add validation examples
- Enhance documentation

## 📚 Resources

### 📖 **GraphQL Learning**
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)

### 🛠️ **Development Tools**
- [GraphQL Playground](https://github.com/graphql/graphql-playground)
- [Apollo Studio](https://studio.apollographql.com/)
- [Postman GraphQL Support](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **Apollo GraphQL** for the excellent server framework
- **The GraphQL Community** for continuous innovation
- **Educational Technology** innovators who inspire better learning tools

---

<div align="center">

**🎓 Ready to master intermediate GraphQL concepts? Start learning! 🎓**

[![Back to Main Project](https://img.shields.io/badge/Back%20to%20Main-GraphQL%20Zero%20to%20Expert-blue.svg)](../README.md)

</div>
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