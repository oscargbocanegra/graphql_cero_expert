# 🏎️ Formula 1 GraphQL API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.5+-blue.svg)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16+-e10098.s## 🚀 Deployment

### ⚡ One-Click Deploy

#### **Automated Vercel Deployment** (Recommended)
```bash
# Easy deployment with automated script
./deploy-vercel.sh
```

This script handles:
- ✅ Dependency installation with legacy peer deps
- ✅ TypeScript compilation
- ✅ Automatic Vercel deployment
- ✅ Error checking and validation

### Manual Deploy Options

#### **Vercel** 
```bash
npm install --legacy-peer-deps
npm run build
npx vercel --prod
```

#### **Heroku**
```bash
git push heroku main
```

#### **Railway**
Connect your GitHub repository and Railway will handle the rest.

### 📋 **Detailed Deployment Guide**
For complete deployment instructions, troubleshooting, and platform-specific configurations, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-3+-311C87.svg)](https://www.apollographql.com/)
[![OpenF1 API](https://img.shields.io/badge/OpenF1%20API-Live%20Data-red.svg)](https://openf1.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🚀 **Learn GraphQL from Zero to Expert** - A comprehensive Formula 1 GraphQL API built for educational purposes, transforming REST endpoints into a powerful, type-safe GraphQL interface.

## 🎯 What You'll Learn

This project is designed to teach GraphQL concepts through real-world Formula 1 data:

- ✅ **GraphQL Fundamentals** - Queries, Types, Resolvers
- ✅ **Data Source Integration** - REST to GraphQL transformation  
- ✅ **Advanced Filtering** - Complex query parameters and operators
- ✅ **Pagination Strategies** - Efficient large dataset handling
- ✅ **Real-time Data** - Live F1 telemetry and race information
- ✅ **TypeScript Integration** - Type-safe GraphQL development
- ✅ **Apollo Server Setup** - Production-ready GraphQL server

## 🏁 Quick Start

### Prerequisites

```bash
node >= 18.0.0
npm >= 8.0.0
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/rest-to-api-graphql.git
cd rest-to-api-graphql

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

### 🏎️ **Complete F1 Data Coverage**

| Endpoint | Description | Real-time |
|----------|-------------|-----------|
| `seasonsList` | All F1 sessions and seasons | ✅ |
| `carData` | Vehicle telemetry (speed, RPM, DRS) | ✅ |
| `drivers` | Driver information and teams | ✅ |
| `intervals` | Gap timing between drivers | ✅ |
| `laps` | Lap times and sector analysis | ✅ |
| `location` | Real-time car positions on track | ✅ |
| `meetings` | Grand Prix events and circuits | ✅ |
| `pit` | Pit stop data and strategies | ✅ |
| `position` | Race positions over time | ✅ |
| `raceControl` | Flags and race director messages | ✅ |
| `stints` | Tire strategies and compounds | ✅ |
| `teamRadio` | Team-driver communications | ✅ |
| `weather` | Track conditions and meteorology | ✅ |

## 🎮 Example Queries

### 🏆 Get Current Season Sessions
```graphql
query GetCurrentSeason {
  seasonsList {
    year
    meeting_key
    session_name
    session_type
    circuit_short_name
    country_name
    date_start
  }
}
```

### 🚗 Real-time Telemetry (Max Verstappen)
```graphql
query VerstappenTelemetry {
  carData(driver_number: 1, limit: 10) {
    data {
      speed
      rpm
      throttle
      brake
      drs
      n_gear
      date
    }
    pagination {
      total
      hasNext
    }
  }
}
```

### 🏁 Race Positions Analysis
```graphql
query RacePositions($sessionKey: Int!, $meetingKey: Int!) {
  position(session_key: $sessionKey, meeting_key: $meetingKey) {
    driver_number
    position
    date
  }
}
```

### 🌦️ Weather Conditions
```graphql
query WeatherConditions($sessionKey: Int!) {
  weather(session_key: $sessionKey) {
    air_temperature
    track_temperature
    humidity
    rainfall
    wind_speed
    wind_direction
  }
}
```

### 🛞 Tire Strategy Analysis
```graphql
query TireStrategy($driverNumber: Int!, $sessionKey: Int!) {
  stints(driver_number: $driverNumber, session_key: $sessionKey) {
    stint_number
    compound
    lap_start
    lap_end
    tyre_age_at_start
  }
}
```

## 🏗️ Project Structure

```
src/
├── 📁 data/                    # Data Sources
│   ├── data-source.ts          # Base REST DataSource class
│   ├── data-seasons.ts         # Sessions and seasons
│   ├── data-car-data.ts        # Vehicle telemetry
│   ├── data-drivers.ts         # Driver information
│   ├── data-intervals.ts       # Timing intervals
│   ├── data-laps.ts           # Lap and sector data
│   ├── data-location.ts        # Track positions
│   ├── data-meetings.ts        # Grand Prix events
│   ├── data-pit.ts            # Pit stop data
│   ├── data-position.ts        # Race positions
│   ├── data-race-control.ts    # Race director messages
│   ├── data-stints.ts         # Tire strategies
│   ├── data-team-radio.ts     # Team communications
│   ├── data-weather.ts        # Weather conditions
│   └── index.ts               # Data sources export
├── 📁 resolvers/              # GraphQL Resolvers
│   ├── query.ts               # Query resolvers
│   └── resolversMap.ts        # Resolver mapping
├── 📁 schema/                 # GraphQL Schema
│   ├── schema.graphql         # Type definitions
│   └── index.ts              # Schema builder
├── 📁 postman-collection/     # API Testing
│   └── OpenF1.postman_collection.json
├── 📄 DEPLOYMENT.md           # Complete deployment guide
├── 📄 vercel.json            # Vercel configuration
├── 📄 Procfile               # Heroku configuration
├── 📄 .env.example           # Environment variables template
└── server.ts                  # Apollo Server setup
```

## 🎓 Learning Path

### 1️⃣ **GraphQL Basics**
- Explore the schema in `src/schema/schema.graphql`
- Understand types, queries, and relationships
- Try basic queries in the GraphQL Playground

### 2️⃣ **Data Sources**
- Study `src/data/data-source.ts` - Base REST DataSource
- Examine specific implementations like `data-car-data.ts`
- Learn how REST APIs transform to GraphQL

### 3️⃣ **Resolvers**
- Check `src/resolvers/query.ts` for resolver implementations
- Understand the resolver pattern and data fetching

### 4️⃣ **Advanced Concepts**
- Implement pagination with `CarDataResponse`
- Use complex filtering with operators
- Build real-time data queries

### 5️⃣ **Testing & Debugging**
- Use the included Postman collection
- Test different query patterns
- Monitor performance with complex queries

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

This API uses the **[OpenF1 API](https://openf1.org/)** - a free, real-time Formula 1 data source providing:

- 🔴 **Live Race Data** - Real-time telemetry during sessions
- 📊 **Historical Data** - Complete F1 archives
- 🚫 **No API Keys** - Free access, no registration required
- ⚡ **High Performance** - Optimized for real-time applications

## 🧪 Testing with Postman

Import the collection from `src/postman-collection/OpenF1.postman_collection.json`:

- 📂 **Organized by endpoint** - Each GraphQL query type has its folder
- 🔢 **Variable examples** - Pre-configured with real session/meeting keys
- 🎯 **Basic to Advanced** - From simple queries to complex filtering
- 📋 **Copy-paste ready** - Use directly in GraphQL Playground

## 🎯 Use Cases

### 🏎️ **Racing Applications**
- Live race tracking dashboards
- Telemetry analysis tools
- Strategy comparison systems

### 📊 **Data Analysis**
- Driver performance metrics
- Weather impact studies
- Tire degradation analysis

### 🎓 **Educational Projects**
- GraphQL learning platform
- API design patterns
- Real-time data handling

### 🔧 **Development Training**
- TypeScript with GraphQL
- Apollo Server implementation
- REST to GraphQL migration

## 🤝 Contributing

We welcome contributions! This is an educational project aimed at helping developers learn GraphQL:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 💡 Contribution Ideas
- Add new OpenF1 endpoints
- Improve documentation
- Create example applications
- Add more complex query examples
- Implement subscriptions for real-time updates

## � Deployment

### Quick Deploy Options

#### **Vercel** (Recommended)
```bash
npm install graphql@^16.8.1  # Fix dependency conflict
npx vercel --prod
```

#### **Heroku**
```bash
git push heroku main
```

#### **Railway**
Connect your GitHub repository and Railway will handle the rest.

### 📋 **Detailed Deployment Guide**
For complete deployment instructions, troubleshooting, and platform-specific configurations, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**

#### What's included:
- ✅ Dependency conflict resolution
- ✅ Platform-specific configurations (Vercel, Heroku, Railway, Netlify)
- ✅ Environment variable setup
- ✅ Production optimization
- ✅ Monitoring and error handling

## �📚 Resources

### 📖 **GraphQL Learning**
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/)
- [TypeScript GraphQL Guide](https://typegraphql.com/)

### 🏎️ **Formula 1 Data**
- [OpenF1 API Documentation](https://openf1.org/)
- [F1 Technical Regulations](https://www.fia.com/regulation/category/110)

### 🛠️ **Development Tools**
- [GraphQL Playground](https://github.com/graphql/graphql-playground)
- [Apollo Studio](https://studio.apollographql.com/)
- [Postman GraphQL Support](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenF1** for providing free, real-time Formula 1 data
- **Apollo GraphQL** for the excellent server framework
- **Formula 1** for the amazing sport that generates this data
- **The GraphQL Community** for continuous innovation

---
