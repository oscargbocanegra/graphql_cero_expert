import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { PubSub } from 'graphql-subscriptions';
import express from 'express';
import http from 'http';
import cors from 'cors';

// Instancia de PubSub para manejar suscripciones
const pubsub = new PubSub();

// Schema GraphQL con suscripciones
const typeDefs = `#graphql
  type Query {
    hello: String
    users: [User]
    messages: [Message]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String
  }

  type Message {
    id: ID!
    content: String!
    user: User!
    createdAt: String!
  }

  type Mutation {
    addUser(name: String!, email: String!): User
    sendMessage(content: String!, userId: ID!): Message
  }

  type Subscription {
    userAdded: User
    messageAdded: Message
    userCount: Int
  }
`;

// Datos de ejemplo
const users = [
  { id: '1', name: 'Juan Pérez', email: 'juan@example.com', createdAt: new Date().toISOString() },
  { id: '2', name: 'María García', email: 'maria@example.com', createdAt: new Date().toISOString() },
];

const messages = [
  { id: '1', content: '¡Hola a todos!', userId: '1', createdAt: new Date().toISOString() },
  { id: '2', content: '¿Cómo están?', userId: '2', createdAt: new Date().toISOString() },
];

// Resolvers con suscripciones
const resolvers = {
  Query: {
    hello: () => '¡Hola desde Apollo Server 4 con Express y WebSockets!',
    users: () => users,
    messages: () => messages.map(message => ({
      ...message,
      user: users.find(user => user.id === message.userId)
    })),
  },
  Mutation: {
    addUser: (parent, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email,
        createdAt: new Date().toISOString(),
      };
      users.push(newUser);
      
      // Publicar evento para suscriptores
      pubsub.publish('USER_ADDED', { userAdded: newUser });
      pubsub.publish('USER_COUNT', { userCount: users.length });
      
      return newUser;
    },
    sendMessage: (parent, { content, userId }) => {
      const user = users.find(u => u.id === userId);
      if (!user) {
        throw new Error('Usuario no encontrado');
      }
      
      const newMessage = {
        id: String(messages.length + 1),
        content,
        userId,
        createdAt: new Date().toISOString(),
      };
      messages.push(newMessage);
      
      const messageWithUser = {
        ...newMessage,
        user
      };
      
      // Publicar evento para suscriptores
      pubsub.publish('MESSAGE_ADDED', { messageAdded: messageWithUser });
      
      return messageWithUser;
    },
  },
  Subscription: {
    userAdded: {
      subscribe: () => pubsub.asyncIterator(['USER_ADDED']),
    },
    messageAdded: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_ADDED']),
    },
    userCount: {
      subscribe: () => pubsub.asyncIterator(['USER_COUNT']),
    },
  },
};

async function startServer() {
  // Crear app Express
  const app = express();
  
  // Crear servidor HTTP
  const httpServer = http.createServer(app);

  // Crear schema ejecutable
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  // Configurar WebSocket Server para suscripciones
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  // Configurar servidor GraphQL WebSocket
  const serverCleanup = useServer({ schema }, wsServer);

  // Crear servidor Apollo con plugin para WebSocket cleanup
  const server = new ApolloServer({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  // Inicializar Apollo Server
  await server.start();

  // Aplicar middleware de Apollo GraphQL después de inicializar el servidor
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // Ruta básica para verificar que el servidor funciona
  app.get('/', (req, res) => {
    res.send(`
      <h1>🚀 Servidor GraphQL con Apollo Server 4 + Express + WebSockets</h1>
      <p>El servidor está funcionando correctamente!</p>
      <p><a href="/graphql" target="_blank">🔗 Ir a Apollo Studio (GraphQL Playground)</a></p>
      <p>Versión de Node.js: ${process.version}</p>
      <h2>✨ Características:</h2>
      <ul>
        <li>✅ Queries y Mutations</li>
        <li>✅ Suscripciones en tiempo real (WebSockets)</li>
        <li>✅ PubSub para eventos</li>
      </ul>
      <h3>🔗 Endpoints:</h3>
      <ul>
        <li>GraphQL HTTP: <code>/graphql</code></li>
        <li>GraphQL WebSocket: <code>ws://localhost:${PORT}/graphql</code></li>
      </ul>
    `);
  });

  const PORT = process.env.PORT || 4000;

  // Iniciar el servidor HTTP
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`🚀 Servidor listo en http://localhost:${PORT}/`);
  console.log(`📊 GraphQL endpoint: http://localhost:${PORT}/graphql`);
  console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/graphql`);
  console.log(`✨ Suscripciones habilitadas con WebSockets`);
}

// Iniciar el servidor
startServer().catch((error) => {
  console.error('❌ Error al iniciar el servidor:', error);
});