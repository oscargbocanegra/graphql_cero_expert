import { ApolloServer } from 'apollo-server-lambda';

// Función para crear el servidor Apollo de forma lazy
const createServer = () => {
    try {
        // Importaciones dinámicas para evitar problemas de path en Vercel
        const schema = require('../src/graphql/schema').default || require('../src/graphql/schema');
        const { dataSources } = require('../src/graphql/dataSources');

        return new ApolloServer({
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
            context: ({ event, context }) => {
                return {
                    headers: event.headers,
                    functionName: context.functionName,
                    event,
                    context,
                };
            },
            formatError: (err) => {
                console.error('GraphQL Error:', err);
                return {
                    message: err.message,
                    locations: err.locations,
                    path: err.path,
                };
            },
        });
    } catch (error) {
        console.error('Error creating Apollo Server:', error);
        throw error;
    }
};

// Crear el handler y exportarlo como default
const handler = async (event: any, context: any, callback: any) => {
    try {
        const server = createServer();
        const graphqlHandler = server.createHandler();
        
        return await graphqlHandler(event, context, callback);
    } catch (error: any) {
        console.error('Handler Error:', error);
        return {
            statusCode: 500,
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
