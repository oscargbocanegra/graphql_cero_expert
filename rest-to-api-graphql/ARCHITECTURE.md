# 🏗️ Nueva Arquitectura del Proyecto GraphQL F1

## 📁 Estructura de Directorios

```
rest-to-api-graphql/
├── src/
│   ├── api/                     # API Entry Points
│   │   └── graphql/
│   │       └── server.ts        # GraphQL Server Class
│   ├── core/                    # Core Business Logic
│   │   ├── entities/            # Domain Entities
│   │   │   └── index.ts         # F1Driver, F1Season, TelemetryData
│   │   ├── interfaces/          # Domain Interfaces
│   │   │   └── index.ts         # Season, Driver, CarData interfaces
│   │   └── services/            # Business Services
│   │       └── index.ts         # F1DataService
│   ├── infrastructure/          # External Concerns
│   │   └── config/              # Configuration
│   │       └── index.ts         # AppConfig
│   ├── graphql/                 # GraphQL Specific Code
│   │   ├── schema/              # Schema Definitions
│   │   │   ├── index.ts         # Schema builder
│   │   │   └── schema.graphql   # GraphQL schema
│   │   ├── resolvers/           # GraphQL Resolvers
│   │   │   ├── query.ts         # Query resolvers
│   │   │   ├── mutation.ts      # Mutation resolvers
│   │   │   ├── type.ts          # Type resolvers
│   │   │   └── resolversMap.ts  # Resolver mapping
│   │   ├── types/               # GraphQL Type Definitions
│   │   └── dataSources/         # Apollo Data Sources
│   │       ├── index.ts         # Data source exports
│   │       ├── data-seasons.ts  # Seasons data source
│   │       └── ...              # Other data sources
│   ├── shared/                  # Shared Utilities
│   │   ├── utils/               # Utility Functions
│   │   │   └── index.ts         # formatDuration, convertSpeed, etc.
│   │   ├── constants/           # Application Constants
│   │   │   └── index.ts         # API_ENDPOINTS, SESSION_TYPES, etc.
│   │   └── types/               # Shared TypeScript Types
│   │       └── index.ts         # APIResponse, GraphQLContext, etc.
│   └── main.ts                  # Application Entry Point
├── serverless/                  # Serverless Functions
│   ├── graphql.ts              # Vercel serverless handler
│   ├── graphql.js              # JavaScript fallback
│   └── index.ts                # Export configuration
├── tests/                       # Test Files
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── e2e/                    # End-to-end tests
└── docs/                       # Documentation
    ├── api/                    # API documentation
    ├── architecture/           # Architecture docs
    └── deployment/             # Deployment guides
```

## 🎯 Principios Arquitectónicos

### 1. **Separación de Responsabilidades**
- **Core**: Lógica de negocio pura, independiente de frameworks
- **Infrastructure**: Configuración y servicios externos
- **GraphQL**: Específico para GraphQL (schema, resolvers, data sources)
- **API**: Puntos de entrada (Express, Lambda)
- **Shared**: Utilidades reutilizables

### 2. **Clean Architecture**
- **Entities**: Objetos de dominio con reglas de negocio
- **Interfaces**: Contratos y definiciones de tipos
- **Services**: Casos de uso y orquestación
- **Infrastructure**: Detalles de implementación

### 3. **Dependency Inversion**
- Las capas internas no dependen de las externas
- Uso de interfaces para definir contratos
- Inyección de dependencias donde sea necesario

## 🔧 Componentes Principales

### **Core Layer**
```typescript
// Entities: Objetos de dominio con comportamiento
class F1Driver {
    getDisplayName(): string
    isValid(): boolean
}

// Interfaces: Contratos de datos
interface Season {
    year: number;
    meeting_key: number;
    // ...
}

// Services: Lógica de negocio
class F1DataService {
    async getCurrentSeasonDrivers(): Promise<F1Driver[]>
    async getTopSpeedForSession(sessionKey: number)
}
```

### **GraphQL Layer**
```typescript
// Schema: Definición GraphQL
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

// Resolvers: Lógica de resolución
const resolvers = {
    Query: {
        seasonsList: async (_, args, { dataSources }) => {
            return dataSources.seasons.getSeasons(args);
        }
    }
};
```

### **Infrastructure Layer**
```typescript
// Configuration: Configuración centralizada
export const AppConfig = {
    PORT: process.env.PORT || 5000,
    F1_API_BASE_URL: 'https://api.openf1.org/v1',
    // ...
};
```

### **Shared Layer**
```typescript
// Utils: Funciones utilitarias
export function formatDuration(ms: number): string
export function convertSpeed(speed: number, from: 'kmh' | 'mph', to: 'kmh' | 'mph'): number

// Types: Tipos compartidos
export interface APIResponse<T> {
    data: T;
    success: boolean;
    message?: string;
}

// Constants: Constantes de la aplicación
export const SESSION_TYPES = {
    PRACTICE_1: 'Practice 1',
    QUALIFYING: 'Qualifying',
    RACE: 'Race'
};
```

## 🚀 Beneficios de la Nueva Arquitectura

### ✅ **Mantenibilidad**
- Código organizado por responsabilidades
- Fácil localización de funcionalidades
- Cambios aislados en capas específicas

### ✅ **Escalabilidad**
- Estructura preparada para crecimiento
- Fácil adición de nuevas features
- Reutilización de componentes

### ✅ **Testabilidad**
- Lógica de negocio aislada
- Mocking simplificado
- Tests unitarios enfocados

### ✅ **Legibilidad**
- Estructura clara y predecible
- Naming conventions consistentes
- Separación clara de concerns

## 🔄 Migración Completada

### **Archivos Movidos:**
- `src/data/*` → `src/graphql/dataSources/*`
- `src/resolvers/*` → `src/graphql/resolvers/*`
- `src/schema/*` → `src/graphql/schema/*`
- `api/*` → `serverless/*`

### **Nuevos Archivos Creados:**
- `src/core/` - Entidades, interfaces y servicios
- `src/infrastructure/config/` - Configuración centralizada
- `src/shared/` - Utilidades, constantes y tipos
- `src/api/graphql/server.ts` - Servidor GraphQL como clase
- `src/main.ts` - Punto de entrada principal

### **Configuraciones Actualizadas:**
- `tsconfig.json` - Paths y estructura actualizada
- `package.json` - Scripts actualizados
- `vercel.json` - Apunta a nueva estructura serverless

## 📚 Próximos Pasos

1. **Testing**: Implementar tests unitarios e integración
2. **Documentation**: Completar documentación de API
3. **Monitoring**: Añadir métricas y logging
4. **Performance**: Implementar caching y optimizaciones
5. **Security**: Añadir autenticación y rate limiting

---

**Resultado**: Arquitectura limpia, escalable y mantenible siguiendo las mejores prácticas de desarrollo.
