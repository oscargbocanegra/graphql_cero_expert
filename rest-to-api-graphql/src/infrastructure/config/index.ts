/**
 * Application Configuration
 * Centralized configuration for the GraphQL API
 */

export const AppConfig = {
    // Server Configuration
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    
    // GraphQL Configuration
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || '/graphql',
    PLAYGROUND_ENABLED: process.env.NODE_ENV !== 'production',
    INTROSPECTION_ENABLED: true,
    
    // External APIs Configuration
    F1_API_BASE_URL: process.env.F1_API_BASE_URL || 'https://api.openf1.org/v1',
    
    // CORS Configuration
    CORS_ORIGIN: process.env.CORS_ORIGIN || '*',
    CORS_CREDENTIALS: true,
    
    // Cache Configuration
    CACHE_TTL: parseInt(process.env.CACHE_TTL || '300'), // 5 minutes default
    
    // Rate Limiting
    RATE_LIMIT_WINDOW: parseInt(process.env.RATE_LIMIT_WINDOW || '900000'), // 15 minutes
    RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '100'), // requests per window
};

export type AppConfigType = typeof AppConfig;
