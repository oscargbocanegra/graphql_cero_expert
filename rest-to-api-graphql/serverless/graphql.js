const { ApolloServer } = require('apollo-server-lambda');
const schema = require('../build/schema').default;
const { dataSources } = require('../build/data');

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
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

module.exports.handler = server.createHandler({
    expressGetMiddlewareOptions: {
        cors: {
            origin: '*',
            credentials: true,
        },
    },
});
