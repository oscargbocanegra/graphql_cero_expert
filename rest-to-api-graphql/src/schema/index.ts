import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';
import typeDefs from './schema.graphql';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const resolvers = require('./../resolvers/resolversMap');
import { makeExecutableSchema } from 'graphql-tools';

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;