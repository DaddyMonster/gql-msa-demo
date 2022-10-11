import { Module } from '@nestjs/common';
import { GraphqlGatewayModule } from '@ddm91/nest-graphql-tools';
import {
  AccountEngineSchemaLoader,
  LmsEngineSchemaLoader,
} from './schema-loaders';
import { LmsSessionTypeLoader } from './lms-type-loader';
import { JwtResolver } from './jwt.resolver';

@Module({
  imports: [
    GraphqlGatewayModule.forRoot({
      playground: true,
      installSubscriptionHandlers: true,
      cors: {
        credentials: true,
        origin: ['*'],
      },
    }),
  ],
  controllers: [],
  providers: [
    AccountEngineSchemaLoader,
    LmsEngineSchemaLoader,
    LmsSessionTypeLoader,
    JwtResolver,
  ],
})
export class AppModule {}
