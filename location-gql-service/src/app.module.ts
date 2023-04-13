import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LocationModule,
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'src/graphql-schema.gql'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'locationdb',
      entities: ['dist/**/*.entity.{js, ts}'],
      // autoLoadEntities: true, // make it true if pattern in entities not working (Error: No matadata for \"Entitity Name"\ was found)
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
