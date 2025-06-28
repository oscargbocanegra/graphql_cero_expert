import { ApolloServer } from 'apollo-server-lambda';
import schema from '../src/graphql/schema';
import { dataSources } from '../src/graphql/dataSources';

const server = new ApolloServer({
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
});

export const handler = server.createHandler();
