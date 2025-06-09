import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cargar datos JSON
const loadData = () => {
  try {
    const charactersData = readFileSync(join(__dirname, '../data/characters.json'), 'utf-8')
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        try {
          return JSON.parse(line);
        } catch (e) {
          console.warn('Error parseando línea:', line);
          return null;
        }
      })
      .filter(Boolean);

    let votesData = [];
    try {
      const votesContent = readFileSync(join(__dirname, '../data/votes.json'), 'utf-8');
      if (votesContent.trim()) {
        votesData = votesContent.split('\n')
          .filter(line => line.trim())
          .map(line => {
            try {
              return JSON.parse(line);
            } catch (e) {
              console.warn('Error parseando voto:', line);
              return null;
            }
          })
          .filter(Boolean);
      }
    } catch (e) {
      console.log('📝 Archivo votes.json no encontrado, iniciando con votos vacíos');
    }

    return { characters: charactersData, votes: votesData };
  } catch (error) {
    console.error('❌ Error cargando datos:', error);
    return { characters: [], votes: [] };
  }
};

const { characters, votes } = loadData();

// Schema GraphQL
const typeDefs = `#graphql
  type Query {
    characters: [Character!]!
    character(char_id: Int!): Character
    votes: [Vote!]!
    characterStats: [CharacterStats!]!
  }

  type Character {
    char_id: Int!
    name: String!
    birthday: String!
    occupation: [String!]!
    img: String!
    status: String!
    nickname: String!
    appearance: [Int!]!
    portrayed: String!
    category: String!
    better_call_saul_appearance: [Int!]!
    votes: Int!
  }

  type Vote {
    id: String!
    char_id: Int!
    character_name: String!
    voted_at: String!
  }

  type CharacterStats {
    char_id: Int!
    name: String!
    total_votes: Int!
    percentage: Float!
  }

  type Mutation {
    voteForCharacter(char_id: Int!): Vote
  }
`;

// Resolvers
const resolvers = {
  Query: {
    characters: () => {
      return characters.map(char => ({
        char_id: parseInt(char.id),
        name: char.name,
        birthday: char.birthday || 'No disponible',
        occupation: char.occupation || [char.actor || 'Actor'],
        img: char.photo || char.img || '',
        status: char.status || 'Activo',
        nickname: char.nickname || char.name,
        appearance: char.appearance || [1, 2, 3, 4, 5],
        portrayed: char.actor || char.portrayed || 'Desconocido',
        category: char.category || 'Principal',
        better_call_saul_appearance: char.better_call_saul_appearance || [],
        votes: votes.filter(vote => vote.char_id === parseInt(char.id)).length
      }));
    },
    character: (_, { char_id }) => {
      const character = characters.find(char => parseInt(char.id) === char_id);
      if (!character) return null;
      
      return {
        char_id: parseInt(character.id),
        name: character.name,
        birthday: character.birthday || 'No disponible',
        occupation: character.occupation || [character.actor || 'Actor'],
        img: character.photo || character.img || '',
        status: character.status || 'Activo',
        nickname: character.nickname || character.name,
        appearance: character.appearance || [1, 2, 3, 4, 5],
        portrayed: character.actor || character.portrayed || 'Desconocido',
        category: character.category || 'Principal',
        better_call_saul_appearance: character.better_call_saul_appearance || [],
        votes: votes.filter(vote => vote.char_id === char_id).length
      };
    },
    votes: () => votes,
    characterStats: () => {
      const totalVotes = votes.length;
      const statsMap = new Map();
      
      characters.forEach(char => {
        const charVotes = votes.filter(vote => vote.char_id === parseInt(char.id)).length;
        statsMap.set(parseInt(char.id), {
          char_id: parseInt(char.id),
          name: char.name,
          total_votes: charVotes,
          percentage: totalVotes > 0 ? (charVotes / totalVotes) * 100 : 0
        });
      });
      
      return Array.from(statsMap.values()).sort((a, b) => b.total_votes - a.total_votes);
    }
  },
  Mutation: {
    voteForCharacter: (_, { char_id }) => {
      const character = characters.find(char => parseInt(char.id) === char_id);
      if (!character) {
        throw new Error(`Personaje con ID ${char_id} no encontrado`);
      }
      
      const vote = {
        id: `vote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        char_id,
        character_name: character.name,
        voted_at: new Date().toISOString()
      };
      
      votes.push(vote);
      console.log(`🗳️ Nuevo voto para ${character.name} (ID: ${char_id})`);
      
      return vote;
    }
  }
};

async function startPlaygroundServer() {
  // Crear app Express
  const app = express();
  
  // Crear servidor HTTP
  const httpServer = http.createServer(app);

  // Crear servidor Apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // Inicializar Apollo Server
  await server.start();

  // Aplicar middleware de Apollo GraphQL
  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  // Servir archivos estáticos (fotos de personajes)
  app.use('/photos', express.static(join(__dirname, '../public')));

  // Ruta principal
  app.get('/', (req, res) => {
    res.send(`
      <h1>🎬 Breaking Bad GraphQL Playground</h1>
      <p>Explora el universo de Breaking Bad a través de GraphQL</p>
      <h2>🔗 Enlaces:</h2>
      <ul>
        <li><a href="/graphql" target="_blank">📊 Apollo Studio (GraphQL Playground)</a></li>
        <li><a href="/photos" target="_blank">📸 Galería de Personajes</a></li>
      </ul>
      <h2>📊 Estadísticas:</h2>
      <ul>
        <li>Personajes disponibles: ${characters.length}</li>
        <li>Votos registrados: ${votes.length}</li>
      </ul>
      <h2>🧪 Consultas de Ejemplo:</h2>
      <pre><code>
query {
  characters {
    char_id
    name
    status
    votes
  }
}

mutation {
  voteForCharacter(char_id: 1) {
    id
    character_name
    voted_at
  }
}
      </code></pre>
    `);
  });

  // Endpoint REST para personajes (compatibilidad)
  app.get('/api/characters', (req, res) => {
    const charactersWithVotes = characters.map(char => ({
      char_id: parseInt(char.id),
      name: char.name,
      actor: char.actor,
      description: char.description,
      total_episodes: char.total_episodes,
      photo: char.photo,
      url: char.url,
      votes: votes.filter(vote => vote.char_id === parseInt(char.id)).length
    }));
    res.json(charactersWithVotes);
  });

  const PORT = 4001;

  // Iniciar el servidor HTTP
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  
  console.log(`🎬 Breaking Bad GraphQL Playground listo en http://localhost:${PORT}/`);
  console.log(`📊 GraphQL endpoint: http://localhost:${PORT}/graphql`);
  console.log(`📸 Fotos disponibles en: http://localhost:${PORT}/photos/`);
  console.log(`🔗 API REST: http://localhost:${PORT}/api/characters`);
  console.log(`\n🎭 Personajes cargados: ${characters.length}`);
  console.log(`📊 Votos totales: ${votes.length}`);
}

// Iniciar el servidor
startPlaygroundServer().catch((error) => {
  console.error('❌ Error al iniciar el servidor del playground:', error);
});
