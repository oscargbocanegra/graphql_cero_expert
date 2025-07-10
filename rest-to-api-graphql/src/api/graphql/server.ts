import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';

// Imports from new architecture
import schema from '../../graphql/schema';
import { dataSources } from '../../graphql/dataSources';
import { AppConfig } from '../../infrastructure/config';

export class GraphQLServer {
    private app: Application;
    private apolloServer!: ApolloServer; // Using definite assignment assertion

    constructor() {
        this.app = express();
        this.setupMiddleware();
        this.setupApolloServer();
    }

    private setupMiddleware(): void {
        this.app.use(cors());
        this.app.use(compression());
    }

    private setupApolloServer(): void {
        this.apolloServer = new ApolloServer({
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
    }

    public async start(): Promise<void> {
        // Start Apollo Server (required in v3+)
        await this.apolloServer.start();

        // Apply middleware
        this.apolloServer.applyMiddleware({ app: this.app as any });

        // Setup GraphQL Playground
        this.app.use('/', expressPlayGround({
            endpoint: '/graphql'
        }));

        const PORT = AppConfig.PORT;
        const httpServer = createServer(this.app);

        httpServer.listen({ port: PORT }, (): void => {
            console.log(`🚀 GraphQL Server ready at http://localhost:${PORT}/graphql`);
            console.log(`📊 GraphQL Playground at http://localhost:${PORT}/`);
        });
    }

    public getApp(): Application {
        return this.app;
    }

    public getApolloServer(): ApolloServer {
        return this.apolloServer;
    }
}
