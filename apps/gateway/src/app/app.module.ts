import { Module } from '@nestjs/common';
import { GraphqlGatewayModule } from '@ddm91/nest-graphql-tools';
import {
  AccountEngineSchemaLoader,
  LmsEngineSchemaLoader,
} from './schema-loaders';
import { LmsSessionTypeLoader } from './lms-type-loader';

@Module({
  imports: [
    GraphqlGatewayModule.forRoot({
      playground: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
  providers: [
    AccountEngineSchemaLoader,
    LmsEngineSchemaLoader,
    LmsSessionTypeLoader,
  ],
})
export class AppModule {}
