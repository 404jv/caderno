import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { UserResolver } from './src/resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();
