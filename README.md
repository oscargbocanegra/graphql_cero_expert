# 🚀 GraphQL Zero to Expert

[![Node.js](https://img.shields.io/badge/Node.js-18.19.1-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-4.12.2-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/docs/apollo-server/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Express](https://img.shields.io/badge/Express-4.21.2-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![WebSockets](https://img.shields.io/badge/WebSockets-8.18.2-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://github.com/websockets/ws)

> **A complete learning project to master GraphQL with Apollo Server 4, Express, and WebSockets from scratch to advanced level.**

## 🎯 What is this project?

This is a comprehensive **GraphQL learning toolkit** featuring two progressively complex servers:

1. **🔰 Basic Server** - Simple GraphQL fundamentals with users and basic operations
2. **🎬 Advanced Playground** - Complex Breaking Bad themed GraphQL server with voting system, image gallery, and real-time features

Perfect for developers who want to learn GraphQL step by step with hands-on examples!

## 🏗️ Project Architecture

```
📦 graphql_cero_expert/
├── 🔧 server.js              # Main server (Basic GraphQL)
├── 📋 package.json           # Dependencies & scripts
├── 📖 README.md              # This documentation
└── 🎬 playground/            # Advanced Breaking Bad server
    ├── 🔧 server.js          # Main playground server
    ├── 📋 package.json       # Playground dependencies
    ├── 📊 data/              # JSON data files
    │   ├── characters.json   # Breaking Bad characters
    │   └── votes.json        # Voting system data
    ├── 🖼️  public/           # Character images
    └── 📁 src/               # Organized source code
        ├── 🔧 server.js      # Alternative server
        └── 📚 legacy/        # TypeScript legacy files
```

## ⚡ Quick Start

### 🚀 Option 1: Run Both Servers (Recommended)
```bash
# Clone and navigate to project
cd graphql_cero_expert

# Install dependencies
npm install
cd playground && npm install && cd ..

# Start both servers simultaneously
npm run start:both
```

**🌐 Access Points:**
- **Basic Server**: http://localhost:4000/graphql
- **Advanced Playground**: http://localhost:4001/graphql

### 🔰 Option 2: Basic Server Only
```bash
npm start
# Available at: http://localhost:4000/graphql
```

### 🎬 Option 3: Advanced Playground Only
```bash
npm run playground
# Available at: http://localhost:4001/graphql
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

### 🔧 **Core Technologies**
- **Apollo Server 4** - Modern GraphQL server
- **Express.js** - Web framework for Node.js
- **GraphQL** - Query language and runtime
- **WebSockets** - Real-time communication
- **ES Modules** - Modern JavaScript syntax

### ✨ **Basic Server Features**
- ✅ Simple user management
- ✅ Basic CRUD operations
- ✅ Apollo Studio integration
- ✅ Hot reload in development
- ✅ CORS enabled

### 🚀 **Advanced Playground Features**
- ✅ Complex character relationships
- ✅ Persistent voting system (JSONL)
- ✅ Static image gallery (`/photos`)
- ✅ REST API compatibility (`/api/characters`)
- ✅ Real-time subscriptions
- ✅ Data mapping and validation
- ✅ Two server configurations
- ✅ Comprehensive documentation

## 📋 Available Scripts

| Command | Description | Port |
|---------|-------------|------|
| `npm start` | 🔰 Basic server only | 4000 |
| `npm run dev` | 🔄 Basic server with hot reload | 4000 |
| `npm run playground` | 🎬 Advanced playground only | 4001 |
| `npm run playground:dev` | 🔄 Playground with hot reload | 4001 |
| `npm run start:both` | 🚀 **Both servers** | 4000 + 4001 |

## 📊 Data & Examples

### 🎬 Breaking Bad Playground Data
- **9 main characters** with detailed information
- **Actor information** and character descriptions
- **Image gallery** with character photos
- **Voting system** with real-time statistics
- **Episode count** and character relationships

### 🔍 Example Queries
```graphql
# Get character statistics
query {
  characterStats {
    name
    total_votes
    percentage
  }
}

# Get specific character
query {
  character(char_id: 1) {
    name
    portrayed
    description
    votes
  }
}
```

## 📚 Documentation

## 🚀 Getting Started

### Prerequisites
- **Node.js 18.19.1** or higher
- **npm** or **yarn** package manager
- Basic understanding of JavaScript and APIs

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd graphql_cero_expert
   ```

2. **Install main dependencies**
   ```bash
   npm install
   ```

3. **Install playground dependencies**
   ```bash
   cd playground
   npm install
   cd ..
   ```

4. **Start both servers** (Recommended)
   ```bash
   npm run start:both
   ```

5. **Open your browser**
   - Basic Server: http://localhost:4000/graphql
   - Advanced Playground: http://localhost:4001/graphql

## 🎯 Usage Examples

### Basic Server (Port 4000)
```bash
# Start basic server only
npm start

# Development mode with hot reload
npm run dev
```

### Advanced Playground (Port 4001)
```bash
# Start playground only
npm run playground

# Alternative server from src/
cd playground && npm run start:src
```

### Both Servers
```bash
# Most commonly used command
npm run start:both
```

## 🧪 Testing the APIs

### Basic Server Endpoints
- **GraphQL Playground**: http://localhost:4000/graphql
- **Home Page**: http://localhost:4000/

### Advanced Playground Endpoints
- **GraphQL Playground**: http://localhost:4001/graphql
- **Home Page**: http://localhost:4001/
- **Character Photos**: http://localhost:4001/photos/
- **REST API**: http://localhost:4001/api/characters

## 📖 Learning Progressive Path

1. **🔰 Start with Basics** - Learn fundamental GraphQL concepts with the simple server
2. **🎬 Explore Advanced Features** - Dive into complex schemas and real-world scenarios
3. **🚀 Build Your Own** - Extend and modify both servers to create your own projects

## 🔗 Useful Links

- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL Specification](https://graphql.org/)
- [Apollo Studio](https://studio.apollographql.com/)

---

⭐ **Happy GraphQL Learning!** 🎓.