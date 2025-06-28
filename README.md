# 🚀 GraphQL Zero to Expert

[![Node.js](https://img.shields.io/badge/Node.js-18.19.1-339933?style├── 🏎️ rest-to-api-graphql/         # Advanced: Professional API
│   ├── 📋 package.json             # Production dependencies
│   ├── 🔧 src/                     # Professional structure
│   ├── 📊 data/                    # F1 data sources (13+ endpoints)
│   ├── 📊 schema/                  # Complete GraphQL schema
│   ├── 🧪 postman-collection/      # Comprehensive testing
│   ├── 🚀 DEPLOYMENT.md            # Complete deployment guide
│   ├── ⚡ QUICK-DEPLOY.md          # 2-minute deployment solution
│   ├── 🔧 package.json           # Dependencies and scripts
│   ├── 📄 Procfile                 # Heroku configuration
│   └── 📖 README.md                # Professional documentatione-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.12.2-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/docs/apollo-server/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![WebSockets](https://img.shields.io/badge/WebSockets-8.18.2-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://github.com/websockets/ws)

> **A complete learning project to master GraphQL with Apollo Server 4, Express, and WebSockets from scratch to advanced level.**

## 🎯 What is this project?

This is a comprehensive **GraphQL learning ecosystem** featuring **three progressively complex projects** designed to take you from GraphQL beginner to expert:

## 📚 Learning Projects

### 🔰 **1. Hello World Project** - [`holamundo/`](./holamundo/)
> **Perfect for GraphQL beginners** - Your first steps into GraphQL

**What you'll learn:**
- ✅ Basic GraphQL schema design
- ✅ Simple queries and mutations
- ✅ Apollo Server 4 setup with Express
- ✅ CORS configuration
- ✅ GraphQL Playground basics

**Features:**
- Simple user management system
- Basic CRUD operations
- Apollo Studio integration
- Hot reload in development
- Minimal configuration for learning

**[📖 View holamundo Documentation →](./holamundo/README.md)**

---

### 🎬 **2. Academia Online Project** - [`academia-online/`](./academia-online/)
> **Intermediate level** - Real-world application patterns

**What you'll learn:**
- ✅ Complex schema with relationships
- ✅ Advanced resolver patterns
- ✅ Data modeling best practices
- ✅ Authentication concepts
- ✅ Business logic implementation

**Features:**
- Complete online academy system
- Student and course management
- Enrollment and progress tracking
- Complex GraphQL relationships
- Production-ready structure

**[📖 View academia-online Documentation →](./academia-online/README.md)**

---

### 🏎️ **3. Formula 1 API Project** - [`rest-to-api-graphql/`](./rest-to-api-graphql/)
> **Advanced level** - Professional real-time GraphQL API

**What you'll learn:**
- ✅ REST to GraphQL transformation
- ✅ Real-time data integration
- ✅ Advanced filtering and pagination
- ✅ TypeScript integration
- ✅ Production-ready GraphQL patterns
- ✅ External API integration
- ✅ Complex data source management

**Features:**
- Complete Formula 1 GraphQL API
- Live F1 telemetry and race data
- 13+ different data endpoints
- Real-time data from OpenF1 API
- Advanced pagination strategies
- Comprehensive type safety
- Professional API documentation

**[📖 View rest-to-api-graphql Documentation →](./rest-to-api-graphql/README.md)**

## 🏗️ Repository Structure

```
📦 graphql_cero_expert/
├── � holamundo/                    # Beginner: First GraphQL steps
│   ├── 📋 package.json             # Basic dependencies
│   ├── 🔧 server.ts                # Simple Apollo Server
│   ├── � src/                     # Organized source code
│   └── �📖 README.md                # Beginner documentation
│
├── � academia-online/              # Intermediate: Real-world app
│   ├── 📋 package.json             # Educational dependencies
│   ├── 🔧 src/                     # Structured application
│   ├── 📊 data/                    # Students & courses data
│   ├── 🧪 postman-collection/      # API testing collection
│   └── 📖 README.md                # Academy documentation
│
├── 🏎️ rest-to-api-graphql/         # Advanced: Professional API
│   ├── 📋 package.json             # Production dependencies
│   ├── 🔧 src/                     # Professional structure
│   ├── � data/                    # F1 data sources (13+ endpoints)
│   ├── 📊 schema/                  # Complete GraphQL schema
│   ├── 🧪 postman-collection/      # Comprehensive testing
│   └── 📖 README.md                # Professional documentation
│
├── 📖 README.md                     # This main documentation
└── � package.json                 # Root project configuration
```

## 🎓 Recommended Learning Path

### **Step 1: Foundation** 🔰
Start with **[holamundo/](./holamundo/)** to understand:
- GraphQL basics and syntax
- Schema definition
- Simple queries and mutations
- Apollo Server setup

### **Step 2: Application Development** 🎓  
Continue with **[academia-online/](./academia-online/)** to learn:
- Complex data relationships
- Real-world application patterns
- Business logic implementation
- Advanced resolvers

### **Step 3: Professional Development** 🏎️
Master with **[rest-to-api-graphql/](./rest-to-api-graphql/)** to achieve:
- Production-ready APIs
- External service integration
- Advanced patterns and optimizations
- Real-time data handling

## ⚡ Quick Start

### 🚀 Option 1: Start with Hello World (Recommended for beginners)
```bash
# Navigate to the beginner project
cd holamundo

# Install dependencies and start
npm install
npm run build:dev

# Access: http://localhost:5000/graphql
```

### 🎓 Option 2: Try the Academia Online
```bash
# Navigate to the intermediate project
cd academia-online

# Install dependencies and start
npm install
npm run build:dev

# Access: http://localhost:5000/graphql
```

### 🏎️ Option 3: Explore the F1 API (Advanced)
```bash
# Navigate to the advanced project
cd rest-to-api-graphql

# Install dependencies and start
npm install
npm run build:dev

# Access: http://localhost:5000/graphql
```

### 🔧 Option 4: Global Installation
```bash
# Install dependencies for all projects
npm run install:all

# Choose your starting point based on your level!
```

## 🎓 Learning Path

### 🔰 **Level 1: Fundamentals** (Port 4000)
**What you'll learn:**
- Basic GraphQL schema design
- Simple queries and mutations
- Apollo Server 4 setup with Express
- CORS configuration
- GraphQL Playground basics

**Example Operations:**
```graphql
# Query users
query {
  users {
    id
    name
    email
  }
}

# Add a user
mutation {
  addUser(name: "John Doe", email: "john@example.com") {
    id
    name
  }
}
```

### 🎬 **Level 2: Advanced Features** (Port 4001)
**What you'll learn:**
- Complex schema with relationships
- Real-time subscriptions with WebSockets
- File serving and static assets
- Data persistence (JSONL format)
- REST API compatibility
- Error handling and validation
- Performance optimization

**Example Operations:**
```graphql
# Get Breaking Bad characters
query {
  characters {
    char_id
    name
    portrayed
    votes
  }
}

# Vote for a character
mutation {
  voteForCharacter(char_id: 1) {
    character_name
    voted_at
  }
}

# Real-time vote updates
subscription {
  voteUpdates {
    character_name
    total_votes
  }
}
```

## 🛠️ Technologies & Features

### 🔧 **Core Technologies Used Across Projects**
- **Apollo Server 4** - Modern GraphQL server (all projects)
- **Express.js** - Web framework for Node.js (all projects)
- **GraphQL** - Query language and runtime (all projects)
- **TypeScript** - Type safety (rest-to-api-graphql)
- **Node.js 18+** - Runtime environment (all projects)

### 📊 **What Each Project Teaches**

| Project | Level | Key Concepts | Technologies |
|---------|-------|--------------|--------------|
| 🔰 **holamundo** | Beginner | Basic GraphQL, Simple CRUD | Apollo Server, Express |
| 🎓 **academia-online** | Intermediate | Relationships, Business Logic | GraphQL Schema Design |
| 🏎️ **rest-to-api-graphql** | Advanced | Real-time Data, External APIs | TypeScript, OpenF1 API |

## 🎯 Learning Objectives by Project

### 🔰 **Holamundo - Foundation Level**
By completing this project, you'll understand:
- ✅ GraphQL schema definition language
- ✅ Basic queries and mutations
- ✅ Apollo Server setup and configuration
- ✅ GraphQL Playground usage
- ✅ Resolver functions basics

### 🎓 **Academia Online - Application Level**  
By completing this project, you'll master:
- ✅ Complex data relationships (students ↔ courses)
- ✅ Advanced resolver patterns
- ✅ GraphQL best practices
- ✅ Error handling in GraphQL
- ✅ Schema organization and modularity

### 🏎️ **Formula 1 API - Professional Level**
By completing this project, you'll achieve:
- ✅ External API integration patterns
- ✅ Real-time data handling
- ✅ Advanced pagination strategies
- ✅ TypeScript integration with GraphQL
- ✅ Production-ready GraphQL patterns
- ✅ Performance optimization techniques

## 📋 Available Scripts & Commands

### 🌐 **Global Commands** (from root directory)
| Command | Description | Purpose |
|---------|-------------|---------|
| `npm run install:all` | Install dependencies for all projects | Initial setup |
| `npm run clean:all` | Clean node_modules from all projects | Maintenance |

### 🔰 **Holamundo Commands** (from holamundo/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🔰 Basic GraphQL server | 5000 |
| `npm run build:dev` | 🔄 Development with hot reload | 5000 |

### 🎓 **Academia Online Commands** (from academia-online/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🎓 Academia GraphQL server | 5000 |
| `npm run build:dev` | 🔄 Development with hot reload | 5000 |

### �️ **Formula 1 API Commands** (from rest-to-api-graphql/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🏎️ Production F1 GraphQL API | 5000 |
| `npm run build:dev` | 🔄 Development with hot reload | 5000 |
| `npm run build` | � Production build | - |

## 📊 Project Comparison & Examples

### 🔰 **Holamundo - Simple User Management**
```graphql
# Basic query example
query {
  users {
    id
    name
    email
  }
}

# Basic mutation example
mutation {
  addUser(name: "John Doe", email: "john@example.com") {
    id
    name
  }
}
```

### 🎓 **Academia Online - Educational Platform**
```graphql
# Complex relationship query
query {
  students {
    id
    name
    email
    courses {
      id
      title
      description
      instructor
    }
  }
}

# Enrollment mutation
mutation {
  enrollStudent(studentId: "1", courseId: "101") {
    student {
      name
    }
    course {
      title
    }
    enrolledAt
  }
}
```

### 🏎️ **Formula 1 API - Real-time Racing Data**
```graphql
# Live telemetry query
query {
  carData(driver_number: 1, limit: 10) {
    data {
      speed
      rpm
      throttle
      brake
      drs
      date
    }
    pagination {
      total
      hasNext
    }
  }
}

# Weather conditions
query {
  weather(session_key: 9158) {
    air_temperature
    track_temperature
    humidity
    rainfall
  }
}
```

##  Getting Started

### Prerequisites
- **Node.js 18.19.1** or higher
- **npm** or **yarn** package manager
- Basic understanding of JavaScript and APIs
- GraphQL curiosity and enthusiasm! 🎓

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd graphql_cero_expert
   ```

2. **Choose your learning path:**

   **🔰 For Beginners - Start with Hello World:**
   ```bash
   cd holamundo
   npm install
   npm run build:dev
   # Visit: http://localhost:5000/graphql
   ```

   **🎓 For Intermediate - Try Academia Online:**
   ```bash
   cd academia-online  
   npm install
   npm run build:dev
   # Visit: http://localhost:5000/graphql
   ```

   **🏎️ For Advanced - Explore F1 API:**
   ```bash
   cd rest-to-api-graphql
   npm install  
   npm run build:dev
   # Visit: http://localhost:5000/graphql
   ```

3. **Open GraphQL Playground in your browser**
   - Each project runs on http://localhost:5000/graphql
   - Explore the schema and try the example queries!

## 🎯 Usage Examples

### Getting Started with Each Project

#### 🔰 **Holamundo** (Beginner-friendly)
```bash
cd holamundo
npm install && npm run build:dev
```
**Perfect for:** Learning GraphQL basics, understanding schemas, first queries

#### 🎓 **Academia Online** (Real-world application)  
```bash
cd academia-online
npm install && npm run build:dev
```
**Perfect for:** Understanding relationships, business logic, practical GraphQL

#### 🏎️ **Formula 1 API** (Production-ready)
```bash
cd rest-to-api-graphql
npm install && npm run build:dev
```
**Perfect for:** Advanced patterns, external APIs, professional development

## 🧪 Testing the Projects

### 🔰 **Holamundo Testing**
- **GraphQL Playground**: http://localhost:5000/graphql
- **Simple queries** for learning GraphQL syntax
- **Basic mutations** for understanding data modification

### 🎓 **Academia Online Testing**  
- **GraphQL Playground**: http://localhost:5000/graphql
- **Complex relationship queries** between students and courses
- **Educational business logic** mutations and validations

### 🏎️ **Formula 1 API Testing**
- **GraphQL Playground**: http://localhost:5000/graphql
- **Postman Collection**: Import from `src/postman-collection/`
- **13+ different endpoints** with real F1 data
- **Advanced filtering** and pagination examples
- **Live telemetry data** during race weekends

## 📖 Detailed Documentation

Each project has its own comprehensive documentation:

- 📖 **[Holamundo Documentation](./holamundo/README.md)** - GraphQL basics and fundamentals
- 📖 **[Academia Online Documentation](./academia-online/README.md)** - Real-world application patterns  
- 📖 **[Formula 1 API Documentation](./rest-to-api-graphql/README.md)** - Professional GraphQL development

## 🎓 Progressive Learning Path

### **Phase 1: Foundation (Week 1)** 🔰
**Project:** `holamundo/`
- Start here regardless of your experience
- Learn GraphQL schema definition language
- Practice basic queries and mutations
- Understand resolver functions
- Get familiar with GraphQL Playground

### **Phase 2: Application (Week 2-3)** 🎓
**Project:** `academia-online/`  
- Build upon your foundation knowledge
- Learn complex data relationships
- Practice advanced resolver patterns
- Understand real-world GraphQL applications
- Implement business logic in GraphQL

### **Phase 3: Professional (Week 4+)** 🏎️
**Project:** `rest-to-api-graphql/`
- Apply everything you've learned
- Master external API integration
- Learn production-ready patterns
- Practice with real-time data
- Understand TypeScript with GraphQL

## 🔗 Useful Links & Resources

### 📚 **Official Documentation**
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [Apollo Studio](https://studio.apollographql.com/)

### 🏎️ **Formula 1 Data (for rest-to-api-graphql)**
- [OpenF1 API Documentation](https://openf1.org/)
- [Formula 1 Official Website](https://www.formula1.com/)

### 🛠️ **Development Tools**
- [GraphQL Playground](https://github.com/graphql/graphql-playground)
- [Apollo Client DevTools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)
- [Postman GraphQL Support](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/)

### 🎓 **Learning Resources**
- [How to GraphQL](https://www.howtographql.com/)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [Apollo GraphQL Tutorial](https://www.apollographql.com/docs/tutorial/introduction/)

## 🤝 Contributing

We welcome contributions to improve these learning projects! Here's how you can help:

### 🔰 **For Holamundo**
- Add more basic examples
- Improve beginner documentation
- Create additional simple resolvers
- Add basic validation examples

### 🎓 **For Academia Online**
- Enhance the educational features
- Add more complex relationships
- Improve error handling examples
- Create additional business logic scenarios

### 🏎️ **For Formula 1 API**
- Add new OpenF1 endpoints
- Improve real-time features
- Enhance TypeScript implementations
- Add performance optimizations

### 📝 **General Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<div align="center">

**🏁 Ready to start your GraphQL journey from zero to expert? Choose your starting point! 🏁**

| 🔰 [**Start with Holamundo**](./holamundo/) | 🎓 [**Try Academia Online**](./academia-online/) | 🏎️ [**Explore F1 API**](./rest-to-api-graphql/) |
|:---:|:---:|:---:|
| Perfect for beginners | Great for real-world learning | Professional development |

[![Star this repo](https://img.shields.io/github/stars/your-username/graphql_cero_expert?style=social)](https://github.com/your-username/graphql_cero_expert)

**⭐ Happy GraphQL Learning! 🎓**

</div>