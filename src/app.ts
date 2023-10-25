import express, { Application } from 'express';
import config from './core/config';
import { ApolloServer, ServerRegistration } from 'apollo-server-express';
import typeDefs from './graphql/typesDefs/schema';
import resolvers from './graphql/resolvers/resolvers';

class GraphQLServer {
    private app: Application;
    private server: ApolloServer;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // REST
        this.app.get('/', (req, res) => {
            res.json({ env: config.NODE_ENV, app: 'Apollo GraphQL Server + Typescript + Knex + mariadb' });
        });

        // GRAPH Apollo Server
        this.server = new ApolloServer({ typeDefs, resolvers });
    }

    async start() {
        await this.server.start();
        this.server.applyMiddleware({ app: this.app } as ServerRegistration);
    }

    listen() {
        this.app.listen(config.APP_PORT, () => {
            console.log(`Server is running on ${config.NODE_ENV} port ${config.APP_PORT}`);
        });
    }
}

const graphqlServer = new GraphQLServer();
graphqlServer.start().then(() => {
    graphqlServer.listen();
});
