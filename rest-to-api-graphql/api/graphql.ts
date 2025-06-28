import { ApolloServer } from 'apollo-server-lambda';
import schema from '../src/schema';
import { dataSources } from '../src/data';

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
    })
});

export const handler = server.createHandler();
