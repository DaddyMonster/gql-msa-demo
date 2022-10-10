import { SchemaLoader } from '@ddm91/nest-graphql-tools';

@SchemaLoader({
  name: 'account',
  value: 'http://localhost:5556/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'hello',
  },
})
export class AccountEngineSchemaLoader {}

@SchemaLoader({
  name: 'lms_engine',
  value: 'http://localhost:5558/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'hello',
  },
})
export class LmsEngineSchemaLoader {}
