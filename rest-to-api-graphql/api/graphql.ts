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

// Handler optimizado con cache de servidor
const handler = async (event: any, context: any, callback: any) => {
    // Configurar timeout más corto para evitar funciones lentas
    context.callbackWaitsForEmptyEventLoop = false;
    
    try {
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
