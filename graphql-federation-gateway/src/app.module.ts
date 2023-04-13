import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver } from '@nestjs/apollo';
// import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloGatewayDriver,
      server: {
        cors: true,
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            // { name: 'users', url: 'http://user-service/graphql' },
            // { name: 'posts', url: 'http://post-service/graphql' },
            {
              name: 'employees',
              url: 'http://localhost:3000/graphql',
            },
            {
              name: 'projects',
              url: 'http://localhost:3001/graphql',
            },
          ],
        }),
        /* serviceList: [
          {
            name: 'employees',
            url: 'http://localhost:3000/graphql',
          },
          {
            name: 'projects',
            url: 'http://localhost:3001/graphql',
          },
        ], */
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
