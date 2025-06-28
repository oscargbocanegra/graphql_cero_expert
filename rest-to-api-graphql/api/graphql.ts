import { ApolloServer } from 'apollo-server-lambda';

// Pre-cargar dependencias para reducir cold start
let serverInstance: ApolloServer | null = null;

const getServer = () => {
    if (serverInstance) {
        return serverInstance;
    }

    try {
        // Importaciones dinámicas optimizadas
        const schema = require('../src/graphql/schema').default || require('../src/graphql/schema');
        const { dataSources } = require('../src/graphql/dataSources');

        serverInstance = new ApolloServer({
            schema,
            introspection: true,
            dataSources: () => ({
                seasons: new dataSources.SeasonsData(),
                cardata: new dataSources.CarData(),
                drivers: new dataSources.DriversData(),
                intervals: new dataSources.IntervalsData(),
                laps: new dataSources.LapsData(),
                location: new dataSources.LocationData(),
                meetings: new dataSources.MeetingsData(),
                pit: new dataSources.PitData(),
                position: new dataSources.PositionData(),
                racecontrol: new dataSources.RaceControlData(),
                stints: new dataSources.StintsData(),
                teamradio: new dataSources.TeamRadioData(),
                weather: new dataSources.WeatherData()
            }),
            context: ({ event, context }) => ({
                headers: event.headers,
                functionName: context.functionName,
                event,
                context,
            }),
            formatError: (err) => {
                console.error('GraphQL Error:', err);
                return {
                    message: err.message,
                    locations: err.locations,
                    path: err.path,
                };
            },
        });

        return serverInstance;
    } catch (error) {
        console.error('Error creating Apollo Server:', error);
        throw error;
    }
};

// Handler optimizado con respuesta mejorada para navegadores
const handler = async (event: any, context: any, callback: any) => {
    // Configurar timeout más corto para evitar funciones lentas
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
        // Si es una petición GET desde navegador, mostrar información básica
        if (event.httpMethod === 'GET' && !event.queryStringParameters?.query) {
            return {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
                body: JSON.stringify({
                    message: "🏎️ Formula 1 GraphQL API",
                    status: "Running",
                    endpoints: {
                        graphql: "/api/graphql",
                        playground: "/api/graphql?playground",
                        introspection: "/api/graphql?introspection"
                    },
                    example_query: {
                        query: "{ drivers { first_name last_name full_name } }",
                        url: "POST /api/graphql",
                        headers: { "Content-Type": "application/json" }
                    },
                    documentation: "Send POST requests with GraphQL queries to this endpoint"
                }, null, 2)
            };
        }

        const server = getServer();
        const graphqlHandler = server.createHandler();
        
        return await graphqlHandler(event, context, callback);
    } catch (error: any) {
        console.error('Handler Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: JSON.stringify({
                error: 'Internal Server Error',
                message: error?.message || 'Unknown error',
                details: 'GraphQL function failed to initialize'
            }),
        };
    }
};

// EXPORTACIÓN POR DEFECTO REQUERIDA POR VERCEL
export default handler;
