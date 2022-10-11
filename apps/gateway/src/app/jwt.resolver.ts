import { AdditionalTypes, GwResolver } from '@ddm91/nest-graphql-tools';
import { Query } from '@nestjs/graphql';
import { gql } from 'graphql-tag';
@GwResolver()
@AdditionalTypes(gql`
  type token_object {
    access_token: String!
    expires_in: Int!
  }

  extend type Query {
    access_token: token_object!
  }
`)
export class JwtResolver {
  @Query()
  access_token() {
    return {
      access_token: '123',
      expires_in: 123,
    };
  }
}
