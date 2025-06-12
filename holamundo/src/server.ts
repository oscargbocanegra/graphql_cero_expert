import express from 'express';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

async function startServer() {
    const app = express();
    
    // Middlewares
    app.use('*', cors());
    app.use(compression());

    // Create Apollo Server
    const server = new ApolloServer({
        schema,
        introspection: true,
        csrfPrevention: true,
        cache: 'bounded',
    });

    // Start the server
    await server.start();
    
    // Apply the Apollo GraphQL middleware
    server.applyMiddleware({ 
        app: app as any, 
        path: '/graphql',
        cors: false // We handle CORS above
    });

    const PORT = 5300;
    const httpServer = createServer(app);

    httpServer.listen(PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
        console.log(`📊 GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`);
    });
}

// Start the server
startServer().catch(error => {
    console.error('Error starting server:', error);
    process.exit(1);
});