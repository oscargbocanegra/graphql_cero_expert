# 🚀 GraphQL Zero to Expert

[![Node.js](https://img.shields.io/badge/Node.js-18.19.1-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.12.2-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/docs/apollo-server/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **A complete learning project to master GraphQL with Apollo Server 4, Express, and TypeScript from scratch to advanced level, featuring a live F1 API deployed on Vercel.**

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

### 🎓 **2. Academia Online Project** - [`academia-online/`](./academia-online/)
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
> **Advanced level** - Professional real-time GraphQL API **LIVE ON VERCEL** 🌐

**What you'll learn:**
- ✅ REST to GraphQL transformation
- ✅ Real-time data integration
- ✅ Advanced filtering and pagination
- ✅ TypeScript integration
- ✅ Production deployment with Vercel
- ✅ External API integration
- ✅ Complex data source management

**Features:**
- Complete Formula 1 GraphQL API
- Live F1 telemetry and race data
- 13+ different data endpoints
- Real-time data from OpenF1 API
- Advanced pagination strategies
- Comprehensive type safety
- **DEPLOYED LIVE**: https://f1-rest-to-api-graphql-4jj4jfsve-oscargbocanegras-projects.vercel.app/graphql

**[📖 View rest-to-api-graphql Documentation →](./rest-to-api-graphql/README.md)**

## 🏗️ Repository Structure

```
📦 graphql_cero_expert/
├── 🔰 holamundo/                    # Beginner: First GraphQL steps
│   ├── 📋 package.json             # Basic dependencies
│   ├── 🔧 server.ts                # Simple Apollo Server
│   ├── 📁 src/                     # Organized source code
│   └── 📖 README.md                # Beginner documentation
│
├── 🎓 academia-online/              # Intermediate: Real-world app
│   ├── 📋 package.json             # Educational dependencies
│   ├── 🔧 src/                     # Structured application
│   ├── 📊 data/                    # Students & courses data
│   ├── 🧪 postman-collection/      # API testing collection
│   └── 📖 README.md                # Academy documentation
│
├── 🏎️ rest-to-api-graphql/         # Advanced: Professional API
│   ├── 📋 package.json             # Production dependencies
│   ├── 🔧 src/                     # Professional structure
│   ├── 📊 data/                    # F1 data sources (13+ endpoints)
│   ├── 📊 schema/                  # Complete GraphQL schema
│   ├── 🧪 postman-collection/      # Comprehensive testing
│   ├── 🌐 public/                  # Static files for Vercel
│   ├── 🔧 vercel.json              # Deployment configuration
│   └── 📖 README.md                # Professional documentation
│
├── 🔧 vercel.json                   # Global Vercel configuration
├── 📖 README.md                     # This main documentation
└── 📄 package.json                 # Root project configuration
```

## ⚡ Quick Start

### 🌐 **Option 0: Try the Live Demo (No Installation Required)**
**🏎️ Formula 1 GraphQL API - Live on Vercel:**
- **🚀 API Playground**: https://f1-rest-to-api-graphql-4jj4jfsve-oscargbocanegras-projects.vercel.app/graphql
- **🏠 Homepage**: https://f1-rest-to-api-graphql-4jj4jfsve-oscargbocanegras-projects.vercel.app/

*Perfect for: Immediate GraphQL exploration without setup*

### 🚀 Option 1: Start with Hello World (Recommended for beginners)
```bash
# Navigate to the beginner project
cd holamundo

# Install dependencies and start
npm install
npm run dev

# Access: http://localhost:5000/graphql
```

### 🎓 Option 2: Try the Academia Online
```bash
# Navigate to the intermediate project
cd academia-online

# Install dependencies and start
npm install
npm run dev

# Access: http://localhost:5000/graphql
```

### 🏎️ Option 3: Explore the F1 API (Advanced)
```bash
# Navigate to the advanced project
cd rest-to-api-graphql

# Install dependencies and start
npm install
npm run dev

# Access: http://localhost:5000/graphql
```

## 🛠️ Technologies & Features

### 🔧 **Core Technologies Used Across Projects**
- **Apollo Server 4** - Modern GraphQL server (all projects)
- **Express.js** - Web framework for Node.js (all projects)
- **GraphQL** - Query language and runtime (all projects)
- **TypeScript** - Type safety (rest-to-api-graphql)
- **Node.js 18+** - Runtime environment (all projects)
- **Vercel** - Cloud deployment platform (rest-to-api-graphql deployed live)

### 📊 **What Each Project Teaches**

| Project | Level | Key Concepts | Technologies |
|---------|-------|--------------|--------------|
| 🔰 **holamundo** | Beginner | Basic GraphQL, Simple CRUD | Apollo Server, Express |
| 🎓 **academia-online** | Intermediate | Relationships, Business Logic | GraphQL Schema Design |
| 🏎️ **rest-to-api-graphql** | Advanced | Real-time Data, External APIs, Deployment | TypeScript, OpenF1 API, Vercel |

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
- ✅ Cloud deployment with Vercel

## 📋 Available Scripts & Commands

### 🔰 **Holamundo Commands** (from holamundo/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🔰 Basic GraphQL server | 5000 |
| `npm run dev` | 🔄 Development with hot reload | 5000 |

### 🎓 **Academia Online Commands** (from academia-online/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🎓 Academia GraphQL server | 5000 |
| `npm run dev` | 🔄 Development with hot reload | 5000 |

### 🏎️ **Formula 1 API Commands** (from rest-to-api-graphql/ directory)
| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🏎️ Production F1 GraphQL API | 5000 |
| `npm run dev` | 🔄 Development with hot reload | 5000 |
| `npm run build` | 🔧 Production build | - |
| `vercel --prod` | 🚀 Deploy to Vercel | - |

## 📊 Project Examples

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
- Deploy to production with Vercel

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

| 🌐 [**Live F1 API Demo**](https://f1-rest-to-api-graphql-4jj4jfsve-oscargbocanegras-projects.vercel.app/graphql) | 🔰 [**Start with Holamundo**](./holamundo/) | 🎓 [**Try Academia Online**](./academia-online/) | 🏎️ [**Explore F1 API Locally**](./rest-to-api-graphql/) |
|:---:|:---:|:---:|:---:|
| No setup required! | Perfect for beginners | Great for real-world learning | Professional development |

[![Star this repo](https://img.shields.io/github/stars/your-username/graphql_cero_expert?style=social)](https://github.com/your-username/graphql_cero_expert)

**⭐ Happy GraphQL Learning! 🎓**

</div>
