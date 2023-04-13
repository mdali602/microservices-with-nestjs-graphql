import { ApolloDriver, ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { EmployeeModule } from './employee/employee.module';
import { ProjectModule } from './project/project.module';

/* 
    "@nestjs/graphql": "^11.0.4", -> "@nestjs/graphql": "^10.0.7",

*/

@Module({
  imports: [
    // EmployeeModule,
    GraphQLModule.forRoot({
      driver: ApolloFederationDriver,
      // autoSchemaFile: join(process.cwd(), 'src/graphql-schema.gql'),
      autoSchemaFile: {
        // federation: 2,
        path: join(process.cwd(), 'src/graphql-schema.gql'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'projectdb',
      entities: ['dist/**/*.entity.{js, ts}'],
      // autoLoadEntities: true, // make it true if pattern in entities not working (Error: No matadata for \"Entitity Name"\ was found)
      synchronize: true,
    }),
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
