import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema';
import expressPlayGround from 'graphql-playground-middleware-express';
import depthLimit from 'graphql-depth-limit';

async function startServer() {
    const app = express();

    app.use('*', cors());
    app.use(compression());

    const servidor = new ApolloServer ({
        schema,
        validationRules: [depthLimit(2)],
        introspection: true
    });

    // Debe esperar a que el servidor inicie antes de aplicar middleware
    await servidor.start();
    
    servidor.applyMiddleware({app: app as any});
    app.get('/', expressPlayGround ({
        endpoint: '/graphql'
    }));

    const httpServer = createServer(app);

    const PORT = process.env.PORT || 5200;

    httpServer.listen(
        {
            port: PORT
        },
        () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
    );
}

// Iniciar el servidor
startServer().catch(error => {
    console.error('Error starting server:', error);
    process.exit(1);
});