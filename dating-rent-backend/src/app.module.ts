import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './config/database.config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongoUri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
     GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,        
      autoSchemaFile: 'src/schema.gql',        
      playground: true,            
      installSubscriptionHandlers: true, 
    }),
    UsersModule,
  ],
})
export class AppModule {}
