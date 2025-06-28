/**
 * Main Application Entry Point
 * Initializes and starts the GraphQL server
 */

import { GraphQLServer } from './api/graphql/server';
import { AppConfig } from './infrastructure/config';

async function startServer(): Promise<void> {
    try {
        console.log('🚀 Starting Formula 1 GraphQL API...');
        console.log(`📊 Environment: ${AppConfig.NODE_ENV}`);
        console.log(`🌐 Port: ${AppConfig.PORT}`);
        
        const server = new GraphQLServer();
        await server.start();
        
        console.log('✅ Server started successfully!');
    } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 SIGTERM received, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 SIGINT received, shutting down gracefully...');
    process.exit(0);
});

// Start the server
if (require.main === module) {
    startServer();
}
