import { Module } from '@nestjs/common';
import { GraphqlGatewayModule } from '@ddm91/nest-graphql-tools';
import { AccountEngineSchemaLoader, LmsEngineSchemaLoader } from './schema-loaders';


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
    LmsEngineSchemaLoader
  ],
})
export class AppModule {}
