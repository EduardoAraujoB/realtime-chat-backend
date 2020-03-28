import 'graphql-import-node';
import { ApolloServer } from 'apollo-server';

import schema from './schema.graphql';
import userResolver from './resolvers/user';

class App {
  public apollo: ApolloServer;

  public constructor() {
    this.apollo = new ApolloServer({
      typeDefs: schema,
      resolvers: userResolver,
    });
  }

  public startServer(): void {
    this.apollo.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  }
}

export default new App();
